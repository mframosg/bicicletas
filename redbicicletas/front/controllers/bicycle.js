require('dotenv').config('./.env');
//var passport = require('passport');
const http = require('http');
const request = require('request');


exports.create_get = function (req, res) {
  res.render("bicycles/create");
};

exports.create_post = function (req, res, next) {
  const options = {
    method: 'POST',
    url: "http://localhost:3000" + '/api/create',
    headers: { 'Content-Type': 'application/json' },
    body: { color: req.body.color, model: req.body.model, latitud: req.body.lat, longitud: req.body.lng, rented: false },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });

  res.redirect('/bicicletas')
};

exports.update_get = function (req, res, next) {
  const endpoint = "http://localhost:3000" + '/api/' + req.params.id + '/show'
      console.log(req.params.id);
      http.get(endpoint, (resp) => {
        let data = '';
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          bici = JSON.parse(data)
          console.log(bici);
          res.render('bicycles/update', bici)
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
};

exports.update_post = function (req, res, next) {
  console.log(req.body);
      const options = {
        method: 'PUT',
        url: "http://localhost:3000" + '/api/' + req.body.id + '/update',
        headers: { 'Content-Type': 'application/json' },
        body: { color: req.body.color, model: req.body.model, latitud: req.body.lat, longitud: req.body.lng, rented: false },
        json: true
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });

      res.redirect('/bicicletas')
};

exports.list = function (req, res, next) {
  const list_bicycle_endpoint = "http://localhost:3000" + '/api/list'
      const endpoint = list_bicycle_endpoint
      http.get(endpoint, (resp) => {
        let data = '';
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          bicycles = JSON.parse(data)
          res.render('bicycles/index', bicycles)
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
};

exports.show = function (req, res, next) {
  const endpoint = "http://localhost:3000" + '/api/' + req.params.id + '/show'
  console.log(req.params.id);
  http.get(endpoint, (resp) => {
    let data = '';
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      bici = JSON.parse(data)
      res.render('bicycles/show', bici)
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};

exports.delete = function (req, res, next) {
  const options = {
    method: 'DELETE',
    url: "http://localhost:3000" + '/api/' + req.body.id + '/delete'
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  res.redirect('/bicicletas')
};