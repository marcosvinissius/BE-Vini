const ProductModel = require('../models/ProductModel');

const ControllerProduct = {

    create(req, res) {

        let messageReturn = ""

        if (req.body.name || req.body.price || !req.body.user_id) {
            messageReturn = 'firstname, surname, email e password são obrigatorios!'
        }

        else {
            ProductModel.create(req.body);
            messageReturn = 'Usuario criado com sucesso!'
        }

        return res.json({
            message: messageReturn
        });
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
    }
}

module.exports = ControllerProduct;