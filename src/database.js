const mysql = require("mysql");
const { promisify } = require("util");
const { database } = require("./keys");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("La conexion con la base de datos se cerro");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Hay demasiadas conexiones");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("La conexion fue rechazada");
    }
  }

  if (connection) connection.release();
  console.log("Conectado a la base de datos");
  return;
});

//convirtiendo a promesas los callbacks de la base
pool.query = promisify(pool.query);

module.exports = pool;
