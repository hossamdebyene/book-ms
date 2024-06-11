// Import required modules
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// Import User model
const User = require("../../models/user.model");

// Define signUpService function using asyncHandler to handle asynchronous operations
const signUpService = asyncHandler(async (body) => {
  try {
    // Hash the password using bcrypt with a salt round of 10
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create a new user with the hashed password
    const newUser = await User.create({ ...body, password: hashedPassword })
      .then((user) => {
        console.log("User created successfully:");
        console.log(user);
        return user;
      })
      .catch((error) => {
        // Handle unique constraint violation error (duplicate key)
        if (error.code === 11000) {
          const errorMessage = {
            message: `Duplicate found:  ${
              error.keyValue.email || error.keyValue.username
            }`,
            status: 404,
          };
          throw errorMessage;
        } else {
          console.error("Error creating user:", error);
          throw error;
        }
      });

    // Log the newly created user
    console.log(newUser);

    // Return the newly created user
    return newUser;
  } catch (error) {
    // Log and re-throw any errors that occur during user creation
    console.error("Error creating user:", error);
    throw error;
  }
});

// Export signUpService function
module.exports = {
  signUpService,
};
