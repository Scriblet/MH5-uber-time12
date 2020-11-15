const boom = require('@hapi/boom');

const { addressServices } = require('../services');

const createAddressList = async (req, res, next) => {
  const { address } = req.body;
  const { email } = req.userInfo;

  const createdList = await addressServices.createAddressList(address, email);

  if (!createdList) {
    return next(boom.notAcceptable('Algo deu errado'));
  }

  res.status(201).json(createdList);
};

const addNewAddress = async (req, res, next) => {
  const { address } = req.body;
  const { email } = req.userInfo;

  const newList = await addressServices.addNewAddress(address, email);

  if (!newList) {
    return next(boom.notAcceptable('Algo deu errado'));
  }

  res.status(201).json(newList);
};

const getListOfAddress = async (req, res, next) => {
  const { email } = req.userInfo;

  const list = await addressServices.getListOfAddress(email);

  if (!list) {
    return next(boom.notFound('Lista de endereços não encontrado'));
  }

  res.status(200).json(list);
};

module.exports = {
  createAddressList,
  getListOfAddress,
  addNewAddress,
};
