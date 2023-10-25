import express from "express";

import uploadMedia from "@middlewares/multer";
import { createPostController } from "@controllers/postsControllers/createPostController";
import { validateToken } from "@middlewares/validateToken";
import { getPostsController } from "@controllers/postsControllers/getPostsController";

const postsRoutes = express.Router();

postsRoutes.post("/new", validateToken, uploadMedia.array("medias", 5), createPostController);
postsRoutes.get("/list", validateToken, getPostsController);

export default postsRoutes;
