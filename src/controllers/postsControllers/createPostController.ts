import { Request, Response } from "express";

export const createPostController = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
