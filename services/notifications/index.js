// services/notifications/index.js

const { Notification } = require("../../models"); // Adjust path as needed

const createNotification = async (notificationData) => {
  try {
    const notification = await Notification.create(notificationData);
    return notification;
  } catch (error) {
    throw new Error("Error creating notification: " + error.message);
  }
};

const getNotificationById = async (id) => {
  try {
    const notification = await Notification.findByPk(id);
    if (!notification) throw new Error("Notification not found");
    return notification;
  } catch (error) {
    throw new Error("Error fetching notification: " + error.message);
  }
};

const getAllNotifications = async () => {
  try {
    const notifications = await Notification.findAll();
    return notifications;
  } catch (error) {
    throw new Error("Error fetching notifications: " + error.message);
  }
};

const updateNotification = async (id, updateData) => {
  try {
    const [affectedRows] = await Notification.update(updateData, {
      where: { id },
    });
    if (affectedRows === 0) throw new Error("Notification not found");
    return await getNotificationById(id); // Return updated notification
  } catch (error) {
    throw new Error("Error updating notification: " + error.message);
  }
};

const deleteNotification = async (id) => {
  try {
    const deletedRows = await Notification.destroy({ where: { id } });
    if (deletedRows === 0) throw new Error("Notification not found");
    return true;
  } catch (error) {
    throw new Error("Error deleting notification: " + error.message);
  }
};

module.exports = {
  createNotification,
  getNotificationById,
  getAllNotifications,
  updateNotification,
  deleteNotification,
};
