const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  // Determine the status code from the response object or default to 500 (Internal Server Error)
  const statusCode = res.statusCode ? res.statusCode : 500;

  // Handle different types of errors based on the status code
  switch (statusCode) {
    // If the error status code matches the validation error constant
    case constants.VALIDATION_ERROR:
      // Send a JSON response with details of the validation error
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    // If the error status code matches the not found constant
    case constants.NOT_FOUND:
      // Send a JSON response indicating the resource was not found
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    // If the error status code matches the unauthorized constant
    case constants.UNAUTHORIZED:
      // Send a JSON response indicating unauthorized access
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    // If the error status code matches the forbidden constant
    case constants.FORBIDDEN:
      // Send a JSON response indicating forbidden access
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    // If the error status code matches the server error constant
    case constants.SERVER_ERROR:
      // Send a JSON response indicating a server error
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    // If the error status code does not match any predefined constants
    default:
      // Log "Success" to the console
      console.log("Success");
      break;
  }
};

module.exports = errorHandler;
