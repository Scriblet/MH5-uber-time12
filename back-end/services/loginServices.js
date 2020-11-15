const { loginModel } = require('../models');

const userCreation = async ({ name, email, password }) => {
  const userExistence = await loginModel.userLogin(email);

  if (userExistence) return;

  const createdUser = await loginModel.createUser({ name, email, password });

  return createdUser;
};

const loginUser = async (email) => {
  const exitentUser = await loginModel.userLogin(email);

  if (!exitentUser) return;

  return exitentUser;
};

module.exports = {
  userCreation,
  loginUser,
};
