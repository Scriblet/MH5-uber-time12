const { Router } = require('express');
const rescue = require('express-rescue');

const { addressController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const address = Router();

address.get('/', authMiddleware(true), rescue(addressController.getListOfAddress));

address.put('/', authMiddleware(true), rescue(addressController.addNewAddress));

address.post('/', authMiddleware(true), rescue(addressController.createAddressList));

module.exports = address;
