const connect = require('./connection');

const createUser = async ({ name, email, password }) => connect()
  .then((db) => db
    .collection('users')
    .insertOne({ name, email, password }))
  .then(({ insertedId }) => ({
    name,
    email,
    password,
    insertedId,
  }));

const userLogin = async (email) => connect()
  .then((db) => db
    .collection('users')
    .findOne({ email }));

module.exports = {
  userLogin,
  createUser,
};
