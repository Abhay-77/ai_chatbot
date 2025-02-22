import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnChatbot = nextUrl.pathname.startsWith("/chatbot");
      if (isOnChatbot) {
        if (isLoggedIn) {
          return true;
        }
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/chatbot", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
