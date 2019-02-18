const Review = require("../Schemas/ReviewSchema");

const store = (req, res) => {
    let score = parseInt(req.body.score);

    if (req.body.user === undefined) {
        return res.status(400).json({
            message: "the user field is required ",
        })
    } else if (req.body.book === undefined) {
        return res.status(400).json({
            message: "the book field is required ",
        })
    } else if (
        score  !== 0 &&
        score !== 1 &&
        score !== 2 &&
        score !== 3 &&
        score !== 4 &&
        score !== 5
    ) {
        return res.status(400).json({
            message: "the score must be an integer between 0 and 5",
        })
    }

    const newReview = new Review({
            user: req.body.user,
            book: req.body.book,
            score: req.body.score,
            comment: req.body.comment,
        });

        newReview
            .save()
            .then(review => res.status(200).json(review))     
            .catch(err => res.status(500).json({
                    error: err,
                    message: "Failed to create review",
             }));
};
        
const show = (req, res) => {
    Review.findOne({_id: req.params.id})
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({
                error: err,
                message: "Failed to display review",
        }));
};

const index = (req, res) => {
    Review.find()
        .then(reviews => res.status(200).json(reviews))
        .catch(err => res.status(500).json({
            error: err,
            message: "Failed to display reviews",
        }));
};

const update = (req, res) => {
    Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true})
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({
            error: err,
            message: "Failed to update review",
        }))    
};

const destroy = (req, res) => {
    Review.findByIdAndRemove(req.params.id)
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({
            error: err,
            message: "Failed to delete review",
        }))
};

exports.index = index;
exports.show = show;
exports.store = store;
exports.update = update;
exports.destroy = destroy;
