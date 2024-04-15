import ChatArea from "@/components/conversations/chat-area";
import Header from "@/components/header";

import { Button } from "@/components/ui/button";

export default function Conversations() {
  return (
    <>
      <Header page="Conversations" />

      <main className="nav:px-[19px] nav:py-7 px-3 py-5 w-full">
        <div className="flex items-center flex-wrap gap-2 md:gap-4 justify-between">
          <p className="text-sm md:text-base font-medium">
            Conversations with Customers
          </p>
          <Button>New Message</Button>
        </div>
        <ChatArea />
      </main>
    </>
  );
}
