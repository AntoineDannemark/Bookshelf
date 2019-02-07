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
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connexion à la base de donnée
mongoose
    .connect("mongodb://dev:dev@mongo:27017/Bookshelf?authSource=admin")
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch(e => {
        console.log("Error while DB connecting");
        console.log(e);
    });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "db connection error"));
db.once("open", () => {
    console.log("connected");
});

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true,
});

app.use(urlencodedParser);
app.use(bodyParser.json());

// Définition des CORS
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

// Définition du routeur
const router = new express.Router();

app.use("/user", router);
require(`${__dirname}/controllers/userController`)(router);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
