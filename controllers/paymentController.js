// controllers/paymentController.js

const paymentService = require("../services/payments");

class PaymentController {
  // Create a new payment
  create = async (req, res) => {
    try {
      const payment = await paymentService.createPayment(req.body);
      res.status(201).json(payment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Fetch a single payment by ID
  fetch = async (req, res) => {
    try {
      const payment = await paymentService.getPaymentById(req.params.id);
      res.status(200).json(payment);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  // Fetch all payments
  fetchAll = async (req, res) => {
    try {
      const payments = await paymentService.getAllPayments();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update a payment by ID
  update = async (req, res) => {
    try {
      const payment = await paymentService.updatePayment(
        req.params.id,
        req.body
      );
      res.status(200).json(payment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a payment by ID
  delete = async (req, res) => {
    try {
      await paymentService.deletePayment(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new PaymentController();
