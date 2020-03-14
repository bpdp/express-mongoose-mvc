/*
 * GET employees listing.
 */

var Employee = require('../models/db.js');

exports.list = (req, res) => {
  Employee.find((err, employees) => {
    res.send(employees);
  });
};
