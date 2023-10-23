import express from "express";

import { getUserInfoController } from "@controllers/usersControllers/getUserInfoController";
import { validateToken } from "@middlewares/validateToken";

const usersRoutes = express.Router();

usersRoutes.get("/me", validateToken, getUserInfoController);

export default usersRoutes;
