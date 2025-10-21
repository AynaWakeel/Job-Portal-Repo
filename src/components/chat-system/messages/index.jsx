import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/fi_arrow-left.svg'
import profile from '../../../assets/images/Ellipse 18.png'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import { ReactComponent as Tick } from '../../../assets/icons/Read status.svg'
import Image1 from '../../../assets/images/Illustration.svg'
import Image2 from '../../../assets/images/Employers.png'
import Image3 from '../../../assets/images/welcome1.jpg'
import Image4 from '../../../assets/images/men1.jpg'
import Image5 from '../../../assets/images/men2.jpg'
import Image6 from '../../../assets/images/men3.jpg'
import Image7 from '../../../assets/images/welcome.png'
import FileIconPdf from '../../../assets/icons/page-black-icon.svg'
import ReportIcon from '../../../assets/icons/ban-solid-full.svg'
import Trash from '../../../assets/icons/trash-solid-full.svg'
import download from '../../../assets/icons/download.svg'
import { ChatLeft, ChatRight, DmChat, MessageBox, Options } from './style'

// Lightbox imports
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Chat_Endpoints } from '../../../lib/api/chat_endpoints'
import { useChat } from '../useChat'
import { useLocation, useNavigate } from 'react-router'

const Messages = ({ socket, onBack }) => {
  const msgs = [
    { id: 1, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur, elit. Sed, expedita.", time: "9.10 AM" },
    { id: 2, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur", time: "9.11 AM" },
    { id: 3, user: "sender", text: "Lorem ipsum dolor sit amet consectetur", time: "9.20 AM", status: "read" },
    { id: 4, user: "sender", text: "Lorem ipsum dolor sit amet consectetur, elit.", time: "9.20 AM", status: "read" },
    { id: 5, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur, elit......", time: "9.25 AM" },
    { id: 7, user: "sender", text: " reply me", time: "9.30 AM", status: "read" },
    { id: 8, user: "receiver", text: "i am fine", time: "9.11 AM" },
    { id: 9, user: "sender", text: "great", time: "9.20 AM", status: "read" },
    { id: 10, user: "sender", text: "send me..", time: "9.20 AM", status: "read" },
    { id: 11, user: "receiver", text: "what have you done, show me?", time: "9.25 AM" },
    { id: 12, user: "receiver", pic: [Image3], text: "Another photo from me.......", time: "9.30 AM", status: "delivered" },
    { id: 13, user: "receiver", fileName: 'Film Script', filetype: '.pdf', fileSize: '2 MB', time: "9.11 AM" },
    { id: 14, user: "receiver", fileName: 'Xl file', filetype: '.xlsx', fileSize: '3 MB', time: "9.11 AM" },
    { id: 15, user: "sender", fileName: 'Film Script', filetype: '.pdf', fileSize: '2 MB', time: "9.11 AM" },
    { id: 16, user: "sender", fileName: 'Xl file', filetype: '.xlsx', fileSize: '3 MB', time: "9.11 AM" },
    { id: 17, user: "sender", pic: [Image1, Image2, Image1, Image3, Image2, Image3], time: "9.30 AM", status: "delivered" },
    { id: 17, user: "receiver", pic: [Image4, Image5, Image6, Image7], time: "9.30 AM", status: "delivered" },
  ];

  const {block_user_by_id , delete_chat , read_message} = useChat()
  const location = useLocation()
  const personId = location?.state?.id || null
  const tokenId = location?.state?.chatId || null
  const sender_Id = location?.state?.senderId || null
  const loginUserid = localStorage.getItem("id")
  console.log("login user id-------:", loginUserid);
  
  console.log("personId:",personId);
  console.log("tokenId:",tokenId);
  console.log("sender id------:", sender_Id);

  
  const [userInfo , setUserInfo] = useState()
  const [chatMessages, setChatMessages] = useState([]);
  const [activeChatId, setActiveChatId] = useState(tokenId || null);
  const [newMsg, setNewMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState([])
  const [blockStatus, setBlockStatus] = useState("unblock")

  const OpenGallery = (images, index) => {
    setLightboxImages(images.map(img => ({ src: img })))
    setPhotoIndex(index);
    setIsOpen(true);
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const docRef = useRef(null)
  const photoRef = useRef(null)

  const OpenFileInput = (type) => {
    if (type === "document") docRef.current.click()
    else if (type === "photo") photoRef.current.click()
  }

  const handleSend = (e) => {
    e.preventDefault();

    if (!newMsg.trim()) return;
    const userId = localStorage.getItem("id");
    console.log("userId-------------------:", userId);

    const messageData = {
      chatId: tokenId,
      senderId: sender_Id,
      receiverId:personId,
      content: newMsg,
      isSender: true,
    };

    socket.emit("sendMessage", messageData);
    console.log("sendMessage:", messageData);

    setChatMessages((prev) => [...prev, messageData]);
    setNewMsg("");
  };



  const fetchMessages = async () => {
    try {
      const res = await Chat_Endpoints.get_messages_by_chatId(activeChatId || tokenId);
      setChatMessages(res?.data?.messages || []);
    } catch (error) {
      console.error("Error loading messages", error);
    }
  }

  const fetchUser = async () => {
    try {
      const res = await Chat_Endpoints.get_chat_info_by_userId(personId);
      setUserInfo(res.data.chat.receiver)
      setActiveChatId(res.data.chat.chatId);
      console.log("userIndo chT:", res.data.chat.receiver.fullName);
      console.log("userId of chat info:",personId);
      console.log("user chatId in res >>>:", res.data.chat.chatId);
      
      
      
    } catch (error) {
      console.error("Error loading messages", error);
    }
  }

    useEffect(() => {
    if (personId) {
      fetchUser(); 
    }
  }, [personId]);

 useEffect(() => {
  const idToUse = activeChatId || tokenId;
  if (idToUse) fetchMessages();
  console.log("Fetching messages for chatId:", idToUse);
}, [activeChatId, tokenId]);


  useEffect(() => {
    if (!socket) return;

    socket.on("receiveMessage", (data) => {
      if (data.chatId === tokenId) {
        setChatMessages((prev) => [...prev, data]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [socket, tokenId]);

  const handleBlockuser = async(id , actionType)=>{
    const res = await block_user_by_id({ blockedUserId: id , type: actionType})
      setUserInfo(prev => ({
        ...prev,
        blockedByCurrentUser: actionType
      }))

      fetchUser()
    if(res){
       console.log("block res:", res);  
    }
  }

  const handleDeleteChat = async(tokenId)=>{
    try{
      
      const res = await delete_chat(tokenId)
      if(res){
        console.log("delte cat res:",res);
        
      }
      fetchMessages()
    }catch(err){
      console.log("error:",err);
      
    }
  }

   const handleReadMsg = async()=>{
    const res = await read_message(tokenId)
      setChatMessages(prev => ({
        ...prev,
        isRead: true
      }))

      fetchUser()
    if(res){
       console.log("block res:", res);  
    }
  }


  return (
    <div>
      <DmChat>
      
        <div className="bar">
          <div className="channelheader">
            <div className="display" onClick={onBack}>
              <ArrowLeft className="color" />
            </div>
            <div>
              <img src={userInfo?.profilepic} alt="img" className="circle" />
            </div>
            <div>
              <h4 className="Heading">{userInfo?.fullName}</h4>
              <p className="SubHeading">{userInfo?.onlineStatus}</p>
            </div>
          </div>
          {userInfo?.blockedByCurrentUser ?

           <div className='banDiv' onClick={()=>handleBlockuser(userInfo.id , "unblock")}>
              <p className="red">Blocked</p>
            </div>

            :

              <div className='banDiv' onClick={()=>handleBlockuser(userInfo.id , "block")}>
              <img src={ReportIcon} alt='ban' />
              <p className="red">Block</p>
            </div>
          }
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
              <div key={msg.chatId} className="full-width">
                <div className={wrapperClass}>
                  
                  <Bubble className={`chat-bubble ${msg.isSender ? "sender" : "receiver"} ${isFirstOfGroup ? "first" : ""} ${isLastOfGroup ? "last" : ""}`}>
                  <p className="SubHeading">{msg.content}</p>

                    {/* {msg.fileName ? (
                      <div className="fileInput">
                        <div className="file-div">
                          <img src={FileIconPdf} alt="icon" className='fileImg' />

                          <div className="file-txt-flex">
                            <h5 className={`filename ${msg.isSender ? "right" : ""}`}>
                              {msg.fileName}
                              <span>{msg.filetype}</span>
                            </h5>
                            <p className={`filesize ${msg.isSender ? "right" : ""}`}>{msg.fileSize}</p>
                          </div>
                        </div>
                        <span><img src={download} alt="icon" className='downloadImg' /></span>
                      </div>
                    ) : (
                      <>
                        {msg.pic && msg.pic.length > 0 && (
                          <div className="chat-image">
                            <img
                              src={msg.pic[0]}
                              alt="chat-img"
                              className="chat-img"
                              onClick={() => OpenGallery(msg.pic, 0)}
                              style={{ cursor: "pointer" }}
                            />
                            {msg.pic.length > 1 && (
                              <div className="pic-overlay" onClick={() => OpenGallery(msg.pic, 0)}>
                                +{msg.pic.length - 1}
                              </div>
                            )}
                          </div>
                        )}
                        {msg.text && <p className="SubHeading">{msg.text}</p>}
                      </>
                    )} */}
                  </Bubble>
                  
                  

                  {isLastOfGroup && (
                    <div className="SubHeading">
                      { !msg.isRead && (
                        <span><Tick className={`color ${msg.isRead ? "active" : ""}`} /></span>
                      )}
                      {/* <span>{msg.isRead ? "read" : "unread"}</span> */}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </MessageBox>

        {/* Lightbox */}
        {/* {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={lightboxImages}
            plugins={[Thumbnails]}
            carousel={{ finite: true }}
            render={{

              buttonPrev: lightboxImages.length > 1 ? undefined : () => null,
              buttonNext: lightboxImages.length > 1 ? undefined : () => null,


              toolbar: ({ currentSlide }) => (
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={() => {
                    if (currentSlide?.src) {
                      const link = document.createElement("a");
                      link.href = currentSlide.src;
                      link.download = "image.jpg";
                      link.click();
                    }
                  }}
                >
                  <img src={download} alt="download" style={{ width: "100px", height: "20px" }} />
                </button>
              ),
            }}
          />
        )} */}

        {/* block or unblock */}

        {userInfo?.blockedByCurrentUser ?

          <div className='blockBar'>
            <div className='banDiv' onClick={()=>handleDeleteChat(activeChatId)}>
              <img src={Trash} alt='del' />
              <p className="red">Delete</p>
            </div>
            <div className='banDiv'  onClick={()=>handleBlockuser(userInfo.id , "unblock")}>
              <img src={ReportIcon} alt='ban' />
              <p className="red">Unblock</p>
            </div>
          </div>

          :

           <form onSubmit={handleSend}>
            <div className="msgBar">
              {/* <img src={attach} alt="icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)} /> */}
               <img src={attach} alt="icon"/>

              <input type="text" placeholder="Type your message" className="msginput" 
               value={newMsg} onChange={(e) => setNewMsg(e.target.value)}/>

              <span className="circle" onClick={handleSend}>
                <img src={send} alt="icon" />
              </span>
            </div>
          </form>


        }

{/* 
        {isDropdownOpen && (
          <Options>
            <ul className="dropdown">
              <li onClick={() => OpenFileInput("document")}>Document</li>
              <li onClick={() => OpenFileInput("photo")}>Photos</li>
            </ul>

            <input
              type="file"
              ref={photoRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={(e) => console.log("Selected photo:", e.target.files)}
            />
            <input
              type="file"
              ref={docRef}
              style={{ display: "none" }}
              accept=".pdf,.doc,.docx,.txt"
              onChange={(e) => console.log("Selected document:", e.target.files)}
            />
          </Options>
        )} */}
      </DmChat>
    </div>
  );
};

export default Messages;
