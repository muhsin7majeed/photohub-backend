import express from "express";

import { signInController } from "@controllers/authControllers/signInController";
import { signUpController } from "@controllers/authControllers/signUpController";

const authRoutes = express.Router();

authRoutes.post("/signin", signInController);
authRoutes.post("/signup", signUpController);

export default authRoutes;
