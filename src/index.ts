import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import connectDB from "./config/db";
import rootRoutes from "./routes";

dotenv.config();
const app = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", rootRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}/`);
});
