const { Book } = require("../../models/book");

exports.fetchAllBooks = async (req, res, next) => {
  const allBooks = await Book.findAll();
  res.send(200).json({
    status: "success",
    data: allBooks,
  });
};
exports.createBook = async (req, res, next) => {
  const bookCreated = await Book.create({ title: req.body.title });
  console.log(bookCreated);
  res.status(201).json({
    status: "success",
    data: "",
  });
  return;
};
