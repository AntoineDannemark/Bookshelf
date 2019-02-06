/* becodeorg/bookshelf
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import express from "express";
import path from "path";
import mongoose from "mongoose";

const {APP_PORT} = process.env;

const app = express();

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});




// routes ici

const users = [
    {
        id: 1,
        firstname: "Antoine",
        lastname: "Dannemark",
        email: "test@test.com",
        password: "test",
    },

    {
        id: 2,
        firstname: "Roger",
        lastname: "Noel",
        email: "roger@roger.com",
        password: "noel",
    },
];


// Create a user 
app.post("/api/users", (req, res) => {
    res.send(user);
});

// Recupere tous les users et un user par id
app.get("/api/users", (req, res) => {
    res.send(users);
});

app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        res.status(404).send(`L'utilisateur avec l'ID ${req.params.id} n'existe pas`);
    }
    res.send(user);
});

app.put("/api/users/:id", (req, res) => {
    const userUpdates = req;
    console.log(req);

   /* users[req.params.id] = userUpdates;
    res.send(users[req.params.id]); */
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
