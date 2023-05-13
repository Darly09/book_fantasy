
const { Sequelize} = require("sequelize");


//Trabajando con una base de datos feid
const sequelize = new Sequelize("empresax", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {sequelize}
