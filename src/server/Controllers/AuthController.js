const User = require("../Schemas/UserSchema");

const login = function(req, res) {
    if (!req.body.email || !req.body.password) {
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

exports.login = login;
