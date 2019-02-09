const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
        note: {
            type: Number,
            enum: [0, 1, 2, 3, 4, 5],
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        book: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Book",
                required: true,
            },
        ],
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

module.exports = mongoose.model("Review", ReviewSchema);
