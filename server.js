const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json()).use(cors());
app.use("/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
