const appointmentService = require("./index");
const testServer = require("../../utils/testServer");
const appointmentRoutes = require("../../routes/appointmentRoutes");
const {
  Appointment,
  DoctorAvailability,
  DoctorUnavailability,
  DoctorBilling,
} = require("../../models");

const request = testServer(appointmentRoutes);

jest.mock("../../models", () => ({
  Appointment: {
    findOne: jest.fn(),
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(() => [
      { id: 1, name: "John Doe", appointmentDate: "2022-01-01" },
      { id: 2, name: "Jane Doe", appointmentDate: "2022-01-02" },
    ]),
    update: jest.fn(),
    destroy: jest.fn(),
  },
  DoctorAvailability: {
    findOne: jest.fn(),
  },
  DoctorUnavailability: {
    findOne: jest.fn(),
  },
  DoctorBilling: {
    findOne: jest.fn(),
  },
}));

describe("[ Services / Appointment ]  Create Appointment", () => {
  it("should throw an error if the doctor is not available on the selected date/time", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue(null); // Doctor is not available

    const appointmentData = {
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };

    // Act
    const promise = appointmentService.createAppointment(appointmentData);

    // Assert
    await expect(promise).rejects.toThrow(
      "The doctor is not available on the selected date/time."
    );
  });

  it("should throw an error if the doctor is unavailable due to a booking", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue({
      doctorId: 1,
      dayOfWeek: "Friday",
      startTime: "09:00:00",
      endTime: "17:00:00",
      isAvailable: true,
    });

    DoctorUnavailability.findOne.mockResolvedValue({
      doctorId: 1,
      startDate: new Date("2024-08-16"),
      endDate: new Date("2024-08-16"),
    });

    const appointmentData = {
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };

    // Act
    const promise = appointmentService.createAppointment(appointmentData);

    // Assert
    await expect(promise).rejects.toThrow(
      "The doctor is temporarily unavailable at the selected date/time. Please select a different time or date."
    );
  });

  it("should throw an error if there is already an appointment at the selected date/time", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue({
      doctorId: 1,
      dayOfWeek: "Friday",
      startTime: "09:00:00",
      endTime: "17:00:00",
      isAvailable: true,
    });

    DoctorUnavailability.findOne.mockResolvedValue(null);

    Appointment.findOne.mockResolvedValue({
      id: 1,
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    });

    const appointmentData = {
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };

    // Act
    const promise = appointmentService.createAppointment(appointmentData);

    // Assert
    await expect(promise).rejects.toThrow(
      "There is already an appointment for the doctor at the selected date/time."
    );
  });

  it("should create an appointment if all conditions are met", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue({
      doctorId: 1,
      dayOfWeek: "Friday",
      startTime: "09:00:00",
      endTime: "17:00:00",
      isAvailable: true,
    });

    DoctorUnavailability.findOne.mockResolvedValue(null);
    Appointment.findOne.mockResolvedValue(null);
    DoctorBilling.findOne.mockResolvedValue({
      doctorId: 1,
      totalAmount: 100.0,
    });

    const appointmentData = {
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };

    Appointment.create.mockResolvedValue(appointmentData);

    // Act
    const result = await appointmentService.createAppointment(appointmentData);

    // Assert
    expect(result).toEqual(appointmentData);
    expect(Appointment.create).toHaveBeenCalledWith(appointmentData);
  });

  it("should throw a generic error if something goes wrong", async () => {
    // Arrange
    DoctorAvailability.findOne.mockRejectedValue(new Error("Database error"));

    const appointmentData = {
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };
    // Act
    const result = appointmentService.createAppointment(appointmentData);

    // Assert
    await expect(result).rejects.toThrow("Error creating appointment:");
  });
});

