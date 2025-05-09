const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
require("dotenv").config();

async function fixAdminAccount() {
  try {
    // Connect directly to Docker MongoDB
    await mongoose.connect("mongodb://admin:password123@evoting-mongodb:27017/evoting_system?authSource=admin");
    console.log("Connected to Docker MongoDB");
    
    // Find admin user
    const admin = await User.findOne({ email: "admin@example.com" });
    if (!admin) {
      console.log("Admin user not found!");
      process.exit(1);
    }
    
    // Create a fixed password hash (for "password123")
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);
    
    // Update admin account
    admin.password = hashedPassword;
    admin.isEmailVerified = true;
    await admin.save();
    
    console.log("Admin account fixed successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

fixAdminAccount();