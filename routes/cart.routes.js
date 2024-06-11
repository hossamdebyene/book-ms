// Importing required libraries and modules
const lodash = require("lodash");
const expressValidation = require("express-validation");
const express = require("express");

// Importing middleware for token validation
const validateToken = require("../middleware/validateTokenHandler");

// Importing validation schema for cart operations
const { updateAddCartScheme } = require("../validation/cart.validation");

// Importing controllers for cart operations
const {
  addCartController,
  getCartByUserId,
  getCartsController,
  updateCartController,
} = require("../controller/cart");

// Creating an Express router instance
const router = express.Router();

// Middleware to validate user token for authorization
router.use(validateToken);

// Route for adding a cart
router.post(
  "/",
  expressValidation.validate(updateAddCartScheme),
  lodash.partial(addCartController)
);

// Routes for retrieving carts
// Get cart by user ID
router.get("/byUser", lodash.partial(getCartByUserId));
// Get all carts
router.get("/", lodash.partial(getCartsController));

// Route for updating a cart
router.patch(
  "/update",
  expressValidation.validate(updateAddCartScheme),
  lodash.partial(updateCartController)
);

// Exporting the router for use in other modules
module.exports = router;
