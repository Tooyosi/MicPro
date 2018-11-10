var express = require("express");
router = express.Router({mergeParams: true});

var User    = require("../models/user.js")

// Staff routes
router.get("/staffs", function(req, res){
    var perPage = 8;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery? pageQuery : 1;
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        User.find({ $or:[ {"firstname": regex}, {'lastname': regex} ] }).skip((perPage * pageNumber) -perPage).limit(perPage).exec(function(err, foundUser){
            User.count({ $or:[ {"firstname": regex}, {'lastname': regex} ] }).exec(function(err, count){
                if(err || !foundUser){
                    req.flash("error", "Something went wrong")
                    res.redirect("/");
                }else{
                    if(foundUser.length < 1){
                        req.flash("error", "No staff matches that search.\n\n To search, enter either staff first or last name");                
                        return res.redirect("/staffs");                    
                    }
                        res.render("staffs/show", {users: foundUser, page: "staff", current: pageNumber, pages: Math.ceil(count / perPage), search: req.query.search});                    
                }
            })
        })
    }else{
        User.find({}).skip((perPage * pageNumber) -perPage).limit(perPage).exec(function(err, foundUser){
            User.count({}).exec(function(err, count){
                if(err || !foundUser){
                    req.flash("error", "Something went wrong")
                    res.redirect("/");
                }else{
                    res.render("staffs/show", {users: foundUser, page: "staff", current: pageNumber, pages: Math.ceil(count / perPage), search: false});
                }
            })
        })
    }
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;