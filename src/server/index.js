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

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use(passport.initialize());
app.use(passport.session());

const User = require("./Schemas/UserSchema");

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* MONGOOSE CONNECTION
--------------------------
=> Stock credentials in ENV  !
=> Require ext to clean code ?
=> check Leny  vs. :
----------------------------

mongoose.connect("mongodb://dev:dev@mongo:27017/Bookshelf?authSource=admin", function(err) {
  if (err) {
    console.log("Shit happened!");
  }
});

-----------------
INSERT ROUTER HERE
-----------------

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

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

// Cross-Origin Resource Sharing (CORS)
// REQUIRE EXTERNAL MIDDLEWARE TO CLEAN CODE ??
app.use((req, res, next) => {
    // Access-Control-Allow-Headers
    // ----------------------------
    // Provides a comma separated list of request header values the server is willing to support. If you use
    // custom headers (eg. x-authentication-token you need to return it in this ACA header response to
    // OPTIONS call, otherwise the request will be blocked.
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

    // Access-Control-Allow-Methods
    // A comma separated list of HTTP request type verbs (eg. GET, POST) which the server is
    // willing to support.
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE",
    );
    // Access-Control-Allow-Credentials
    // --------------------------------
    // This header is only required to be present in the response if your server supports authentication
    // via cookies. The only valid value for this case is true.
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

// Check Leny
require(`${__dirname}/router`)(router);
app.use("/api", router);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
