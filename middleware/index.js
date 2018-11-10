var User = require("../models/user.js");
var Activity = require("../models/activity.js");

var middleware = {};
// Check if a user is logged in
middleware.loggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    }else{
        req.flash("error", "You need to be logged in to do that")                    
        res.redirect("/login");
    }
}

// 
middleware.userFunctions = function(req, res, next){
    if(req.isAuthenticated()){
        User.findById(req.params.id, function(err, foundUser){
            if(err|| !foundUser){
                req.flash("error", "User not found")                    
                res.redirect("back");
            }else{
                if(req.user._id.equals(foundUser._id)  || req.user.isAdmin){
                    next();
                }else{
                    req.flash("error", "You don't have permission to do that")                    
                    res.redirect("/user/"+foundUser._id)
                }
            }
        })
    }else{       
        req.flash("error", "You need to be logged in to do that")                    
        res.redirect("/user/"+req.params.id)
    }
}


middleware.isAdmin = function(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.isAdmin){
            next();
        }else{
            req.flash("error", "You need to be an admin to do that")                    
            res.redirect("back")
        }
    }else{       
        req.flash("error", "You need to be logged in to do that")                    
        res.redirect("/")
    }
}
module.exports = middleware;