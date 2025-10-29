import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/fi_arrow-left.svg'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import { ReactComponent as Tick } from '../../../assets/icons/Read status.svg'
import ReportIcon from '../../../assets/icons/ban-solid-full.svg'
import Trash from '../../../assets/icons/trash-solid-full.svg'
import { ChatLeft, ChatRight, DmChat, MessageBox } from './style'
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'
import { useChat } from '../useChat'
import { useLocation } from 'react-router'

const Messages = ({ socket, onBack }) => {

  const { block_user_by_id, delete_chat, clear_chat, read_message } = useChat()
 const location = useLocation();
const savedChat = JSON.parse(localStorage.getItem("lastOpenedChat")) || {};
const personId = location?.state?.id || savedChat?.id || null;
const tokenId = location?.state?.chatId || savedChat?.chatId || null;

  const sender_Id = localStorage.getItem("id");
  console.log("personId:", personId);
  console.log("tokenId:", tokenId);
  console.log("sender id------:", sender_Id);


  const [userInfo, setUserInfo] = useState()
  const [chatMessages, setChatMessages] = useState([])
  const [activeChatId, setActiveChatId] = useState(tokenId || null)
  const [newMsg, setNewMsg] = useState("")
  const [hasRead, setHasRead] = useState(false)


  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

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
      console.log("userIndo chT:", res.data.chat.receiver.fullName);
      console.log("userId of chat info:", personId);
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
    const idToUse = activeChatId || tokenId
    if (idToUse) fetchMessages(idToUse)
    console.log("Fetching messages for chatId:", idToUse);
  }, [activeChatId])

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

//   useEffect(() => {
//   if (socket && (activeChatId || tokenId) && !hasRead) {
//     socket.emit("markChatAsRead", { 
//       chatId: activeChatId || tokenId, 
//       userId: sender_Id 
//     });
//     console.log("Marking chat as read via socket:", activeChatId || tokenId);
//     setHasRead(true);
//   }
// }, [socket, activeChatId, tokenId, hasRead]);



  const handleSend = (e) => {
    e.preventDefault()

    const trimmed = newMsg?.trim()

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
  }

  useEffect(() => {
    if (!socket) return;
    const idToUse = activeChatId || tokenId;

    const handleReceive = (data) => {
      console.log("datachatId:", data.chatId);
      console.log("Received message:", data);

      setChatMessages((prev) => {

        if (String(data.chatId) === String(idToUse)) {
          console.log("datachatId:", data.chatId);
          return [...prev, { ...data, isSender: data.senderId == sender_Id }];

        }
        return prev;
      });
    };

    socket.on("receiveMessage", handleReceive);

    return () => {
      socket.off("receiveMessage", handleReceive);
    }
  }, [socket, activeChatId,tokenId, sender_Id])


  //   useEffect(() => {
  //   if (socket && (activeChatId || tokenId)) {
  //     socket.emit("join", activeChatId || tokenId);
  //     console.log("Joined chat room:", activeChatId || tokenId);
  //   }
  // }, [socket, activeChatId, tokenId]);

//   useEffect(() => {
//   if (socket && localStorage.getItem("id")) {
//     socket.emit("join", localStorage.getItem("id"));
//     console.log("Joined user room:", localStorage.getItem("id"));
//   }
// }, [socket]);



  const handleBlockuser = async (id, actionType) => {
    const res = await block_user_by_id({ blockedUserId: id, type: actionType })
    setUserInfo(prev => ({
      ...prev,
      blockedByCurrentUser: actionType
    }))

    fetchUser()
    if (res) {
      console.log("block res:", res);
    }
  }

  const handleDeleteChat = async (tokenId) => {
    try {

      const res = await delete_chat(tokenId)
      if (res) {
        console.log("delte cat res:", res);
        setChatMessages([]);
      }
      //  fetchMessages()
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
      }
      //  fetchMessages()
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

          <div className='banDiv'>

            <div className='banDiv' onClick={() => handleClearChat(activeChatId)}>
              {/* <img src={Trash} alt='del' /> */}
              <p className="red">Clear Chat</p>
            </div>
            {userInfo?.blockedByCurrentUser ?

              <div className='banDiv' onClick={() => handleBlockuser(userInfo.id, "unblock")}>
                <p className="red">Blocked</p>
              </div>

              :

              <div className='banDiv' onClick={() => handleBlockuser(userInfo.id, "block")}>
                {/* <img src={ReportIcon} alt='ban' /> */}
                <p className="red">Block</p>
              </div>
            }
          </div>

        </div>

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

          :

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