// filepath: c:\Users\Student\Downloads\PFE-version-4\PFE-version-4\backend\reset-admin-password.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

const resetAdminPassword = async () => {
  try {
    // Connect to database
    console.log("Connecting to MongoDB...");
    const conn = await mongoose.connect(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
    
    // Find admin user
    const admin = await User.findOne({ email: "admin@example.com" });
    if (!admin) {
      console.log("Admin user not found!");
      process.exit(1);
    }
    console.log("Found admin user:", admin.email);
    
    // Reset password and verify email
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);
    
    admin.password = hashedPassword;
    admin.isEmailVerified = true;
    
    await admin.save();
    console.log("Admin password reset to 'password123' and email verified");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

resetAdminPassword();