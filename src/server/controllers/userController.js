const User = require("../schema/schemaUser");
const account = require("./account/lib");

module.exports = function(app) {
    app.post("/login", account.login);
    app.post("/signup", account.signup);
    app.get("/", (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.send({users: users});
        });
    });
    app.get("/:id", account.showUser);
};
