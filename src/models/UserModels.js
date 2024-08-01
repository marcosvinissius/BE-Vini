const connection = require('../database/connection')
const {DataTypes} = require("sequelize")

let UserModel = connection.define("User", {
    firstname: {
        type: DataTypes.STRING(50), //VARCHAR(50)
        allowNull: false //NOT NULL
    }, //firstname VARCHAR(50)
    surname: {
        type: DataTypes.STRING(50), //VARCHAR(50)
        allowNull: false //NOT NULL
    }, //surname VARCHAR(50)
    email: {
        type: DataTypes.STRING(225), //VARCHAR(50)
        allowNull: false //NOT NULL
    }, //email VARCHAR(225)
    password: {
        type: DataTypes.STRING(225), //VARCHAR(50)
        allowNull: false //NOT NULL
    }, //password VARCHAR(225)
    
});

module.exports = UserModel;