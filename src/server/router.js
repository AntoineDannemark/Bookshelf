const express = require("express");
const router = new express.Router();

const UserController = require("./Controllers/UserController");
const BookController = require("./Controllers/BookController");
const LoanController = require("./Controllers/LoanController");
const ReviewController = require("./Controllers/ReviewController");
const Middlewares = require("./Middlewares/verifyToken");

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.store);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);
router.post("/users/login", UserController.login);

router.get("/books", Middlewares.verifyToken, BookController.index);
router.get("/books/:id", BookController.show);
router.post("/books", BookController.store);
router.patch("/books/:id", BookController.update);
router.delete("/books/:id", BookController.destroy);

router.get("/reviews", ReviewController.index);
router.get("/reviews/:id", ReviewController.show);
router.post("/reviews", ReviewController.store);
router.patch("/reviews/:id", ReviewController.update);
router.delete("/reviews/:id", ReviewController.destroy);

router.get("/loans", LoanController.index);
router.get("/loans/:id", LoanController.show);
router.post("/loans", LoanController.store);
router.patch("/loans/:id", LoanController.update);
router.delete("/loans/:id", LoanController.destroy);






// router.get("/test", (req, res) => {
//     Review.find()
//         .select("book note comment owner")
//         .populate("book", "title author")
//         .populate("owner", "first_name last_name promotion")
//         .then(docs => {
//             res.status(200).send({
//                 count: docs.length,
//                 review: docs.map(doc => {
//                     return {
//                         book: doc.book,
//                         note: doc.note,
//                         comment: doc.comment,
//                         id: doc._id,
//                         owner: doc.owner,
//                     };
//                 }),
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err,
//             });
//         });
// });

module.exports = router;
