const express = require("express");
const {
  fetchAllBooks,
  createBook,
  deleteBook,
} = require("./controller.js/bookControler");

const router = express.Router();
fetchAllBooks;
router.route("/").get(fetchAllBooks).post(createBook);
router.route("/:id").delete(deleteBook);

module.exports = router;
