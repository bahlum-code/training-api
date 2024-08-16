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
    // Arrange
    const newNotification = {
      id: 1,
      notificationType: "Alert",
      message: "This is a test notification",
      userId: 1,
    };

    Notification.create.mockResolvedValue(newNotification);

    // Act
    const result = await notificationService.createNotification(
      newNotification
    );

    // Assert
    expect(result).toEqual(newNotification);
    expect(Notification.create).toHaveBeenCalledWith(newNotification);
  });

  it("should fetch a notification by ID", async () => {
    // Arrange
    const notification = {
      id: 1,
      notificationType: "Alert",
      message: "This is a test notification",
      userId: 1,
    };

    Notification.findByPk.mockResolvedValue(notification);

    // Act
    const result = await notificationService.getNotificationById(1);

    // Assert
    expect(result).toEqual(notification);
    expect(Notification.findByPk).toHaveBeenCalledWith(1);
  });

  it("should fetch all notifications", async () => {
    // Arrange
    const notifications = [
      {
        id: 1,
        notificationType: "Alert",
        message: "This is a test notification",
        userId: 1,
      },
    ];

    Notification.findAll.mockResolvedValue(notifications);

    // Act
    const result = await notificationService.getAllNotifications();

    // Assert
    expect(result).toEqual(notifications);
    expect(Notification.findAll).toHaveBeenCalled();
  });

  it("should update a notification by ID", async () => {
    // Arrange
    const updatedData = { message: "Updated notification message" };
    const updatedNotification = {
      id: 1,
      notificationType: "Alert",
      message: "Updated notification message",
      userId: 1,
    };

    Notification.update.mockResolvedValue([1]);
    Notification.findByPk.mockResolvedValue(updatedNotification);

    // Act
    const result = await notificationService.updateNotification(1, updatedData);

    // Assert
    expect(result).toEqual(updatedNotification);
    expect(Notification.update).toHaveBeenCalledWith(updatedData, {
      where: { id: 1 },
    });
    expect(Notification.findByPk).toHaveBeenCalledWith(1);
  });

  it("should delete a notification by ID", async () => {
    // Arrange
    const notificationId = 1;
    Notification.destroy.mockResolvedValue(notificationId); // Sequelize returns the number of affected rows

    // Act
    await notificationService.deleteNotification(1);

    // Assert
    expect(Notification.destroy).toHaveBeenCalledWith({
      where: { id: notificationId },
    });
  });
});
