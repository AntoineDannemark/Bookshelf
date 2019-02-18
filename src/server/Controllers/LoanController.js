const Loan = require("../Schemas/LoanSchema");

const store = (req, res) => {
    if (req.body.user === undefined) {
        return res.status(400).json({
            message: "the user field is required ",
        })
    } else if (req.body.book === undefined) {
        return res.status(400).json({
            message: "the book field is required ",
        })
    }
    let date = req.body.date;
    
    if (date === undefined) {
        date = Date.now();
    }        

    const newLoan = new Loan({
            user: req.body.user,
            book: req.body.book,
            date: date, 
            returned: req.body.returned,
            comment: req.body.comment,
        });

        newLoan
            .save()
            .then(loan => res.status(200).json(loan))     
            .catch(err => res.status(500).json({
                    error: err,
                    message: "Failed to create loan",
             }));
};
        
const show = (req, res) => {
    Loan.findOne({_id: req.params.id})
        .then(loan => res.status(200).json(loan))
        .catch(err => res.status(500).json({
                error: err,
                message: "Failed to display loan",
        }));
};

const index = (req, res) => {
    Loan.find()
        .then(loans => res.status(200).json(loans))
        .catch(err => res.status(500).json({
            error: err,
            message: "Failed to display loans",
        }));
};

const update = (req, res) => {
    Loan.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true})
        .then(loan => res.status(200).json(loan))
        .catch(err => res.status(500).json({
            error: err,
            message: "Failed to update loan",
        }))    
};

const destroy = (req, res) => {
    Loan.findByIdAndRemove(req.params.id)
        .then(loan => res.status(200).json(loan))
        .catch(err => res.status(500).json({
            error: err,
            message: "Failed to delete loan",
        }))
};

exports.index = index;
exports.show = show;
exports.store = store;
exports.update = update;
exports.destroy = destroy;
