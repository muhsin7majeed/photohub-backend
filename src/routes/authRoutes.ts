import express from "express";
import { signInController } from "../controllers/signInController";
import { signUpController } from "../controllers/signUpController";

const authRoutes = express.Router();

authRoutes.post("/signin", signInController);
authRoutes.post("/signup", signUpController);

export default authRoutes;
