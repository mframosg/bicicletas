const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/bicicletas.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database');
});

let Bicicleta = function(id, color, modelo, latitud, longitud, alquilada) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.latitud = latitud;
  this.longitud = longitud;
  this.alquilada = alquilada;
};

Bicicleta.prototype.toString = function() {
  return `id: ${this.id}| color: ${this.color}`;
};

// save a bicicleta
Bicicleta.prototype.save = function() {
  db.run(
    `INSERT INTO bicicletas (id, color, modelo, latitud, longitud, alquilada) VALUES (?, ?, ?, ?, ?, ?)`,
    [this.id, this.color, this.modelo, this.latitud, this.longitud, this.alquilada],
    function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    } // callback
  );
};

// get all bicicletas
Bicicleta.allBicis = function(callback) {
  db.all(`SELECT * FROM bicicletas`, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    return callback(null, rows);
  });
};

// find a bicicleta by id
Bicicleta.findById = function(id, callback) {
  db.get(`SELECT * FROM bicicletas WHERE id = ?`, [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    return callback(null, row);
  });
};

// update a bicicleta by id
Bicicleta.updateById = function(id, newBici, callback) {
  db.run(
    `UPDATE bicicletas SET color = ?, modelo = ?, latitud = ?, longitud = ?, alquilada = ? WHERE id = ?`,
    [newBici.color, newBici.modelo, newBici.latitud, newBici.longitud, newBici.alquilada, id],
    function(err) {
      if (err) {
        return callback(err);
      }
      console.log(`Row(s) updated: ${this.changes}`);
      return callback(null, this.changes);
    }
  );
};

Bicicleta.alquilarById = function(id, newBici, callback) {
  db.run(
    `UPDATE bicicletas SET alquilada = ? WHERE id = ?`,
    [newBici.alquilada, id],
    function(err) {
      if (err) {
        return callback(err);
      }
      console.log(`Row(s) updated: ${this.changes}`);
      return callback(null, this.changes);
    }
  );
};

// delete a bicicleta by id
Bicicleta.removeById = function(id, callback) {
  db.run(`DELETE FROM bicicletas WHERE id = ?`, [id], function(err) {
    if (err) {
      return callback(err);
    }
    console.log(`Row(s) deleted: ${this.changes}`);
    return callback(null, this.changes);
  });
};

module.exports = Bicicleta;
