import express from "express";

import { validateToken } from "@middlewares/validateToken";
import { getUserInfoController } from "@controllers/usersControllers/getUserInfoController";
import { getUserPostsController } from "@controllers/usersControllers/getUserPostsController";

const usersRoutes = express.Router();

usersRoutes.get("/me", validateToken, getUserInfoController);
usersRoutes.get("/me/posts", validateToken, getUserPostsController);

export default usersRoutes;
