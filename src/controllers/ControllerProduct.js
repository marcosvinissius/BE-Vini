const ProductModel = require('../models/ProductModel');

const ControllerProduct = {
    create(requestProduct) {
        ProductModel.create(requestProduct.body);
    },

    async listProduct() {
        let Products = await ProductModel.findAll();
        console.log(Products);
    } 
}

module.exports = ControllerProduct;