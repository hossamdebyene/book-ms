// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the necessary functions from the get module in the book services
const {
  getBookByIdService,
  getBookByCriteriaService,
  getBooksByUserIdService,
  getBooksService,
} = require("../../services/book/get");

// Define the getBooksController function using asyncHandler to handle asynchronous operations
const getBooksController = asyncHandler(async (req, res) => {
  console.log(
    "--- Executing ./lib/controllers/book -> getBooksController Function ---"
  );
  try {
    // Logging a message indicating an attempt to retrieve books
    console.log("Trying to retrieve books ---");

    // Calling the getBooksService function to retrieve books
    const books = await getBooksService();

    // Logging a message indicating successful book retrieval
    console.log("books retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved books as the response
    res.send(books);
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

// Define the getBookByIdController function using asyncHandler to handle asynchronous operations
const getBookByIdController = asyncHandler(async (req, res) => {
  // Extracting the parameters from the request object
  const { params } = req;

  console.log(
    "--- Executing ./lib/controllers/book -> getBookByIdController Function ---"
  );
  try {
    // Logging a message indicating an attempt to get a book by ID
    console.log("Trying to get book ---");

    // Calling the getBookByIdService function with the book ID parameter to get the book by ID
    const book = await getBookByIdService(params.id);

    // Logging a message indicating successful book retrieval
    console.log("book retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book as the response
    res.send(book);
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

// Define the getBooksByCriteriaController function using asyncHandler to handle asynchronous operations
const getBooksByCriteriaController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  console.log(
    "--- Executing ./lib/controllers/book -> getBooksByCriteriaController Function ---"
  );
  try {
    // Logging a message indicating an attempt to get a book by criteria
    console.log("Trying to get book ---");

    // Calling the getBookByCriteriaService function with the criteria from the request body to get books by criteria
    const book = await getBookByCriteriaService(body);

    // Logging a message indicating successful book retrieval
    console.log("book retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book as the response
    res.send(book);
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

// Define the getBookByByUserController function using asyncHandler to handle asynchronous operations
const getBookByByUserController = asyncHandler(async (req, res) => {
  // Extracting the query parameters from the request object
  const { query } = req;

  console.log(
    "--- Executing ./lib/controllers/book -> getBookByByUserController Function ---"
  );
  try {
    // Logging a message indicating an attempt to get books by user ID
    console.log("Trying to get book ---");

    // Calling the getBooksByUserIdService function with the user ID from the query parameters to get books by user ID
    const book = await getBooksByUserIdService(query?.userId);

    // Logging a message indicating successful book retrieval
    console.log("book retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved book as the response
    res.send(book);
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
  getBooksController,
  getBookByIdController,
  getBooksByCriteriaController,
  getBookByByUserController,
};
