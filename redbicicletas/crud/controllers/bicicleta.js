const Bicicleta = require("../models/bicicleta");

exports.create = function (req, res) {
  const bicicleta = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.latitud, req.body.longitud);
    try {
        bicicleta.save();
        res.status(200).json('Bicicleta created Successfully!');
    } catch (error) {
        res.status(500).send('Internal Server Error!');
        console.log(error);
    }
};

exports.list = function (req, res) {
  try{
        let bicicleta = Bicicleta.allBicis();
        console.log("print 2");
        console.log(bicicleta);
        res.status(200).json();
  } catch (error) {
        res.status(500).send('Internal Server Error!');
        console.log(error);
    }
};

exports.show = function (req, res) {
  Bicicleta.findById(req.params.id).then((Bicicleta) => {
      console.log(Bicicleta)
      if (Bicicleta != null) {
          res.status(200).json(Bicicleta)
      } else {
          res.status(404).send('Bicicleta Not found!');
      }
  }).catch((err) => {
      res.status(500).send('Internal Server Error!');
      console.log(err);
  });
};

exports.update = function (req, res) {
  Bicicleta.updateById(req.params.id, req.body).then((Bicicleta) => {
      if (Bicicleta) {
          res.status(200).json('Bicicleta updated Successfully!')
      } else {
          res.status(404).send('Bicicleta Not found!');
      }
  }).catch((err) => {
      res.status(500).send('Internal Server Error!');
      console.log(err);
  });
};

exports.delete = function (req, res) {
  Bicicleta.removeById(req.params.id).then((Bicicleta) => {
      if (Bicicleta) {
          res.status(200).json('Bicicleta deleted Successfully!')
      } else {
          res.status(404).send('Bicicleta Not found!');
      }
  }).catch((err) => {
      res.status(500).send('Internal Server Error!');
      console.log(err);
  });
};
