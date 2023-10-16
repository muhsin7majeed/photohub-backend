import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import connectDB from "./config/db.js";

dotenv.config();
const app = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signin", (req, res) => {
  res.send(`welcome ${req.body.username}`);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}/`);
});
