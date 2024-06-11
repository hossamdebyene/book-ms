// Importing required libraries and modules
const lodash = require("lodash");
const expressValidation = require("express-validation");
const express = require("express");

// Importing middleware
const validateToken = require("../middleware/validateTokenHandler");

// Importing validation schemas for book operations
const {
  addBookScheme,
  updateBookScheme,
  partialUpdateBookScheme,
} = require("../validation/book.validation");

// Importing controllers for book operations
const {
  addBookController,
  getBooksController,
  getBookByIdController,
  getBooksByCriteriaController,
  getBookByByUserController,
  softDeleteBookController,
  updateBookController,
  deleteBookController,
} = require("../controller/book");

// Creating an Express router instance
const router = express.Router();

// Middleware to validate user token for authorization
router.use(validateToken);

// Route for adding a new book
router.post(
  "/",
  // Validation middleware for adding a book
  expressValidation.validate(addBookScheme),
  // Partial application of the add book controller function
  lodash.partial(addBookController)
);

// Routes for retrieving books
// Get book by ID
router.get("/:id", lodash.partial(getBookByIdController));
// Get books by user
router.get("/byUser", lodash.partial(getBookByByUserController));
// Get all books
router.get("/", lodash.partial(getBooksController));
// Find books by criteria
router.get("/find-by-criteria", lodash.partial(getBooksByCriteriaController));
// Route for soft deleting a book
router.delete("/delete", lodash.partial(softDeleteBookController));

// Route for updating a book
router.patch(
  "/:id",
  // Validation middleware for partial update of a book
  expressValidation.validate(partialUpdateBookScheme),
  // Partial application of the update book controller function
  lodash.partial(updateBookController)
);

// Route for deleting a book
router.delete("/:id", deleteBookController);

// Exporting the router for use in other modules
module.exports = router;
