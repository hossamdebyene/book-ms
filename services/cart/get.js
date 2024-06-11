// Import required modules
const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cart.model");

// Define service functions for interacting with carts

// Service function to get a cart by user ID
const getCartByUserService = asyncHandler(async (userId) => {
  try {
    // Find a cart by user ID and populate the associated book data
    const cart = await Cart.findOne({ userId: userId })
      .populate("bookIds")
      .then((cart) => {
        if (cart) {
          return cart;
        } else {
          throw new Error("Cart not found");
        }
      });
    return cart;
  } catch (error) {
    console.error("Error getting cart by user ID:", error);
    throw error;
  }
});

// Service function to get a cart by its ID
const getCartByIdService = asyncHandler(async (id) => {
  try {
    // Find a cart by its ID and populate the associated book data
    const cart = await Cart.findById(id)
      .populate("bookIds")
      .then((cart) => {
        if (cart) {
          return cart;
        } else {
          throw new Error("Cart not found");
        }
      });
    return cart;
  } catch (error) {
    console.error("Error getting cart by ID:", error);
    throw error;
  }
});

// Service function to get all carts
const getCartsService = asyncHandler(async () => {
  try {
    // Find all carts and populate the associated book data
    const carts = await Cart.find().populate("bookIds");
    return carts;
  } catch (error) {
    console.error("Error getting all carts:", error);
    throw error;
  }
});

// Export service functions
module.exports = {
  getCartByUserService,
  getCartByIdService,
  getCartsService,
};
