const userService = require("../../services/users");
const { User } = require("../../models");

// Mock the User model methods
jest.mock("../../models", () => ({
  User: {
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("User Service", () => {
  it("should create a user", async () => {
    // Arrange
    const newUser = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      password: "password123",
      role: "User",
      specialty: null,
      licenseNumber: null,
      clinicAddress: null,
    };

    const newUser2 = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      password: "password123",
      role: "User",
      specialty: null,
      licenseNumber: null,
      clinicAddress: null,
      status: "active",
    };

    User.create.mockResolvedValue(newUser);

    // Act
    const result = await userService.createUser(newUser2);

    // Assert
    expect(result).toEqual(newUser);
    expect(User.create).toHaveBeenCalledWith(newUser2);
  });

  it("should fetch a user by ID", async () => {
    // Arrange
    const user = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      password: "password123",
      role: "User",
      specialty: null,
      licenseNumber: null,
      clinicAddress: null,
    };

    User.findByPk.mockResolvedValue(user);

    // Act
    const result = await userService.getUserById(1);

    // Assert
    expect(result).toEqual(user);
    expect(User.findByPk).toHaveBeenCalledWith(1);
  });

  it("should fetch all users", async () => {
    // Arrange
    const users = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "1234567890",
        password: "password123",
        role: "User",
        specialty: null,
        licenseNumber: null,
        clinicAddress: null,
      },
    ];

    User.findAll.mockResolvedValue(users);

    // Act
    const result = await userService.getAllUsers();

    // Assert
    expect(result).toEqual(users);
    expect(User.findAll).toHaveBeenCalled();
  });

  it("should update a user by ID", async () => {
    // Arrange
    const updatedData = { lastName: "Smith" };
    const updatedUser = {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      password: "password123",
      role: "User",
      specialty: null,
      licenseNumber: null,
      clinicAddress: null,
    };

    User.update.mockResolvedValue([1]); // Sequelize returns the number of affected rows
    User.findByPk.mockResolvedValue(updatedUser);

    // Act
    const result = await userService.updateUser(1, updatedData);

    // Assert
    expect(result).toEqual(updatedUser);
    expect(User.update).toHaveBeenCalledWith(updatedData, { where: { id: 1 } });
    expect(User.findByPk).toHaveBeenCalledWith(1);
  });

  it("should delete a user by ID", async () => {
    // Arrange
    const userId = 1;
    User.destroy.mockResolvedValue(userId); // Sequelize returns the number of affected rows

    // Act
    await userService.deleteUser(userId);

    // Assert
    expect(User.destroy).toHaveBeenCalledWith({ where: { id: userId } });
  });
});
