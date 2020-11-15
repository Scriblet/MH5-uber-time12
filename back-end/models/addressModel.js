const connect = require('./connection');

const createAddress = async (address, email) => connect()
  .then((db) => db
    .collection('usersAddressList')
    .insertOne({ email, address }))
  .then(({ insertedId }) => ({
    _id: insertedId,
    email,
    address,
  }));

const addNewAddress = async (address, email) => connect()
  .then((db) => db
    .collection('usersAddressList')
    .updateOne({ email }, { $push: { 'address': address } }))
  .then(() => ({
    email,
    address,
  }));

const getListOfAddress = async (email) => connect()
  .then((db) => db
    .collection('usersAddressList')
    .findOne({ email }));

module.exports = {
  createAddress,
  getListOfAddress,
  addNewAddress,
};
