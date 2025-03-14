// models/taskModel.js will contain the code to connect to the database and execute queries.
// The query function will be used to execute SQL queries.
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

module.exports = { query, connection };