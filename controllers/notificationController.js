// controllers/notificationController.js

const notificationService = require("../services/notifications");

class NotificationController {
  // Create a new notification
  create = async (req, res) => {
    try {
      const notification = await notificationService.createNotification(
        req.body
      );
      res.status(201).json(notification);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Fetch a single notification by ID
  fetch = async (req, res) => {
    try {
      const notification = await notificationService.getNotificationById(
        req.params.id
      );
      res.status(200).json(notification);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  // Fetch all notifications
  fetchAll = async (req, res) => {
    try {
      const notifications = await notificationService.getAllNotifications();
      res.status(200).json(notifications);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update a notification by ID
  update = async (req, res) => {
    try {
      const notification = await notificationService.updateNotification(
        req.params.id,
        req.body
      );
      res.status(200).json(notification);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a notification by ID
  delete = async (req, res) => {
    try {
      await notificationService.deleteNotification(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new NotificationController();
