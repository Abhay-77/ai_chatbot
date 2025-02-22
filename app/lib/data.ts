export async function fetchFilteredHistory(query?: string) {
  return [
    { name: "hi", date: new Date().toISOString().split("T")[0] },
    { name: "hello", date: new Date().toISOString().split("T")[0] },
    { name: "bye", date: new Date().toISOString().split("T")[0] },
  ];
}

export type historyItem = {
  name: string;
  date: string;
};
