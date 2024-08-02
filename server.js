const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const userRoutes = require("./routes/userRoutes");
const rolesRoutes = require("./routes/rolesRoutes");
const billingRoutes = require("./routes/billingRoutes");
const scheduleRotes = require("./routes/schedulesRoutes")

app.use(bodyParser.json()).use(cors());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/recipes", recipeRoutes);
app.use("/user", userRoutes);
app.use("/roles", rolesRoutes)
app.use("/billing", billingRoutes);
app.use("/citas", scheduleRotes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
