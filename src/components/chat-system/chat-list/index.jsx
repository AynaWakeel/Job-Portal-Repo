import React, { useEffect, useState } from 'react'
import { Main } from './style'
import searchicon from "../../../assets/icons/search.svg"
import profile from "../../../assets/images/Ellipse 18.png"
import { useNavigate } from 'react-router'
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'
import { showError } from '../../toasters'

const ChatList = ({socket}) => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [activeChat, setActiveChat] = useState(null)
  const [searchChat, setSearchChat] = useState("")
  const navigate = useNavigate()

  const openDm = (id) => {
    navigate("/applicant/chat", { state: { id } })
    setIsChatOpen(true)
    setActiveChat(id)
  }

  useEffect(() => {
    fetchChats()
  if (!socket) return;

  socket.emit("joinUser", { userId: localStorage.getItem("id") });

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
          const {message} = res
      if (res?.data?.chats || res?.chats) {
        setPerson(res.data.chats || res.chats);
        console.log("All chats:", res);
      } else {
        console.log("No chats found:", res);
        showError(message)
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

 useEffect(()=>{
    fetchChats()
 },[])

 const [person, setPerson] = useState([])

//   const [person, setPerson] = useState([
//     {
//       id: 1,
//       name: 'sara',
//       msg: 'hey! how r u?',
//       time: '9:00 AM'
//     },
//     {
//       id: 2,
//       name: 'eman',
//       msg: 'hey! how r u?',
//       time: '9:00 AM'
//     },
//     {
//       id: 3,
//       name: 'ali',
//       msg: 'hey! how r u?',
//       time: '9:00 AM'
//     },
//     {
//       id: 4,
//       name: 'hassan',
//       msg: 'hey! how r u?',
//       time: '9:00 AM'
//     },

//   ])

  const filterChat = person.filter(
    p => p.name.toLocaleLowerCase().includes(searchChat.toLocaleLowerCase())
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

            <div key={items.id} className={`channel ${activeChat === items.id ? "active" : ""}`} onClick={() => openDm(items.id)}>
              <div className="channeltxt">
                <img src={profile} alt="img" className="circle" />
                <div>
                  <h4 className="Heading">{items.name}</h4>
                  <p className="SubHeading">{items.msg}</p>
                </div>
              </div>
              <div className="SubHeading">
                <span>{items.time}</span>
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