const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");  // Make sure to require bcrypt
require("dotenv").config();

async function directHashFix() {
  try {
    // Connect to MongoDB in Docker WITH authentication
    await mongoose.connect("mongodb://admin:password123@evoting-mongodb:27017/evoting_system?authSource=admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to Docker MongoDB");
    
    // First delete the admin user completely
    await mongoose.connection.db.collection('users').deleteOne({ email: "admin@example.com" });
    console.log("Deleted old admin user");
    
    // Create new admin user WITH HASHED PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);
    
    const newAdmin = {
      name: "Admin User",
      email: "admin@example.com",
      nationalId: "ADMIN123",
      password: hashedPassword,  // Store the HASHED password!
      role: "admin",
      isEmailVerified: true,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await mongoose.connection.db.collection('users').insertOne(newAdmin);
    console.log("Created new admin user with ID:", result.insertedId);
    console.log("Try logging in with: admin@example.com / admin123");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

directHashFix();