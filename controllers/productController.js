const ProductService = require("../services/product");

class ProductController {
  create = async (req, res, next) => {
    // const todos = await Todo.create({ ...req.body });

    return res
      .status(200)
      .json({ message: "Product created successfully", data: [] });
  };

  addProductsToDB = async (req, res, next) => {
    const products = await ProductService.addProductsToDB();

    if (products.alreadyExist) {
      return res.status(200).json(products);
    }

    return res
      .status(200)
      .json({ message: "Products added to DB successfully", data: products });
  };

  fetchAll = async (eq, res, next) => {
    const { message, data, statusCode } = await ProductService.fetchAll();

    return res
      .status(statusCode)
      .json({ data, message });
  };

  delete = async (req, res, next) => {
    const { id } = req.params;
    // const deletedTodo = await Todo.findByPk(id);
    // await Todo.destroy({ where: { id } });

    return res
      .status(200)
      .json({ message: "Product deleted successfully", data: [] });
  };

  fetch = async (req, res, next) => {
    const { id } = req.params;
    // const todos = await Todo.findByPk(id);

    return res
      .status(200)
      .json({ message: "Product fetched successfully", data: [] });
  };

  update = async (req, res, next) => {
    const { id } = req.params;
    // await Todo.update({ ...req.body }, { where: { id } });
    // const updatedTodos = await Todo.findByPk(id);

    return res
      .status(200)
      .json({ message: "Product updated successfully", data: [] });
  };
}

module.exports = new ProductController();
