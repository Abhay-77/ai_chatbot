export type historyItem = {
  name: string;
  date: string;
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
