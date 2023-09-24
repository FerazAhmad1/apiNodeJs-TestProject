const express = require("express");
const { User } = require("./models/user");
const { Book } = require("./models/book");
const bookrouter = require("./routes/booksrouter");
const { sequelize } = require("./utils/database");
const app = express();

app.use(express.json());
app.use(async (req, res, next) => {
  console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
  const response = await User.create({ name: "Feraz" });
  req.user = response;
});
const port = 3500;

app.use("/api/v1/book", bookrouter);
Book.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Book);
(async function craeteTable() {
  await sequelize.sync();
})();
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
