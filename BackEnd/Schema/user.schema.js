import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String
    },
    favourites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recipe"
        }
    ]
}, { timestamps: true })


export const User = mongoose.model("User", userSchema)