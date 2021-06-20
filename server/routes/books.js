var express = require('express');
const mysql = require('mysql');
var router = express.Router();

const connectionPool = require('../database/connection-pool')

// read in db.js and print out values
// now in server/bin/www file
// const db = require('../config/db');
// console.log(db.user, db.password);

/* GET users listing. */
router.get('/', function(req, res, next) {

  //const conn = mysql.createConnection(db);
  //conn.connect(err => {
  //  if (err) throw err;
  //  console.log('Connected');

    const book = {
      author: 'Arif Syed',
      title: 'bikes2',
      published: '2021-08-19'
    }

    connectionPool.getPool().query('insert into books set ?', book, (err, result) => {
      if(err) throw err;
      console.log('1 record inserted');
    });

    res.send('books for sale');
});

module.exports = router;
