const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

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

UserSchema.methods = {
    authenticate: function(password, next) {
        bcrypt.compare(password, this.password, function(err, result) {
            if (err) {
                throw err;
            }
            next(result);
        });
        // return true;
        // return passwordHash.verify(password, this.password);
    },
    getToken: function() {
        return jwt.encode(this, config.secret);
    },
};

module.exports = mongoose.model("User", UserSchema);
