const User = require("../Schemas/UserSchema");

const index = (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({
                error: err,
                message: "Failed to display users",
            })
        );
};

const show = (req, res) => {
    User.findOne({ _id: req.params.id, })
        .then(user => res.status(200).json(user))
        .catch(err =>         
            res.status(500).json({
                error: err,
                message: "Failed to display user",
            })
        );
 };

const store = (req, res) => {
    const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:  req.body.email,
        password: req.body.password,
        promotion: req.body.promotion,
        admin: req.body.admin
    });
    console.log(newUser);
    newUser
        .save()
        .then(user => res.status(200).json(user))     
        .catch(err => res.status(500).json(err));
};
    

const update = (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, user) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(user);
        },
    );
};

const destroy = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        const response = {
            message: "User successfully deleted",
            id: user._id,
        };

        return res.status(200).send(response);
    });
};

exports.index = index;
exports.show = show;
exports.store = store;
exports.update = update;
exports.destroy = destroy;