const auth =async (req,res,next)=>{
    const {authorization} = req.headers 
    if (!authorization) {
        return res.status(401).json({message:"not authinticated"})
    }
    try {
        
        const decoded = await jwt.verify(authorization,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)
        if (!user) {
            return res.status(404).json({message:"not found"})
        }
        req.user = decoded
        next()
    } catch (error) {
        return res.status(404).json({error:error})
        
    }
}