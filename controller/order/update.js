// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the updateOrderService function from the update module in the order services
const { updateOrderService } = require("../../services/order/update");

// Define the updateOrderController function using asyncHandler to handle asynchronous operations
const updateOrderController = asyncHandler(async (req, res) => {
  // Extracting the request body and URL parameters from the request object
  const { body, params } = req;

  // Logging a message indicating the execution of the updateOrderController function
  console.log(
    "--- Executing ./lib/controllers/cart -> updateOrderController Function ---"
  );

  try {
    // Logging a message indicating an attempt to update an order
    console.log("Trying to update order ---");

    // Calling the updateOrderService function with the order ID from the URL parameters and the updated order data from the request body
    const updatedOrder = await updateOrderService(params?.id, body);

    // Logging a message indicating successful order update
    console.log("Order updated successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Logging the updated order object
    console.log(updatedOrder);

    // Sending the updated order object as the response
    res.send(updatedOrder);
  } catch (error) {
    // Handling errors
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error.message);
  }
});

// Define the changeOrderStatusController function using asyncHandler to handle asynchronous operations
const changeOrderStatusController = asyncHandler(async (req, res) => {
  // Extracting the request body and URL parameters from the request object
  const { body, params } = req;

  // Logging a message indicating the execution of the changeOrderStatusController function
  console.log(
    "--- Executing ./lib/controllers/cart -> changeOrderStatusController Function ---"
  );

  try {
    // Logging a message indicating an attempt to change the status of an order
    console.log("Trying to change order status ---");

    // Calling the updateOrderService function with the order ID from the URL parameters and the new status from the request body
    const updatedOrder = await updateOrderService(params?.id, {
      status: body.status,
    });

    // Logging a message indicating successful status change
    console.log("Order status changed successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Logging the updated order object
    console.log(updatedOrder);

    // Sending the updated order object as the response
    res.send(updatedOrder);
  } catch (error) {
    // Handling errors
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error.message);
  }
});

// Exporting the controller functions
module.exports = {
  updateOrderController,
  changeOrderStatusController,
};
