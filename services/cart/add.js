// Import the Cart model
const Cart = require("../../models/cart.model");

// Define addCartService function to add a new cart
const addCartService = async (body) => {
  try {
    // Create a new cart using the provided request body
    const newCart = await Cart.create(body);

    // If no new cart was created, throw an error
    if (!newCart) {
      const error = {
        message: "No cart added",
        status: 404,
      };
      throw error;
    }

    // Return the newly created cart
    return newCart;
  } catch (error) {
    // Log and re-throw any errors that occur during cart creation
    console.error("Error creating cart:", error);
    throw error;
  }
};

// Export addCartService function
module.exports = {
  addCartService,
};
