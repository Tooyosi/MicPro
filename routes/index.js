var express = require("express");
var router = express.Router({mergeParams: true});

var cloudinary              = require('cloudinary'),
    bodyParser              = require("body-parser"),
    multipart               = require('connect-multiparty'),
    multipartMiddleware     = multipart();

var passport = require("passport");
var User = require("../models/user.js");
var State = require("../models/state.js");
var Slider = require("../models/slider.js");
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");

// Index route
router.get("/", function(req, res){
    Slider.find({}, function(err, foundSlider){
        if(err || !foundSlider){
            console.log(err)
        }else{
            res.render("landing", {slides: foundSlider, page: "home"})
        }
    })
});

// login route
router.get("/login", function(req, res){
    res.render("login", {page: "login"})
})

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureFlash: true,
    successFlash: "Welcome Back",
    failureRedirect: "/login"
}) ,function(req, res){

});



// sign-up route
router.get("/register", function(req, res){
    State.find({}, function(err, foundState){
        if(err){
            console.log(err);
        }else{
            res.render("signup",{state: foundState, page: "signup"});
        }
    })
})

router.post("/register", multipartMiddleware ,function(req, res){
    cloudinary.uploader.upload(req.files.picture.path, function(result) {
        var newUser = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        displayPic:{
            image: result.url,
            image_id: result.public_id
        },
        age: req.body.age,
        gender: req.body.gender,
        state: req.body.state,
        lga: req.body.lga,
        phone: req.body.phone,
        level: req.body.level,
        email: req.body.email
         })
         if(req.body.adminCode === "MiCAdM1N"){
             newUser.isAdmin = true;
         }
        User.register(newUser, req.body.password, function(err, newUser){
            if(err || !newUser){
                req.flash("error", " "+err.message+"")
                res.redirect("/")
            }
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome " + newUser.firstname);
                res.redirect("/")
            })      
        });
    });
})

// logout logic
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You've been logged Out")
    res.redirect("/")
})


router.get("/forgot", function(req, res){
    res.render("forgot")
})

router.post("/forgot", function(req, res){
    async.waterfall([
        function(done){
            crypto.randomBytes(20,function(err, buf){
                var token = buf.toString('hex');
                done(err, token)
            });
        },
        function(token, done){
            User.findOne({email: req.body.email}, function(err, user){
                if(!user){
                    console.log("Flash error: No account with that email address exsists");
                    return res.redirect("/forgot");
                }
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 36000000 // 1 hour

                user.save(function(err){
                    done(err, token, user);
                });
            });
        },
        function(token, user, done){
            var smtpTransport = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: "tuc0476@gmail.com",
                    pass: "Conjugate1"
                }
            });
            var mailOptions = {
                to: user.email,
                from: "tuc0476@gmail.com",
                subject: "Staff Password Reset",
                text: "You are recieving this because you have requested a password reset"+
                        "Please click on the following link, or paste into your browser to complete the process"+
                        "http://"+ req.headers.host + "/reset/" + token + "\n\n"+
                        "If you did not request this, please ignore and your password would remain unchanged"
            };
            smtpTransport.sendMail(mailOptions, function(err){
                console.log("mail sent");
                req.flash("success", "an email has been sent to " + user.email + " with further instructions.")
                done(err, "done")
            });
        }
    ], function(err){
        if (err){
             console.log(err)
            };
        res.redirect("/forgot")
    }
)
})


router.get("/reset/:token", function(req, res){
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()} }, function(err, user){
        if(!user){
            req.flash("error", " Password reset token is invalid")
            return res.redirect("/forgot");
        }else{
            res.render("reset", {token: req.params.token})
        }
    })
})


router.post("/reset/:token", function(req, res){
    async.waterfall([
        function (done) {
            User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()} }, function(err, user){
                if(err || !user){
                    req.flash("error", " Password reset token is invalid or has expired")
                    return res.redirect("back");
                }
                if(req.body.password === req.body.confirm){
                    user.setPassword(req.body.password, function(err, foundUser){
                        if(err || !foundUser){
                            console.log(err);
                        }
                        user.resetPasswordToken = undefined;
                        user.resetPasswordExpires = undefined;

                        user.save(function(err, user){
                            if(err || ! user){
                                console.log(err)
                            }else{
                               req.logIn(user, function(err){
                                done(err, user);
                                });  
                            }
                           
                        });
                    })
                }else{
                    req.flash("error", " Passwords don't match")
                    return res.redirect("back")
                }
            });
            
        },
        function (user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: "tuc0476@gmail.com",
                    pass: "Conjugate1"
                }
            })
            var mailOptions = {
                to: user.email,
                from: "tuc0476@gmail.com",
                subject: "Your password has been changed",
                text: "Hello, \n\n"+
                        "This is a confirmation that your password for the account " +user.email+ " has just been changed"
            };
            smtpTransport.sendMail(mailOptions, function(err){
                req.flash("success", " Password changed")
                done(err)
            });
        }
    ], function(err){
        res.redirect("/")
    })
})

module.exports = router;