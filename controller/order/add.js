// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the necessary functions from their respective modules
const { addOrderService } = require("../../services/order/add");
const { getUnavailableBooksByIdsService } = require("../../services/book/get");
const { updateCartService } = require("../../services/cart/update");

// Define the addOrderController function using asyncHandler to handle asynchronous operations
const addOrderController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  // Logging a message indicating the execution of the addOrderController function
  console.log(
    "--- Executing ./lib/controllers/order -> addOrderController Function ---"
  );

  try {
    // Retrieving unavailable books by their IDs from the request body
    const books = await getUnavailableBooksByIdsService(body?.bookIds);

    // Checking if any unavailable books were found
    if (books.length > 0) {
      // If unavailable books are found, setting response status to 410 (Gone)
      res.statusCode = 410;
      // Sending response with the list of unavailable books and a message
      res.send({
        books,
        message: "Books are unavailable. Remove them to place order.",
      });
    } else {
      // If no unavailable books are found, proceeding to add the order
      console.log("Trying to add order ---");

      // Calling the addOrderService function with the order data from the request body to add the order
      const order = await addOrderService(body);

      // Updating the cart for the user by emptying it
      await updateCartService(body?.userId, { bookIds: [] });

      // Logging a message indicating successful order addition
      console.log("Order added successfully ---");

      // Setting the response status code to 201 (Created)
      res.statusCode = 201;

      // Sending the added order object as the response
      res.send(order);
    }
  } catch (error) {
    // Handling errors
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error.message);
  }
});

// Exporting the addOrderController function
module.exports = {
  addOrderController,
};
