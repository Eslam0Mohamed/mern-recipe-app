import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    ingrediants: {
        type: String,
        required: true
    },
    coverImage:{
        type:String
    }
},
    {
        timestamps: true,
    })

    export const recipeModel = mongoose.model("Recipe",recipeSchema)