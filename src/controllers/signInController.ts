import { Request, Response } from "express";
import { signInSchema } from "../schemas/zod/auth.zod";

export const signInController = (req: Request, res: Response): void => {
  try {
    const validatedData = signInSchema.parse(req.body);

    res.json({ message: `Welcome ${validatedData.username}` });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
