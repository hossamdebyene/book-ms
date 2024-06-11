// Import required modules
const asyncHandler = require("express-async-handler");
const Order = require("../../models/order.model");

// Define service functions for interacting with orders

// Service function to get orders by user ID
const getOrdersByUserService = asyncHandler(async (userId) => {
  try {
    // Find orders associated with the provided user ID and populate the associated book data
    const orders = await Order.find({ userId: userId }).populate("bookIds");
    return orders;
  } catch (error) {
    console.error("Error getting orders by user ID:", error);
    throw error;
  }
});

// Service function to get an order by its ID
const getOrdersByIdService = asyncHandler(async (id) => {
  try {
    // Find an order by its ID and populate the associated book data
    const order = await Order.findById(id).populate("bookIds");
    return order;
  } catch (error) {
    console.error("Error getting order by ID:", error);
    throw error;
  }
});

// Service function to get orders by criteria
const getOrdersByCriteriaService = asyncHandler(async (body) => {
  try {
    // Find orders that match the provided criteria and populate the associated book data
    const orders = await Order.find(body).populate("bookIds");
    return orders;
  } catch (error) {
    console.error("Error getting orders by criteria:", error);
    throw error;
  }
});

// Service function to get all orders
const getOrdersService = asyncHandler(async () => {
  try {
    // Find all orders and populate the associated book data
    const orders = await Order.find().populate("bookIds");
    return orders;
  } catch (error) {
    console.error("Error getting all orders:", error);
    throw error;
  }
});

// Export service functions
module.exports = {
  getOrdersByUserService,
  getOrdersService,
  getOrdersByIdService,
  getOrdersByCriteriaService,
};
