const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: {
            type: String,
            lowercase: true,
            required:  [true, "the title is required"],
        },
        author: {
            type: String,
            lowercase: true,
            required: [true, "the author is required"],
        },
        isbn: {
            type: String,
            required: [true, "the ISBN is required"],
            unique: true,
        },
        language: {
            type: String,
            lowercase: true,
            required: [true, "the language is required"],
        },
        ebook: {
            type: Boolean,
            default: false,
            required: [true, "the format is required"],
        },
        picture: {
            type: String,
            required: [true, "The picture link is required"]
        },
        owner: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: [true, "the owner is required"],
            },
        ],
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

module.exports = mongoose.model("Book", BookSchema);
