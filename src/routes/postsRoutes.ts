import express from "express";
import { createPostController } from "@controllers/postsControllers/createPostController";
import { validateToken } from "@middlewares/validateToken";
import uploadMedia from "@middlewares/multer";

const postsRoutes = express.Router();

postsRoutes.post("/new", validateToken, uploadMedia.array("medias", 5), createPostController);

export default postsRoutes;
