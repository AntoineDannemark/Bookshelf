const usersController = require("../controllers/usersController");

module.exports = function(app) {
    app.post("/login", usersController.login);
    app.post("/signup", usersController.signup);
    app.get("/", usersController.fetchAll);
    app.get("/:id", usersController.showUser);
};
