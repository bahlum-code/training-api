const RecipeService = require("../services/recipe");

class RecipeController {
    create = async (req, res, next) => {
        const data = req.body;
        const response = await RecipeService.createRecipe(data);

        return res
            .status(200)
            .json({ message: "Recipe created successfully", data: response });
    };

    fetchAll = async (eq, res, next) => {
        const recipes = await RecipeService.getAllRecipes();

        return res.status(200).json({
            message: "Recipes fetched successfully",
            data: recipes,
        });
    };

    fetch = async (req, res, next) => {
        const { id } = req.params;
        const recipe = await RecipeService.getRecipe(id);

        return res
            .status(200)
            .json({ message: "Recipe fetched successfully", data: recipe });
    };

    update = async (req, res, next) => {
        const { id } = req.params;
        const data = req.body;
        const response = await RecipeService.updateRecipe(id, data);

        return res
            .status(200)
            .json({ message: "Recipe updated successfully", data: response });
    };

    delete = async (req, res, next) => {
        const { id } = req.params;
        const response = await RecipeService.deleteRecipe(id);

        return res
            .status(200)
            .json({ message: "Recipe deleted successfully", data: response });
    };
}

module.exports = new RecipeController();
