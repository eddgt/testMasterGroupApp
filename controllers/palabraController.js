"use strict";
const Palabra = require("../models/PalabraModel");

module.exports.getArray = (request, reply) => {
  Palabra.find((err, palabra) => {
    reply(palabra);
  });
};

module.exports.postArray = (request, reply) => {
  let newPalabra = new Palabra({
    palabra: request.payload.palabra,
    claves: request.payload.claves
  });

  newPalabra
    .save()
    .then(result => reply(result))
    .catch(err => reply({ error: err }));
};

module.exports.getById = (request, reply) => {
  Palabra.findById(request.params.id)
    .then(result => reply(result))
    .catch(err => reply({ error: err }));
};

module.exports.getClaves = (request, reply) => {
  Palabra.find(1, { $text: { $search: request.params.palabra } })
    .then(result => reply(result))
    .catch(err => reply({ error: err }));
};
