// Slider Routes
var mongoose = require("mongoose");

var SliderSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    image_id: String,
})
 
module.exports = mongoose.model("Slider", SliderSchema);