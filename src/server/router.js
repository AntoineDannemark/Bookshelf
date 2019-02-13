const passport = require("passport");

const express = require("express");
const router = new express.Router();

const AuthController = require("./Controllers/AuthController");
const UserController = require("./Controllers/UserController");
const BookController = require("./Controllers/BookController");
const ReviewController = require("./Controllers/ReviewController");

const Review = require("./Schemas/ReviewSchema");

router.get("/", (req, res) => {
    console.log(req.user);
    res.send("welcoume");
});

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);

router.get(
    "/users",
    passport.authenticate("local", {failureRedirect: "/login"}),
    UserController.index,
);
router.get(
    "/users/:id",
    passport.authenticate("local", {failureRedirect: "/login"}),
    UserController.show,
);
router.patch(
    "/users/:id",
    passport.authenticate("local", {failureRedirect: "/login"}),
    UserController.update,
);
router.delete(
    "/users/:id",
    passport.authenticate("local", {failureRedirect: "/login"}),
    UserController.destroy,
);

router.get("/books", BookController.index);
router.get("/books/:id", BookController.show);
router.post(
    "/books",
    passport.authenticate("local", {failureRedirect: "/login"}),
    BookController.store,
);
router.patch(
    "/books/:id",
    passport.authenticate("local", {failureRedirect: "/login"}),
    BookController.update,
);
router.delete(
    "/books/:id",
    passport.authenticate("local", {failureRedirect: "/login"}),
    BookController.destroy,
);

router.get("/reviews", ReviewController.index);
router.get("/reviews/:id", ReviewController.show);
router.post(
    "/reviews",
    passport.authenticate("local", {failureRedirect: "/login"}),
    ReviewController.store,
);
router.patch(
    "/reviews/:id",
    passport.authenticate("local", {failureRedirect: "/login"}),
    ReviewController.update,
);
router.delete(
    "/reviews/:id",
    passport.authenticate("local", {failureRedirect: "/login"}),
    ReviewController.destroy,
);

router.get("/test", (req, res) => {
    Review.find()
        .select("book note comment owner")
        .populate("book", "title author")
        .populate("owner", "first_name last_name promotion")
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

module.exports = router;
