const User = require("../Schemas/UserSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const store = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            text: "Wrong Request",
        });
    } else {
        const password = req.body.password;

        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                return err;
            }
            const user = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash,
                is_admin: req.body.is_admin,
                promotion: req.body.promotion,
            };

            const findUser = new Promise((resolve, reject) => {
                User.findOne(
                    {
                        email: user.email,
                    },
                    (error, result) => {
                        if (error) {
                            reject(500).send(
                                "server error 500 @ findUser.user.findOne",
                            );
                        } else if (result) {
                            res.send("email already registered");
                        } else {
                            resolve(true);
                        }
                    },
                );
            });

            findUser.then(
                () => {
                    let _u = new User(user);

                    _u.save((conErr, usr) => {
                        if (conErr) {
                            res.status(500).json({
                                text: "server error 500 @ findUser.then.save ",
                            });
                        } else {
                            res.status(200).json({
                                text: "New user created",
                                token: usr.getToken(),
                            });
                        }
                    });
                },
                error => {
                    switch (error) {
                        case 500:
                            res.status(500).json({
                                text: "server error 500 @ user creation",
                            });
                            break;
                        case 204:
                            res.status(204).json({
                                text: "server error 204 @ user creation",
                            });
                            break;
                        default:
                            res.status(500).json({
                                text:
                                    "server error default_500 @ user creation",
                            });
                    }
                },
            );
        });
    }
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

const index = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.send({users: users});
    });
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
