import { User } from "../Schema/user.schema.js"

export const handleFavourites = async (request,response)=>{
    try {
        const recipeId = request.params
        const user = await User.findById(request.user.id)
        if (!user) {
            return response.status(404).json({success:false,message:"user not found"})
        }
        const isExist =await user.favourites.includes(recipeId)
        if (isExist) {
            user.favourites.filter((id)=>{id.toString()!=recipeId})
        }
        else{
            user.favourites.push(recipeId)
        }
        await user.save()
        return response.status(200).json({success:true,message:isExist?"Removed From Favourites":
            "Added To Favourites"})

    } catch (error) {
        response.status(500).json({success:false,message:error.message})
    }

}

export const getFavourites =async (request,response)=>{
    try {
        const user = user.findById(request.user.id)
        if (!user) {
            return response.status(404).json({success:false,message:"user not found"})
        }
        return response.status(200).json({success:true,data:user.favourites})
    } catch (error) {
        return response.status(501).json({success:false,message:error.message})
        
    }
}