// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the necessary functions from the update module in the book services
const {
  updateBookService,
  softDeleteService,
} = require("../../services/book/update");

// Define the updateBookController function using asyncHandler to handle asynchronous operations
const updateBookController = asyncHandler(async (req, res) => {
  // Extracting the request body and parameters from the request object
  const { body, params } = req;

  // Logging a message indicating the execution of the updateBookController function
  console.log(
    "--- Executing ./lib/controllers/book -> updateBookController Function ---"
  );

  try {
    // Logging a message indicating an attempt to update a book
    console.log("Trying to update book ---");

    // Calling the updateBookService function with the book ID parameter and request body to update the book
    const book = await updateBookService(params?.id, body);

    // Logging a message indicating successful book update
    console.log("book updated successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the updated book object as the response
    res.send(book);
  } catch (error) {
    // Handling errors
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error.message);
  }
});

// Define the softDeleteBookController function using asyncHandler to handle asynchronous operations
const softDeleteBookController = asyncHandler(async (req, res) => {
  // Extracting the query parameters from the request object
  const { query } = req;

  // Logging a message indicating the execution of the softDeleteBookController function
  console.log(
    "--- Executing ./lib/controllers/book -> softDeleteBookController Function ---"
  );

  try {
    // Logging a message indicating an attempt to soft delete a book
    console.log("Trying to delete book ---");

    // Calling the softDeleteService function with the book ID parameter to soft delete the book
    const book = await softDeleteService(query.id);

    // Logging a message indicating successful book deletion
    console.log("book deleted successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the deleted book object as the response
    res.send(book);
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
  updateBookController,
  softDeleteBookController,
};
