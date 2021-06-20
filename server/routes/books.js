var express = require('express');
var router = express.Router();

// read in db.js and print out values
const db = require('../config/db');
console.log(db.user, db.password);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('books');
});

module.exports = router;
