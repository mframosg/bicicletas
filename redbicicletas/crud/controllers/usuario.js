const Usuario = require("../models/usuario");

let lastId = 0;

function getLastId() {
  return lastId;
}

function incrementLastId() {
  lastId++;
}

exports.create = function (req, res) {
  const id = getLastId() + 1; // Generar un ID incremental
  incrementLastId(); // Incrementar la variable lastId
  const usuario = new Usuario(id, req.body.name, req.body.email);
  try {
    usuario.save();
    res.status(200).json('Usuario creado exitosamente!');
  } catch (error) {
    res.status(500).send('Error interno del servidor!');
    console.log(error);
  }
};

exports.list = function (req, res) {
  Usuario.allUsuarios((err, usuarios) => {
    if (err) {
      res.status(500).send('Error interno del servidor!');
      console.log(err);
    } else {
      res.status(200).json(usuarios);
    }
  });
};

exports.show = function (req, res) {
  Usuario.findById(req.params.id, (err, usuario) => {
    if (err) {
      res.status(500).send('Error interno del servidor!');
      console.log(err);
    } else {
      res.status(200).json(usuario);
    }
  });
};
