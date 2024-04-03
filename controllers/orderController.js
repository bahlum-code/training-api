const OrderService = require("../services/order");

class OrderController {
  create = async (req, res, next) => {
    const data = req.body;
    const order = await OrderService.createOrder(data);

    return res
      .status(200)
      .json({ message: "Order created successfully", data: order });
  };

  fetch = async (req, res, next) => {
    return res.status(200).json({ message: "Order successfully", data: [] });
  };

  fetchAll = async (req, res, next) => {
    return res
      .status(200)
      .json({ message: "All Orders successfully", data: [] });
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
