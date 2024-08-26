"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Specialties",
      [
        {
          specialtyName: "Orthopedics",
          specialtyDescription: "Campo médico que trata enfermedades y lesiones del sistema musculoesquelético, incluyendo huesos, músculos, articulaciones y ligamentos, con enfoque en cirugía y rehabilitación.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialtyName: "Dermatology",
          specialtyDescription: "Disciplina médica que se dedica al estudio, diagnóstico y tratamiento de enfermedades de la piel, el cabello y las uñas, incluyendo afecciones como acné, psoriasis y cáncer de piel.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialtyName: "Cardiology",
          specialtyDescription: "Especialidad médica dedicada al diagnóstico y tratamiento de enfermedades del corazón y el sistema circulatorio, incluyendo hipertensión, arritmias y fallos cardíacos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialtyName: "Pediatrics",
          specialtyDescription: "Especialidad que se ocupa del cuidado de la salud de los niños, desde el nacimiento hasta la adolescencia, incluyendo prevención, diagnóstico y tratamiento de enfermedades infantiles.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialtyName: "Neurology",
          specialtyDescription: "Rama de la medicina que se centra en el estudio y tratamiento de trastornos del sistema nervioso, incluyendo el cerebro, la médula espinal y los nervios periféricos.",
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
    await queryInterface.bulkDelete("Specialties", null, {});
  },
};
