var mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'photo-diary',
    port: 3306
});
