"use strict";

const Hapi = require("hapi");
const server = new Hapi.Server();
const db = require("./database").db;
const jwt = require("jsonwebtoken");
const secret = "123456";
const objToken = {};
const plugins = [
  {
    register: require("inert")
  }
];

server.connection({
  port: 3000
});

server.ext("onRequest", (request, reply) => {
  if (request.url.path == "/createToken") {
    return reply.continue();
  } else {
    if (!request.headers.token) {
      return reply({ error: "Se requiere token" });
    }
    let payload = jwt.verify(
      request.headers.token,
      secret,
      {},
      (err, payload) => {
        if (err) {
          return reply({ error: err });
        }
        return reply.continue();
      }
    );
  }
});

server.ext("onRequest", (request, reply) => {
  if (request.url.path == "/createToken") {
    return reply.continue();
  } else {
    if (!request.headers.token) {
      return reply({ error: "Mater Group - Se requiere token" });
    }
    let payload = jwt.verify(
      request.headers.token,
      secret,
      {},
      (err, payload) => {
        if (err) {
          return reply({ error: err });
        }
        return reply.continue();
      }
    );
  }
});

//server.route(rutas);
server.register([require("./routes/index")]);

//plugins
server.register(plugins, err => {
  if (err) {
    return console.log(err);
  }

  server.start(err => {
    if (err) {
      return console.log(err);
    }
    console.log(`Servidor iniciado en: ${server.info.uri}`);
  });
});
