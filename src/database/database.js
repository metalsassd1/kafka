const util = require('util');
const mysql = require('mysql2');
const {DB_Database,DB_host,DB_pass,DB_user} = require('../configs/local');
//database  connection
const pool = mysql.createPool({
  connectionLimit: 5,
  host : DB_host,
  user : DB_user,
  password : DB_pass,
  database : DB_Database,
});
// Convert the "query" method to a promise-based method
pool.query = util.promisify(pool.query);

// Handle connection errors
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  } 
  if (connection) connection.release();
  return
});
//exports
module.exports = pool;
