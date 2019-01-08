"use strict";
const palabraController = require("../controllers/palabraController");
const tokenController = require("../controllers/tokenController");

module.exports = [
  {
    method: "GET",
    path: "/palabras",
    config: {
      handler: palabraController.getArray
    }
  },
  {
    method: "POST",
    path: "/palabra",
    config: {
      handler: palabraController.postArray
    }
  },
  {
    method: "GET",
    path: "/palabra/{id}",
    config: {
      handler: palabraController.getById
    }
  },
  {
    method: "GET",
    path: "/claves/{palabra}",
    config: {
      handler: palabraController.getClaves
    }
  },
  {
    method: "POST",
    path: "/createToken",
    config: {
      handler: tokenController.crearToken
    }
  },
  {
    method: "GET",
    path: "/validateToken",
    config: {
      handler: tokenController.validarToken
    }
  }
];
