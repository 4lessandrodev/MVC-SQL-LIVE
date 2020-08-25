const path = require('path');
require('dotenv').config({ path: path.join(__dirname,'.env') });

const mysql = require('mysql2');

const conect = mysql.createPool({
  host: process.env.DB_HOST || 'mysql.alessandrodev.com',
  user: process.env.DB_USER || 'alessandrodev06',
  database: process.env.DB_NAME || 'alessandrodev06',
  password: process.env.DB_PASS || 'live7845unopar',
  waitForConnections: true,
  connectionLimit: 10,
  multipleStatements: true,
  queueLimit: 0
});

module.exports = conect;