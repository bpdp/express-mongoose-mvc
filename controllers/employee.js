/*
 * GET employees listing.
 */

var Employee = require('../models/db.js');

exports.list = function(req, res){
  Employee.find(function(err, employees) {
    res.send(employees);
  });
};
