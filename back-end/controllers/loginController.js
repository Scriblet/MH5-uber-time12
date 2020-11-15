const boom = require('@hapi/boom');

const { loginService } = require('../services');

const userCreation = async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log(name)

  const createdUser = await loginService.userCreation({ name, email, password });

  if (!createdUser) {
    return next(boom.conflict('Usuario existente'));
  }

  res.status(201).json(createdUser);
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const login = await loginService.loginUser(email);

  if (!login) {
    return next(boom.badRequest('Email invalido'));
  }

  if (password !== login.password) {
    return next(boom.badRequest('Senha invalida'))
  }

  res.status(200).json({ message: 'Success' })
};

module.exports = {
  userLogin,
  userCreation,
};
