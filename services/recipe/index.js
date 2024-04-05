const models = require('../../models')
const Recipe = models.Recipe;

class RecipeService {
    async createRecipe(data) {
        console.log('crear', data)
        try {
            const newRecipe = {}

            newRecipe.name = data.name
            newRecipe.ingredients = data.ingredients
            newRecipe.image = data.image
            newRecipe.source = data.source

            const result = await Recipe.create(newRecipe)

            return true

        } catch (error) {
            console.log('Error', error);
            return false;
        }
     }
    
    async getAllRecipes() { }

    async getRecipe(recipeId) { }

    async updateRecipe(recipeId, data) { }

    async deleteRecipe(recipeId) {  }
}

module.exports = new RecipeService();