// Importing required libraries and modules
const lodash = require("lodash");
const express = require("express");

// Importing middleware
const validateToken = require("../middleware/validateTokenHandler");

// Importing controllers for book version operations
const {
  getBooksVersionsController,
  getBooksVersionsByCriteriaController,
  getBooksVersionByVersionsController,
  getBooksVersionsByBookController,
  getBooksVersionByIdController,
} = require("../controller/bookVersion");

// Creating an Express router instance
const router = express.Router();

// Middleware to validate user token for authorization
router.use(validateToken);

// Routes for retrieving book versions
// Get book version by ID
router.get("/:id", lodash.partial(getBooksVersionByIdController));
// Get book versions by book
router.get("/byBook", lodash.partial(getBooksVersionsByBookController));
// Get book versions by version
router.get("/byVersion", lodash.partial(getBooksVersionByVersionsController));
// Get all book versions
router.get("/", lodash.partial(getBooksVersionsController));
// Find book versions by criteria
router.get(
  "/find-by-criteria",
  lodash.partial(getBooksVersionsByCriteriaController)
);

// Exporting the router for use in other modules
module.exports = router;
