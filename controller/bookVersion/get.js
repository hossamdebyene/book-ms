// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the necessary functions from the get module in the bookVersion services
const {
  getBookVersionsByBookService,
  getBookVersionsService,
  getBookVersionByIdService,
  getBookVersionsByCriteriaService,
  getBookVersionsByVersionService,
} = require("../../services/bookVersion/get");

// Define the getBooksVersionsController function using asyncHandler to handle asynchronous operations
const getBooksVersionsController = asyncHandler(async (req, res) => {
  console.log(
    "--- Executing ./lib/controllers/bookVersion -> getBooksVersionsController Function ---"
  );
  try {
    // Logging a message indicating an attempt to retrieve book versions
    console.log("Trying to retrieve book Versions ---");

    // Calling the getBookVersionsService function to retrieve book versions
    const bookVersion = await getBookVersionsService();

    // Logging a message indicating successful book versions retrieval
    console.log("book Versions retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book versions as the response
    res.send(bookVersion);
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

// Define the getBooksVersionByIdController function using asyncHandler to handle asynchronous operations
const getBooksVersionByIdController = asyncHandler(async (req, res) => {
  // Extracting the parameters from the request object
  const { params } = req;

  console.log(
    "--- Executing ./lib/controllers/bookVersion -> getBooksVersionByIdController Function ---"
  );
  try {
    // Logging a message indicating an attempt to retrieve book versions
    console.log("Trying to retrieve book Versions ---");

    // Calling the getBookVersionByIdService function with the book version ID parameter to retrieve the book version by ID
    const bookVersion = await getBookVersionByIdService(params.id);

    // Logging a message indicating successful book version retrieval
    console.log("book Versions retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book version as the response
    res.send(bookVersion);
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

// Define the getBooksVersionsByBookController function using asyncHandler to handle asynchronous operations
const getBooksVersionsByBookController = asyncHandler(async (req, res) => {
  // Extracting the query parameters from the request object
  const { query } = req;

  console.log(
    "--- Executing ./lib/controllers/cart -> getBooksVersionsByBookController Function ---"
  );
  try {
    // Logging a message indicating an attempt to get book versions by book ID
    console.log("Trying to get cart for user ---");

    // Calling the getBookVersionsByBookService function with the book ID from the query parameters to get book versions by book ID
    let cart = await getBookVersionsByBookService(query.bookId);

    // Logging a message indicating successful book versions retrieval
    console.log("user cart retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book versions as the response
    res.send(cart);
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

// Define the getBooksVersionsByCriteriaController function using asyncHandler to handle asynchronous operations
const getBooksVersionsByCriteriaController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  console.log(
    "--- Executing ./lib/controllers/bookVersion -> getBooksVersionsByCriteriaController Function ---"
  );
  try {
    // Logging a message indicating an attempt to retrieve book versions
    console.log("Trying to get book Versions ---");

    // Calling the getBookVersionsByCriteriaService function with the criteria from the request body to retrieve book versions by criteria
    const bookVersion = await getBookVersionsByCriteriaService(body);

    // Logging a message indicating successful book versions retrieval
    console.log("book Versions retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book versions as the response
    res.send(bookVersion);
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

// Define the getBooksVersionByVersionsController function using asyncHandler to handle asynchronous operations
const getBooksVersionByVersionsController = asyncHandler(async (req, res) => {
  // Extracting the query parameters from the request object
  const { query } = req;

  console.log(query);
  console.log(
    "--- Executing ./lib/controllers/bookVersion -> getBooksVersionByVersionsController Function ---"
  );
  try {
    // Logging a message indicating an attempt to retrieve book versions
    console.log("Trying to get book Versions ---");

    // Calling the getBookVersionsByVersionService function with the version from the query parameters to retrieve book versions by version
    const bookVersion = await getBookVersionsByVersionService(query.version);

    // Logging a message indicating successful book versions retrieval
    console.log("book Versions retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book versions as the response
    res.send(bookVersion);
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
  getBooksVersionsController,
  getBooksVersionsByCriteriaController,
  getBooksVersionByVersionsController,
  getBooksVersionsByBookController,
  getBooksVersionByIdController,
};
