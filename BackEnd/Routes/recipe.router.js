import express from "express"
import {
    createReacipe,
    deleteReacipe,
    getAllReacipes,
    getReacipeById,
    UpdateReacipe
} from "../Controllers/recipe.controller.js"

const router = express.Router()

router.get("/", getAllReacipes)
router.post("/", createReacipe)
router.patch("/:id", UpdateReacipe)
router.delete("/:id", deleteReacipe)
router.get("/:id", getReacipeById)
export default router