import { Message } from "../lib/definitions";
import clsx from "clsx";

const MessageBox = ({ messages }: { messages: Message[] }) => {
  return (
    <main className="flex flex-col justify-evenly">
      {messages.map((message: Message,i) => (
        <div
          className={clsx({
            "bot-message": message.role == "assistant",
            "user-message": message.role == "user",
          })}
          key={i}
        >
          {message.content}
        </div>
      ))}
    </main>
  );
};

export default MessageBox;
