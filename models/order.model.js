const mongoose = require("mongoose");

// Define the schema for the Order model
const orderSchema = mongoose.Schema(
  {
    // User ID associated with the order
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Order must have a user"],
    },
    // Array of book IDs included in the order
    bookIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: [true, "Order must have books"],
      },
    ],
    // Total price of the items in the order
    total: {
      type: Number,
    },
    // Shipping address for the order
    shippingAddress: {
      type: String,
      required: [true, "Order must have an address"],
    },
    // Status of the order
    status: {
      type: String,
      default: "PENDING",
      enum: ["PENDING", "ACCEPTED", "DECLINED"],
    },
  },
  {
    // Enable timestamps for createdAt and updatedAt
    timestamps: true,
  }
);

// Create and export the Order model based on the orderSchema
module.exports = mongoose.model("Order", orderSchema);
