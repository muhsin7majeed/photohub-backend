import { Request, Response, NextFunction } from "express";

const requiredEnvVars = ["JWT_SECRET", "MONGODB_URL"];

const checkEnvVars = () => {
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      console.error(`Missing environment variable: ${envVar}`);
      process.exit(1);
    }
  }
};

export default checkEnvVars;
