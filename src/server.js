const express = require('express');
const app = express();

app.use(express.json())

const ProductModel = require('./models/ProductModel');
const UserModel = require('./models/UserModels');

app.get('/products', async (req, res) => {
    const products = await ProductModel.findAll();
    res.json(products);
});

app.get('/users', async (req, res) => {
    const User = await UserModel.findAll();
    res.json(User);
});

app.post('/users/:id', (req, res) => {
    UserModel.create(req.body);
    return res.json ({
        message: "Usuario criado com sucesso!"
    })
});

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