var mysql = require('mysql');
var config = require('../db/db_info').local;

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection(config);
    },

    test_open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.info('mysql is connected successfully.');
        }
      })
    }
  }
};