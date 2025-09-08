import React, { useRef, useState } from 'react'
import {ReactComponent as ArrowLeft} from '../../../assets/icons/fi_arrow-left.svg'
import profile from '../../../assets/images/Ellipse 18.png'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import { ReactComponent as Tick } from '../../../assets/icons/Read status.svg'
import { ChatLeft, ChatRight, DmChat, MessageBox, Options } from './style'

const Messages = ({onBack}) => {
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
                            <ArrowLeft className='color'/>
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

                    <div className='full-width'>
                        <div className='flex-col-left'>
                            <ChatLeft>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, expedita.</p>
                            </ChatLeft>
                            <div className='SubHeading'>
                                <span>9.10</span>&nbsp;<span>AM</span>
                            </div>
                        </div>
                    </div>

                    <div className='full-width'>
                        <div className='flex-col-right'>
                            <ChatRight>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis eos commodi quam voluptate.</p>
                            </ChatRight>
                            <div className='SubHeading'>
                                <div className='time'>
                                    <span><Tick className='color' /></span>
                                    <div>
                                        <span>9.20</span>&nbsp;<span>AM</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='full-width'>
                        <div className='flex-col-left'>
                            <ChatLeft>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, expedita.</p>
                            </ChatLeft>
                            <div className='SubHeading'>
                                <span>9.10</span>&nbsp;<span>AM</span>
                            </div>
                        </div>
                    </div>

                    <div className='full-width'>
                        <div className='flex-col-right'>
                            <ChatRight>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis eos commodi quam voluptate.</p>
                            </ChatRight>
                            <div className='SubHeading'>
                                <div className='time'>
                                    <span><Tick className='color active' /></span>
                                    <div>
                                        <span>9.20</span>&nbsp;<span>AM</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='full-width'>
                        <div className='flex-col-left'>
                            <ChatLeft>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, expedita.</p>
                            </ChatLeft>
                            <div className='SubHeading'>
                                <span>9.10</span>&nbsp;<span>AM</span>
                            </div>
                        </div>
                    </div>

                    <div className='full-width'>
                        <div className='flex-col-right'>
                            <ChatRight>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis eos commodi quam voluptate.</p>
                            </ChatRight>
                            <div className='SubHeading'>
                                <div className='time'>
                                    <span><Tick className='color active' /></span>
                                    <div>
                                        <span>9.20</span>&nbsp;<span>AM</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='full-width'>
                        <div className='flex-col-left'>
                            <ChatLeft>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, expedita.</p>
                            </ChatLeft>
                            <div className='SubHeading'>
                                <span>9.10</span>&nbsp;<span>AM</span>
                            </div>
                        </div>
                    </div>

                    <div className='full-width'>
                        <div className='flex-col-right'>
                            <ChatRight>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis eos commodi quam voluptate.</p>
                            </ChatRight>
                            <div className='SubHeading'>
                                <div className='time'>
                                    <span><Tick className='color' /></span>
                                    <div>
                                        <span>9.20</span>&nbsp;<span>AM</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

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