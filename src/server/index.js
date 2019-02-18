import express from "express";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";
// const jwt = require("jsonwebtoken");
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const {APP_PORT} = process.env;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

mongoose.connect( "mongodb://dev:dev@mongo:27017/Bookshelf?authSource=admin");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    app.use("/api", require("./router"));
    
    app.listen(APP_PORT, () =>
        console.log(`🚀 Server is listening on port ${APP_PORT}.`),
    );
});


