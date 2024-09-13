const { where, Op } = require("sequelize");
const { User, DoctorBilling, DoctorAvailability } = require("../../models");


// Servicio de búsqueda de doctores por nombre, apellido o especialidad
const getDoctorByQuery = async (query) => {
  try {
    // Realizar la búsqueda en la base de datos usando Sequelize
    let conditions = {};

    conditions.where = { // Buscar por nombre, apellido o especialidad
      role: "Doctor",
      [Op.or]: [
        { firstName: { [Op.like]: `%${query}%` } },
        { lastName: { [Op.like]: `%${query}%` } },
        { specialty: { [Op.like]: `%${query}%` } }
      ]
    };
    // Incluir modelo de citas para obtener costo y horario
    conditions.include = [
      {
        model: DoctorBilling,
        attributes: ['totalAmount']
      },
      {
        model: DoctorAvailability,
        attributes: ['dayOfWeek', 'startTime', 'endTime']
      }
    ]
    const doctors = await User.findAll(conditions);

    return doctors; // Retornar los doctores encontrados
  } catch (error) {
    console.error(error); 
    throw new Error('Error en la búsqueda');
  }
};

const getAllDoctors = async () => {
  try {
    const doctors = await User.findAll({
      where: { role: "Doctor" },
      include: [
        {
          model: DoctorBilling,
          attributes: ['totalAmount']
        },
        {
          model: DoctorAvailability,
          attributes: ['dayOfWeek', 'startTime', 'endTime']
        }
      ]
    });
    return doctors;
  } catch (error) {
    throw new Error("Error fetching doctors: " + error.message);
  }
};

module.exports = {
  getDoctorByQuery,
  getAllDoctors,
};
