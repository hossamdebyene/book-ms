// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the necessary functions from the get module in the order services
const {
  getOrdersByUserService,
  getOrdersService,
  getOrdersByCriteriaService,
} = require("../../services/order/get");

// Define the getOrdersControllers function using asyncHandler to handle asynchronous operations
const getOrdersControllers = asyncHandler(async (req, res) => {
  // Logging a message indicating the execution of the getOrdersControllers function
  console.log(
    "--- Executing ./lib/controllers/order -> getOrdersControllers Function ---"
  );
  try {
    // Logging a message indicating an attempt to retrieve orders
    console.log("Trying to retrieve orders ---");

    // Calling the getOrdersService function to retrieve orders
    const orders = await getOrdersService();

    // Logging a message indicating successful orders retrieval
    console.log("Orders retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved orders as the response
    res.send(orders);
  } catch (error) {
    // Handling errors
    console.error(error);

    // Extracting the error status from the error object or defaulting to 500 (Internal Server Error)
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error);
  }
});

// Define the getOrdersByUserId function using asyncHandler to handle asynchronous operations
const getOrdersByUserId = asyncHandler(async (req, res) => {
  // Extracting the query parameters from the request object
  const { query } = req;

  console.log(
    "--- Executing ./lib/controllers/cart -> getOrdersByUserId Function ---"
  );
  try {
    // Logging a message indicating an attempt to get orders for a user
    console.log("Trying to get orders for user ---");

    // Calling the getOrdersByUserService function with the user ID from the query parameters to get the orders
    let orders = await getOrdersByUserService(query.userId);

    // Logging a message indicating successful orders retrieval
    console.log("User orders retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved orders as the response
    res.send(orders);
  } catch (error) {
    // Handling errors
    console.error(error);

    // Extracting the error status from the error object or defaulting to 500 (Internal Server Error)
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error);
  }
});

// Define the getOrdersByCriteriaController function using asyncHandler to handle asynchronous operations
const getOrdersByCriteriaController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  console.log(
    "--- Executing ./lib/controllers/order -> getOrdersByCriteriaController Function ---"
  );
  try {
    // Logging a message indicating an attempt to get orders
    console.log("Trying to get orders ---");

    // Calling the getOrdersByCriteriaService function with the criteria from the request body to get the orders
    const orders = await getOrdersByCriteriaService(body);

    // Logging a message indicating successful orders retrieval
    console.log("Orders retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved orders as the response
    res.send(orders);
  } catch (error) {
    // Handling errors
    console.error(error);

    // Extracting the error status from the error object or defaulting to 500 (Internal Server Error)
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error);
  }
});

// Exporting the controller functions
module.exports = {
  getOrdersControllers,
  getOrdersByUserId,
  getOrdersByCriteriaController,
};
