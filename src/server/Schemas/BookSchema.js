const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: {
            type: String,
            lowercase: true,
            required: true,
        },
        author: {
            type: String,
            lowercase: true,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            lowercase: true,
            required: true,
        },
        format: {
            type: String,
            enum: ["printed", "ebook"],
            required: true,
        },
        moncul: {
            required: true,
            type: String,
        },
        owner: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        ],
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

module.exports = mongoose.model("Book", BookSchema);
