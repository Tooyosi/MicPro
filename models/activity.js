// Activity Model
var mongoose = require("mongoose");

var ActivitySchema = new mongoose.Schema({
    text: String
})

module.exports = mongoose.model("Activity", ActivitySchema);
