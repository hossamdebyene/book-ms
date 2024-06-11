// Import required modules
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// Import route handlers
const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const bookVersionRoutes = require("./routes/bookVersion.routes");
const cartRoutes = require("./routes/cart.routes");
const orderRoutes = require("./routes/order.routes");

// Connect to the database
connectDb();

// Create Express app
const app = express();

// Set the port
const port = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes for various resources
app.use("/books", bookRoutes);
app.use("/bookVersions", bookVersionRoutes);
app.use("/order", orderRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
