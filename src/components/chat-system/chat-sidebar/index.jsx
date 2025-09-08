import React, { useState } from 'react'
import { ChatDiv, ChatSidebar, DmChat} from './style'
import searchicon from '../../../assets/icons/search.svg'
import profile from '../../../assets/images/Ellipse 18.png'
import profile2 from '../../../assets/images/Profile pic.png'
import Messages from '../messages'

const ChatSystem = () => {
    const [isOpen,setIsOpen] = useState(false)
    const Dropdown = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div>

            <ChatDiv>
                <ChatSidebar>
                    <div>
                        <form action="">
                            <div className='searchinput'>
                                <img src={searchicon} alt='icon' />
                                <input type='search' placeholder='Search' />
                            </div>
                        </form>
                    </div>

                    <div className='channel active'>
                        <div className='channeltxt'>
                            <div>
                                <img src={profile} alt='img' className='circle' />
                            </div>
                            <div>
                                <h4 className='Heading active'>Name</h4>
                                <p className='SubHeading active'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='SubHeading active'>
                            <span>9.10</span>&nbsp;<span>AM</span>
                        </div>
                    </div>

                    <div className='channel'>
                        <div className='channeltxt'>
                            <div>
                                <img src={profile2} alt='img' className='circle' />
                            </div>
                            <div>
                                <h4 className='Heading'>Name</h4>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='SubHeading'>
                            <span>9.10</span>&nbsp;<span>AM</span>
                        </div>
                    </div>

                    <div className='channel'>
                        <div className='channeltxt'>
                            <div>
                                <img src={profile} alt='img' className='circle' />
                            </div>
                            <div>
                                <h4 className='Heading'>Name</h4>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='SubHeading'>
                            <span>9.10</span>&nbsp;<span>AM</span>
                        </div>
                    </div>

                    <div className='channel'>
                        <div className='channeltxt'>
                            <div>
                                <img src={profile2} alt='img' className='circle' />
                            </div>
                            <div>
                                <h4 className='Heading'>Name</h4>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='SubHeading'>
                            <span>9.10</span>&nbsp;<span>AM</span>
                        </div>
                    </div>

                    <div className='channel'>
                        <div className='channeltxt'>
                            <div>
                                <img src={profile} alt='img' className='circle' />
                            </div>
                            <div>
                                <h4 className='Heading'>Name</h4>
                                <p className='SubHeading'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='SubHeading'>
                            <span>9.10</span>&nbsp;<span>AM</span>
                        </div>
                    </div>

                </ChatSidebar>

                <DmChat>
                    <Messages/>
                </DmChat>

            </ChatDiv>

        </div>
    )
}

export default ChatSystem