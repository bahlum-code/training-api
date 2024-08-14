// services/payments/index.js

const { Payment } = require("../../models"); // Adjust path as needed

const createPayment = async (paymentData) => {
  try {
    const payment = await Payment.create(paymentData);
    return payment;
  } catch (error) {
    throw new Error("Error creating payment: " + error.message);
  }
};

const getPaymentById = async (id) => {
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) throw new Error("Payment not found");
    return payment;
  } catch (error) {
    throw new Error("Error fetching payment: " + error.message);
  }
};

const getAllPayments = async () => {
  try {
    const payments = await Payment.findAll();
    return payments;
  } catch (error) {
    throw new Error("Error fetching payments: " + error.message);
  }
};

const updatePayment = async (id, updateData) => {
  try {
    const [affectedRows] = await Payment.update(updateData, { where: { id } });
    if (affectedRows === 0) throw new Error("Payment not found");
    return await getPaymentById(id); // Return updated payment
  } catch (error) {
    throw new Error("Error updating payment: " + error.message);
  }
};

const deletePayment = async (id) => {
  try {
    const deletedRows = await Payment.destroy({ where: { id } });
    if (deletedRows === 0) throw new Error("Payment not found");
    return true;
  } catch (error) {
    throw new Error("Error deleting payment: " + error.message);
  }
};

module.exports = {
  createPayment,
  getPaymentById,
  getAllPayments,
  updatePayment,
  deletePayment,
};
