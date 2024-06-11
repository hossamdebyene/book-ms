// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the addCartService function from the add module in the cart services
const { addCartService } = require("../../services/cart/add");

// Define the addCartController function using asyncHandler to handle asynchronous operations
const addCartController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  // Logging a message indicating the execution of the addCartController function
  console.log(
    "--- Executing ./lib/controllers/cart -> addCartController Function ---"
  );

  try {
    // Logging a message indicating an attempt to add a cart
    console.log("Trying to add cart ---");

    // Calling the addCartService function with the cart data from the request body to add the cart
    const cart = await addCartService(body);

    // Logging a message indicating successful cart addition
    console.log("cart added successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the added cart object as the response
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

// Exporting the addCartController function
module.exports = {
  addCartController,
};
