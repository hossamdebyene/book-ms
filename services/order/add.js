// Import the Order model
const Order = require("../../models/order.model");

// Define addOrderService function to add a new order
const addOrderService = async (body) => {
  try {
    // Create a new order using the provided request body
    const newOrder = await Order.create(body);

    // Find the newly created order by its ID and populate the associated book data
    const order = await Order.findById(newOrder._id).populate("bookIds");

    // If no new order was created, throw an error
    if (!newOrder) {
      const error = {
        message: "No order added",
        status: 404,
      };
      throw error;
    }

    // Return the newly created order with populated book data
    return order;
  } catch (error) {
    // Log and re-throw any errors that occur during order creation
    console.error("Error creating order:", error);
    throw error;
  }
};

// Export addOrderService function
module.exports = {
  addOrderService,
};
