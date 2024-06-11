// Import required modules
const asyncHandler = require("express-async-handler");
const { bookVersion } = require("../../constants");
const Book = require("../../models/book.model");
const BookVersion = require("../../models/bookVersion.model");

// Define service functions for updating and soft deleting books

// Service function to update a book
const updateBookService = asyncHandler(async (id, body) => {
  try {
    let oldVersion = {};

    // Find the book by its ID
    const updatedBook = await Book.findById(id)
      .where({ deleted: false })
      .then((book) => {
        // Create an object to store the old version of the book
        Object.keys(bookVersion).map((bookKeys) => {
          oldVersion[bookKeys] = book[bookKeys];
        });
        oldVersion = {
          ...oldVersion,
          bookId: book._id,
          __v: book.__v,
        };

        // Update the book with the new values from the request body
        Object.entries(body).map(([key, value]) => {
          book[key] = value;
        });

        // Save the updated book
        return book.save();
      })
      .then((updatedBook) => {
        // If the book was successfully updated, check if its version has increased
        if (updatedBook?.__v > oldVersion?.__v) {
          // If the version has increased, create a new entry in the BookVersion collection with the old version
          const oldVersionBook = new BookVersion({
            ...oldVersion,
          });
          oldVersionBook.save();
        }
        return updatedBook;
      })
      .catch((err) => {
        console.error("Error updating book:", err);
        return err;
      });

    // Return the updated book
    return updatedBook;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
});

// Service function to soft delete a book
const softDeleteService = asyncHandler(async (id) => {
  try {
    // Update the book's deleted flag to true
    await Book.findByIdAndUpdate(id, { deleted: true });

    // Update the deleted flag for all versions of the book
    await BookVersion.updateMany({ bookId: id }, { deleted: true });
  } catch (error) {
    console.error("Error soft deleting book:", error);
    throw error;
  }
});

// Export service functions
module.exports = {
  updateBookService,
  softDeleteService,
};
