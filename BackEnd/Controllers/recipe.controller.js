import { recipeModel } from "../Schema/recipe.schema.js"


export const getAllReacipes = async (request, response) => {
    try {

        const allRecipes = await recipeModel.find()

        return response.status(200).json({ success: true, recipes: allRecipes })

    } catch (error) {

        console.log("ERROR HERE => ", error);

        return response.status(500).json({
            message: error.message
        })
    }
}


export const createReacipe = async (request, response) => {
    try {
        const { title, instructions, ingrediants } = request.body
        if (!title || !instructions || !ingrediants) {
            return response.status(400).json({ success: false, message: "All Fields Are Required" })
        }
        const recipe = await recipeModel.create({ 
            title, instructions, ingrediants, coverImage: request.file.filename,
             userId: request.user.id })
        return response.status(201).json({ success: true, message: "Recipe created successfully", recipe: recipe })
    } catch (error) {
        console.log("ERROR => ", error);
        return response.status(500).json({
            success: false,
            message: error.message
        })
    }

}
export const getReacipeById = async (request, response) => {
    try {
        const { id } = request.params
        const recipe = await recipeModel.findById(id)
        if (!recipe) {
            return response.status(404).json({ success: false, message: "Recipe not found" })
        }
        return response.status(200).json({ success: true, message: "Recipe Founded", recipe: recipe })
    } catch (error) {
        console.log("ERROR => ", error);
        return response.status(500).json({
            success: false,
            message: error.message
        })
    }


}
export const UpdateReacipe = async (request, response) => {
    try {
        const { id } = request.params
        console.log(id);
        console.log(request.body);
        
        const {title,ingrediants,instructions}  = request.body
        const updatedData = {
            title,
            ingrediants,
            instructions
        }
        if (request.file) {
 updatedData.coverImage = request.file.filename           
        }
        const updatedRecipe = await recipeModel.findByIdAndUpdate(id,updatedData , { returnDocument: "after", })
        if (!updatedRecipe) {
            return response.status(404).json({ success: false, message: "Recipe not found" })
        }
        return response.status(200).json({ success: true, message: "Recipe updated successfully", recipe: updatedRecipe })

    } catch (error) {
        console.log("ERROR => ", error);
        return response.status(500).json({
            success: false,
            message: error.message
        })
    }

}
export const deleteReacipe = async (request, response) => {
    try {
        console.log(request.params.id);
        const { id } = request.params
        console.log(id);
        
        const deletedRecipe = await recipeModel.findByIdAndDelete(id)
        if (!deletedRecipe) {
            return response.status(404).json({ success: false, message: "Recipe not found" })
        }
        return response.status(200).json({ success: true, message: "recipe deleted successfully" })

    } catch (error) {
        console.log("ERROR => ", error);
        return response.status(500).json({
            success: false,
            message: error.message
        })
    }
}