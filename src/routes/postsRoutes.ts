import express from "express";
import { createPostController } from "@controllers/postsControllers/createPostController";
import { validateToken } from "@middlewares/validateToken";

const postsRoutes = express.Router();

postsRoutes.get("/posts/new", validateToken, createPostController);

export default postsRoutes;
