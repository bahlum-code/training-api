const { Op } = require("sequelize");

const { User, DoctorBilling, DoctorAvailability } = require("../../models");

const search = async (query) => {
  try {
    const results = await User.findAll({
      attributes: [
        "firstName",
        "lastName",
        "specialty",
        "clinicAddress",
        "phoneNumber",
      ],
      include: [
        {
          model: DoctorBilling,
          as: "doctorBilling",
          attributes: ["totalAmount"],
        },
        {
          model: DoctorAvailability,
          as: "doctorAvailability",
          attributes: ["dayOfWeek", "startTime", "endTime"],
        },
      ],
      where: {
        role: "Doctor",
        [Op.or]: {
          firstName: {
            [Op.like]: `%${query}%`,
          },
          lastName: {
            [Op.like]: `%${query}%`,
          },
          specialty: {
            [Op.like]: `%${query}%`,
          },
        },
      },
    });
    return results;
  } catch (error) {
    throw new Error("Error searching users: " + error.message);
  }
};

module.exports = {
  search,
};
