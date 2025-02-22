import { createClient } from "@supabase/supabase-js";

export const db = createClient(
  process.env.PROJECT_URL!,
  process.env.ANON_PUBLIC_KEY!
);
