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
const doctorRoutes = require("./routes/doctorRoutes");
const specialtiesRoutes = require("./routes/specialtiesRoutes");
const searchRoutes = require("./routes/searchRoutes");

app.use(bodyParser.json()).use(cors());
require('dotenv').config();

//TODO: inversion of control
userRoutes(app);
paymentRoutes(app);
notificationRoutes(app);
doctorUnavailabilityRoutes(app);
doctorAvailabilityRoutes(app);
appointmentRoutes(app);
doctorRoutes(app);
specialtiesRoutes(app)
searchRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
