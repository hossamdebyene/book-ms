const { addBookService } = require("./add");
const { deleteBookByIdService } = require("./delete");
const {
  getBookByCriteriaService,
  getBookByIdService,
  getBooksByIdsService,
  getBooksService,
  getBooksByUserIdService,
  getUnavailableBooksByIdsService,
} = require("./get");
const { updateBookService, softDeleteService } = require("./update");

module.exports = {
  addBookService,
  deleteBookByIdService,
  getBookByCriteriaService,
  getBookByIdService,
  getBooksByIdsService,
  getBooksService,
  getBooksByUserIdService,
  getUnavailableBooksByIdsService,
  updateBookService,
  softDeleteService,
};
