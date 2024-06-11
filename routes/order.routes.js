// Import required modules
const lodash = require("lodash");
const expressValidation = require("express-validation");
const express = require("express");

// Import middleware for token validation
const validateToken = require("../middleware/validateTokenHandler");

// Import validation schemas for orders
const {
  updateAddOrderScheme,
  changeStatusScheme,
} = require("../validation/order.validation");

// Import controller functions for orders
const {
  updateOrderController,
  changeOrderStatusController,
  getOrdersControllers,
  getOrdersByUserId,
  getOrdersByCriteriaController,
  addOrderController,
} = require("../controller/order");

// Create an Express router
const router = express.Router();

// Apply token validation middleware to all routes
router.use(validateToken);

// Define route for adding new orders
router.post(
  "/",
  // Validate request body
  expressValidation.validate(updateAddOrderScheme),
  // Call controller function
  lodash.partial(addOrderController)
);

// Define route for retrieving orders by user ID
router.get("/byUser", lodash.partial(getOrdersByUserId));

// Define route for retrieving all orders
router.get("/", lodash.partial(getOrdersControllers));

// Define route for retrieving orders based on criteria
router.get("/find-by-criteria", lodash.partial(getOrdersByCriteriaController));

// Define route for updating an existing order
router.patch(
  "/update/:id",
  // Validate request body
  expressValidation.validate(updateAddOrderScheme),
  // Call controller function
  lodash.partial(updateOrderController)
);

// Define route for updating order status
router.patch(
  "/updateStatus/:id",
  // Validate request body
  expressValidation.validate(changeStatusScheme),
  // Call controller function
  lodash.partial(changeOrderStatusController)
);

// Export the configured router
module.exports = router;
