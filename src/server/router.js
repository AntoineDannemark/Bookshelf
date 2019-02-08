const UserController = require("./Controllers/UserController");

module.exports = function(app) {
    app.get("/users", UserController.index);
    app.get("/users/:id", UserController.show);
    app.delete("/users/:id", UserController.destroy);
    app.post("/users", UserController.store);
    app.post("/users/login", UserController.login);
};
