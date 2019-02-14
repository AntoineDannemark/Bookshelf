const express = require("express");
const router = new express.Router();

const AuthController = require("./Controllers/AuthController");
const UserController = require("./Controllers/UserController");
const BookController = require("./Controllers/BookController");
const ReviewController = require("./Controllers/ReviewController");
// const verifyToken = require("./Middlewares/verifyToken");
const Review = require("./Schemas/ReviewSchema");


router.get("/", (req, res) => {
    console.log(req.user);
    res.send("welcoume");
});

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.get("/logout", AuthController.logout);

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
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
