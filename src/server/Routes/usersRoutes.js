const usersController = require("../Controllers/usersController");

module.exports = function(app) {
    app.get("/", usersController.fetchAll);
    app.get("/:id", usersController.showUser);
    app.post("/signup", usersController.signup);
    app.post("/login", usersController.login);
};
