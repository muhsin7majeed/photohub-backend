import express from "express";
import authRoutes from "./authRoutes";
import usersRoutes from "./usersRoutes";
import postsRoutes from "./postsRoutes";

const rootRoutes = express.Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/users", usersRoutes);
rootRoutes.use("/posts", postsRoutes);

export default rootRoutes;
