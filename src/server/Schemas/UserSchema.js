const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jwt-simple");
// const config = require("../config/config");

const UserSchema = new Schema(
    {
        local: {
            email: String,
            password: String,
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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
