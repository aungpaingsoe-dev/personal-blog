import { prisma } from "@/prisma/prisma";
import { z } from "zod";

export const useRegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long." }),
    email: z
      .string()
      .email({ message: "Invalid email address." })
      .min(1, { message: "Email is requried" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    passwordConfirm: z
      .string()
      .min(1, { message: "Password confirm is required" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords must match.",
    path: ["passwordConfirm"],
  });

export const useLoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .min(1, { message: "Email is required" }),
  password: z.string().min(1, "Password is required"),
});

export type LoginInput = z.infer<typeof useLoginSchema>;
export type RegisterInput = z.infer<typeof useRegisterSchema>;
