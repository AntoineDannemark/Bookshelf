/* becodeorg/bookshelf
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import express from "express";
import path from "path";

const {APP_PORT} = process.env;

const app = express();
const router = new express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
    extended: true,
});

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

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(urlencodedParser);
app.use(bodyParser.json());

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

app.use("/api", router);
require(`${__dirname}/router`)(router);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
