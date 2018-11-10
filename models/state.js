// State model
var mongoose = require("mongoose");

var StatesSchema = new mongoose.Schema({
    state: {
        name: String,
        lga: {
            type: Array,
            default: undefined
        }
    }        
})

module.exports = mongoose.model("State", StatesSchema)