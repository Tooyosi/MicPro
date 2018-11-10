var express = require("express");
router = express.Router({mergeParams: true});

var middleware = require("../middleware");

var cloudinary              = require('cloudinary'),
    bodyParser              = require("body-parser"),
    multipart               = require('connect-multiparty'),
    multipartMiddleware     = multipart();


var Slider = require("../models/slider.js");
var User = require("../models/user.js");

// Slider Routes
router.get("/slider",middleware.isAdmin, function(req, res){
    Slider.find({}, function(err,foundSlide){
        if(err || !foundSlide){
            req.flash("error", "Something went wrong")
            res.redirect("/");
        }else{
            res.render("slider/slides", {slide: foundSlide})
        }
    })
})

router.get("/slider/new",middleware.isAdmin, function(req, res){
    res.render("slider/new")
})

router.post("/slider/new", [multipartMiddleware,middleware.isAdmin], function(req, res){
    cloudinary.uploader.upload(req.files.picture.path, function(result) {
        // Create a post model
        // by assembling all data as object
        // and passing to Model instance
        var slide = new Slider({
            title: req.body.title,
            description: req.body.description,
            // Store the URL in a DB for future use
            image: result.url,
            image_id: result.public_id
        });
        // Persist by saving
        slide.save(function (err, newSlide) {
            if(err ||!newSlide){
                req.flash("error", "Something went wrong")        
                res.redirect("/slider")

            }else{
                req.flash("success", "New slide has been added")        
                res.redirect("/slider")
            }
        });
    });
})

//Slider show page 
router.get("/slider/:id", [multipartMiddleware,middleware.isAdmin], function(req, res){
    Slider.findById(req.params.id, function(err, foundSlide){
        if(err || !foundSlide){
            req.flash("error", "Something went wrong")
            res.redirect("/slider");
        }else{
            res.render("slider/show", {slide: foundSlide})
        }
    })
})


// Slider edit
router.get("/slider/:id/edit", [multipartMiddleware,middleware.isAdmin], function(req, res){
    Slider.findById(req.params.id, function(err, foundSlide){
        if(err || !foundSlide){
            req.flash("error", "Something went wrong")
            res.redirect("/slider");
        }else{
            res.render("slider/edit", {slide: foundSlide})
        }
    })
})

router.put("/slider/:id", [multipartMiddleware,middleware.isAdmin] ,function(req, res){
    cloudinary.uploader.destroy(req.body.image, function(result) {    
        cloudinary.uploader.upload(req.files.picture.path, function(result) {
            var slide = {
                title: req.body.title,
                description: req.body.description,
                // Store the URL in a DB for future use
                image: result.url,
                image_id: result.public_id
            };
            Slider.findByIdAndUpdate(req.params.id, slide ,function(err, foundSlide){
                if(err || !foundSlide){
                    req.flash("error", "Something went wrong")
                    res.redirect("/slider");
                }else{
                    req.flash("success", "Slide has been updated")        
                    res.redirect("/slider")
                }
            });
        })
    })
})

// slider delete
router.delete("/slider/:id", [multipartMiddleware,middleware.isAdmin], function(req, res){
    // console.log(req.body.image)
    var image_id = req.body.image;
    cloudinary.uploader.destroy(image_id, function(result) {    
    Slider.findOneAndRemove({image_id: image_id}, function(err, foundSlide){
        if(err || !foundSlide){
            req.flash("error", "Something went wrong")
            res.redirect("/slider");
        }else{
            req.flash("success", "Deleted slide")
            res.redirect("/slider")
        }
    })
})
})
module.exports = router;