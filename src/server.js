const express = require('express');
const app = express();

app.use(express.json());

const UserController = require('../src/controllers/UserController');

const ControllerProduct = require('./controllers/ControllerProduct');


const ProductModel = require('./models/ProductModel');


app.get('/products', ControllerProduct.listProduct);
app.get('/users', UserController.list);
app.post('/users/:id', UserController.create);
app.post('/products', ControllerProduct.create);
app.put('/users/:id', UserController.update);
app.delete('/users/:id', UserController.delete);
app.put('./products/:id', ControllerProduct.update);
app.post('/listing', ControllerProduct.listing);

app.listen(3000);































// // const UserModel = require('./models/UserModels');

// const UserController = require("./controllers/ControllerProduct");

// // const UserController = require("./controllers/UserController");

// // UserModel.create({
// //     firstname: "jeff",
// //     surname: "Rabo de Burro",
// //     password: "Null",
// //     email: "Null"
// // });

// // const request = {
// //     body: {
// //         firstname: "jeff",
// //         surname: "Rabo de Burro",
// //         email: "Rabodoplanalto@gmail.com",
// //         password: "1234"
// //     }
// // };

// // UserController.create(request);
// // UserController.list();

// const requestProduct = {
//     body: {
//         name: "Snikers",
//         description: "Chocolate gostoso",
//         price: 3.5,
//         enabled: 1,
//         stock: 4000
//     }
// }

// UserController.create(requestProduct);
// UserController.listProduct();