import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./lib/fonts";

export const metadata: Metadata = {
  title: "AI Chatbot",
  description: "A chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
