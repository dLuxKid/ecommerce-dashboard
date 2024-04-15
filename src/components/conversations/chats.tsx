import { chats } from "@/assets/data/chats";
import Image from "next/image";
import Search from "./search";
import { Suspense } from "react";

export default function Chats({ clickChat }: { clickChat?: () => void }) {
  return (
    <>
      <div className="flex flex-col mt-6 gap-4 px-[22px]">
        <div className="flex items-center justify-between gap-4">
          <p className="text-base md:text-xl font-medium text-[#2C2D33]">
            Contacts
          </p>
          <p className="text-base md:text-xl font-medium text-[#A6A8B1]">34</p>
        </div>
        <Suspense>
          <Search />
        </Suspense>
      </div>

      <div className="mt-6 overflow-y-scroll h-full max-h-[792px] w-full">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`${
              i === 0 && "border-r-4 bg-[#F7F7FC] border-r-primary"
            } flex gap-2.5 py-3 px-6 hover:bg-[#F7F7FC] cursor-pointer border-b border-b-[#F1F3F9]`}
            onClick={clickChat}
          >
            <div className="hidden sm:block">
              <Image
                src={chat.img}
                alt="profile photo"
                className="size-12 object-cover rounded-sm border border-[#F1F3F9]"
              />
              <span
                className={`absolute top-0 right-0 size-3 rounded-full ${
                  i < 3 || i % 2 === 0 ? "bg-primary" : "bg-[#C4CAE8]"
                }`}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-1 w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium text-black self-start">
                  {chat.name}
                </p>
                {chat.type && (
                  <p
                    className={`${
                      chat.type === "New"
                        ? "py-0.5 px-1.5 bg-[#FEF5EA] text-xs rounded-sm"
                        : "bg-[#FFCC91] rounded-full text-sm size-6"
                    } flex items-center justify-center text-black-sec`}
                  >
                    {chat.type}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-[#8B8D97] text-sm truncate">{chat.text}</p>
                <p className="text-[#8B8D97] text-xs flex-[40%] nav:flex-[20%] w-full text-end">
                  {chat.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
