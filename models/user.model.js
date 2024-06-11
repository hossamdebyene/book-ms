const mongoose = require("mongoose");

// Define the schema for the User model
const userSchema = mongoose.Schema(
  {
    // Username of the user
    username: {
      type: String,
      unique: [true, "Username already exists!"],
      trim: true,
      required: [true, "User must have a username"],
    },
    // Email of the user
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      trim: true,
      required: [true, "User must have an email"],
    },
    // Password of the user
    password: {
      type: String,
      required: [true, "Password is missing"],
    },
    // First name of the user
    firstName: {
      type: String,
      required: [true, "User must have a first name"],
    },
    // Last name of the user
    lastName: {
      type: String,
      required: [true, "User must have a last name"],
    },
    // Country of the user
    country: {
      type: String,
      required: [true, "User must have a valid country"],
    },
    // City of the user
    city: {
      type: String,
      required: [true, "User must have a valid city"],
    },
    // Street address of the user (optional)
    street: {
      type: String,
      required: false,
    },
    // Building number of the user (optional)
    building: {
      type: String,
      required: false,
    },
    // Floor of the user's residence (optional)
    floor: {
      type: String,
      required: false,
    },
    // Flag indicating if the user is deleted or not
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Enable timestamps for createdAt and updatedAt
    timestamps: true,
  }
);

// Create and export the User model based on the userSchema
module.exports = mongoose.model("User", userSchema);
