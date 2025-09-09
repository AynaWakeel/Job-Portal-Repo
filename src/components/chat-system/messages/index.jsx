import React, { useRef, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/fi_arrow-left.svg'
import profile from '../../../assets/images/Ellipse 18.png'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import { ReactComponent as Tick } from '../../../assets/icons/Read status.svg'
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
        { id: 10, user: "sender", text: "send me..", time: "9.20 AM", status: "read" },
        { id: 11, user: "receiver", text: "what have you done, show me?", time: "9.25 AM" },
        { id: 12, user: "sender", text: "Another reply.", time: "9.30 AM", status: "delivered" },
    ];


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
                        const next = msgs[i + 1];

                        const isFirstOfGroup = !prev || prev.user !== msg.user;
                        const isLastOfGroup = !next || next.user !== msg.user;

                        const Bubble = msg.user === "receiver" ? ChatLeft : ChatRight;
                        const wrapperClass = msg.user === "receiver" ? "flex-col-left" : "flex-col-right";

                        return (
                            <div key={msg.id} className="full-width">
                                <div className={wrapperClass}>                               

                                    <Bubble
                                        className={`chat-bubble ${msg.user} ${isFirstOfGroup ? "first" : ""} ${isLastOfGroup ? "last" : ""}`}>
                                        <p className="SubHeading">{msg.text}</p>
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