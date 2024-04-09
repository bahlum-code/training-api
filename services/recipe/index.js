const models = require('../../models')
const Recipe = models.Recipe;

class RecipeService {
    async createRecipe(data) {

        try {
            const newRecipe = {}

            newRecipe.name = data.name
            newRecipe.ingredients = data.ingredients
            newRecipe.image = data.image
            newRecipe.source = data.source

            const result = await Recipe.create(newRecipe)

            return result;

        } catch (error) {
            console.log('Error', error);
            return false;
        }
    }

    async getAllRecipes() {
        try {
            const recipes = await Recipe.findAll();
            return { message: "Recipes fetched successfully", data: recipes };
        } catch (error) {
            return { message: "Error fetching recipes", error };
        }
    }

    async getRecipe(recipeId) { }

    async updateRecipe(recipeId, data) { }

    async deleteRecipe(recipeId) { }
}

module.exports = new RecipeService();