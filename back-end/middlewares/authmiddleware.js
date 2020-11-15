const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');

const JWT_SECRET = '1q2w3e4r';

module.exports = (required = true) => async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!required) return next();

  if (required && !token) return next(boom.unauthorized('Token não encontrado'));

  try {
    const { email } = jwt.verify(token, JWT_SECRET);

    req.userInfo = { email };
    next();
  } catch (err) {
    console.log(err);
    return next(boom.unauthorized('Token expirado ou inválido'));
  }
};
