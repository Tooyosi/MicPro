var express = require("express");
router = express.Router({mergeParams: true});

var User = require("../models/user.js");
var Activity = require("../models/activity.js");
var middleware = require("../middleware");

// Activity Route
router.get("/user/:id/activity/new", middleware.isAdmin, function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "User not Found")
            res.redirect("/user/"+req.params.id)
        }else{
            res.render("activity/new" , {user: foundUser, page: "profile"})
        }
    })
})

router.post("/user/:id/activity", middleware.isAdmin, function (req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "User not Found")
            res.redirect("/user/"+req.params.id)
        }else{
            Activity.create(req.body.activity, function(err, newActivity){
                if(err){
                    req.flash("error", "User not Found")
                    res.redirect("/user/"+req.params.id)
                }else{
                    foundUser.activities.push(newActivity)
                    foundUser.save();
                    req.flash("success", "Successfully added new activity")
                    res.redirect("/user/"+foundUser._id)
                }
            })
        }
    })
})

// Edit Activity
router.get("/user/:id/activity/:activity_id/edit", middleware.isAdmin, function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "User not Found")
            res.redirect("/user/"+req.params.id)
        }else{
            Activity.findById(req.params.activity_id, function(err, foundActivity){
                if(err || !foundActivity){
                    req.flash("error", "Activity not Found")
                    res.redirect("Back")
                }else{
                    res.render("activity/edit", {activity: foundActivity, user: foundUser, page: "profile"});
                }
            })
        }
    })
})

router.put("/user/:id/activity/:activity_id", middleware.isAdmin, function(req, res){
    Activity.findByIdAndUpdate(req.params.activity_id,  req.body.activity , function(err, updatedActivity){
        if(err || !updatedActivity){
            req.flash("error", "Activity not Found")
            res.redirect("/user/"+req.params.id)
        }else{
            req.flash("success", "Update Successful")
            res.redirect("/user/"+req.params.id)
        }
    })
})

router.delete("/user/:id/activity/:activity_id", middleware.isAdmin, function(req, res){
    Activity.findByIdAndRemove(req.params.activity_id, function(err, foundActivity){
        if(err || !foundActivity){
            req.flash("error", "Activity not Found")
            res.redirect("/user/"+req.params.id)
        }else{
            req.flash("success", "Deleted")
            res.redirect("/user/"+req.params.id)
        }
    })
})

module.exports = router;