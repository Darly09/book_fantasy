const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const booksTable = sequelize.define(
  "libros",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement:true
    },
    nom_lib: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.TEXT,
    },
    precio_lib: {
      type: DataTypes.INTEGER,
    },
    aut_lib: {
      type: DataTypes.STRING,
    },
    gen_lib: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
    id: false,
  }
);

module.exports = { booksTable };
