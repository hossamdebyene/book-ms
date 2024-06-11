const mongoose = require("mongoose");

// Define the schema for the Cart model
const cartSchema = mongoose.Schema(
  {
    // User ID associated with the cart
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      ref: "User",
      required: [true, "Cart must have a user"],
    },
    // Array of book IDs in the cart
    bookIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
    // Total price of the items in the cart
    total: {
      type: Number,
    },
  },
  {
    // Enable timestamps for createdAt and updatedAt
    timestamps: true,
  }
);

// Create and export the Cart model based on the cartSchema
module.exports = mongoose.model("Cart", cartSchema);
