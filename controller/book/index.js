const { addBookController } = require("./add");
const {
  getBooksController,
  getBookByIdController,
  getBooksByCriteriaController,
  getBookByByUserController,
} = require("./get");
const { softDeleteBookController, updateBookController } = require("./update");
const { deleteBookController } = require("./delete");

module.exports = {
  addBookController,
  getBooksController,
  getBookByIdController,
  getBooksByCriteriaController,
  getBookByByUserController,
  softDeleteBookController,
  updateBookController,
  deleteBookController,
};
