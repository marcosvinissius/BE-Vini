const ProductModel = require('../models/ProductModel');

const ControllerProduct = {

    create(req, res) {
        ProductModel.create(req.body);
        res.json({
            message: "produto cadastrado com sucesso!"
        })
    },

    async listProduct (req, res) {

        let = messageEmail;

        if (req.body.email == ProductModel.findAll.email) {
            messageEmail = "Email ja cadastrado!"
        }
        else {

        }
        const products = await ProductModel.findAll();
        res.json(products);
    },

    async update (req, res) {
        let id = req.params.id;
        ProductModel.update(req.body, {
            where: { id }
        });
        
        return res.json({
            message: "Produto atualizado com sucesso!"
        });
    },

    async listing (req, res) {
        let listing = await ProductModel.findAll()
        res.json(listing);
    }
}

module.exports = ControllerProduct;