const { User, Appointment, Specialty, DoctorBilling, DoctorAvailability } = require("../../models");
const { Op } = require("sequelize");

/**
 * Search for doctors by specialty, firstName, or lastName
 * @param {string} q - The search query string
 * @param {number} page - The page number for pagination
 * @param {number} limit - The number of results per page
 * @returns {Object} Search results with pagination information
 */
const searchDoctors = async (q, page = 1, limit = 10) => {
  try {
    page = parseInt(page);
    limit = parseInt(limit);
    const offset = (page - 1) * limit;
    
    const { count, rows } = await User.findAndCountAll({
      where: {
        role: "Doctor",
        [Op.or]: [
          { firstName: { [Op.like]: `%${q}%` } },
          { lastName: { [Op.like]: `%${q}%` } },
          { specialty: { [Op.like]: `%${q}%` } }
        ]
      },
      include: [
        { 
          model: Specialty, 
          attributes: ['id', 'specialtyName', 'specialtyDescription'] 
        },
        {
          model: Appointment,
          attributes: ['id', 'total'],
          required: false,
          limit: 1,
          order: [['createdAt', 'DESC']]
        }
      ],
      limit,
      offset,
      attributes: { 
        exclude: ['password'],
        include: ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'specialty', 'licenseNumber', 'clinicAddress']
      }
    });

    // Process the data to include appointment cost and schedule information
    const doctorsWithDetails = rows.map(doctor => {
      const doctorData = doctor.toJSON();
      
      // Get appointment cost from latest appointment or set default
      doctorData.appointmentCost = doctorData.Appointments && doctorData.Appointments.length > 0 
        ? doctorData.Appointments[0].total 
        : null;
      
      // Clean up the response
      delete doctorData.Appointments;
      
      return doctorData;
    });

    return {
      totalItems: count,
      items: doctorsWithDetails,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    throw new Error("Error searching doctors: " + error.message);
  }
};

/**
 * Get detailed information about a specific doctor by ID
 * @param {number} id - Doctor's ID
 * @returns {Object} Doctor details including availability and billing information
 */
const getDoctorById = async (id) => {
  try {
    // Find the doctor with all required relationships
    const doctor = await User.findOne({
      where: {
        id: id,
        role: "Doctor"
      },
      include: [
        { 
          model: Specialty, 
          attributes: ['id', 'specialtyName', 'specialtyDescription'] 
        },
        {
          model: DoctorAvailability,
          attributes: ['id', 'dayOfWeek', 'startTime', 'endTime', 'isAvailable'],
          required: false
        }
      ],
      attributes: { 
        exclude: ['password'],
        include: ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'specialty', 'licenseNumber', 'clinicAddress']
      }
    });

    if (!doctor) {
      return null;
    }

    // Get the doctor's billing information
    const billing = await DoctorBilling.findOne({
      where: { doctorId: id },
      attributes: ['totalAmount'],
      order: [['createdAt', 'DESC']]
    });

    // Transform the data
    const doctorData = doctor.toJSON();
    
    // Format the doctor's information
    const result = {
      id: doctorData.id,
      fullName: `${doctorData.firstName} ${doctorData.lastName}`,
      specialty: doctorData.specialty,
      specialtyDetails: doctorData.Specialty ? {
        id: doctorData.Specialty.id,
        name: doctorData.Specialty.specialtyName,
        description: doctorData.Specialty.specialtyDescription
      } : null,
      contactInfo: {
        email: doctorData.email,
        phoneNumber: doctorData.phoneNumber
      },
      clinicAddress: doctorData.clinicAddress,
      licenseNumber: doctorData.licenseNumber,
      appointmentCost: billing ? billing.totalAmount : null,
      availability: doctorData.DoctorAvailabilities ? 
        doctorData.DoctorAvailabilities.map(slot => ({
          id: slot.id,
          day: slot.dayOfWeek,
          startTime: slot.startTime,
          endTime: slot.endTime,
          isAvailable: slot.isAvailable
        })) : []
    };

    return result;
  } catch (error) {
    throw new Error("Error fetching doctor details: " + error.message);
  }
};

module.exports = {
  searchDoctors,
  getDoctorById
}; 