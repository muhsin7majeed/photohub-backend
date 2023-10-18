import express from "express";
import authRoutes from "./authRoutes";

const rootRoutes = express.Router();

rootRoutes.use("/auth", authRoutes);

export default rootRoutes;
