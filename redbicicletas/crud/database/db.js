const sqlite3 = require('sqlite3').verbose();

function createTable() {
  const db = new sqlite3.Database('./database/bicicletas.db');
  db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS bicicletas (id INT, color TEXT, modelo TEXT, latitud REAL, longitud REAL)");
  });
  db.close();
}

module.exports.createTable = createTable;