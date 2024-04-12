const RecipeService = require("../services/recipe");

class RecipeController {
    create = async (req, res, next) => {

        try {
            const data = req.body;
            const response = await RecipeService.createRecipe(data);

            if (!response) return res.status(400).json({ success: false })

            return res
                .status(200)
                .json({ message: "Recipe created successfully", data: response , success: true });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating recipe'
            })
        }

    };

    fetchAll = async (req, res, next) => {
        try {
            const { message, data } = await RecipeService.getAllRecipes();
            return res
                .status(200)
                .json({ message, data });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error fetching recipes'
            })
        }
    };

    fetch = async (req, res, next) => {
        const { id } = req.params;

        try {
            const { message, data } = await RecipeService.getRecipe(id);
            return res
                .status(200)
                .json({ message, data });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error fetching recipe'
            })
        }
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

        try {
            const recipe = await RecipeService.deleteRecipe(id);
            if (!recipe) return res.status(400).json({ success: false })

            return res
                .status(200)
                .json({ message: "Recipe deleted successfully" });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting recipe'
            })
        }
    };
}

module.exports = new RecipeController();
