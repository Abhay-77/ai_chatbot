import { useEffect, useRef } from "react";
import { Message } from "../lib/definitions";
import clsx from "clsx";

const MessageBox = ({ messages }: { messages: Message[] }) => {
  const messageEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({behavior:"smooth"})
  }, [messages])
  
  return (
    <section className=" overflow-y-scroll flex-col h-full flex">
      <div className="flex-grow"/>
      <main className="flex flex-col justify-evenly m-5 ">
        {messages.map((message: Message, i) => (
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
        <div ref={messageEndRef}/>
      </main>
    </section>
  );
};

export default MessageBox;
