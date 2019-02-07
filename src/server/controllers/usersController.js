const User = require("../schema/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const signup = (req, res) => {
    if (!req.body.email || !req.body.password) {
        // Le cas où l"email ou bien le password ne serait pas soumit ou nul
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
                first_name: req.body.last_name,
                last_name: req.body.first_name,
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

const login = function(req, res) {
    if (!req.body.email || !req.body.password) {
        // Le cas où l"email ou bien le password ne serait pas soumit ou nul
        res.status(400).json({
            text: "Wrong Request",
        });
    } else {
        User.findOne(
            {
                email: req.body.email,
            },
            (err, user) => {
                if (err) {
                    res.status(500).json({
                        text: "Server error 500 @ login",
                    });
                } else if (!user) {
                    res.status(401).json({
                        text: "Unknown User",
                    });
                } else {
                    user.authenticate(req.body.password, isChecked => {
                        if (isChecked) {
                            res.status(200).json({
                                token: user.getToken(),
                                text: "You are logged in!",
                            });
                        } else {
                            res.status(401).json({
                                text: "Wrong Password",
                            });
                        }
                    });
                }
            },
        );
    }
};

const showUser = (req, res) => {
    User.findOne(
        {
            _id: req.params.id,
        },
        (err, user) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.send({users: user});
            }
        },
    );
};

const fetchAll = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.send({users: users});
    });
};

exports.fetchAll = fetchAll;
exports.showUser = showUser;
exports.login = login;
exports.signup = signup;