describe("[ Services / Appointment ]  Update Appointment", () => {
  it("should throw an error if the doctor is not available on the selected date/time", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue(null); // The doctor is not available

    const appointmentData = {
      id: 1,
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };
    // Act
    const promise = appointmentService.updateAppointment(
      appointmentData.id,
      appointmentData
    );

    // Assert
    await expect(promise).rejects.toThrow(
      "The doctor is not available on the selected date/time."
    );
  });

  it("should throw an error if the doctor is unavailable due to a booking", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue({
      doctorId: 1,
      dayOfWeek: "Friday",
      startTime: "09:00:00",
      endTime: "17:00:00",
      isAvailable: true,
    });

    DoctorUnavailability.findOne.mockResolvedValue({
      doctorId: 1,
      startDate: new Date("2024-08-16"),
      endDate: new Date("2024-08-16"),
    });

    const appointmentData = {
      id: 1,
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 2,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };

    // Act
    const promise = appointmentService.updateAppointment(
      appointmentData.id,
      appointmentData
    );

    // Assert
    await expect(promise).rejects.toThrow(
      "The doctor is temporarily unavailable at the selected date/time. Please select a different time or date."
    );
  });

  it("should throw an error if there is already an appointment at the selected date/time", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue({
      doctorId: 1,
      dayOfWeek: "Friday",
      startTime: "09:00:00",
      endTime: "17:00:00",
      isAvailable: true,
    });

    DoctorUnavailability.findOne.mockResolvedValue(null);

    Appointment.findOne.mockResolvedValue({
      id: 2, // Otro ID diferente que indica conflicto de citas
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Existing appointment",
      total: 100.0,
    });

    const appointmentData = {
      id: 1, // ID de la cita que se está intentando actualizar
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };

    // Act
    const promise = appointmentService.updateAppointment(
      appointmentData.id,
      appointmentData
    );

    // Assert
    await expect(promise).rejects.toThrow(
      "There is already an appointment for the doctor at the selected date/time."
    );
  });

  it("should update the appointment if all conditions are met", async () => {
    // Arrange
    DoctorAvailability.findOne.mockResolvedValue({
      doctorId: 1,
      dayOfWeek: "Friday",
      startTime: "09:00:00",
      endTime: "17:00:00",
      isAvailable: true,
    });

    DoctorUnavailability.findOne.mockResolvedValue(null);

    Appointment.findOne.mockResolvedValue(null); // No hay conflicto de citas

    const appointmentData = {
      id: 1,
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment updated",
      total: 150.0,
    };

    Appointment.update.mockResolvedValue([1]); // Retorna que se actualizó correctamente

    const updatedAppointment = {
      ...appointmentData,
      notes: "Test appointment updated",
      total: 150.0,
    };

    Appointment.findByPk.mockResolvedValue(updatedAppointment);

    // Act
    const result = await appointmentService.updateAppointment(
      appointmentData.id,
      appointmentData
    );

    // Assert
    expect(result).toEqual(updatedAppointment);
    expect(Appointment.update).toHaveBeenCalledWith(appointmentData, {
      where: { id: appointmentData.id },
    });
  });

  it("should throw a generic error if something goes wrong during the update", async () => {
    // Arrange
    DoctorAvailability.findOne.mockRejectedValue(new Error("Database error"));

    const appointmentData = {
      id: 1,
      doctorId: 1,
      appointmentDate: "2024-08-16T10:00:00",
      userId: 1,
      status: "scheduled",
      notes: "Test appointment",
      total: 100.0,
    };

    // Act & Assert
    await expect(
      appointmentService.updateAppointment(appointmentData.id, appointmentData)
    ).rejects.toThrow("Error updating appointment:");
  });
});

describe("[ Routes / appointments ]", () => {
  it("should return a response with status 200", async () => {
    // Arrange
    const expected = 200;
    const endpoint = "/appointments";

    // Act
    const { status: result } = await request.get(endpoint);

    // Assert
    expect(result).toBe(expected);
  });

  it("should fetch all appointments", async () => {
    // Arrange
    const endpoint = "/appointments";
    const appointments = [
      { id: 1, name: "John Doe", appointmentDate: "2022-01-01" },
      { id: 2, name: "Jane Doe", appointmentDate: "2022-01-02" },
    ];

    //Appointment.findAll.mockResolvedValue(appointments);

    // Act
    const { body: result } = await request.get(endpoint);

    // Assert
    expect(result).toEqual(appointments);
    expect(Appointment.findAll).toHaveBeenCalledTimes(2);
  });

  it("should fetch a specific appointment by ID", async () => {
    // Arrange
    const appointmentId = "1";
    const endpoint = `/appointments/${appointmentId}`;
    const appointment = {
      id: 1,
      name: "John Doe",
      appointmentDate: "2022-01-01",
    };

    Appointment.findByPk.mockResolvedValue(appointment);

    // Act
    const { body: result } = await request.get(endpoint);

    // Assert
    expect(result).toEqual(appointment);
    expect(Appointment.findByPk).toHaveBeenCalledWith(appointmentId);
  });

  it("should delete an appointment by ID", async () => {
    // Arrange
    const appointmentId = 1;
    const endpoint = `/appointments/${appointmentId}`;

    Appointment.destroy.mockResolvedValue(appointmentId); // Sequelize returns the number of rows deleted
    // Act
    const { status } = await request.delete("/appointments/1");
    // Assert
    expect(status).toBe(204);
    expect(Appointment.destroy).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
});
