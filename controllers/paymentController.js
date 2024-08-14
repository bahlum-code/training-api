// controllers/paymentController.js
const { Payment } = require("../models");

class PaymentController {
  create = async (req, res, next) => {
    try {
      const payment = await Payment.create(req.body);
      return res.status(201).json(payment);
    } catch (error) {
      next(error);
    }
  };

  fetch = async (req, res, next) => {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment)
        return res.status(404).json({ message: "Payment not found" });
      return res.status(200).json(payment);
    } catch (error) {
      next(error);
    }
  };

  fetchAll = async (req, res, next) => {
    try {
      const payments = await Payment.findAll();
      return res.status(200).json(payments);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment)
        return res.status(404).json({ message: "Payment not found" });
      await payment.destroy();
      return res.status(200).json({ message: "Payment deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment)
        return res.status(404).json({ message: "Payment not found" });
      await payment.update(req.body);
      return res.status(200).json(payment);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new PaymentController();
