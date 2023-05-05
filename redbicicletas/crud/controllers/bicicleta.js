const Bicicleta = require("../models/bicicleta");

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
    const bicicleta = new Bicicleta(id, req.body.color, req.body.modelo, req.body.latitud, req.body.longitud, null);
      try {
          bicicleta.save();
          res.status(200).json('Bicicleta created Successfully!');
      } catch (error) {
          res.status(500).send('Internal Server Error!');
          console.log(error);
      }
  };

exports.list = function (req, res) {
    Bicicleta.allBicis((err, bicicletas) => {
      if (err) {
        res.status(500).send('Internal Server Error!');
        console.log(err);
      } else {
        res.status(200).json(bicicletas);
      }
    });
};

exports.show = function (req, res) {
    Bicicleta.findById(req.params.id, (err, bicicleta) => {
      if (err) {
        res.status(500).send('Internal Server Error!');
        console.log(err);
      } else {
        if (bicicleta) {
          console.log(bicicleta);
          res.status(200).json(bicicleta);
        } else {
          res.status(404).send('Bicicleta Not found!');
        }
      }
    });
};

exports.update = function (req, res) {
    Bicicleta.updateById(req.params.id, req.body, (err, bicicleta) => {
      if (err) {
        res.status(500).send('Internal Server Error!');
        console.log(err);
      } else {
        if (bicicleta) {
          console.log(bicicleta);
          res.status(200).json('Bicicleta updated Successfully!');
        } else {
          res.status(404).send('Bicicleta Not found!');
        }
      }
    });
};

exports.delete = function (req, res) {
    Bicicleta.removeById(req.params.id, (err, bicicleta) => {
      if (err) {
        res.status(500).send('Internal Server Error!');
        console.log(err);
      } else {
        if (bicicleta) {
          console.log(bicicleta);
          res.status(200).json('Bicicleta deleted Successfully!');
        } else {
          res.status(404).send('Bicicleta Not found!');
        }
      }
    });
};


exports.alquilar = function (req, res) {
  Bicicleta.alquilarById(req.params.id, req.body, (err, bicicleta) => {
    if (err) {
      res.status(500).send('Internal Server Error!');
      console.log(err);
    } else {
      if (bicicleta) {
        console.log(bicicleta);
        res.status(200).json('Bicicleta alquilada Successfully!');
      } else {
        res.status(404).send('Bicicleta Not found!');
      }
    }
  });
};