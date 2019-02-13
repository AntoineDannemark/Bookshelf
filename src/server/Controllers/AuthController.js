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

// const login = (req, res, next) => {

// };

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
                return res.redirect('/');
            }
        });
    }
};

// exports.login = login;
exports.register = register;
exports.logout = logout;
