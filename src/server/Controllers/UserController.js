const User = require("../Schemas/UserSchema");
// const localStorage = require('store')

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
        admin: req.body.admin,
    });
    console.log(newUser);
    newUser
        .save()
        .then(user => res.status(200).json(user))     
        .catch(err => res.status(500).json({
            error: err,
            message: "Failed to create user"
            })
        );
};
    

const update = (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true})
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));    
};

const destroy = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({
                error: err,
                message: "Failed to delete user",
            })
        );
};

// const login = (req, res) => {
//     if (!req.body.email || !req.body.password) {
//         return res.status(400).json({
//             error: err,
//             message: "Both email and passord must be provided",
//         })
//     } else {
//         User.findOne({email: req.body.email}, (err, user) => {
//             console.log(user);
//             console.log(req.body.password);
//             console.log(user.password);
//             if (err) {
//                 return res.status(500).json({
//                     error: err,
//                     message: "Internal error "  
//                 })
//             } else if (!user) {
//                 return res.status(400).json({
//                     error: err,
//                     message: "Email not found",
//                 }) 
//             } else {
//                 user.authenticate(req.body.password, user.password,  isChecked => {
//                     if (isChecked) {
//                         res.status(200).json({
//                             auth: true,
//                             token: User.getToken(),
//                             text: "Authentication succesful",
//                         })
//                     } else {
//                         res.status(401).json({
//                             text: "Wrong password",
//                         });         
//                     }                  
//                 });
//             }
//         })
//     }
// };

exports.index = index;
exports.show = show;
exports.store = store;
exports.update = update;
exports.destroy = destroy;
exports.login = login;