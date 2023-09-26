const { Book } = require("../../models/book");

exports.fetchAllBooks = async (req, res, next) => {
  const allBooks = (await Book.findAll()).map((book) => book.dataValues);
  console.log(allBooks);
  res.status(200).json({
    status: "success",
    data: allBooks,
  });
  return;
};
exports.createBook = async (req, res, next) => {
  console.log("1 am also running");
  const bookCreated = await Book.create({ title: req.body.title });
  const data = [bookCreated.dataValues];
  res.status(201).json({
    status: "success",
    data,
  });
  return;
};
exports.deleteBook = async (req, res, next) => {
  const id = req.params.id;
  const deletedBook = await Book.destroy({ where: { id } });
  res.status(204).json({
    status: "success",
  });
};
