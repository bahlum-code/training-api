import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(bodyParser.json()).use(cors());
app.use("/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
