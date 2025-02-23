export type historyItem = {
  title: string;
  created_at: string;
  id:string
  user_email:string
};
export type User = {
  id: string;
  name: string;
  password: string;
};
export type State = {
  message?: string | null;
  errors?: { username?: string[]; password?: string[]; email?: string[] };
};