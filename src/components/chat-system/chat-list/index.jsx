import React, { useEffect, useState } from 'react'
import { Main } from './style'
import searchicon from "../../../assets/icons/search.svg"
import profile from "../../../assets/images/Ellipse 18.png"
import { useNavigate } from 'react-router'
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'
import { showError } from '../../toasters'

const ChatList = ({ socket, onOpenChat }) => {
  // const [isChatOpen, setIsChatOpen] = useState(false)
  const [activeChat, setActiveChat] = useState(null)
  const [searchChat, setSearchChat] = useState("")
  const navigate = useNavigate()

  const openDm = (id, chatId, senderId) => {

    const role = localStorage.getItem("role")

    if (role === "applicant") {
      navigate("/applicant/chat", { state: { id, chatId, senderId } })
    } else {
      navigate("/recruiter/chat", { state: { id, chatId, senderId } })

    }
    // setIsChatOpen(true)
    setActiveChat(id)
    console.log("chat room id:", id);
    console.log("chat room Chatid:", chatId);
    console.log("senderId :", senderId);


    if (onOpenChat) {
      onOpenChat();
    }
  }

  useEffect(() => {

    if (!socket) return;

    const userId = localStorage.getItem("id");
    socket.emit("joinUser", { userId });


    socket.on("receiveMessage", (data) => {
      setPerson((prev) =>
        prev.map((chat) =>
          chat.id === data.chatId
            ? { ...chat, msg: data.message }
            : chat
        )
      );
    });

    return () => {
      socket.off("receiveMessage");
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
    fetchChats()
  }, [])

  const [person, setPerson] = useState([])

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

        {filterChat.length > 0 ?

          filterChat.map((items) => (

            <div key={items.receiver.id} className={`channel ${activeChat === items.receiver.id ? "active" : ""}`} onClick={() => openDm(items.receiver.id, items.chatId)}>
              <div className="channeltxt">
                <img src={items.receiver.profilepic || profile} alt="img" className="circle" />
                <div>
                  <h4 className="Heading">{items.receiver.fullName}</h4>
                  <p className="SubHeading">{items?.lastMessage?.content || "..."}</p>
                </div>
              </div>
              <div className="SubHeading">
                <span>
                  {items?.lastMessage?.createdAt? new Date(items.lastMessage.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    : ""}
                </span>
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

      </Main>
    </div>
  )
}

export default ChatList