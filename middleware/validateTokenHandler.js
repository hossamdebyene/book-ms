const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  // Logging the request and response objects (for debugging)
  console.log(req, res);

  // Extracting the token from the Authorization header
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    // Verifying the token using the secret key
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        // If token verification fails, send a 401 Unauthorized response
        res.status(401);
        throw new Error("User is not authenticated");
      }
      // If token is valid, set the decoded user object in the request object
      req.user = decoded.user;
      // Call the next middleware function
      next();
    });

    if (!token) {
      // If token is missing, send a 401 Unauthorized response
      res.status(401);
      throw new Error("User is not authenticated or token is missing");
    }
  } else {
    // If Authorization header is missing or doesn't start with 'Bearer', send a 401 Unauthorized response
    res.send(401);
  }
});

module.exports = validateToken;
