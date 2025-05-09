const mongoose = require("mongoose");
const Election = require("./models/Election");
require("dotenv").config();

// Re-use your connection function from seed.js
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connecté: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Erreur: ${error.message}`);
    process.exit(1);
  }
};

const updateCandidates = async () => {
  try {
    console.log("Starting database connection...");
    await connectDB();
    
    // Find each election and update its candidates
    const elections = await Election.find({});
    console.log(`Found ${elections.length} elections to update`);
    
    for (let election of elections) {
      console.log(`Updating candidates for: ${election.title}`);
      
      // ADD CODE HERE TO UPDATE CANDIDATES BASED ON ELECTION TITLE
      if (election.title === "Élection présidentielle 2023") {
        election.candidates = [
          {
            name: "Aziz Akhannouch",
            party: "RNI (Rassemblement National des Indépendants)",
            bio: "Premier ministre du Maroc depuis 2021, homme d'affaires et président du RNI.",
            imageUrl: "",
          },
          {
            name: "Abdellatif Ouahbi",
            party: "PAM (Parti Authenticité et Modernité)",
            bio: "Ministre de la Justice et Secrétaire général du PAM.",
            imageUrl: "",
          },
          {
            name: "Nizar Baraka",
            party: "Istiqlal (Parti de l'indépendance)",
            bio: "Secrétaire général du parti de l'Istiqlal et ministre de l'Équipement.",
            imageUrl: "",
          },
          {
            name: "Driss Lachgar",
            party: "USFP (Union Socialiste des Forces Populaires)",
            bio: "Premier Secrétaire de l'USFP, ancien ministre d'État.",
            imageUrl: "",
          },
        ];
      } 
      else if (election.title === "Référendum sur la réforme constitutionnelle") {
        election.candidates = [
          {
            name: "Pour",
            party: "Soutien à la réforme",
            bio: "Vote en faveur des modifications constitutionnelles proposées",
            imageUrl: "",
          },
          {
            name: "Contre",
            party: "Opposition à la réforme",
            bio: "Vote contre les modifications constitutionnelles proposées",
            imageUrl: "",
          },
        ];
      }
      
      await election.save();
      console.log(`Updated candidates for: ${election.title}`);
    }
    
    console.log("All candidates updated successfully");
    process.exit(0);  // Add this to exit cleanly
  } catch (error) {
     console.error(`Error in updateCandidates function: ${error.message}`);
    process.exit(1);  // Add this to exit on error
  }
};




// At the very end of the file
console.log("Script started");

try {
  updateCandidates().catch(err => {
    console.error("Caught error in main function:", err);
    process.exit(1);
  });
} catch (error) {
  console.error("Error starting script:", error);
  process.exit(1);
}