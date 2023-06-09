import { z } from "zod";

const userRequestSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.number(),
  password: z.string(),
});

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.number(),
  created_at: z.date(),
});

const userUpdateSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.number().optional(),
});

const userListSchema = z.array(userSchema);

const loginScherma = z.object({
  email: z.string(),
  password: z.string(),
});

export {
  userRequestSchema,
  userSchema,
  userListSchema,
  userUpdateSchema,
  loginScherma,
};
