// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the updateCartService function from the update module in the cart services
const { updateCartService } = require("../../services/cart/update");

// Define the updateCartController function using asyncHandler to handle asynchronous operations
const updateCartController = asyncHandler(async (req, res) => {
  // Extracting the request body and query parameters from the request object
  const { body, query } = req;

  // Logging a message indicating the execution of the updateCartController function
  console.log(
    "--- Executing ./lib/controllers/cart -> updateCartController Function ---"
  );
  try {
    // Logging a message indicating an attempt to update the cart
    console.log("Trying to update cart ---");

    // Calling the updateCartService function with the user ID from the query parameters and the updated cart data from the request body
    const cart = await updateCartService(query?.userId, body);

    // Logging a message indicating successful cart update
    console.log("cart updated successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Logging the updated cart object
    console.log(cart);

    // Sending the updated cart object as the response
    res.send(cart);
  } catch (error) {
    // Handling errors
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error.message);
  }
});

// Exporting the updateCartController function
module.exports = {
  updateCartController,
};
