const passport = require("passport");
// const passportLocal = require("passport-local");

const AuthController = require("./Controllers/AuthController");
const UserController = require("./Controllers/UserController");
const BookController = require("./Controllers/BookController");
const ReviewController = require("./Controllers/ReviewController");

const Review = require("./Schemas/ReviewSchema");

module.exports = function(app) {
    app.post("/login", passport.authenticate("local"), AuthController.login);

    app.get("/users", UserController.index);
    app.get("/users/:id", UserController.show);
    app.post("/users", UserController.store);
    app.patch("/users/:id", UserController.update);
    app.delete("/users/:id", UserController.destroy);

    app.get("/books", BookController.index);
    app.get("/books/:id", BookController.show);
    app.post("/books", BookController.store);
    app.patch("/books/:id", BookController.update);
    app.delete("/books/:id", BookController.destroy);

    app.get("/reviews", ReviewController.index);
    app.get("/reviews/:id", ReviewController.show);
    app.post("/reviews", ReviewController.store);
    app.patch("/reviews/:id", ReviewController.update);
    app.delete("/reviews/:id", ReviewController.destroy);

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
