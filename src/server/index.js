import express from "express";
import path from "path";
// const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const router = new express.Router();
const {APP_PORT} = process.env;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// TODO add env variable
app.use(
    expressSession({
        secret: process.env.SESSION_SECRET || "secret",
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use(passport.initialize());
app.use(passport.session());

const User = require("./Schemas/UserSchema");

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* Stock credentials in ENV + check Leny  vs.
mongoose.connect('mongodb://localhost/passport_local_mongoose_examples', function(err) {
  if (err) {
    console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
  }
});











*/

mongoose
    .connect(
        "mongodb://dev:dev@mongo:27017/Bookshelf?authSource=admin",
        {useNewUrlParser: true},
    )
    .then(() => {
        console.log("CONNECTED TO BOOKSHELF TABLE");
    })
    .catch(e => {
        console.log("ERROR ON DB CONNECTION");
        console.log(e);
    });

mongoose.Promise = global.Promise;

// .. SETHEADER.. WHAT DO THEY MEAN EXACTLY ?? MAKE MIDDLEWARE FOLDER TO CLEAN CODE ??
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type",
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

// Check Leny
require(`${__dirname}/router`)(router);
app.use("/api", router);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
