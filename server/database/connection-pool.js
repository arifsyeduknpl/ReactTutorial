'use strict';

const mysql = require('mysql');
const db = require('../config/db');

const connectionPool = {
// I think 10 is the default size of pool at max
    pool: null,

    init: function() {
        console.log('Initialising pool');
        this.pool = mysql.createPool(db);
    },

    getPool: function() {
        return this.pool;
    }
}

module.exports = connectionPool;