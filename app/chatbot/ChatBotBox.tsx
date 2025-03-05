"use client";

import React, { useState } from "react";
import MessageBox from "../ui/MessageBox";
import PromptBar from "../ui/PromptBar";
import { Message } from "../lib/definitions";
import { getResponse } from "../lib/actions";

const ChatBotBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  function onClick() {
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  }
  async function getAiResponse() {
    const response = await getResponse(messages[messages.length - 1].content);
    setMessages([...messages, response]);
  }
  return (
    <>
      <div className="flex-grow flex flex-col justify-end py-4 overflow-hidden">
        <MessageBox messages={messages} />
      </div>
      <div className="">
        <PromptBar
          setInput={setInput}
          prompt={input}
          onClick={onClick}
          formAction={getAiResponse}
        />
      </div>
    </>
  );
};

export default ChatBotBox;
