const Review = require("../Schemas/ReviewSchema");

const store = (req, res) => {
    if (
        !req.body.note ||
        !req.body.comment ||
        !req.body.book ||
        !req.body.owner
    ) {
        res.status(400).json({
            text: "Wrong Request",
        });
    } else {
        const review = {
            note: req.body.note,
            comment: req.body.comment,
            book: req.body.book,
            owner: req.body.owner,
        };
        let _r = new Review(review);

        _r.save(err => {
            if (err) {
                res.status(500).json({
                    text: "server error 500 @ save review ",
                });
            } else {
                res.status(200).json({
                    text: "New Review Created",
                });
            }
        });
    }
};

const show = (req, res) => {
    Review.findOne(
        {
            _id: req.params.id,
        },
        (err, review) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.send(review);
            }
        },
    );
};

const index = (req, res) => {
    Review.find({}, (err, review) => {
        if (err) {
            res.send(err);
        }
        res.send({review: review});
    });
};

const update = (req, res) => {
    Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, review) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json(review);
        },
    );
};

const destroy = (req, res) => {
    Review.findByIdAndRemove(req.params.id, (err, review) => {
        if (err) {
            return res.status(500).send(err);
        }
        const response = {
            message: "Review successfully deleted",
            id: review._id,
        };

        return res.status(200).send(response);
    });
};

exports.index = index;
exports.show = show;
exports.store = store;
exports.update = update;
exports.destroy = destroy;
