import { Request } from "express";

interface User {
  userId: string;
  username: string;
  email?: string;
}

export interface CustomRequest extends Request {
  user?: User;
}
