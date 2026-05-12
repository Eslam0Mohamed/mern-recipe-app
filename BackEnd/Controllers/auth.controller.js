import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../Schema/user.schema.js"
import { response } from "express";

export const registerUser = async (req, res) => {
    console.log("from register");
    const { email, password, name } = req.body
    if (!email || !password) {
        return response.status(400).json({message:"email and password are required"})
    }
    const existedUser = await User.findOne({ email })
    if (existedUser) {
        return response.status(400).json({ message: "email already exist" })
    }
    const hashedPassword = bcrypt.hash(password, 10)
    await User.create({ email, hashedPassword, name })
    const user = {
        email,
        name
    }

    let token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" })
    return response.status(200).json({ message: "user created successfully", data: user })

}
export const loginUser = async (req, res) => {
    console.log("from login");
    const {email,password} = req.body
    if(!email || !password){
        return response.status(400).json({message:"email and password are required"})
    }
    const user = await User.findOne({ email })
    if(!user){
        return response.status(400).json({message:"invalid credentials"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return response.status(400).json({message:"invalid credentials"})
    }
    let token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" })
    return response.status(200).json({ message: "user logged in successfully", data: user, token })
}

