// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the signInService function from the get module in the auth services
const { signInService } = require("../../services/auth/get");

// Define the signInController function using asyncHandler to handle asynchronous operations
const signInController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  // Logging a message indicating the execution of the signInController function
  console.log(
    "--- Executing ./lib/controllers/auth -> signInController Function ---"
  );

  try {
    // Logging a message indicating an attempt to sign in a user
    console.log("Trying to sign in user ---");

    // Calling the signInService function with the request body to sign in a user
    const user = await signInService(body);

    // Logging a message indicating successful user sign-in
    console.log("user signed in successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the signed-in user object as the response
    res.send(user);
  } catch (error) {
    // Handling errors
    console.error(error);

    // Extracting the error status from the error object or defaulting to 500 (Internal Server Error)
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status
    res.statusCode = errorStatus;
  }
});

// Exporting the signInController function
module.exports = {
  signInController,
};
