const { Sequelize } = require ('sequelize');

const connection = new Sequelize({
    dialect: "mysql",
    database: "Loja",
    host: "localhost",
    port: 3366,
    username: "root",
    password: "1234"
});

module.exports = connection;