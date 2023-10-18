import { z } from "zod";

const signInSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

const signUpSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export { signInSchema, signUpSchema };
