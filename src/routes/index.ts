import express from "express";
import authRoutes from "./authRoutes";
import usersRoutes from "./usersRoutes";

const rootRoutes = express.Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/users", usersRoutes);

export default rootRoutes;
