import express from "express"
import { loginUser, registerUser } from "../Controllers/auth.controller.js"



const router = express.Router()


router.post("/register", (req, res) => {
    console.log("from register");

})
router.post("/login", loginUser)

export default router