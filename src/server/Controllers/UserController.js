const User = require("../Schemas/UserSchema");

const index = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.send({users: users});
    });
};

const show = (req, res) => {
    User.findOne(
        {
            _id: req.params.id,
        },
        (err, user) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.send(user);
            }
        },
    );
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
exports.update = update;
exports.destroy = destroy;
