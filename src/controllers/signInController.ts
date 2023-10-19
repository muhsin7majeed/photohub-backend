import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { signInSchema } from "../schemas/zod/auth.zod";
import { User } from "../models/usersModel";

export const signInController = async (req: Request, res: Response) => {
  try {
    const validatedUser = signInSchema.parse(req.body);
    const userExists = await User.findOne({ username: validatedUser.username });

    if (!userExists) {
      return res.status(401).json({ error: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(validatedUser.password, userExists.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const jwtSecret = process.env.JWT_SECRET || "";
    const token = jwt.sign({ userId: userExists._id }, jwtSecret, { expiresIn: "24h" });

    res.status(200).json({ message: "Welcome back!", username: userExists.username, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
