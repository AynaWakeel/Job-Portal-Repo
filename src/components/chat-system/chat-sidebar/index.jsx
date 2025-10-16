import React, { useState } from "react"
import { ChatDiv, ChatSidebar, DmChat } from "./style"
import searchicon from "../../../assets/icons/search.svg"
import profile from "../../../assets/images/Ellipse 18.png"
import Messages from "../messages"
import { useNavigate } from "react-router"
import ChatList from "../chat-list"

const ChatSystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const backToSidebar = () => {
    setIsChatOpen(false)
  }


  return (
    <ChatDiv>
      {/* ------------------ desktop  --------------- */}
      <ChatSidebar className="desktop">
       
        <ChatList/>

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
        
         <ChatList/>

        </ChatSidebar>
      )}
    </ChatDiv>
  );
};

export default ChatSystem;
