import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "@config/db";
import rootRoutes from "@routes/index";
import checkEnvVars from "@utils/checkEnvVars";
// import path from "path";
// import { validateToken } from "@middlewares/validateToken";

dotenv.config();

checkEnvVars();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("uploads"));

app.use("/", rootRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}/`);
});
