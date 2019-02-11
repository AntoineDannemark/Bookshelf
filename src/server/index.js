import express from "express";
import path from "path";
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const {APP_PORT} = process.env;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(cookieParser());
// TODO add env variable
app.use(
    expressSession({
        secret: process.env.SESSION_SECRET || "secret",
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

const User = require("./Schemas/UserSchema");

passport.use(new LocalStrategy({usernameField: "email"}, User.authenticate()));

// passport.use(
//     new LocalStrategy(
//         {
//             usernameField: "email",
//         },
//         (username, password, done) => {
//             User.findOne({username: username}, (err, user) => {
//                 if (err) {
//                     return done(err);
//                 }
//                 if (!user) {
//                     console.log("Wrong username");
//                     return done(null, false);
//                 }
//                 if (!user.validPassword(password)) {
//                     console.log("Wrong password");
//                     return done(null, false);
//                 }
//                 return done(null, user);
//             });
//         },
//     ),
// );

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose
    .connect(
        "mongodb://dev:dev@mongo:27017/Bookshelf?authSource=admin",
        {
            useNewUrlParser: true,
        },
    )
    .then(() => {
        console.log("CONNECTED TO BOOKSHELF TABLE");
    })
    .catch(e => {
        console.log("ERROR ON DB CONNECTION");
        console.log(e);
    });

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type",
    );
    // Access-Control-Allow-Origin
    // ---------------------------
    // This header is meant to be returned by the server, and indicate what client-domains are allowed
    // to access its resources. The value can be:
    //      "*" - allow any domain
    //      a fully qualified domain name (eg. https://example.com)
    // !! If you require the client to pass authentication headers (e.g. cookies) the value can not be "*"
    // it must be a fully qualified domain!
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE",
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use("/api", require("./router"));

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
