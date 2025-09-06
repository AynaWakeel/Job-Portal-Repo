import React, { useState } from 'react'
import { Box, Main, Overlay } from './style'
import { ReactComponent as Global } from '../../assets/icons/GlobeSimple.svg'
import { ReactComponent as UserCircle } from '../../assets/icons/UserCircle.svg'
import { ReactComponent as Map } from '../../assets/icons/map-pin-line-duotone.svg'
import { ReactComponent as Envelope } from '../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone-call-duotone 1.svg'
import { ReactComponent as Layers } from '../../assets/icons/fi_layers.svg'
import { ReactComponent as Cap } from '../../assets/icons/GraduationCap.svg'
import { ReactComponent as Clipboard } from '../../assets/icons/ClipboardText.svg'
import Close from '../../assets/icons/fi_x.svg'

const Resume = ({onClose}) => {
    
    return (
        <Overlay>
            <Main>
                <div className='profile'>
                    <div className='profile-intro'>
                        <div className='profile-pic'></div>
                        <div>
                            <h2 className='Name'>Esther Howard</h2>
                            <h4 className='Title'>Website Designer (UI/UX)</h4>
                        </div>
                    </div>
                    <div className='Circle' >
                        <img src={Close} alt='close' onClick={onClose}/>
                    </div>
                </div>
                <div className='profile-content'>
                    <div>
                        <h2 className='Heading'>BIOGRAPHY</h2>
                        <p className='Sub'>I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.</p>
                        <p className='Sub'>I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.</p>
                        <p className='Sub'>I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.</p>
                    </div>
                    <div className='Profile-box'>
                        <Box>
                            <h3 className='boxHeading'>Personal Information</h3>
                            <div className='flex'>
                                <div className='content'>
                                    <div><Cap className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Education</h2>
                                        <h4 className='SubHeading'>Master Degree</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Clipboard className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Institude</h2>
                                        <h4 className='SubHeading'>Builtinsoft</h4>
                                    </div>
                                </div>
                                 <div className='content'>
                                    <div><Cap className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Skill</h2>
                                        <h4 className='SubHeading'>JavaScript</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Layers className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Experience</h2>
                                        <h4 className='SubHeading'>7 Years</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><UserCircle className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Gender</h2>
                                        <h4 className='SubHeading'>Male</h4>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <h3 className='boxHeading'>Contact Information</h3>
                            <div className='flex'>
                                <div className='content'>
                                    <div><Global className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Website</h2>
                                        <h4 className='SubHeading'>www.estherhoward.com</h4>
                                    </div>
                                </div>
                                <div className='flex-div'>
                                    <div className='content'>
                                        <div><Map className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Location</h2>
                                            <h4 className='SubHeading'>Beverly Hills, California 90202</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='Title'>Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland, </p>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Phone className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Phone</h2>
                                        <h4 className='SubHeading'>+1-202-555-0141</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Envelope className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Email Address</h2>
                                        <h4 className='SubHeading'>esther.howard@gmail.com</h4>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </Main>
        </Overlay>
    )
}

export default Resume