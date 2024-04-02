const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

app.use(bodyParser.json()).use(cors());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/recipes", recipeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
