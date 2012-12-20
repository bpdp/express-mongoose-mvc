var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var employeeSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String
});
 
module.exports = mongoose.model('Employee', employeeSchema);
