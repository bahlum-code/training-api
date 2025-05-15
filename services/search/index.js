const { User } = require("../../models");

const searchDoctors = async (search) => {
  try {
    const user = await User.findDoctorsByFlexibleCriteria(search);
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error("Error fetching user: " + error.message);
  }
};


module.exports = {
    searchDoctors,
};
