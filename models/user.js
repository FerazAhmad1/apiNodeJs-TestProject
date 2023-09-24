const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");

exports.User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
