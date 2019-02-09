const Book = require("../Schemas/BookSchema");

const store = (req, res) => {
    if (
        !req.body.title ||
        !req.body.author ||
        !req.body.isbn ||
        !req.body.language ||
        !req.body.format ||
        !req.body.owner
    ) {
        res.status(400).json({
            text: "Wrong Request",
        });
    } else {
        const book = {
            title: req.body.title,
            author: req.body.author,
            isbn: req.body.isbn,
            language: req.body.language,
            format: req.body.format,
            owner: req.body.owner,
        };

        const findBook = new Promise((resolve, reject) => {
            Book.findOne(
                {
                    isbn: book.isbn,
                },
                (error, result) => {
                    if (error) {
                        reject(500).send(
                            "server error 500 @ findBook.Book.findOne",
                        );
                    } else if (result) {
                        res.send("book already registered");
                    } else {
                        resolve(true);
                    }
                },
            );
        });

        findBook.then(
            () => {
                let _b = new Book(book);

                _b.save(conErr => {
                    if (conErr) {
                        res.status(500).json({
                            text: "server error 500 @ findBook.then.save ",
                        });
                    } else {
                        res.status(200).json({
                            text: "New Book Created",
                        });
                    }
                });
            },
            error => {
                switch (error) {
                    case 500:
                        res.status(500).json({
                            text: "server error 500 @ book creation",
                        });
                        break;
                    case 204:
                        res.status(204).json({
                            text: "server error 204 @ book creation",
                        });
                        break;
                    default:
                        res.status(500).json({
                            text: "server error default_500 @ book creation",
                        });
                }
            },
        );
    }
};

const show = (req, res) => {
    Book.findOne(
        {
            _id: req.params.id,
        },
        (err, book) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.send(book);
            }
        },
    );
};

const index = (req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            res.send(err);
        }
        res.send({books: books});
    });
};

const update = (req, res) => {
    Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, book) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json(book);
        },
    );
};

const destroy = (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, book) => {
        if (err) {
            return res.status(500).send(err);
        }
        const response = {
            message: "Book successfully deleted",
            id: book._id,
        };

        return res.status(200).send(response);
    });
};

exports.index = index;
exports.show = show;
exports.store = store;
exports.update = update;
exports.destroy = destroy;
