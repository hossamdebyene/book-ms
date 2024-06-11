// Importing the express-async-handler library
const asyncHandler = require("express-async-handler");

// Importing the signUpService function from the add module in the auth services
const { signUpService } = require("../../services/auth/add");

// Define the signUpController function using asyncHandler to handle asynchronous operations
const signUpController = asyncHandler(async (req, res) => {
  // Extracting the request body from the request object
  const { body } = req;

  // Logging a message indicating the execution of the signUpController function
  console.log(
    "--- Executing ./lib/controllers/auth -> sigupController Function ---"
  );

  try {
    // Logging a message indicating an attempt to sign up a user
    console.log("Trying to sign up user ---");

    // Calling the signUpService function with the request body to sign up a user
    const user = await signUpService(body);

    // Logging a message indicating successful user signup
    console.log("user signed up successfully ---");

    // Setting the response status code to 201 (Created)
    res.statusCode = 201;

    // Sending the signed-up user object as the response
    res.send(user);
  } catch (error) {
    // Handling errors
    const errorStatus = error.status || 500;

    // Setting the response status code to the error status or defaulting to 500 (Internal Server Error)
    res.statusCode = errorStatus;

    // Sending the error message as the response
    res.send(error.message);
  }
});

// Exporting the signUpController function
module.exports = {
  signUpController,
};
