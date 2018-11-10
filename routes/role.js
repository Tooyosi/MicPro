var express = require("express");
router = express.Router({mergeParams: true});

var User = require("../models/user.js");
var Role = require("../models/role.js");

var middleware = require("../middleware");


// Roles Route
router.get("/user/:id/roles/new", middleware.userFunctions , function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "Something went wrong");
            res.redirect("/user/"+req.params.id)
        }else{
            res.render("roles/new" , {user: foundUser, page: "profile"})
        }
    })
})

router.post("/user/:id/roles", middleware.userFunctions , function (req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "Something went wrong");
            res.redirect("/user/"+req.params.id)
        }else{
            Role.create(req.body.role, function(err, newRole){
                if(err){
                    req.flash("error", "Something went wrong")
                    res.redirect("/user/"+req.params.id)
                }else{
                    foundUser.roles.push(newRole)
                    foundUser.save();
                    req.flash("success", "Role added")
                    res.redirect("/user/"+foundUser._id)
                }
            })
        }
    })
})

// Edit Role
router.get("/user/:id/roles/:role_id/edit", middleware.userFunctions , function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err || !foundUser){
            req.flash("error", "Something went wrong")
            res.redirect("/user/"+req.params.id)
        }else{
            Role.findById(req.params.role_id, function(err, foundRole){
                if(err || !foundRole){
                    req.flash("error", "Something went wrong")
                    res.redirect("/user/"+req.params.id)
                }else{
                    res.render("roles/edit", {role: foundRole, user: foundUser, page: "profile"});
                }
            })
        }
    })
})

router.put("/user/:id/roles/:role_id", middleware.userFunctions , function(req, res){
    Role.findByIdAndUpdate(req.params.role_id,  req.body.role , function(err, updatedRole){
        if(err || !updatedRole){
            req.flash("error", "Something went wrong")
            res.redirect("/user/"+req.params.id)
        }else{
            req.flash("success", "Role updated")
            res.redirect("/user/"+req.params.id)
        }
    })
})

router.delete("/user/:id/roles/:role_id", middleware.userFunctions , function(req, res){
    Role.findByIdAndRemove(req.params.role_id, function(err, foundRole){
        if(err || !foundRole){
            req.flash("error", "Something went wrong")
            res.redirect("/user/"+req.params.id)
        }else{
            req.flash("success", "Role Deleted")
            res.redirect("/user/"+req.params.id)
        }
    })
})

module.exports = router;