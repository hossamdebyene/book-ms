// Import the Mongoose library
const mongoose = require("mongoose");

// Define a function to connect to the MongoDB database
const connectDb = async () => {
  try {
    // Connect to the MongoDB database using the MONGO_DB_URL environment variable
    const connect = await mongoose.connect(process.env.MONGO_DB_URL);

    // Log a success message if the connection is established
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    // Log any errors that occur during the connection process
    console.log(err);

    // If an error occurs, exit the process with a non-zero exit code
    process.exit(1);
  }
};

// Export the connectDb function to make it accessible from other modules
module.exports = connectDb;
