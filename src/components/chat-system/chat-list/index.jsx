import React, { useEffect, useState } from 'react'
import { Main } from './style'
import searchicon from "../../../assets/icons/search.svg"
import profile from "../../../assets/images/Ellipse 18.png"
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'
import { socket } from "../../../lib/socket/socket"
import { showError } from '../../toasters'

const ChatList = ({onSelectChat , onOpenChat , onRefresh}) => {
  const [activeChat, setActiveChat] = useState(null)
  const [searchChat, setSearchChat] = useState("")
  const [person, setPerson] = useState([])

  console.log('Socket connected?', socket.connected);

  const openDm = (id, chatId) => {

    onSelectChat({ id, chatId });
    setActiveChat(id)

    if (onOpenChat) {
      onOpenChat();
    }
  }

  
useEffect(() => {
  if (!socket) return;

  socket.on('receiveMessage', (data) => {
    console.log(" New message:", data);
    fetchChats();
  });

  socket.on('updateUnreadCount', (data) => {
    console.log(" Unread count update:", data);
    fetchChats();
  });

  return () => {
    socket.off('receiveMessage');
    socket.off('updateUnreadCount');
  };
}, [socket]);



  const fetchChats = async () => {
    try {
      const res = await Chat_Endpoints.get_all_chats();
      const { message } = res
      if (res?.data?.chats) {
        setPerson(res.data.chats);
        console.log("All chats:", res.data.chats);
      } else {
        console.log("No chats found:", res);
        showError(message)
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
   fetchChats ()
  }, [onRefresh])

  
  const filterChat = person.filter(p =>
    p?.receiver?.fullName?.toLowerCase().includes(searchChat.toLowerCase())
  )

  return (
    <div>

      <Main>
        <form>
          <div className="searchinput">
            <img src={searchicon} alt="icon" />
            <input type="search" placeholder="Search" value={searchChat} onChange={(e) => setSearchChat(e.target.value)} />
          </div>
        </form>

        <div className='ScrollList'>

        {filterChat.length > 0 ?

          filterChat.map((items) => (

            <div key={items.receiver.id} className={`channel ${activeChat === items.receiver.id ? "active" : ""}`} 
            onClick={() => openDm(items.receiver.id, items.chatId)}>
              
              <div className="channeltxt">
                {items.receiver.profilepic ? 
                <img src={items.receiver.profilepic || profile} alt="img" className="circle" />
                :
                <div className="circle"></div>
                
                }
                <div>
                  <h4 className="Heading">{items.receiver.fullName}</h4>
                  <p className="SubHeading">{items?.lastMessage?.content || "..."}</p>
                </div>
              </div>
              <div className="time timediv">
                <span>
                  {items?.lastMessage?.createdAt? new Date(items.lastMessage.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  : ""}
                </span>

                {items.unreadCount > 0 &&
                <div className='msgNotify'>
                  <p  className="SubHeading">{items.unreadCount}</p>
                </div>
                
                }
              </div>

            </div>

          ))

          :

          (
            <div className="channel">
              <div className="SubHeading">Not found</div>
            </div>
          )

        }

        </div>


      </Main>
    </div>
  )
}

export default ChatList