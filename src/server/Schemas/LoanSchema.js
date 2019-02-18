const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoanSchema = new Schema(
    {
        date: {
            type: Date,            
            required: [true, "the loan date is required"],
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
                required: [true, "the user field is required"],
            },
        ],
        returned: {
            type: Boolean,
            default: false,
            required: [true, "the returned field is required"],
        },
        comment: {
            type: String,        
            default: null,
        },
    },
    {
        timestamps: {createdAt: "created_at"},
    },
);

module.exports = mongoose.model("Loan", LoanSchema);
