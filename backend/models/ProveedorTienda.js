const {DataTypes} = require("sequelize");

module.exports = {
    idP: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nomP: {
        type: DataTypes.STRING,
    },
    dirP: {
        type: DataTypes.STRING,
    },
    telP: {
        type: DataTypes.STRING,
    },
    emailP: {
        type: DataTypes.STRING,
    },
    ciudP: {
        type: DataTypes.STRING,
    }
};