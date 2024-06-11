// Import required modules
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import User model
const User = require("../../models/user.model");

// Define signInService function using asyncHandler to handle asynchronous operations
const signInService = asyncHandler(async (body) => {
  // Extract email, username, and password from the request body
  const { email, username, password } = body;
  try {
    // Find a user by email or username
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });
    console.log(process.env.ACCESS_TOKEN_SECRET);
    // Compare the provided password with the hashed password stored in the database
    if (user && (await bcrypt.compare(password, user.password))) {
      // If passwords match, generate an access token with user information and a set expiration time
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET, // Secret key for signing the token
        { expiresIn: "60m" } // Token expiration time
      );

      // Log the generated access token
      console.log(accessToken);

      // Return user information along with the access token
      return { ...user, accessToken };
    }
  } catch (error) {
    // Log and re-throw any errors that occur during sign-in process
    console.error("Error signing in user:", error);
    throw error;
  }
});

// Export signInService function
module.exports = {
  signInService,
};
