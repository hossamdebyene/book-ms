// Import required modules
const asyncHandler = require("express-async-handler");
const BookVersion = require("../../models/bookVersion.model");

// Define service functions for interacting with book versions

// Service function to get a book version by its ID
const getBookVersionByIdService = asyncHandler(async (id) => {
  try {
    // // Get data from Redis cache
    // client.get(`${id}`, (err, data) => {
    //   if (err) {
    // const bookVersion = await BookVersion.findById(id)
    //   .populate("bookId")
    //   .then((bookVersion) => {
    //     if (bookVersion) {
    //       return bookVersion;
    //     } else {
    //       throw error;
    //     }
    //   });
    // client.set(`${id}`, JSON.stringify(bookVersion), (err, reply) => {
    //   if (err) {
    //     console.error("Error setting data in Redis cache:", err);
    //     return;
    //   }
    //   console.log("Data set in Redis cache:", reply);
    // });
    // return bookVersion
    //   }
    //   if (data) {
    //     console.log("Data retrieved from Redis cache:", JSON.parse(data));
    //   }
    // });
    // Find a book version by its ID and populate the associated book data
    const bookVersion = await BookVersion.findById(id)
      .populate("bookId")
      .then((bookLog) => {
        if (bookLog) {
          return bookLog;
        } else {
          throw new Error("Book version not found");
        }
      });
    return bookVersion;
  } catch (error) {
    console.error("Error getting book version by ID:", error);
    throw error;
  }
});

// Service function to get book versions by criteria
const getBookVersionsByCriteriaService = asyncHandler(async (body) => {
  try {
    // Find book versions that match the provided criteria and populate the associated book data
    const bookVersions = await BookVersion.find(body).populate("bookId");
    return bookVersions;
  } catch (error) {
    console.error("Error getting book versions by criteria:", error);
    throw error;
  }
});

// Service function to get all book versions
const getBookVersionsService = asyncHandler(async () => {
  try {
    // Find all book versions and populate the associated book data
    const bookVersions = await BookVersion.find().populate("bookId");
    return bookVersions;
  } catch (error) {
    console.error("Error getting all book versions:", error);
    throw error;
  }
});

// Service function to get book versions by book ID
const getBookVersionsByBookService = asyncHandler(async (bookId) => {
  try {
    // Find book versions associated with the specified book ID and populate the associated book data
    const bookVersions = await BookVersion.find({ bookId }).populate("bookId");
    return bookVersions;
  } catch (error) {
    console.error("Error getting book versions by book ID:", error);
    throw error;
  }
});

// Service function to get book versions by version number
const getBookVersionsByVersionService = asyncHandler(async (version) => {
  try {
    // Find book versions with the specified version number and populate the associated book data
    const bookVersions = await BookVersion.find({ __v: version }).populate(
      "bookId"
    );
    return bookVersions;
  } catch (error) {
    console.error("Error getting book versions by version number:", error);
    throw error;
  }
});

// Export service functions
module.exports = {
  getBookVersionsByBookService,
  getBookVersionsService,
  getBookVersionByIdService,
  getBookVersionsByCriteriaService,
  getBookVersionsByVersionService,
};
