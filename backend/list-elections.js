// filepath: c:\Users\Student\Downloads\PFE-version-4\PFE-version-4\backend\list-elections.js
const mongoose = require("mongoose");
const Election = require("./models/Election");
require("dotenv").config();

// Connect to database WITH authentication
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`)
  .then(() => {
    console.log("Connected to MongoDB");
    return Election.find({});
  })
  .then(elections => {
    console.log("Elections in database:");
    elections.forEach(e => console.log(`- ${e.title} (ID: ${e._id})`));
    mongoose.connection.close();
  })
  .catch(err => console.error("Error:", err));