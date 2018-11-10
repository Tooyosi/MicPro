var express = require("express");
router = express.Router({mergeParams: true});

var middleware = require("../middleware");


var cloudinary              = require('cloudinary'),
    bodyParser              = require("body-parser"),
    multipart               = require('connect-multiparty'),
    multipartMiddleware     = multipart();

var User = require("../models/user.js")
// User profile routes
router.get("/user/:id", function(req, res){
    User.findById(req.params.id).populate("qualifications roles activities").exec(function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "User not Found")
            res.redirect("/")
        }else{
            res.render("profile/show", {user: foundUser, page: "profile"})
        }
    })
})

router.get("/user/:id/edit", middleware.userFunctions, function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        res.render("profile/edit",{user: foundUser, page: "profile"})
    })
})

router.put("/user/:id", [multipartMiddleware, middleware.userFunctions] ,function(req, res){
    cloudinary.uploader.destroy(req.body.image_id, function(result) {        
        cloudinary.uploader.upload(req.files.picture.path, function(result) {
            // Create a post model
            // by assembling all data as object
            // and passing to Model instance
            var update = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                age: req.body.age,
                displayPic:{
                    // Store the URL in a DB for future use
                    image: result.url,
                    image_id: result.public_id
                },
                phone: req.body.phone,
                gender: req.body.gender,
                level: req.body.level,
            };
            // Persist by saving
            User.findByIdAndUpdate(req.params.id, update, function(err, updatedUser){
                if(err || !updatedUser){
                    req.flash("error", "User not Found")
                    res.redirect("/user/"+req.params.id)                
                }else{
                    req.flash("success", "Update successful")                
                    res.redirect("/user/"+req.params.id)
                }
            })
        });
    }) 
   
})

module.exports = router;