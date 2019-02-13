const passport = require("passport");
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
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            promotion: req.body.promotion,
            is_admin: req.body.is_admin,
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
    }
};

const login = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/api/login",
});

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
exports.login = login;
exports.logout = logout;
