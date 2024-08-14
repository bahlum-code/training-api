const notificationService = require("../../services/notifications");
const { Notification } = require("../../models");

// Mock the Notification model methods
jest.mock("../../models", () => ({
  Notification: {
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("Notification Service", () => {
  it("should create a notification", async () => {
    const newNotification = {
      id: 1,
      notificationType: "Alert",
      message: "This is a test notification",
      userId: 1,
    };

    Notification.create.mockResolvedValue(newNotification);

    const result = await notificationService.createNotification(
      newNotification
    );
    expect(result).toEqual(newNotification);
    expect(Notification.create).toHaveBeenCalledWith(newNotification);
  });

  it("should fetch a notification by ID", async () => {
    const notification = {
      id: 1,
      notificationType: "Alert",
      message: "This is a test notification",
      userId: 1,
    };

    Notification.findByPk.mockResolvedValue(notification);

    const result = await notificationService.getNotificationById(1);
    expect(result).toEqual(notification);
    expect(Notification.findByPk).toHaveBeenCalledWith(1);
  });

  it("should fetch all notifications", async () => {
    const notifications = [
      {
        id: 1,
        notificationType: "Alert",
        message: "This is a test notification",
        userId: 1,
      },
      // Add more notifications as needed
    ];

    Notification.findAll.mockResolvedValue(notifications);

    const result = await notificationService.getAllNotifications();
    expect(result).toEqual(notifications);
    expect(Notification.findAll).toHaveBeenCalled();
  });

  it("should update a notification by ID", async () => {
    const updatedData = { message: "Updated notification message" };
    const updatedNotification = {
      id: 1,
      notificationType: "Alert",
      message: "Updated notification message",
      userId: 1,
    };

    Notification.update.mockResolvedValue([1]);
    Notification.findByPk.mockResolvedValue(updatedNotification);

    const result = await notificationService.updateNotification(1, updatedData);
    expect(result).toEqual(updatedNotification);
    expect(Notification.update).toHaveBeenCalledWith(updatedData, {
      where: { id: 1 },
    });
    expect(Notification.findByPk).toHaveBeenCalledWith(1);
  });

  it("should delete a notification by ID", async () => {
    Notification.destroy.mockResolvedValue(1); // Sequelize returns the number of affected rows

    await notificationService.deleteNotification(1);
    expect(Notification.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
  });
});
