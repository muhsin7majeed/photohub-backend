import { Response } from "express";

import { CustomRequest } from "@_types/types";

export const getUserInfoController = async (req: CustomRequest, res: Response) => {
  try {
    res.status(201).json({ message: "me success", user: req.user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
