const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database');
});

let Bicicleta = function(id, color, modelo, latitud, longitud) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.latitud = latitud;
  this.longitud = longitud;
};

Bicicleta.prototype.toString = function() {
  return `id: ${this.id}| color: ${this.color}`;
};

// save a bicicleta
Bicicleta.prototype.save = function() {
  const db = new sqlite3.Database('./database/bicicletas.db');
  db.run(
    `INSERT INTO bicicletas (id, color, modelo, latitud, longitud) VALUES (?, ?, ?, ?, ?)`,
    [this.id, this.color, this.modelo, this.latitud, this.longitud],
    function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    } // callback
  );
};

Bicicleta.allBicis = function() {
  const db = new sqlite3.Database('./database/bicicletas.db');
  db.all(`SELECT * FROM bicicletas`, [], (err, rows) => {
    if (err) {
      throw err;
    }else{
      // return json object 
      console.log(rows);
      return rows;

    }
  });
};

// find a bicicleta by id


module.exports = Bicicleta;