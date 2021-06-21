var express = require('express');
const mysql = require('mysql');
var router = express.Router();

const connectionPool = require('../database/connection-pool');
const BookRepository = require('../database/book-repository');

let repository = new BookRepository(connectionPool);

// read in db.js and print out values
// now in server/bin/www file
// const db = require('../config/db');
// console.log(db.user, db.password);

// get one record
router.get('/:id', function(req, res) {

  repository.get(req.params.id, (err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }
    else {
      //console.log('Result is',result);
      res.status(200).json(result);
    }
  });


});

// update record
router.put('/:id', function(req, res) {
  repository.update(req.params.id, req.body, (err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }
    else {
      console.log('Result is',result);
      res.sendStatus(200);
    }
  });

});


router.delete('/:id', function(req, res) {
  repository.delete(req.params.id, (err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }
    else {
      console.log('Result is',result);
      res.sendStatus(200);
    }
  });

});

/* GET all books. */
router.get('/', function(req, res) {

  repository.getAll((err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }
    else {
      console.log('Result is',result);
      res.status(200).json(result);
    }
  });
});


// insert record - save book
router.post('/', function(req, res) {
    console.log('Post Body',req.body);

    //const conn = mysql.createConnection(db);
    //conn.connect(err => {
    //  if (err) throw err;
    //  console.log('Connected');

    repository.save(req.body, (err, result) => {
      if(err) {
        res,status(500).json({'error': err.toString()});
      }
      else {
        console.log('Result is',result);
        res.sendStatus(200);
      }
    });

    });




module.exports = router;
