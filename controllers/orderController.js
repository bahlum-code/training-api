class OrderController {
  create = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Order created successfully", data: [] });
  };

  fetch = async (req, res, next) => {
    return res.status(200).json({ message: "Order successfully", data: [] });
  };

  delete = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Order deleted successfully", data: [] });
  };

  update = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "Order deleted successfully", data: [] });
  };
}

module.exports = new OrderController();
