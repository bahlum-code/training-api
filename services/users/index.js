// services/users/index.js

const { User } = require("../../models"); // Adjust path as needed

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error("Error fetching user: " + error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

const updateUser = async (id, updateData) => {
  try {
    const [affectedRows] = await User.update(updateData, { where: { id } });
    if (affectedRows === 0) throw new Error("User not found");
    return await getUserById(id); // Return updated user
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

const deleteUser = async (id) => {
  try {
    const deletedRows = await User.destroy({ where: { id } });
    if (deletedRows === 0) throw new Error("User not found");
    return true;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
