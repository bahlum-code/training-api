const models = require('../../models')
const Sequelize = require('sequelize');
const Recipe = models.Recipe;
const Op = Sequelize.Op;

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

    async getAllRecipes(query = "") {
        try {
            const recipes = await Recipe.findAll({
                where: query ? {
                    name: {
                        [Op.like]: `%${query}%`
                    }
                } : undefined
            });
            return { message: "Recipes fetched successfully: " + query, data: recipes };
        } catch (error) {
            throw error
        }
    }

    async getRecipe(recipeId) {
        try {
            const recipe = await Recipe.findByPk(recipeId);
            return { message: "Recipe fetched successfully", data: recipe };
        } catch (error) {
            throw error
        }
    }

    async updateRecipe(recipeId, data) { }

    async deleteRecipe(recipeId) {
        try {
            const recipe = await Recipe.findByPk(recipeId);
            if (!recipe) return false;

            await recipe.destroy();
            return true;
        } catch (error) {
            throw error
        }

    }
}

module.exports = new RecipeService();