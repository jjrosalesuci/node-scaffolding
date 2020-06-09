const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port:  8889,
    password: 'root',
    database: 'senpai'
});

connection.connect();

module.exports = connection;
