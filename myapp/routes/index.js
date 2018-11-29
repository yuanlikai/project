var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1091372693',
    database: 'world'
});

connection.connect()

/* GET home page. */
router.get('/index', function (req, res, next) {
        connection.query('select * from city', function (err, rows, fields) {
            res.json(rows);
        })
    }
);

module.exports = router;
