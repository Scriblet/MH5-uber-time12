const boom = require('@hapi/boom');

const { loginService } = require('../services');

const userCreation = async (req, res, next) => {
  const { name, email, password } = req.body;

  const createdUser = await loginService.userCreation({ name, email, password });

  if (!createdUser) {
    return next(boom.conflict('Usuario existente'));
  }

  res.status(201).json(createdUser);
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const { existentUser, token } = await loginService.loginUser(email);

  if (!existentUser.email) {
    return next(boom.badRequest('Email invalido'));
  }

  if (password !== existentUser.password) {
    return next(boom.badRequest('Senha invalida'))
  }

  res.status(200).json({ token });
};

module.exports = {
  userLogin,
  userCreation,
};
