const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TokenSchema = new Schema(
    {
        token: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

module.exports = mongoose.model("Token", TokenSchema);
