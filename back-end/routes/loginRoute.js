const { Router } = require('express');
const rescue = require('express-rescue');

const { loginController } = require('../controllers');
const { userCreationValidation } = require('../middlewares');

const login = Router();

login.post('/', rescue(loginController.userLogin));

login.post('/create', userCreationValidation, rescue(loginController.userCreation));

module.exports = login;
