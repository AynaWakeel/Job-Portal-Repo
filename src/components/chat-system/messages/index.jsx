import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/fi_arrow-left.svg'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import { ReactComponent as Tick } from '../../../assets/icons/Read status.svg'
import ReportIcon from '../../../assets/icons/ban-solid-full.svg'
import Trash from '../../../assets/icons/trash-solid-full.svg'
import Threedot from '../../../assets/icons/DotsThreeVertical.svg'
import { ChatLeft, ChatRight, DmChat, MessageBox } from './style'
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'
import { socket } from "../../../lib/socket/socket"
import { useChat } from '../useChat'

const Messages = ({ selectedChat, onBack , onDeleteChat}) => {

  const { block_user_by_id, delete_chat, clear_chat, read_message } = useChat()

  const sender_Id = localStorage.getItem("id");
  const [personId, setPersonId] = useState(null);
  const [tokenId, setTokenId] = useState(null);

  const [userInfo, setUserInfo] = useState()
  const [chatMessages, setChatMessages] = useState([])
  const [activeChatId, setActiveChatId] = useState(null)
  const [newMsg, setNewMsg] = useState("")
  const [hasRead, setHasRead] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  const messagesEndRef = useRef(null)
  const ChatDropdownRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ChatDropdownRef.current && !ChatDropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }

    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const fetchMessages = async (id) => {
    if (!id) return;
    try {
      const res = await Chat_Endpoints.get_messages_by_chatId(id);
      const data = res?.data?.messages || [];

      const fixedMessages = data.map((msg) => ({
        ...msg,
        isSender: msg.senderId == sender_Id,
      }));

      setChatMessages(fixedMessages);
      console.log("Fetched messages:", fixedMessages);
    } catch (error) {
      console.error("Error loading messages", error);
    }
  };



  const fetchUser = async () => {
    try {
      const res = await Chat_Endpoints.get_chat_info_by_userId(personId);
      setUserInfo(res.data.chat.receiver)
      setActiveChatId(res.data.chat.chatId);
      console.log("user chatId in res >>>:", res.data.chat.chatId);

    } catch (error) {
      console.error("Error loading messages", error);
    }
  }

  useEffect(() => {
    if (personId) {
      setChatMessages([]);
      fetchUser()
    }
  }, [personId])

  useEffect(() => {
    if (selectedChat) {
      setPersonId(selectedChat.id);
      setTokenId(selectedChat.chatId);
      console.log(" Selected chat updated:", selectedChat);
    }
  }, [selectedChat]);


  useEffect(() => {
    const idToUse = activeChatId || tokenId
    if (idToUse) fetchMessages(idToUse)
    console.log("Fetching messages for chatId:", idToUse);
  }, [activeChatId, tokenId])


  useEffect(() => {
    const idToUse = activeChatId || tokenId;
    if (!idToUse) return;
    if (socket.connected) socket.emit('join', idToUse);
    else {
      const onConnect = () => socket.emit('join', idToUse);
      socket.on('connect', onConnect);
      return () => socket.off('connect', onConnect);
    }
  }, [activeChatId, tokenId]);



  useEffect(() => {
    const markAsRead = async () => {
      if ((activeChatId || tokenId) && !hasRead) {
        try {
          await read_message(activeChatId || tokenId)
          setHasRead(true);
          console.log("Read API called for:", activeChatId || tokenId);
        } catch (err) {
          console.error("Error reading messages:", err);
        }
      }
    }

    markAsRead()
  }, [activeChatId, hasRead])


  const handleSend = (e) => {
    e.preventDefault()

    const trimmed = newMsg?.trim()
    if (!trimmed) return;

    const messageData = {
      chatId: activeChatId || tokenId,
      senderId: sender_Id,
      receiverId: personId,
      content: trimmed,
      isSender: true,
    }

    socket.emit("sendMessage", messageData)
    console.log("sendMessage:", messageData)

    setChatMessages((prev) => [...prev, messageData])
    setNewMsg("")
    console.log("messs:", messageData);
  }



  useEffect(() => {
    if (!socket) return;

    const idToUse = activeChatId || tokenId;

    const handleReceive = (data) => {
      console.log("Incoming message:", data);

      if (String(data.chatId) === String(idToUse)) {
        setChatMessages((prev) => [...prev, { ...data, isSender: data.senderId == sender_Id }]);

        socket.emit("markChatAsRead", {
          chatId: idToUse,
          userId: sender_Id,
        });
        console.log("Auto-marked chat as read:", idToUse);

      } else {
        console.log("Message for another chat, ignoring...");
      }
    };

    socket.on("receiveMessage", handleReceive);

    return () => socket.off("receiveMessage", handleReceive);
  }, [socket]);


  const handleBlockuser = async (id, actionType) => {
    const res = await block_user_by_id({ blockedUserId: id, type: actionType })
    setUserInfo(prev => ({
      ...prev,
      blockedByCurrentUser: actionType
    }))

    fetchUser()
    if (res) {
      console.log("block res:", res);
      setIsOpen(false)
    }
  }

  const handleDeleteChat = async (tokenId) => {
    try {

      const res = await delete_chat(tokenId)
      if (res) {
        console.log("delte cat res:", res);
        setChatMessages([]);
        setUserInfo(null)
        onDeleteChat()
        setIsOpen(false)
        if (onBack) onBack();
      }
    } catch (err) {
      console.log("error:", err);

    }
  }


  const handleClearChat = async (tokenId) => {
    try {

      const res = await clear_chat(tokenId)
      if (res) {
        console.log("clear cat res:", res);
        setChatMessages([]);
        setIsOpen(false)
      }
    } catch (err) {
      console.log("error:", err);

    }
  }

  useEffect(() => {
    setHasRead(false);
  }, [activeChatId]);


  return (
    <div>
      <DmChat>

        {userInfo &&
        
        <div className="bar">
          <div className="channelheader">
            <div className="display" onClick={onBack}>
              <ArrowLeft className="color" />
            </div>
            <div>
              {userInfo?.profilepic ?

                <img src={userInfo.profilepic} alt="img" className="circle" />
                :
                <div className="circle"></div>
              }
            </div>
            <div>
              <h4 className="Heading">{userInfo?.fullName || "User"}</h4>
              {/* <p className="SubHeading">{userInfo?.onlineStatus || "Status"}</p> */}
            </div>
          </div>

          <div ref={ChatDropdownRef}>

            <span className='Box' onClick={() => setIsOpen(!isOpen)}>
              <img src={Threedot} />
            </span>

            {isOpen &&

              <div className='dropdown'>

                <div className="dropdown-row" onClick={() => handleClearChat(activeChatId)}>
                  <span className='expire'>Clear chat</span>
                </div>

                {userInfo?.blockedByCurrentUser ?
                  <div className='dropdown-row' onClick={() => handleBlockuser(userInfo.id, "unblock")}>
                    <span className='expire'>Blocked</span>
                  </div>
                  :

                  <div className='dropdown-row' onClick={() => handleBlockuser(userInfo.id, "block")}>
                    <span className='expire'>Block user</span>
                  </div>
                }


              </div>

            }
          </div>

        </div>
        }


        <MessageBox>
          {chatMessages.map((msg, i) => {
            const prev = chatMessages[i - 1];
            const next = chatMessages[i + 1];
            const isFirstOfGroup = !prev || prev.isSender !== msg.isSender;
            const isLastOfGroup = !next || next.isSender !== msg.isSender;

            const Bubble = msg.isSender ? ChatRight : ChatLeft;
            const wrapperClass = msg.isSender ? "flex-col-right" : "flex-col-left";

            return (
              <div key={msg.id || i} className="full-width">
                <div className={wrapperClass}>

                  <Bubble className={`chat-bubble ${msg.isSender ? "sender" : "receiver"} ${isFirstOfGroup ? "first" : ""} ${isLastOfGroup ? "last" : ""}`}>
                    <p className="SubHeading">{msg.content}</p>
                  </Bubble>


                  {isLastOfGroup && (
                    <div className="SubHeading">
                      <span>{msg?.createdAt
                        ? new Date(msg?.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                        : " "}
                        <Tick className={`color ${msg.isRead ? "active" : ""}`} />
                      </span>
                      {/* { !msg.isRead && (
                      )} */}
                      {/* <span>{msg.isRead ? "read" : "unread"}</span> */}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </MessageBox>

        {/* block or unblock */}

        {userInfo?.blockedByCurrentUser ?

          <div className='blockBar'>
            <div className='banDiv' onClick={() => handleDeleteChat(activeChatId)}>
              <img src={Trash} alt='del' />
              <p className="red">Delete</p>
            </div>
            <div className='banDiv' onClick={() => handleBlockuser(userInfo.id, "unblock")}>
              <img src={ReportIcon} alt='ban' />
              <p className="red">Unblock</p>
            </div>
          </div>

          :  userInfo && 
          
          <form onSubmit={handleSend}>
            <div className="msgBar">
              <img src={attach} alt="icon" />

              <input type="text" placeholder="Type your message" className="msginput"
                value={newMsg} onChange={(e) => setNewMsg(e.target.value)} />

              <span className="circle" onClick={handleSend}>
                <img src={send} alt="icon" />
              </span>
            </div>
          </form>

        }

      </DmChat>
    </div>
  );
};

export default Messages;