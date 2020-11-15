const jwt = require('jsonwebtoken');

const { loginModel } = require('../models');

const SECRET = '1q2w3e4r';

const JWTCONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const userCreation = async ({ name, email, password }) => {
  const userExistence = await loginModel.userLogin(email);

  if (userExistence) return;

  const createdUser = await loginModel.createUser({ name, email, password });

  return createdUser;
};

const loginUser = async (email) => {
  const existentUser = await loginModel.userLogin(email);

  if (!existentUser) return;

  const { password, ...userData } = existentUser;

  const token = jwt.sign(userData, SECRET, JWTCONFIG)

  return { existentUser, token };
};

module.exports = {
  userCreation,
  loginUser,
};
