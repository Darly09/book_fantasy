
const {DataTypes} = require("sequelize");
const {sequelize} = require('../config');

const tablaproveedor = sequelize.define('proveedor', {
    id_p: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nom_p: {
      type: DataTypes.STRING,
    },
    dir_p: {
      type: DataTypes.STRING,
    },
    tel_p: {
        type: DataTypes.STRING,
        },
    email_p: {
        type: DataTypes.STRING,
        },
    ciud_p: {
        type: DataTypes.STRING,
    },
  });

  module.exports = {tablaproveedor};