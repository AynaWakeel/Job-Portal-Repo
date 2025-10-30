import React, { useEffect, useState } from "react"
import { ChatDiv, ChatSidebar, DmChat } from "./style"
import Messages from "../messages"
import ChatList from "../chat-list"
import { connectSocket, disconnectSocket , socket } from "../../../lib/socket/socket"

const ChatSystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const backToSidebar = () => {
    setIsChatOpen(false)
  }

 useEffect(() => {
  connectSocket();

  const myId = localStorage.getItem("id");
  if (myId) {
    socket.emit("join", myId);
    console.log("Joined socket room as user:", myId);
  }

  return () => disconnectSocket();
}, []);



  return (
    <ChatDiv>
      {/* ------------------ desktop  --------------- */}
      <ChatSidebar className="desktop">
       
        <ChatList />

      </ChatSidebar>

      <DmChat className="desktop">
        <Messages />
      </DmChat>

      {/* ------------- moobile chat msg ----------------- */}
      {isChatOpen ? (
        <DmChat className="mobile">
          <Messages onBack={backToSidebar} />
        </DmChat>
      ) : (
        <ChatSidebar className="mobile">
        
         <ChatList onOpenChat={() => setIsChatOpen(true)} />

        </ChatSidebar>
      )}
    </ChatDiv>
  );
};

export default ChatSystem;
