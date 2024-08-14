// controllers/notificationController.js
const { Notification } = require("../models");

class NotificationController {
  create = async (req, res, next) => {
    try {
      const notification = await Notification.create(req.body);
      return res.status(201).json(notification);
    } catch (error) {
      next(error);
    }
  };

  fetch = async (req, res, next) => {
    try {
      const notification = await Notification.findByPk(req.params.id);
      if (!notification)
        return res.status(404).json({ message: "Notification not found" });
      return res.status(200).json(notification);
    } catch (error) {
      next(error);
    }
  };

  fetchAll = async (req, res, next) => {
    try {
      const notifications = await Notification.findAll();
      return res.status(200).json(notifications);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const notification = await Notification.findByPk(req.params.id);
      if (!notification)
        return res.status(404).json({ message: "Notification not found" });
      await notification.destroy();
      return res
        .status(200)
        .json({ message: "Notification deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const notification = await Notification.findByPk(req.params.id);
      if (!notification)
        return res.status(404).json({ message: "Notification not found" });
      await notification.update(req.body);
      return res.status(200).json(notification);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new NotificationController();
