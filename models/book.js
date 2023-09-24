const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");
exports.Book = sequelize.define("book", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
});
