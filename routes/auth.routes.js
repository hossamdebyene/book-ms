// Importing required libraries and modules
const lodash = require("lodash");
const expressValidation = require("express-validation");
const express = require("express");

// Importing validation schemas for sign-up and sign-in
const { signUpScheme, signInScheme } = require("../validation/auth.validation");

// Importing controllers for sign-up and sign-in
const { signUpController, signInController } = require("../controller/auth");

// Creating an Express router instance
const router = express.Router();

// Route for user sign-up
router.post(
  "/signup",
  // Validation middleware for sign-up data
  expressValidation.validate(signUpScheme),
  // Partial application of the sign-up controller function
  lodash.partial(signUpController)
);

// Route for user login
router.post(
  "/login",
  // Validation middleware for sign-in data
  expressValidation.validate(signInScheme),
  // Partial application of the sign-in controller function
  lodash.partial(signInController)
);

// Exporting the router for use in other modules
module.exports = router;
