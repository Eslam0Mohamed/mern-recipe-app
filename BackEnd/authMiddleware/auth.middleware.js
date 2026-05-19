import jwt from "jsonwebtoken"
import{ User } from "../Schema/user.schema.js"
export const auth =async (req,res,next)=>{
    const {authorization} = req.headers 
    if (!authorization) {
        return res.status(401).json({message:"not authinticated"})
    }
    try {
        const token = authorization.split(" ")[1]
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        if (!user) {
            return res.status(404).json({message:"not found"})
        }
        req.user = decoded
        next()
    } catch (error) {
        return res.status(404).json({message:"Invalid token"})
        
    }
}