// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the necessary functions from the get module in the cart services
const {
  getCartByUserService,
  getCartsService,
} = require("../../services/cart/get");

// Importing the getBooksByIdsService and updateCartService functions from their respective modules
const { getBooksByIdsService } = require("../../services/book/get");
const { updateCartService } = require("../../services/cart/update");

// Define the getCartsController function using asyncHandler to handle asynchronous operations
const getCartsController = asyncHandler(async (req, res) => {
  // Logging a message indicating the execution of the getCartsController function
  console.log(
    "--- Executing ./lib/controllers/cart -> getCartsController Function ---"
  );
  try {
    // Logging a message indicating an attempt to retrieve carts
    console.log("Trying to retrieve carts ---");

    // Calling the getCartsService function to retrieve carts
    const carts = await getCartsService();

    // Logging a message indicating successful carts retrieval
    console.log("carts retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved carts as the response
    res.send(carts);
  } catch (error) {
    // Handling errors
    console.error(error);

    // Extracting the error status from the error object or defaulting to 500 (Internal Server Error)
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error);
  }
});

// Define the getCartByUserId function using asyncHandler to handle asynchronous operations
const getCartByUserId = asyncHandler(async (req, res) => {
  // Extracting the query parameters from the request object
  const { query } = req;

  console.log(
    "--- Executing ./lib/controllers/cart -> getCartByUserId Function ---"
  );
  try {
    // Logging a message indicating an attempt to get cart for a user
    console.log("Trying to get cart for user ---");

    // Calling the getCartByUserService function with the user ID from the query parameters to get the cart
    let cart = await getCartByUserService(query.userId);

    // Calling the getBooksByIdsService function with the book IDs from the retrieved cart to get the details of the books
    const books = await getBooksByIdsService(cart?.bookIds);

    // Checking if all book IDs in the cart exist, if not, update the cart with valid book IDs and recalculate the total price
    if (books.length < cart?.bookIds.length) {
      let totalPrice = 0;
      const newbookIds = [];
      books.forEach((book) => {
        totalPrice += book.price;
        newbookIds.push(book._id);
      });

      // Updating the cart with valid book IDs and recalculated total price
      cart = await updateCartService(query.userId, {
        bookIds: newbookIds,
        total: totalPrice,
      });
    }

    // Logging a message indicating successful cart retrieval
    console.log("user cart retrieved successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the retrieved cart as the response
    res.send(cart);
  } catch (error) {
    // Handling errors
    console.error(error);

    // Extracting the error status from the error object or defaulting to 500 (Internal Server Error)
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error);
  }
});

// Exporting the controller functions
module.exports = {
  getCartsController,
  getCartByUserId,
};
