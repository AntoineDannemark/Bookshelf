const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
        score: {
            type: Number,
            min: [0, "note must be a value between 0 and 5"],
            max: [5, "note must be a value between 0 and 5"],
            required: [true, "the note is required"],
        },
        comment: {
            type: String,
            required: [true, "the comment field is required"],
        },
        book: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Book",
                required: [true, "the book reference is required"],
            },
        ],
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: [true, "the owner field is required"],
            },
        ],
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

module.exports = mongoose.model("Review", ReviewSchema);
