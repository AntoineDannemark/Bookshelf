const UserController = require("./Controllers/UserController");
const BookController = require("./Controllers/BookController");
const Book = require("./Schemas/BookSchema");

module.exports = function(app) {
    app.get("/users", UserController.index);
    app.get("/users/:id", UserController.show);
    app.delete("/users/:id", UserController.destroy);
    app.patch("/users/:id", UserController.update);
    app.post("/users", UserController.store);
    app.post("/users/login", UserController.login);

    app.get("/books", BookController.index);
    app.get("/books/:id", BookController.show);
    app.delete("/books/:id", BookController.destroy);
    app.patch("/books/:id", BookController.update);
    app.post("/books", BookController.store);

    app.get("/test", (req, res) => {
        Book.find()
            .select("title author isbn")
            .populate("owner", "first_name promotion shoot")
            .exec()
            .then(docs => {
                res.status(200).json({
                    count: docs.length,
                    books: docs.map(doc => {
                        return {
                            title: doc.title,
                            un_livre_un_jour_une_nuit: doc.author,
                            tonculcestdelisbn: doc.isbn,
                            _id: doc._id,
                            le_patrick_propriétaire_sa_pelle: doc.owner,
                        };
                    }),
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err,
                });
            });
    });
};
