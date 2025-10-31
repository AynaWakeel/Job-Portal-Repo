import React, { useEffect, useState } from "react"
import { ChatDiv, ChatSidebar, DmChat } from "./style"
import Messages from "../messages"
import ChatList from "../chat-list"
import { connectSocket, disconnectSocket , socket } from "../../../lib/socket/socket"

const ChatSystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null);
  const [refreshChatList,setRefreshChatList] = useState(false)

  const handleDeleteChatRoom = ()=>{
    setRefreshChatList(p=>(!p))
  }

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
       
        <ChatList  onSelectChat={setSelectedChat} onRefresh={refreshChatList}/>

      </ChatSidebar>

      <DmChat className="desktop">
        <Messages selectedChat={selectedChat}  onDeleteChat={handleDeleteChatRoom}/>
      </DmChat>

      {/* ------------- moobile chat msg ----------------- */}
      {isChatOpen ? (
        <DmChat className="mobile">
          <Messages  selectedChat={selectedChat}  onBack={backToSidebar} />
        </DmChat>
      ) : (
        <ChatSidebar className="mobile">
        
         <ChatList  onSelectChat={setSelectedChat} onOpenChat={() => setIsChatOpen(true)} />

        </ChatSidebar>
      )}
    </ChatDiv>
  );
};

export default ChatSystem;
