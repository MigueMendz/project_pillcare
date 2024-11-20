const mysql = require('mysql2/promise');
require('dotenv').config(); 


const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '211218',
  database: process.env.DB_NAME || 'pillcore_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


module.exports = pool;
