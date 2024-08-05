const { response } = require('express');
const UserModel = require('../models/UserModels');

const UserController = {
    create(req, res) {
        UserModel.create(req.body);
        return res.json ({
            message: "Usuario criado com sucesso!"
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