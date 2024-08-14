// services/doctorBillings/index.js

const { DoctorBilling } = require("../../models"); // Adjust path as needed

const createDoctorBilling = async (billingData) => {
  try {
    const billing = await DoctorBilling.create(billingData);
    return billing;
  } catch (error) {
    throw new Error("Error creating doctor billing: " + error.message);
  }
};

const getDoctorBillingById = async (id) => {
  try {
    const billing = await DoctorBilling.findByPk(id);
    if (!billing) throw new Error("Doctor billing not found");
    return billing;
  } catch (error) {
    throw new Error("Error fetching doctor billing: " + error.message);
  }
};

const getAllDoctorBillings = async () => {
  try {
    const billings = await DoctorBilling.findAll();
    return billings;
  } catch (error) {
    throw new Error("Error fetching doctor billings: " + error.message);
  }
};

const updateDoctorBilling = async (id, updateData) => {
  try {
    const [affectedRows] = await DoctorBilling.update(updateData, {
      where: { id },
    });
    if (affectedRows === 0) throw new Error("Doctor billing not found");
    return await getDoctorBillingById(id); // Return updated billing
  } catch (error) {
    throw new Error("Error updating doctor billing: " + error.message);
  }
};

const deleteDoctorBilling = async (id) => {
  try {
    const deletedRows = await DoctorBilling.destroy({ where: { id } });
    if (deletedRows === 0) throw new Error("Doctor billing not found");
    return true;
  } catch (error) {
    throw new Error("Error deleting doctor billing: " + error.message);
  }
};

module.exports = {
  createDoctorBilling,
  getDoctorBillingById,
  getAllDoctorBillings,
  updateDoctorBilling,
  deleteDoctorBilling,
};
