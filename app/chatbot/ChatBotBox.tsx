"use client";

import React, { useState } from "react";
import MessageBox from "../ui/MessageBox";
import PromptBar from "../ui/PromptBar";
import { Message } from "../lib/definitions";

const ChatBotBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "user", content: "Hi" },
    { role: "assistant", content: "Hi" },
  ]);
  const [input, setInput] = useState<string>("");
  function onClick() {
    setMessages([...messages, { role: "user", content: input }]);
  }
  return (
    <>
      <div className="flex-grow flex flex-col justify-end py-4">
        <MessageBox messages={messages} />
      </div>
      <div className="">
        <PromptBar setInput={setInput} prompt={input} onClick={onClick} />
      </div>
    </>
  );
};

export default ChatBotBox;
