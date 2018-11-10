var express = require("express");
router = express.Router({mergeParams: true});

var middleware = require("../middleware");

var User = require("../models/user.js")
var Qualification = require("../models/qualification.js")
// Qualification Routes
router.get("/user/:id/qualification/new", middleware.userFunctions , function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "Something went wrong");
            res.redirect("/user/"+req.params.id)
        }else{
            res.render("qualifications/new", {user: foundUser, page: "profile"})
        }
    })
});

router.post("/user/:id/qualification", middleware.userFunctions , function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err ||!foundUser){
            req.flash("error", "Something went wrong");
            res.redirect("/user/"+req.params.id)
        }else{
            Qualification.create(req.body.qualification, function(err, createdQualification){
                if(err || !createdQualification){
                    req.flash("error", "Something went wrong");
                    res.redirect("/user/"+req.params.id)
                }else{
                    foundUser.qualifications.push(createdQualification);
                    foundUser.save();
                    req.flash("success", "Qualification Added");
                    res.redirect("/user/"+foundUser._id)
                }
            })
        }
    })
}) 

// Edit Qualification
router.get("/user/:id/qualification/:qualification_id/edit", middleware.userFunctions , function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "Something went wrong");
            res.redirect("/user/"+req.params.id)
        }else{
            Qualification.findById(req.params.qualification_id, function(err, foundQualification){
                if(err || !foundQualification){
                    req.flash("error", "Something went wrong");
                    res.redirect("/user/"+req.params.id)
                }else{
                    res.render("qualifications/edit", {qualification: foundQualification, user: foundUser, page: "profile"});
                }
            })
        }
    })
})

router.put("/user/:id/qualification/:qualification_id", middleware.userFunctions, function(req, res){
    Qualification.findByIdAndUpdate(req.params.qualification_id,  req.body.qualification , function(err, updatedQualification){
        if(err || !updatedQualification){
            req.flash("error", "Something went wrong");
            res.redirect("/user/"+req.params.id)
        }else{
            req.flash("success", "Qualification Updated");
            res.redirect("/user/"+req.params.id)
        }
    })
})

// Qualification Delete
router.delete("/user/:id/qualification/:qualification_id", function(req, res){
    Qualification.findByIdAndRemove(req.params.qualification_id, function(err, foundQualification){
        if(err || !foundQualification){
            req.flash("error", "Something went wrong");
            res.redirect("/user/"+req.params.id)
        }else{
            req.flash("success", "Qualification Deleted");
            res.redirect("/user/"+req.params.id)
        }
    })
})
module.exports = router;