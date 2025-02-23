import { auth } from "@/auth";
import { db } from "@/supabase";

export async function fetchFilteredHistory(query:string) {
  const session = await auth();
  const email = session?.user?.email;
  if (query) {
    const {data,error} = await db.from("history").select().eq("user_email", email).ilike('title',`%${query}%`);
    
  if (error) {
    throw Error("Failed to fetch history");
  }
  return data;
  }
  else {
    const { data, error } = await db
      .from("history")
      .select()
      .eq("user_email", email);
  if (error) {
    throw Error("Failed to fetch history");
  }
  return data;
  }
}
