const { addressModel } = require('../models');

const createAddressList = async (address, email) => {
  const addressList = await addressModel.createAddress([{ addressId: 1, ...address}], email);

  return addressList;
};

const addNewAddress = async (address, email) => {
  const { address: userAddress } = await addressModel.getListOfAddress(email);
  
  const addressId = userAddress.length + 1;

  console.log(addressId)

  const newList = await addressModel.addNewAddress({addressId, ...address}, email);

  console.log(newList)

  return newList;
};

const getListOfAddress = async (email) => {
  const list = await addressModel.getListOfAddress(email);

  console.log(list)

  return list;
};

module.exports = {
  createAddressList,
  getListOfAddress,
  addNewAddress,
};
