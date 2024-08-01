
// const { Sequelize } = require('sequelize');
// const connection = require('./database/connection');
// const { QueryTypes, DataTypes } = require('sequelize');

// async function execute () {
//    const resultado = await connection.query("DESCRIBE produtos", {
//         type: QueryTypes.DESCRIBE
//     });

    
    
//     const result = await connection.query("SELECT * FROM produtos WHERE id = 1", {
//          type: Sequelize.SELECT
//     });
    
//     console.log(resultado, result);

// }

// async function createTable() {

//      // let user = connection.define("nome do model", "colunas da tabela", "Configurações extras");
     
// }
// let user = connection.define("User", {
//      firstname: DataTypes.STRING(50), //firstname VARCHAR(50)
//      surname: DataTypes.STRING(50), //surname VARCHAR(50)
//      email: DataTypes.STRING(255),//email VARCHAR(255)
//      password: DataTypes.STRING(255),//password VARCHAR(255)
     
// });


// let category = connection.define("Category", {
//      name: DataTypes.STRING(50),
// })

// // category.sync();
// // user.sync();
// // connection.sync({force: true});
// // connection.sync({alter: true});