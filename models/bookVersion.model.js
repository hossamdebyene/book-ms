const mongoose = require("mongoose");

// Define the schema for the BookVersioning model
const bookVersionSchema = mongoose.Schema(
  {
    // Title of the book version
    title: {
      type: String,
    },
    // Reference to the original book using its ObjectId
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    // Author of the book version
    author: {
      type: String,
    },
    // Genre of the book version
    genre: {
      type: String,
    },
    // Price of the book version
    price: {
      type: Number,
    },
    // Availability status of the book version
    availability: {
      type: Boolean,
    },
    // Deleted status of the book version
    deleted: {
      type: Boolean,
    },
    // Version key
    __v: {
      type: Number,
    },
  },
  {
    // Rename the version key
    versionKey: "_versionKey",
    // Enable timestamps for createdAt and updatedAt
    timestamps: true,
  }
);

// Create and export the BookVersioning model based on the bookVersionSchema
module.exports = mongoose.model("BookVersioning", bookVersionSchema);
