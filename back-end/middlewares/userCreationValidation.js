const boom = require('@hapi/boom');

module.exports = (req, _res, next) => {
  const { name, email, password } = req.body;

  switch (true) {
    case !name:
      return next(boom.badRequest('Imforme um nome'));
    case name.length < 8:
      return next(boom
        .badRequest('O nome precisa ser maior que 8 caracteres'));
    case !email:
      return next(boom.badRequest('Imforme um email'));
    case !/[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i.test(email):
      return next(boom.badRequest('Email precisa ser válido'));
    case !password:
      return next(boom.badRequest('Imforme uma senha'));
    case !/[a-z0-9]{6,}/.test(password):
      return next(boom.badRequest('A senha precisa ser maior que 6 caracteres'));
    default:
      next();
  }
};
