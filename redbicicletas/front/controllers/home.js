require('dotenv').config('./.env');
require('dotenv').config('./.env');
var passport = require('passport');
const bicicletaController = require("../controllers/bicycle");


exports.index = function (req, res, next) {
  res.render('index', { title: 'Red Bicicletas', user: "hola", bicis: bicicletaController.list });
};