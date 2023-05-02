require('dotenv').config('./.env');
require('dotenv').config('./.env');
var passport = require('passport');


exports.index = function (req, res, next) {
  res.render('index', { title: 'Red Bicicletas', user: "hola" });
};