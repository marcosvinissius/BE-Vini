const connection = require('./connection');

require('../models/CategoryProduct');
require('../models/UserModels');
require('../models/ProductModel');

    connection.sync({force: true});