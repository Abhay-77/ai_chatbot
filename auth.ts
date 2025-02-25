import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import type { User } from "./app/lib/definitions";
import bcrypt from "bcrypt";
import { db } from "@/supabase";

// const sql = postgres

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
});

async function getUser(email: string): Promise<User | undefined> {
  const { data, error } = await db.from("users").select().eq("email", email);
  if (error) {
    throw new Error("Failed to fetch user");
  } else {
    return data[0];
  }
}
