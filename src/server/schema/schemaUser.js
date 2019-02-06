const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

userSchema.methods = {
    authenticate: password => {
        let pwcheck =
            "sha1$85740077$1$913ebcbb84752f59a50a400842ad227e363b0928";

        console.log(this);
        console.log(password);
        console.log(passwordHash.verify(password, pwcheck));
        return true;
    },
    getToken: function() {
        return jwt.encode(this, config.secret);
    },
};

module.exports = mongoose.model("User", userSchema);
