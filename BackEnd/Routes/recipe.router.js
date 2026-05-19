import express from "express"
import {auth} from "../authMiddleware/auth.middleware.js"
import {
    createReacipe,
    deleteReacipe,
    getAllReacipes,
    getReacipeById,
    UpdateReacipe
} from "../Controllers/recipe.controller.js"
import multer from 'multer'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const fileDate = Date.now() + '-' + file.originalname
    cb(null, file.fieldname + '-' + fileDate)
  }
})

const upload = multer({ storage: storage })


const router = express.Router()

router.get("/",getAllReacipes)
router.post("/",auth ,upload.single('coverImage'), createReacipe)
router.patch("/:id", UpdateReacipe)
router.delete("/:id", deleteReacipe)
router.get("/:id", getReacipeById)
export default router