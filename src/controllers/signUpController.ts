import { Request, Response } from "express";
import { signUpSchema } from "../schemas/zod/auth.zod";

export const signUpController = (req: Request, res: Response): void => {
  try {
    const validatedData = signUpSchema.parse(req.body);

    res.json({ message: `Welcome ${validatedData.username}` });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
