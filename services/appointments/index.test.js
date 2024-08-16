const request = require("supertest");
const apppointmentService = require("./index");
const { Appointment } = require("../../models");
const app = require("../../server");

jest.mock("../../models", () => ({
  Appointment: {
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("Appointment Endpoints", () => {
  it("should fetch all appointments", async () => {
    const res = await request(app).get("/appointments").send();

    const appointments = [
      {
        id: 1,
        date: "2021-09-01",
        time: "10:00:00",
        patientId: 1,
        doctorId: 1,
      },
      {
        id: 2,
        date: "2021-09-02",
        time: "11:00:00",
        patientId: 2,
        doctorId: 2,
      },
    ];

    Appointment.findAll.mockResolvedValue(appointments);

    const result = await apppointmentService.getAllAppointments();

    expect(result).toEqual(appointments);
    expect(Appointment.findAll).toHaveBeenCalledTimes(1);
    expect(res.statusCode).toEqual(201);
  });
});

describe("Appointment Service", () => {});
