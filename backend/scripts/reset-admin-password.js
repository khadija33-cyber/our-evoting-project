const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("../models/User")
require("dotenv").config()

// Fonction pour se connecter à MongoDB
const connectDB = async () => {
  try {
    // TEMPORARY CHANGE FOR LOCAL EXECUTION: Use localhost instead of Docker hostname
    const dbHost = 'localhost'; // Changed back from process.env.DB_HOST
    const conn = await mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${dbHost}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log(`MongoDB connecté: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error(`Erreur: ${error.message}`)
    console.log("Erreur de connexion à MongoDB:")
    process.exit(1)
  }
}

// Fonction pour réinitialiser le mot de passe de l'administrateur
const resetAdminPassword = async () => {
  try {
    // Connexion à la base de données
    await connectDB()

    // Trouver l'utilisateur admin
    const adminUser = await User.findOne({ email: "admin@example.com" })

    if (!adminUser) {
      console.log("Utilisateur admin non trouvé. Création d'un nouvel utilisateur admin...")
      
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash("password123", salt)
      
      const newAdmin = await User.create({
        name: "Admin User",
        email: "admin@example.com",
        nationalId: "ADMIN123",
        password: hashedPassword,
        role: "admin",
        isEmailVerified: true,
        isActive: true
      })
      
      console.log("Nouvel utilisateur admin créé avec succès:", newAdmin.email)
    } else {
      // Réinitialiser le mot de passe - Assign plain text, let pre-save hook handle hashing
      console.log("Assigning plain text password 'password123' to admin user.");
      adminUser.password = "password123"; // Assign plain text password
      adminUser.isEmailVerified = true;
      adminUser.isActive = true;

      await adminUser.save(); // The pre('save') hook will now hash correctly

      console.log("Mot de passe admin réinitialisé avec succès pour:", adminUser.email);
    }

    console.log("Opération terminée avec succès")
    process.exit()
  } catch (error) {
    console.error(`Erreur: ${error.message}`)
    process.exit(1)
  }
}

// Exécuter la réinitialisation
resetAdminPassword()