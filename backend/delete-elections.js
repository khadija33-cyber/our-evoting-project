const mongoose = require("mongoose");
const Election = require("./models/Election");
require("dotenv").config();

// Database connection function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connecté: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Erreur de connexion: ${error.message}`);
    process.exit(1);
  }
};

// Function to delete elections by title
const deleteElectionsByTitle = async (title) => {
  try {
    const result = await Election.deleteMany({ title: title });
    console.log(`Deleted ${result.deletedCount} elections with title: ${title}`);
  } catch (err) {
    console.error(`Error deleting elections with title ${title}:`, err);
  }
};

// Main function
const deleteSpecificElections = async () => {
  try {
    await connectDB();
    
    // Delete specific elections - modify these titles as needed
    await deleteElectionsByTitle("Élection présidentielle 2023");
    await deleteElectionsByTitle("Référendum sur la réforme constitutionnelle");
    
    console.log("Deletion complete");
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

console.log("Starting deletion process...");
deleteSpecificElections().catch(err => {
  console.error("Caught error:", err);
  process.exit(1);
});