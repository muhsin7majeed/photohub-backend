import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { CustomRequest } from "../types/types";

export const getUserInfoController = async (req: CustomRequest, res: Response) => {
  try {
    res.status(201).json({ message: "me success", user: req.user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
