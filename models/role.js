// Role model
var mongoose = require("mongoose");

var RoleSchema = new mongoose.Schema({
    text: String
})

module.exports = mongoose.model("Role", RoleSchema);
