const { Router } = require('express');
const rescue = require('express-rescue');

const { loginController } = require('../controllers');

const login = Router();

login.post('/', rescue(loginController.userLogin));

login.post('/create', rescue(loginController.userCreation));

module.exports = login;
