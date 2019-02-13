const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// const jwt = require("jwt-simple");
// const config = require("../config/config");

const UserSchema = new Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            lowercase: true,
            trim: true,
            required: true,
        },
        last_name: {
            type: String,
            lowercase: true,
            trim: true,
            required: true,
        },
        is_admin: {
            type: Boolean,
            required: true,
            default: false,
        },
        promotion: {
            type: String,
            required: true,
            enum: ["liege", "bruxelles"],
        },
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

UserSchema.pre("save", function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

UserSchema.statics.authenticate = (email, password, callback) => {
    User.findOne({email: email})
      .exec((err, user) => {
        if (err) {
            return callback(err)
        } else if (!user) {
            let err = new Error('User not found.');
            err.status = 401;
            return callback(err);
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (result === true) {
                return callback(null, user);
            } else {
                return callback();
            }
        })
    });
}

module.exports = mongoose.model("User", UserSchema);
