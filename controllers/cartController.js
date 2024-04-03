class CartController {
  create = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Cart created successfully", data: [] });
  };

  fetch = async (req, res, next) => {
    return res.status(200).json({ message: "Cart successfully", data: [] });
  };

  addItem = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Item added successfully", data: [] });
  };

  deleteItem = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Item removed successfully", data: [] });
  };

  delete = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Cart deleted successfully", data: [] });
  };

  update = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Cart updated successfully", data: [] });
  };
}

module.exports = new CartController();
