const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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
            enum: ["LIE-Hamilton-1.7", "bruxelles"],
        },
        token: {
            type: String,
        }
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

// UserSchema.pre("save", function(next) {
//     const user = this;

//     bcrypt.hash(user.password, 10, (err, hash) => {
//         if (err) {
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     });
// });

// UserSchema.methods = {
//     authenticate: function(password, next) {
//         bcrypt.compare(password, this.password, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             next(result);
//         });
//     }
// };

module.exports = mongoose.model("User", UserSchema);
