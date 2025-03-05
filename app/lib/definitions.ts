export type historyItems =
  | {
      title: string;
      created_at: string;
      id: string;
      user_email: string;
    }[]
  | null;
export type User = {
  id: string;
  name: string;
  password: string;
};
export type State = {
  message?: string | null;
  errors?: { username?: string[]; password?: string[]; email?: string[] };
};

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};
