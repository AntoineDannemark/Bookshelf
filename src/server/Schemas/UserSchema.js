let mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    passportLocalMongoose = require("passport-local-mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jwt-simple");
// const config = require("../config/config");

const UserSchema = new Schema(
    {
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

// UserSchema.methods = {
//     authenticate: function(password, next) {
//         bcrypt.compare(password, this.password, (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             next(result);
//         });
//     },

//     getToken: function() {
//         return jwt.encode(this, config.secret);
//     },
// };

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
