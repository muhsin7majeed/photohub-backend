import { Response, Request } from "express";
import { Post } from "@models/postsModel";

export const getUserPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();

    console.log(posts);

    res.status(200).json({ posts: posts });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
