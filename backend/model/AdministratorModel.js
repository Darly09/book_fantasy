const {DataTypes} = require("sequelize");
const {sequelize} = require("../config");

const administratorTable = sequelize.define(
    "administrador",
    {
        id_admin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nom_admin: {
            type: DataTypes.STRING,
        },
        email_admin: {
            type: DataTypes.STRING,
        },
        pass_admin: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: false,
        id: false,
    }
);

module.exports = {administratorTable};
