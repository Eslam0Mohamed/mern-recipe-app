import { recipeModel } from "../Schema/recipe.schema.js"


export const getAllReacipes = async (request, response) => {
    try {

        const allRecipes = await recipeModel.find()

        console.log(allRecipes);

        return response.status(200).json({ message: true, recipes: allRecipes })

    } catch (error) {

        console.log("ERROR => ", error);

        return response.status(500).json({
            message: error.message
        })
    }
}


export const createReacipe = async (request, response) => {
    try {
        const { title, instructions, ingrediants } = request.body
        if (!title || !instructions || !ingrediants) {
            return response.status(400).json({ message: "All Fields Are Required" })
        }
        const recipe = await recipeModel.create({ title, instructions, ingrediants,coverImage:request.file.filename })
        return response.status(201).json({ message: "Recipe created successfully", recipe: recipe })
    } catch (error) {
        console.log("ERROR => ", error);
        return response.status(500).json({
            message: error.message
        })
    }

}
export const getReacipeById = async (request, response) => {
    try {
        const { id } = request.params
        const recipe = await recipeModel.findById(id)
        if (!recipe) {
            return response.status(200).json({ message: "Recipe not found" })
        }
        return response.status(200).json({ message: "Recipe Founded", recipe: recipe })
    } catch (error) {
        console.log("ERROR => ", error);
        return response.status(500).json({
            message: error.message
        })
    }


}
export const UpdateReacipe = async (request, response) => {
    try {
        const { id } = request.params
        const updatedRecipe = await recipeModel.findByIdAndUpdate(id, request.body, { returnDocument: "after", })
        if (!updatedRecipe) {
            return response.status(404).json({ message: "Recipe not found" })
        }
        return response.status(200).json({ message: "Recipe updated successfully", recipe: updatedRecipe })

    } catch (error) {
        console.log("ERROR => ", error);
        return response.status(500).json({
            message: error.message
        })
    }

}
export const deleteReacipe = async (request, response) => {
    try {
        console.log(request.params.id);
        const { id } = request.params
        const deletedRecipe = await recipeModel.findByIdAndDelete(id)
        if (!deletedRecipe) {
            return response.status(404).json({ message: "Recipe not found" })
        }
        return response.status(200).json({ message: "recipe deleted successfully" })
        
    } catch (error) {
         console.log("ERROR => ", error);
         return response.status(500).json({
        message: error.message
        })
    }
}