import { recipeModel } from "../Schema/recipe.schema.js"

export const createReacipe = async (request, response) => {
    const { title, instructions, ingrediants } = request.body
    if (!title || !instructions || !ingrediants) {
        return response.status(400).json({ message: "All Fields Are Required" })
    }
    const recipe = await recipeModel.create({ title, instructions, ingrediants })
    return response.status(201).json({ message: "Recipe created successfully", recipe: recipe })
}
export const getAllReacipes = async (request, response) => {
    const allRecipes = await recipeModel.find()
    console.log(allRecipes);
    if (!allRecipes || allRecipes.length == 0) {
        return response.status(400).json({ message: "No recipes found " })
    }
    return response.status(200).json({ recipes: allRecipes })
}
export const getReacipeById = async (request, response) => {
    const { id } = request.params
    const recipe = await recipeModel.findById(id)
    if (!recipe) {
        return response.status(200).json({ message: "Recipe not found" })
    }
    return response.status(200).json({ message: "Recipe Founded", recipe: recipe })
}
export const UpdateReacipe =async (request, response) => {
    const {id} = request.params
   const updatedRecipe = await recipeModel.findByIdAndUpdate(id,request.body,{returnDocument: "after",})
    if (!updatedRecipe) {
        return response.status(404).json({ message: "Recipe not found" })
    }
    return response.status(200).json({ message: "Recipe updated successfully",recipe:updatedRecipe })

}
export const deleteReacipe = async (request, response) => {
    console.log(request.params.id);
    const { id } = request.params
    const deletedRecipe = await recipeModel.findByIdAndDelete(id)
    if (!deletedRecipe) {
        return response.status(404).json({ message: "Recipe not found" })
    }
    return response.status(200).json({ message: "recipe deleted successfully" })
}