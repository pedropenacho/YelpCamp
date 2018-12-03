var bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    methodOverride        = require("method-override"),
    flash                 = require("connect-flash"),
    User                  = require("./models/user"),
    express               = require("express"),
    app                   = express();

//requiring routes   
var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    authRoutes       = require("./routes/auth");
    
    
// ===========
//  APP SETUP 
// ===========
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


// ========================
//  PASSPORT CONFIGURATION
// ========================
app.use(require("express-session")({
    secret: "Don't really no whatś this is for, have to look it up later",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Create currentUser variable (needed for the header.ejs file that is used for every other one ejs file)
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// ==============
//  ROUTES SETUP
// ==============
app.use(campgroundRoutes);
app.use(commentRoutes);
app.use(authRoutes);

// ==================
//  START THE SERVER
// ==================
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started!!");
});