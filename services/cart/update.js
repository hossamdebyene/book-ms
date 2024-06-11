const asyncHandler = require("express-async-handler");

const Cart = require("../../models/cart.model");

const updateCartService = asyncHandler(async (userId, body) => {
  try {
    const updatedCart = await Cart.findOneAndUpdate({ userId }, body, {
      new: true,
    })
      .populate("bookIds")
      .then((cart) => {
        if (cart) {
          console.log(cart);
          return cart;
        } else {
          throw error;
        }
      });

    return updatedCart;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
});

const softDeleteService = asyncHandler(async (id) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      id,
      { deleted: true },
      { new: true }
    ).populate("bookIds");
    return cart;
  } catch (error) {
    console.error("Error deleting cart:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
});

module.exports = {
  updateCartService,
  softDeleteService,
};
