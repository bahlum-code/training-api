const RecipeService = require("../services/recipe");

class RecipeController {
    create = async (req, res, next) => {

        try {
            const data = req.body;
            const response = await RecipeService.createRecipe(data);

            if (!response) return res.status(400).json({ success: false })

            return res
                .status(200)
                .json({ message: "Recipe created successfully", data: response });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating recipe'
            })
        }

    };

    fetchAll = async (req, res, next) => {
        const { message, data } = await RecipeService.getAllRecipes();

        return res
            .status(200)
            .json({ message, data });
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
