const mongoose = require("mongoose");

// Define the schema for the Book model
const bookSchema = mongoose.Schema(
  {
    // Title of the book
    title: {
      type: String,
      trim: true,
      required: [true, "Book must have a title"],
    },
    // User ID of the book owner
    userId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Book must have a user ID"],
    },
    // Author of the book
    author: {
      type: String,
      trim: true,
    },
    // Genre of the book
    genre: {
      type: String,
      trim: true,
    },
    // Price of the book
    price: {
      type: Number,
      required: [true, "Book must have a price"],
    },
    // Availability status of the book
    availability: {
      type: Boolean,
      default: true,
    },
    // Deleted status of the book
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Enable optimistic concurrency control
    optimisticConcurrency: true,
    // Add timestamps for createdAt and updatedAt
    timestamps: true,
  }
);

// Create and export the Book model based on the bookSchema
module.exports = mongoose.model("Book", bookSchema);
