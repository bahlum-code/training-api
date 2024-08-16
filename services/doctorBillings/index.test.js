const doctorBillingsService = require("./index");
const { DoctorBilling } = require("../../models");

jest.mock("../../models", () => ({
  DoctorBilling: {
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("Doctor Billings Service", () => {
  it("should create a doctor billing", async () => {
    const newBilling = {
      id: 1,
      doctorId: 1,
      amount: 100,
    };

    DoctorBilling.create.mockResolvedValue(newBilling);

    const result = await doctorBillingsService.createDoctorBilling(newBilling);

    expect(result).toEqual(newBilling);
    expect(DoctorBilling.create).toHaveBeenCalledWith(newBilling);
  });
});
