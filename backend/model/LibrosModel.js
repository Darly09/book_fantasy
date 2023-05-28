const { sequelize } = require("../config");
const { DataTypes } = require("sequelize");

const tablalibros = sequelize.define(
  "libros",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
      allowNull: false,
    },
  },
  {
    timestamps: false,
    id: false,
  }
);

module.exports = { tablalibros };
