import { Response } from "express";

import { CustomRequest } from "@_types/types";
import { createPostSchema } from "@schemas/zod/post.zod";
import { Post } from "@models/postsModel";

export interface CreatePostCustomRequest extends CustomRequest {
  body: {
    tags?: string;
    location?: string;
    description?: string;
  };
}

export const createPostController = async (req: CreatePostCustomRequest, res: Response) => {
  try {
    const validatedPost = createPostSchema.parse({ ...req.body, tags: JSON.parse(req.body.tags || "") });

    // TODO: Update path with base URL
    const medias = Array.isArray(req.files) ? req.files.map((file) => file.path) : [];

    const newPost = new Post({
      user: req.user?.userId,
      medias: medias,
      location: validatedPost.location,
      description: validatedPost.description,
      tags: validatedPost.tags,
    });

    newPost.save();

    res.status(201).json({ message: "New post created", post: newPost });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
