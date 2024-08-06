const { response } = require('express');
const UserModel = require('../models/UserModels');

const UserController = {
    async create(req, res) {
        let messageReturn = ""
        const email = req.body.email
        const emailReq = await UserModel.findOne(({
            where: { email }
        }));

        if (!req.body.firstname || !req.body.surname || !req.body.email || !req.body.password) {
            return res.status(400).json({
                message: 'firstname, surname, email e password são obrigatorios!'
            });
        }
        else if (emailReq && emailReq.dataValues.id > 0) {
            return res.status(400).json({
                message: 'Este email ja esta cadastrado!'
            });
        }
        else {
            ProductModel.create(req.body);
            messageReturn = 'Usuario criado com sucesso!'
        }


        return res.json({
            message: messageReturn
        });
    },

    async list(req, res) {
        const User = await UserModel.findAll();
        res.json(User);
    },

    async update(req, res) {
        let id = req.params.id;
        UserModel.update(req.body, {
            where: { id } // id: id
        });

        return res.json({
            message: "Usuario atualizado com sucesso!"
        });
    },

    async delete(req, res) {
        let id = req.params.id;
        UserModel.destroy({
            where: { id }
        });

        return res.json({
            message: "Usuario deletado!"
        });
    }


}



module.exports = UserController;