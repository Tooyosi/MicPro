var express                 = require("express"),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    flash                   = require("connect-flash"),
    passport                = require("passport"),
    User                    = require("./models/user.js"),
    State                   = require("./models/state.js"),
    Role                    = require("./models/role.js"),
    Qualification           = require("./models/qualification.js"),
    Activity                = require("./models/activity.js"),
    Slider                  = require("./models/slider.js"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    methodOverride          = require("method-override"),
    cloudinary              = require('cloudinary'),
    multipart               = require('connect-multiparty'),
    multipartMiddleware     = multipart();
    app                     = express();

// Require Routes
var indexRoutes                 = require("./routes/index"),
    qualificationRoutes         = require("./routes/qualification"),
    roleRoutes                  = require("./routes/role"),
    activityRoutes              = require("./routes/activity"),
    sliderRoutes                = require("./routes/slider"),
    staffRoutes                 = require("./routes/staffs"),
    userRoutes                  = require("./routes/user");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(flash());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

cloudinary.config({
    cloud_name: 'diooad2vb',
    api_key: '435625583486969',
    api_secret: '3IUdO7UHHhC6S-4the2cBlDRKzg'
});

var url = "mongodb://OYSGMIC:OYSGMIC1@ds030817.mlab.com:30817/mic_pro" || "mongodb://localhost:27017/mic_pro"
mongoose.connect(url);


app.use(require("express-session")({
    secret: "cool app",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

// Using Routes
app.use(indexRoutes);
app.use(userRoutes);
app.use(qualificationRoutes);
app.use(roleRoutes);
app.use(activityRoutes);
app.use(sliderRoutes);
app.use(staffRoutes);

app.listen(3000, '127.0.0.1', function(){
    console.log("Mic Pro app is running");
})