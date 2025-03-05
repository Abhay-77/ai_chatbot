import { auth } from "@/auth";
import { db } from "@/supabase";
import { historyItems } from "./definitions";

export async function fetchFilteredHistory(query: string): Promise<historyItems> {
  const session = await auth();
  const email = session?.user?.email;
  if (query) {
    const { data, error } = await db
      .from("history")
      .select()
      .eq("user_email", email)
      .ilike("title", `%${query}%`);

    if (error) {
      return null;
    }
    return data;
  } else {
    const { data, error } = await db
      .from("history")
      .select()
      .eq("user_email", email);
    if (error) {
      return null
    }
    return data;
  }
}
