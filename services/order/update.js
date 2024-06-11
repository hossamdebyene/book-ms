// Import required modules
const asyncHandler = require("express-async-handler");
const Order = require("../../models/order.model");

// Define service functions for updating and soft deleting orders

// Service function to update an order by its ID
const updateOrderService = asyncHandler(async (id, body) => {
  try {
    // Find and update the order with the provided ID using the request body
    const updatedOrder = await Order.findByIdAndUpdate(id, body, {
      new: true,
    })
      .populate("bookIds")
      .then((order) => {
        if (order) {
          return order;
        } else {
          throw new Error("Order not found");
        }
      });

    // Return the updated order with populated book data
    return updatedOrder;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
});

// Service function to soft delete an order by its ID
const softDeleteService = asyncHandler(async (id) => {
  try {
    // Find and update the order with the provided ID, setting the deleted flag to true
    const order = await Order.findByIdAndUpdate(id, { deleted: true }).populate(
      "bookIds"
    );

    // Return the soft deleted order with populated book data
    return order;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
});

// Export service functions
module.exports = {
  updateOrderService,
  softDeleteService,
};
