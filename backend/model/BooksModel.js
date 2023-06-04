const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const booksTable = sequelize.define(
  "libros",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
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
    dcrip_lib: {
      type: DataTypes.STRING,
    },
    aut_lib: {
      type: DataTypes.STRING,
    },
    gen_lib: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    edic_ltda: {
      type: DataTypes.STRING,
    },
    id_p1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    id: false,
  }
);

module.exports = { booksTable };
