const Book = require("../Schemas/BookSchema");

const store = (req, res) => {
if (req.body.owner===undefined) {
    return res.status(400).json({
        message: "the owner field is required ",
    })
}
    
    const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            isbn: req.body.isbn,
            language: req.body.language,
            owner: req.body.owner,
        });

        newBook
            .save()
            .then(book => res.status(200).json(book))     
            .catch(err => res.status(500).json({
                    error: err,
                    message: "Failed to create book",
                })
            );
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
