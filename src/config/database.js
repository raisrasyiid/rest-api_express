const mysql = require('mysql2'); 
require('dotenv').config()

const dbpool = mysql.createPool({
    host: process.env.DB_HOST,
    user: 'root',
    password: '',
    database: 'express_mysql',
});

module.exports = dbpool.promise();