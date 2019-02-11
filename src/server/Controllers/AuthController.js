// const passport = require("passport");
const User = require("../Schemas/UserSchema");

const register = (req, res, next) => {
    // if (
    //     !req.body.username ||
    //     !req.body.password ||
    //     !req.body.first_name ||
    //     !req.body.last_name ||
    //     !req.body.promotion
    // ) {
    //     res.status(400).json({
    //         text: "Wrong Request",
    //     });
    // } else {
    const user = {
        // first_name: req.body.first_name,
        // last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        // promotion: req.body.promotion,
        // is_admin: req.body.is_admin,
    };

    console.log(user);

    User.register(new User(user), err => {
        if (err) {
            console.log("t'es trop gros User tu rentres pas!", err);
            return next(err);
        }
        console.log("t'es dans la base gros User!");
        res.redirect("/");
    });
    // }
};

const sendRes = (req, res) => {
    console.log(req);
    console.log(res);
};

const logout = (req, res) => {
    req.logout();
    req.session.destroy(err => {
        if (err) {
            throw err;
        }
        res.redirect("/");
        console.log(req.user);
    });
};

exports.register = register;
exports.sendRes = sendRes;
exports.logout = logout;
