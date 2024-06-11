// Import required modules
const asyncHandler = require("express-async-handler");
const Book = require("../../models/book.model");

// Define deleteBookByIdService function using asyncHandler to handle asynchronous operations
const deleteBookByIdService = asyncHandler(async (id) => {
  try {
    // Attempt to delete a book with the specified ID
    const deletedBook = await Book.deleteOne({ _id: id });

    // Return the result of the delete operation
    return deletedBook;
  } catch (error) {
    // Log and re-throw any errors that occur during book deletion
    console.error("Error deleting book:", error);
    throw error;
  }
});

// Export deleteBookByIdService function
module.exports = {
  deleteBookByIdService,
};
