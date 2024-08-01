const connection = require('../database/connection');
const {DataTypes} = require("sequelize");

let Category = connection.define("Category", {
    name: DataTypes.STRING(50),
});

module.exports = Category