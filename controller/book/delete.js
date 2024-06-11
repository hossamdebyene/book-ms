// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the deleteBookByIdService function from the delete module in the book services
const { deleteBookByIdService } = require("../../services/book/delete");

// Define the deleteBookController function using asyncHandler to handle asynchronous operations
const deleteBookController = asyncHandler(async (req, res) => {
  // Extracting the parameters from the request object
  const { params } = req;

  // Logging a message indicating the execution of the deleteBookController function
  console.log(
    "--- Executing ./lib/controllers/book -> deleteBookController Function ---"
  );

  try {
    // Logging a message indicating an attempt to delete a book
    console.log("Trying to delete book ---");

    // Calling the deleteBookByIdService function with the book ID parameter to delete the book
    const book = await deleteBookByIdService(params.id);

    // Logging a message indicating successful book deletion
    console.log("book deleted successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Setting a custom message in the response object
    res.message = "book deleted successfully ---";

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

// Exporting the deleteBookController function
module.exports = {
  deleteBookController,
};
