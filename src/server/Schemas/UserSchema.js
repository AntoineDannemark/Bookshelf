const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import bcrypt from "bcrypt";
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const store = require('store');

const UserSchema = new Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            required:  [true, "the email is required"],
            unique: true,
        },
        password: {
            type: String,
            required:  [true, "the password is required"],
        },
        first_name: {
            type: String,
            lowercase: true,
            required:  [true, "the first name is required"],
        },
        last_name: {
            type: String,
            lowercase: true,
            required:  [true, "the last name is required"],
        },
        admin: {
            type: Boolean,
            default: false,
        },
        promotion: {
            type: String,
            enum: ["liege", "bruxelles"],
            required:  [true, "the promotion is required"],
        },
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

UserSchema.pre("save", function(next) {
    const user = this;

    bcrypt.hash(user.password, saltRounds, (err, hash) => {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

UserSchema.methods = {    
    authenticate: function(password, next ) {
        bcrypt
            .compare(password, this.password, function(err, res) {
                if (err) {
                    throw err;
                }
                next(res);
            });
    },

    getToken: function() {
        const payload = {
            email: this.email
        }
        return jwt.sign(payload, "SecretStory", {
            expiresIn: "1h",
        }, (err, token) => {
            if (err) {
                console.log(err);
            } else {
                console.log(token);
            }
        });
    },
};

module.exports = mongoose.model("User", UserSchema);
