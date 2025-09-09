import React, { useRef, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/fi_arrow-left.svg'
import profile from '../../../assets/images/Ellipse 18.png'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import { ReactComponent as Tick } from '../../../assets/icons/Read status.svg'
import Image1 from '../../../assets/images/Image1.png'
import FileIconPdf from '../../../assets/icons/Filetype example.svg'
import FileIconXl from '../../../assets/icons/Filetype example1.svg'
import download from '../../../assets/icons/download.svg'
import close from '../../../assets/icons/x-button.svg'
import DownloadPic from '../../../assets/icons/download-button.svg'
import { ChatLeft, ChatRight, DmChat, MessageBox, Options } from './style'

const Messages = ({ onBack }) => {

    const msgs = [
        { id: 1, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur, elit. Sed, expedita.", time: "9.10 AM" },
        { id: 2, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur", time: "9.11 AM" },
        { id: 3, user: "sender", text: "Lorem ipsum dolor sit amet consectetur", time: "9.20 AM", status: "read" },
        { id: 4, user: "sender", text: "Lorem ipsum dolor sit amet consectetur, elit.", time: "9.20 AM", status: "read" },
        { id: 5, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur, elit......", time: "9.25 AM" },
        { id: 7, user: "sender", text: " reply me", time: "9.30 AM", status: "read" },
        { id: 8, user: "receiver", text: "i am fine", time: "9.11 AM" },
        { id: 9, user: "sender", text: "great", time: "9.20 AM", status: "read" },
        { id: 9, user: "sender", text: "great", time: "9.20 AM", status: "read" },
        { id: 10, user: "sender", text: "send me..", time: "9.20 AM", status: "read" },
        { id: 11, user: "receiver", text: "what have you done, show me?", time: "9.25 AM" },
        { id: 12, user: "sender", pic: [Image1], text: "Another photo from me.......", time: "9.30 AM", status: "delivered" },
        { id: 13, user: "receiver", fileName: 'Film Script', filetype: '.pdf', fileSize: '2 MB', time: "9.11 AM" },
        { id: 14, user: "receiver", fileName: 'Xl file', filetype: '.xlsx', fileSize: '3 MB', time: "9.11 AM" },
        { id: 15, user: "sender", fileName: 'Film Script', filetype: '.pdf', fileSize: '2 MB', time: "9.11 AM" },
        { id: 16, user: "sender", fileName: 'Xl file', filetype: '.xlsx', fileSize: '3 MB', time: "9.11 AM" },
        { id: 17, user: "sender", pic: [Image1, Image1,Image1, Image1,Image1, Image1], time: "9.30 AM", status: "delivered" },
    ];

    const [isGalleryOpen,setIsGalleryOpen] = useState(false)
    const Gallery = ()=>{
        setIsGalleryOpen(!isGalleryOpen)
    }

    const [isOpen, setIsOpen] = useState(false)
    const Dropdown = () => {
        setIsOpen(!isOpen)
    }

    const docRef = useRef(null);
    const photoRef = useRef(null);

    const OpenFileInput = (type) => {
        if (type === "document") {
            docRef.current.click()
        } else if (type === "photo") {
            photoRef.current.click()
        }
    }
    return (
        <div>

            <DmChat>
                <div className='bar'>
                    <div className='channelheader'>
                        <div className='display' onClick={onBack}>
                            <ArrowLeft className='color' />
                        </div>
                        <div>
                            <img src={profile} alt='img' className='circle' />
                        </div>
                        <div>
                            <h4 className='Heading active'>Designer</h4>
                            <p className='SubHeading active'>Online for 10 mins</p>
                        </div>
                    </div>

                </div>

                <MessageBox>

                    {msgs.map((msg, i) => {
                        const prev = msgs[i - 1];
                        const mid = msgs[i];
                        const next = msgs[i + 1];

                        const isFirstOfGroup = !prev || prev.user !== msg.user;
                        const isMidOfGroup = !mid || mid.user !== msg.user;
                        const isLastOfGroup = !next || next.user !== msg.user;

                        const Bubble = msg.user === "receiver" ? ChatLeft : ChatRight;
                        const wrapperClass = msg.user === "receiver" ? "flex-col-left" : "flex-col-right";

                        return (
                            <div key={msg.id} className="full-width">
                                <div className={wrapperClass}>

                                    <Bubble
                                        className={`chat-bubble ${msg.user} ${isFirstOfGroup ? "first" : ""}  ${msg.user} ${isMidOfGroup ? "first" : ""} ${isLastOfGroup ? "last" : ""}`}>


                                        {msg.fileName ?
                                            (<div className='fileInput'>
                                                <div className='file-div'>
                                                    {msg.filetype === '.pdf' ?

                                                        (<img src={FileIconPdf} alt='icon' />)
                                                        :
                                                        (<img src={FileIconXl} alt='icon' />)

                                                    }

                                                    <div className='file-txt-flex'>
                                                        <h5 className={`filename ${msg.user === "sender" ? "right" : ""}`}>
                                                            {msg.fileName}
                                                            <span>{msg.filetype}</span>
                                                        </h5>
                                                        <p className={`filesize ${msg.user === "sender" ? "right" : ""}`}>{msg.fileSize}</p>
                                                    </div>
                                                </div>
                                                <span> <img src={download} alt='icon' /></span>
                                            </div>)
                                            :
                                            (
                                                <>
                                                    {msg.pic && msg.pic.length > 0 && (
                                                        <div className="chat-image">
                                                            <img src={msg.pic[0]} alt="chat-img" className="chat-img" onClick={Gallery}/>

                                                            {msg.pic.length > 1 && (
                                                                <div className="pic-overlay">+{msg.pic.length - 1}</div>
                                                            )}
                                                        </div>
                                                    )}
                                                    
                                                    {isGalleryOpen &&
                                                    <div>
                                                        <div className='flex'>
                                                            <img src={DownloadPic} alt="close" className="download-icon"/>
                                                            <img src={close} alt="close" className="close-icon" onClick={Gallery}/>
                                                        </div>
                                                        <div><img src={msg.pic} alt="chat-img" className="chat-img" /></div>
                                                    </div>
                                                    
                                                    }

                                                    {/* {msg.pic && (
                                                        <div className="chat-image">
                                                            <img src={msg.pic} alt="img" className='chat-img'/>
                                                            <div className='pic-overlay'>+2</div>
                                                        </div>
                                                    )} */}

                                                    {msg.text && (
                                                        <p className="SubHeading">{msg.text}</p>
                                                    )}
                                                </>
                                            )
                                        }
                                    </Bubble>

                                    {isLastOfGroup && (
                                        <div className="SubHeading">
                                            {msg.user === "sender" && msg.status && (
                                                <span><Tick className={`color ${msg.status === "read" ? "active" : ""}`} /></span>
                                            )}
                                            <span>{msg.time}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                </MessageBox>

                <div className='msgBar'>
                    <img src={attach} alt='icon' onClick={Dropdown} />
                    <form action="">
                        <input type='search' placeholder='Type your message' className='msginput' />
                    </form>
                    <span className='circle'>
                        <img src={send} alt='icon' />
                    </span>
                </div>

                {isOpen &&
                    <Options>
                        <ul className='dropdown'>
                            <li onClick={() => OpenFileInput("document")}>Document</li>
                            <li onClick={() => OpenFileInput("photo")}>Photos</li>
                        </ul>

                        <input
                            type='file'
                            ref={photoRef}
                            style={{ display: "none" }}
                            accept='image/*'
                            onChange={(e) => console.log("Selected document:")}
                        />
                        <input
                            type="file"
                            ref={docRef}
                            style={{ display: "none" }}
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={(e) => console.log("Selected document:")}
                        />

                    </Options>
                }
            </DmChat>


        </div>
    )
}

export default Messages