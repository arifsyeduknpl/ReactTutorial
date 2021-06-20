var express = require('express');
const mysql = require('mysql');
const fs = require('fs');
var router = express.Router();

// read in db.js and print out values
const db = require('../config/db');
console.log(db.user, db.password);

/* GET users listing. */
router.get('/', function(req, res, next) {

  const conn = mysql.createConnection(db);
  conn.connect(err => {
    if (err) throw err;
    console.log('Connected');
  });
  res.send('books for sale');

  
});

module.exports = router;
