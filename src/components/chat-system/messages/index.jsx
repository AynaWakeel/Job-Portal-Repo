import React, { useState } from 'react'

import profile from '../../../assets/images/Ellipse 18.png'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import {ReactComponent as Tick} from '../../../assets/icons/Read status.svg'
import { ChatLeft, ChatRight, DmChat, MessageBox, Options } from './style'
const Messages = () => {
     const [isOpen,setIsOpen] = useState(false)
        const Dropdown = ()=>{
            setIsOpen(!isOpen)
        }
    return (
        <div>

            <DmChat>
                <div className='bar'>
                    <div className='channelheader'>
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
                            <li>Document</li>
                            <li>Photos</li>
                        </ul>
                    </Options>
                }
            </DmChat>


        </div>
    )
}

export default Messages