const express = require("express");
const { fetchAllBooks } = require("./controller.js/bookControler");

const router = express.Router();
fetchAllBooks;
router.route("/").get(fetchAllBooks).post(createBook);

module.exports = router;
