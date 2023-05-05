const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/bicicletas.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database');
});

let Usuario = function(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
};

Usuario.prototype.toString = function() {
  return `id: ${this.id}| name: ${this.name}`;
};

Usuario.prototype.save = function() {
  db.run(
    `INSERT INTO usuarios (id, name, email) VALUES (?, ?, ?)`,
    [this.id, this.name, this.email],
    function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    } // callback
  );
};

Usuario.allUsuarios = function(callback) {
  db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    return callback(null, rows);
  });
};

Usuario.findById = function(id, callback) {
  db.get(`SELECT * FROM usuarios WHERE id = ?`, [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    return callback(null, row);
  });
};

Usuario.updateById = function(id, newUser, callback) {
  db.run(
    `UPDATE usuarios SET name = ?, email = ? WHERE id = ?`,
    [newUser.name, newUser.email, id],
    function(err) {
      if (err) {
        return callback(err);
      }
      console.log(`Row(s) updated: ${this.changes}`);
      return callback(null, this.changes);
    }
  );
};

Usuario.removeById = function(id, callback) {
  db.run(`DELETE FROM usuarios WHERE id = ?`, [id], function(err) {
    if (err) {
      return callback(err);
    }
    console.log(`Row(s) deleted ${this.changes}`);
    return callback(null, this.changes);
  });
};

module.exports = Usuario;
