"use server";

import { db } from "@/supabase";
import z from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { State } from "./definitions";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

const SignUpSchema = z.object({
  username: z.string().min(1, { message: "Enter your username" }),
  email: z.string().email({ message: "Enter your email" }),
  password: z.string().min(6, { message: "Enter a password" }),
});
const LogInSchema = SignUpSchema.omit({ username: true });

export async function authenticate(
  prevState: State | undefined,
  formData: FormData
): Promise<State | undefined> {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const parsedFormData = LogInSchema.safeParse(data);
  if (!parsedFormData.success) {
    return {
      message: "Incorrect credentials.",
      errors: parsedFormData.error.flatten().fieldErrors,
    };
  }
  const parsedData = parsedFormData.data;
  try {
    await signIn("credentials", parsedData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid Credentials." };
        default:
          return { message: "Something went wrong." };
      }
    }
    throw error;
  }
}

export async function addUser(
  prevState: State | undefined,
  formData: FormData
): Promise<State | undefined> {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const parsedFormData = SignUpSchema.safeParse(data);
  if (!parsedFormData.success) {
    return {
      message: "Invalid input.",
      errors: parsedFormData.error.flatten().fieldErrors,
    };
  }
  const parsedData = parsedFormData.data;
  const finalData = { ...parsedData, password: await bcrypt.hash(parsedData.password,10) };
  console.log(finalData.password)
  const { error } = await db.from("users").insert(finalData);
  if (error) {
    return { message: "Something went wrong! TryAgain." };
  }
  redirect("/login");
}
