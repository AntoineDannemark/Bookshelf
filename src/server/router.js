const passport = require("passport");

const express = require("express");
const router = new express.Router();

const BookController = require("./Controllers/BookController");
const ReviewController = require("./Controllers/ReviewController");
const UserController = require("./Controllers/UserController");

const Review = require("./Schemas/ReviewSchema");

const User = require("./Schemas/UserSchema");

router.get("/", (req, res) => {
    console.log(req.user);
    res.send("YOLES MECS", {user: req.user});
});

router.post("/register", (req, res, next) => {
    console.log(
        "Bonjour gros User, viens je vais essayer de te faire rentrer !",
    );
    User.register(
        new User({username: req.body.username}),
        req.body.password,
        err => {
            if (err) {
                console.log("t'es trop gros User tu rentres pas!", err);
                return next(err);
            }
            console.log("t'es dans la base gros User!");
            res.redirect("/");
        },
    );
});

router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/api/books",
        failureRedirect: "/api/login",
    }),
);

router.get("/logout", (req, res) => {
    req.logOut();
    console.log("zyva dégage gros User");
    req.session.destroy(err => {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
// router.post("/users", UserController.store);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);

router.get("/books", BookController.index);
router.get("/books/:id", BookController.show);
router.post("/books", BookController.store);
router.patch("/books/:id", BookController.update);
router.delete("/books/:id", BookController.destroy);

router.get("/reviews", ReviewController.index);
router.get("/reviews/:id", ReviewController.show);
router.post("/reviews", ReviewController.store);
router.patch("/reviews/:id", ReviewController.update);
router.delete("/reviews/:id", ReviewController.destroy);

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
