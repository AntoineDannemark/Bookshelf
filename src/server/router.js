const UserController = require("./Controllers/UserController");
const BookController = require("./Controllers/BookController");
const ReviewController = require("./Controllers/ReviewController");

const Review = require("./Schemas/ReviewSchema");

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

    app.get("/reviews", ReviewController.index);
    app.get("/reviews/:id", ReviewController.show);
    app.delete("/reviews/:id", ReviewController.destroy);
    app.patch("/reviews/:id", ReviewController.update);
    app.post("/reviews", ReviewController.store);

    app.get("/test", (req, res) => {
        Review.find()
            .select("book note comment owner")
            .populate("book", "title author")
            .populate("owner", "first_name last_name promotion")
            // .exec()
            .then(docs => {
                res.status(200).send({
                    count: docs.length,
                    review: docs.map(doc => {
                        return {
                            book: doc.book,
                            note: doc.note,
                            comment: doc.comment,
                            id: doc._id,
                            owner: doc.owner,
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
