const UserModel = require('../models/UserModels');

const UserController = {
    create(request) {
        UserModel.create(request.body);
    },

    async list() {
        let Users = await UserModel.findAll();
        console.log(Users);
    },


}



module.exports = UserController;