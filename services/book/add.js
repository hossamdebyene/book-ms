// Import the Book model
const Book = require("../../models/book.model");

// Define addBookService function to add a new book
const addBookService = async (body) => {
  try {
    // Create a new book using the provided request body
    const newBook = await Book.create(body);

    // If no new book was created, throw an error
    if (!newBook) {
      const error = {
        message: "No book added",
        status: 404,
      };
      throw error;
    }

    // Return the newly created book
    return newBook;
  } catch (error) {
    // Log and re-throw any errors that occur during book creation
    console.error("Error creating book:", error);
    throw error;
  }
};

// Export addBookService function
module.exports = {
  addBookService,
};
