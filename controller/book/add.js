// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the addBookService function from the add module in the book services
const { addBookService } = require("../../services/book/add");

// Define the addBookController function using asyncHandler to handle asynchronous operations
const addBookController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  // Logging a message indicating the execution of the addBookController function
  console.log(
    "--- Executing ./lib/controllers/book -> addBookController Function ---"
  );

  try {
    // Logging a message indicating an attempt to add a book
    console.log("Trying to add book ---");

    // Calling the addBookService function with the request body to add a book
    const book = await addBookService(body);

    // Logging a message indicating successful book addition
    console.log("book added successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the added book object as the response
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

// Exporting the addBookController function
module.exports = {
  addBookController,
};
