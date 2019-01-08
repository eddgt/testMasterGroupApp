//const jwt = require('jwt-simple');
const moment = require("moment");
const jwt = require("jsonwebtoken");
const secret = "123456";
const objToken = {};

module.exports.crearToken = (request, reply) => {
  let payload = request.payload;
  payload.iat = moment().unix();
  payload.exp = moment()
    .add(1200, "s") //expira token en segundos
    .unix();

  jwt.sign(payload, secret, {}, (err, token) => {
    if (err) {
      return reply({ error: "No se pudo generar token" });
    }
    return reply({ token });
  });
};

module.exports.validarToken = (request, reply) => {
  let payload = jwt.verify(
    request.headers.token,
    secret,
    {},
    (err, payload) => {
      if (err) {
        return reply({ error: err });
      }

      return reply({ payload });
    }
  );
};

module.exports.validarTokenMidd = (request, reply) => {
  if (!req.headers.token) {
    return reply({ error: "Master Group - Se requiere token" });
  }
  let payload = jwt.verify(
    request.headers.token,
    secret,
    {},
    (err, payload) => {
      if (err) {
        return reply({ error: err });
      }

      return next();
    }
  );
};
