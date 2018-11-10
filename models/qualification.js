// Qualification Model
var mongoose = require("mongoose");

var QualificationSchema = new mongoose.Schema({
    name: String,
    qualification: String,
    institution: String,
    year: Number
})

module.exports = mongoose.model("Qualification", QualificationSchema);