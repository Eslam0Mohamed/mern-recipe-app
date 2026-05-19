import express from "express"
import { loginUser, registerUser } from "../Controllers/auth.controller.js"
import { auth } from "../authMiddleware/auth.middleware.js"



const router = express.Router()


router.post("/register",registerUser)
router.post("/login", loginUser)
router.get("/verify", auth, (req,res)=>{

   return res.status(200).json({
      success:true,
      user:req.user
   })

})

export default router