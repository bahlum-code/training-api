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

    User.create.mockResolvedValue(newUser);

    const result = await userService.createUser(newUser);
    expect(result).toEqual(newUser);
    expect(User.create).toHaveBeenCalledWith(newUser);
  });

  it("should fetch a user by ID", async () => {
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

    const result = await userService.getUserById(1);
    expect(result).toEqual(user);
    expect(User.findByPk).toHaveBeenCalledWith(1);
  });

  it("should fetch all users", async () => {
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
      // Add more users as needed
    ];

    User.findAll.mockResolvedValue(users);

    const result = await userService.getAllUsers();
    expect(result).toEqual(users);
    expect(User.findAll).toHaveBeenCalled();
  });

  // Test for updating a user by ID
  it("should update a user by ID", async () => {
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

    User.update.mockResolvedValue([1]); // Returns number of affected rows

    User.findByPk.mockResolvedValue(updatedUser);

    const result = await userService.updateUser(1, updatedData);

    expect(result).toEqual(updatedUser);
    expect(User.update).toHaveBeenCalledWith(updatedData, { where: { id: 1 } });
    expect(User.findByPk).toHaveBeenCalledWith(1);
  });

  it("should delete a user by ID", async () => {
    User.destroy.mockResolvedValue(1); // Sequelize returns the number of affected rows

    await userService.deleteUser(1);
    expect(User.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
  });
});
