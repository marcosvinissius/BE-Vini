// const UserModel = require('./models/UserModels');

const UserController = require("./controllers/ControllerProduct");

// const UserController = require("./controllers/UserController");

// UserModel.create({
//     firstname: "jeff",
//     surname: "Rabo de Burro",
//     password: "Null",
//     email: "Null"
// });

// const request = {
//     body: {
//         firstname: "jeff",
//         surname: "Rabo de Burro",
//         email: "Rabodoplanalto@gmail.com",
//         password: "1234"
//     }
// };

// UserController.create(request);
// UserController.list();

const requestProduct = {
    body: {
        name: "Snikers",
        description: "Chocolate gostoso",
        price: 3.5,
        enabled: 1,
        stock: 4000
    }
}

UserController.create(requestProduct);
UserController.listProduct();