import { auth } from "@/auth";
import { db } from "@/supabase";

export async function fetchFilteredHistory() {
  const session = await auth();
  const email = session?.user?.email;
  const {data,error} = await db.from("history").select().eq("user_email", email);
  if (error) {
    throw Error('Failed to fetch history')
  }
  return data;
}
