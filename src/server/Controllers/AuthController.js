const jwt = require("jsonwebtoken");
const config = require("../lib/config");

const User = require("../Schemas/UserSchema");

const register = (req, res, next) => {
    if (
        !req.body.email ||
        !req.body.password ||
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.promotion
    ) {
        res.status(400).json({
            text: "Wrong Request",
        });
    } else {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            promotion: req.body.promotion,
            is_admin: req.body.is_admin,
        };

        User.create(newUser, (err, user) => {
            if (err) {
                return next(err);
            }
            return next(user);
        });
    }
};

const login = function(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            text: "Both email and password must be filled",
        });
    } else {
        User.findOne(
            {
                email: req.body.email,
            },
            function(err, user) {
                user.authenticate(req.body.password, isChecked => {
                    if (err) {
                        res.status(500).json({
                            text: "Server Error",
                        });
                    } else if (!user) {
                        res.status(401).json({
                            text: "The user does not exist",
                        });
                    } else if (isChecked) {
                        const payload = {
                            user: user,
                        };
                        let token = jwt.sign(payload, config.secret);
                        res.json({
                            message: "Successfuly authenticated",
                            token: token,
                        })
                    } else {
                        res.status(401).json({
                            text: "Wrong Password",
                        });
                    }
                });
            },
        );
    }
};

// const logout = (req, res) => {
//     req.logout();
//     req.session.destroy(err => {
//         if (err) {
//             throw err;
//         }
//         res.redirect("/");
//     });
// };

const logout = (req, res, next) => {
    if (req.session) {
        req.session.destroy(err => {
            if(err) {
                return next(err);
            } else {
                return res.redirect('/users');
            }
        });
    }
};

exports.login = login;
exports.register = register;
exports.logout = logout;
