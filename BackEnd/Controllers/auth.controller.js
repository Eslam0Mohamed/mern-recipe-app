import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../Schema/user.schema.js"
export const registerUser = async (req, res) => {
    try {
    console.log("from register");
    const { email, password, name } = req.body
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "email and password are required" })
    }
    const existedUser = await User.findOne({ email })
    if (existedUser) {
        return res.status(400).json({ success: false, message: "email already exist" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ email, password:hashedPassword, name })
    let token = await jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" })
    return res.status(200).json({ success: true, message: "user created successfully", data: {email:user.email,name:user.name},token })
    
} catch (error) {
    return res.status(400).json({ success: false, message: error.message,})
    }

}
export const loginUser = async (req, res) => {
    console.log("from login");
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({success:false,message:"email and password are required"})
    }
    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({success:false,message:"invalid credentials"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return res.status(400).json({success:false,message:"invalid credentials"})
    }
    let token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" })
    return res.status(200).json({ success: true, message: "user logged in successfully", data: {email:user.email,name:user.name}, token })
}

