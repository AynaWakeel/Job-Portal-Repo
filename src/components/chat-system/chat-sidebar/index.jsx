import React, { useEffect, useState } from "react"
import { ChatDiv, ChatSidebar, DmChat } from "./style"
import Messages from "../messages"
import ChatList from "../chat-list"
import { connectSocket, disconnectSocket, socket } from "../../../lib/socket/socket"

const ChatSystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const backToSidebar = () => {
    setIsChatOpen(false)
  }

    useEffect(() => {
    connectSocket();

    return () => disconnectSocket();
  }, [])


  return (
    <ChatDiv>
      {/* ------------------ desktop  --------------- */}
      <ChatSidebar className="desktop">
       
        <ChatList socket={socket} />

      </ChatSidebar>

      <DmChat className="desktop">
        <Messages socket={socket} />
      </DmChat>

      {/* ------------- moobile chat msg ----------------- */}
      {isChatOpen ? (
        <DmChat className="mobile">
          <Messages socket={socket}  onBack={backToSidebar} />
        </DmChat>
      ) : (
        <ChatSidebar className="mobile">
        
         {/* <ChatList socket={socket} /> */}
         <ChatList socket={socket} onOpenChat={() => setIsChatOpen(true)} />

        </ChatSidebar>
      )}
    </ChatDiv>
  );
};

export default ChatSystem;
