// Import required modules
const asyncHandler = require("express-async-handler");
const Book = require("../../models/book.model");

// Define service functions to interact with the Book model

// Service function to get books by criteria
const getBookByCriteriaService = asyncHandler(async (body) => {
  try {
    // Find books that match the provided criteria and are not deleted or unavailable
    const books = await Book.find({
      $and: [body, { deleted: false, availability: true }],
    });

    return books;
  } catch (error) {
    console.error("Error getting books by criteria:", error);
    throw error;
  }
});

// Service function to get a book by its ID
const getBookByIdService = asyncHandler(async (id) => {
  try {
    // Find a book by its ID that is not deleted or unavailable
    const book = await Book.findById(id)
      .where({ deleted: false, availability: true })
      .then((book) => {
        if (book) {
          return book;
        }
      });
    return book;
  } catch (error) {
    console.error("Error getting book by ID:", error);
    throw error;
  }
});

// Service function to get all available books
const getBooksService = asyncHandler(async () => {
  try {
    // Find all books that are not deleted or unavailable
    const books = await Book.find({ deleted: false, availability: true });
    return books;
  } catch (error) {
    console.error("Error getting all books:", error);
    throw error;
  }
});

// Service function to get books by user ID
const getBooksByUserIdService = asyncHandler(async (userId) => {
  try {
    // Find books by the specified user ID that are not deleted or unavailable
    const books = await Book.find({
      userId,
      deleted: false,
      availability: true,
    });
    return books;
  } catch (error) {
    console.error("Error getting books by user ID:", error);
    throw error;
  }
});

// Service function to get books by array of IDs
const getBooksByIdsService = asyncHandler(async (ids) => {
  try {
    // Find books with IDs in the specified array that are not deleted or unavailable
    const books = await Book.find({
      _id: { $in: ids },
      deleted: false,
      availability: true,
    });
    return books;
  } catch (error) {
    console.error("Error getting books by IDs:", error);
    throw error;
  }
});

// Service function to get unavailable books by array of IDs
const getUnavailableBooksByIdsService = asyncHandler(async (ids) => {
  try {
    // Find books with IDs in the specified array that are either deleted or unavailable
    const books = await Book.find({
      $and: [
        { _id: { $in: ids } },
        { $or: [{ deleted: true }, { availability: false }] },
      ],
    });
    return books;
  } catch (error) {
    console.error("Error getting unavailable books by IDs:", error);
    throw error;
  }
});

// Export all service functions
module.exports = {
  getBookByCriteriaService,
  getBookByIdService,
  getBooksByIdsService,
  getBooksService,
  getBooksByUserIdService,
  getUnavailableBooksByIdsService,
};
