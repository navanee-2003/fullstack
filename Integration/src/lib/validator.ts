import { z } from "zod";

export const EventFormSchema = z.object({
  title: z.string().min(3, "Title must be atlest 3 characters"),
  category: z.string(),
  instructions: z
    .string()
    .min(3, "Description must be atlest 3 characters")
    .max(100, "less than 100"),
    location: z.string(),
    dateTime: z.date(),
    proposedBudget: z.string(),
});

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Must be a valid email' }),
  password: z.string()
});

export const RegisterFormSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Must be a valid email' }),
  password: z.string(),
  role : z.string()
});