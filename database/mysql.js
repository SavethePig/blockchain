"use strict";
module.exports = class MySql {

    constructor () {
        var mysql = require('mysql');

        this.connection = mysql.createConnection({
            host     : '5.157.83.37',
            user     : 'blockchain',
            password : 'blockchain',
            database : 'blockchain'
        });


    }

    doQuery (query, callback) {
        //this.connection.connect();
        this.connection.query(query, callback);
        //this.connection.end();
    }

};