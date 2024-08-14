"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phoneNumber: "123-456-7890",
          password: "hashedpassword", // Ensure to use hashed passwords in real applications
          role: "User",
          specialty: null,
          licenseNumber: null,
          clinicAddress: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          phoneNumber: "098-765-4321",
          password: "hashedpassword",
          role: "Doctor",
          specialty: "Cardiology",
          licenseNumber: "D123456",
          clinicAddress: "123 Heart Lane, Cardio City",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Alice",
          lastName: "Johnson",
          email: "alice.johnson@example.com",
          phoneNumber: "456-789-0123",
          password: "hashedpassword",
          role: "User",
          specialty: null,
          licenseNumber: null,
          clinicAddress: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bob",
          lastName: "Brown",
          email: "bob.brown@example.com",
          phoneNumber: "789-012-3456",
          password: "hashedpassword",
          role: "Doctor",
          specialty: "Neurology",
          licenseNumber: "D654321",
          clinicAddress: "456 Brain Blvd, Neuro Town",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Charlie",
          lastName: "Davis",
          email: "charlie.davis@example.com",
          phoneNumber: "012-345-6789",
          password: "hashedpassword",
          role: "User",
          specialty: null,
          licenseNumber: null,
          clinicAddress: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Diana",
          lastName: "Miller",
          email: "diana.miller@example.com",
          phoneNumber: "345-678-9012",
          password: "hashedpassword",
          role: "Doctor",
          specialty: "Pediatrics",
          licenseNumber: "D789012",
          clinicAddress: "789 Child St, Pediatric City",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Eve",
          lastName: "Wilson",
          email: "eve.wilson@example.com",
          phoneNumber: "678-901-2345",
          password: "hashedpassword",
          role: "User",
          specialty: null,
          licenseNumber: null,
          clinicAddress: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Frank",
          lastName: "Moore",
          email: "frank.moore@example.com",
          phoneNumber: "901-234-5678",
          password: "hashedpassword",
          role: "Doctor",
          specialty: "Orthopedics",
          licenseNumber: "D890123",
          clinicAddress: "123 Bone Rd, Orthopedic City",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Grace",
          lastName: "Taylor",
          email: "grace.taylor@example.com",
          phoneNumber: "234-567-8901",
          password: "hashedpassword",
          role: "User",
          specialty: null,
          licenseNumber: null,
          clinicAddress: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Henry",
          lastName: "Anderson",
          email: "henry.anderson@example.com",
          phoneNumber: "567-890-1234",
          password: "hashedpassword",
          role: "Doctor",
          specialty: "Dermatology",
          licenseNumber: "D901234",
          clinicAddress: "456 Skin Ave, Derm City",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ivy",
          lastName: "Thomas",
          email: "ivy.thomas@example.com",
          phoneNumber: "890-123-4567",
          password: "hashedpassword",
          role: "User",
          specialty: null,
          licenseNumber: null,
          clinicAddress: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
