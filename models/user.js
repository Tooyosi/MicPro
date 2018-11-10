// user model
var mongoose = require("mongoose");

var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    firstname: String,
    lastname: String,
    age: String,
    phone: String,
    gender: String,
    level: String,
    email: {type: String, unique: true, required: true},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin: {
        type: Boolean,
        default: false
    },
    displayPic:{
        type: Object,
        default: undefined
    },
    qualifications:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Qualification"
        }
    ],
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    activities: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model("User", UserSchema)