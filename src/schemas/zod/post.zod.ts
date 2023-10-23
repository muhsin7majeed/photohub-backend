import { z } from "zod";

const createPostSchema = z.object({
  location: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()),
});

export { createPostSchema };
