const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const tablaadministrador = sequelize.define(
  "administrador",
  {
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nom_admin: {
      type: DataTypes.STRING,
    },
    email_admin: {
      type: DataTypes.STRING,
    },
    pass_admin: {
      type: DataTypes.STRING,
    },
    id_p2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    id: false,
  }
);

module.exports = { tablaadministrador };
