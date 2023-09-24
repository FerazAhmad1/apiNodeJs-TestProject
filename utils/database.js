const { Sequelize } = require("sequelize");
const mysql = require("mysql2");
exports.sequelize = new Sequelize("nodejs-test", "root", "F@khan1995", {
  dialect: "mysql",
  host: "localhost",
});
