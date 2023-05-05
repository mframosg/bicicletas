let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');



let bicicletasRouter = require('./routes/bicicleta')
let usuariosRouter = require('./routes/usuario')

//print routes
console.log(bicicletasRouter.stack.map(r => r.route.path));
console.log(usuariosRouter.stack.map(r => r.route.path));

const table = require('./database/db.js');

let app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use routes
app.use('/', bicicletasRouter, usuariosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


table.createTable();

module.exports = app;
