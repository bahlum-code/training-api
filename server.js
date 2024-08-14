const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const doctorAvailabilityRoutes = require("./routes/doctorAvailabilityRoutes");
const doctorUnavailabilityRoutes = require("./routes/doctorUnavailabilityRoutes");

app.use(bodyParser.json()).use(cors());

app.use("/users", userRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/payments", paymentRoutes);
app.use("/notifications", notificationRoutes);
app.use("/doctor-availabilities", doctorAvailabilityRoutes);
app.use("/doctor-unavailabilities", doctorUnavailabilityRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
