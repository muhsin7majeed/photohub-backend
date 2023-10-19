import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { signUpSchema } from "../schemas/zod/auth.zod";
import { User } from "../models/usersModel";

export const signUpController = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedUser = signUpSchema.parse(req.body);
    const { username, password } = validatedUser;

    const hashedPassword = await bcrypt.hash(password, 10);
    const jwtSecret = process.env.JWT_SECRET || "";

    const newUser = new User({ username, password: hashedPassword });
    const token = jwt.sign(
      {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      jwtSecret,
      { expiresIn: "24h" }
    );

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", username: newUser.username, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
