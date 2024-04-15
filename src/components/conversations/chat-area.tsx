"use client";

import ChatBox from "@/components/conversations/chat-box";
import Chats from "@/components/conversations/chats";
import { useEffect, useState } from "react";

export default function ChatArea() {
  const [clickedOnChat, setClickedOnChat] = useState<boolean>(false);

  const clickChat = () => setClickedOnChat(true);
  const unClickChat = () => setClickedOnChat(false);

  return (
    <>
      <div className="nav:hidden">
        <div className="mt-5 flex flex-col nav:flex-row gap-5">
          {!clickedOnChat ? (
            <div className="flex-1 nav:max-w-[410px] bg-white rounded-lg">
              <Chats clickChat={clickChat} />
            </div>
          ) : (
            <div className="w-full flex-1 nav:max-w-[881px] rounded-lg bg-white">
              <ChatBox unClickChat={unClickChat} />
            </div>
          )}
        </div>
      </div>
      <div className="nav:block hidden">
        <div className="mt-5 flex flex-col nav:flex-row gap-5">
          <div className="flex-1 nav:max-w-[410px] bg-white rounded-lg">
            <Chats />
          </div>
          <div className="w-full flex-1 nav:max-w-[881px] rounded-lg bg-white">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
}
