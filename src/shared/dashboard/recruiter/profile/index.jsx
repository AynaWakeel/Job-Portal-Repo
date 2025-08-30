import React from 'react'
import { Box, CompanyBox, Contact, Main } from './style'
import { ReactComponent as Calender } from '../../../../assets/icons/CalendarBlank2.svg'
import { ReactComponent as Map } from '../../../../assets/icons/MapPinLine.svg'
import { ReactComponent as Wallet } from '../../../../assets/icons/Wallet.svg'
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as FavIcon } from '../../../../assets/icons/BookmarkSimple.svg'
import { ReactComponent as SmallEnv } from '../../../../assets/icons/Envelope-small.svg'
import { ReactComponent as Call } from '../../../../assets/icons/phone 1.svg'
import { ReactComponent as Link } from '../../../../assets/icons/fi_link.svg'
import { ReactComponent as Brief } from '../../../../assets/icons/briefcase2.svg'
import { ReactComponent as Timer } from '../../../../assets/icons/Timer.svg'
//----------------- social media
import { ReactComponent as Social1 } from '../../../../assets/icons/social-media1.svg'
import { ReactComponent as Social2 } from '../../../../assets/icons/social-media2.svg'
import { ReactComponent as Social3 } from '../../../../assets/icons/social-media3.svg'
import { ReactComponent as Social4 } from '../../../../assets/icons/linkedin.svg'
import Company from '../../../../assets/images/Logo.png'
import BannerImg from '../../../../assets/images/banner.png'
import { ReactComponent as Global } from '../../../../assets/icons/GlobeSimple.svg'
// import { ReactComponent as Map } from '../../assets/icons/map-pin-line-duotone.svg'
import { ReactComponent as Envelope } from '../../../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../../../assets/icons/phone-call-duotone 1.svg'

const RecruiterProfile = () => {
    return (
        <div>

            <Main>
                <div className='banner'>
                    <img src={BannerImg} alt='banner' />
                </div>
                <div className='profile'>
                    <div className='profile-intro'>
                        <div className='profile-pic'>
                            <img src={Company} alt='icon' />
                        </div>
                        <div className='profile-flex-col'>
                            <div className='detail-flex'>
                                <h2 className='Name'>Instagram</h2>
                            </div>
                            <div className='sub-flex'>
                                <h4 className='Title'>Information Technology (IT)</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-content'>
                    <div className='content-left'>
                        <div>
                            <h2 className='Heading'>Job Description</h2>
                            <p className='Sub'>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.</p>
                            <p className='Sub'>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.</p>
                        </div>

                        <Contact>
                            <h3 className='boxHeading'>Contact Information</h3>
                            <div className='flex'>
                                <div className='content'>
                                    <div><Global className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Website</h2>
                                        <h4 className='SubHeading'>www.estherhoward.com</h4>
                                    </div>
                                </div>
                                <div>
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
                        </Contact>

                    </div>
                    <div className='Profile-box'>
                        <Box>
                            <div className='flex-col'>
                                <div className='flex'>
                                    <div className='content'>
                                        <div><Calender className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Founded In:</h2>
                                            <h4 className='SubHeading'>14 June, 2021</h4>
                                        </div>
                                    </div>

                                    <div className='content'>
                                        <div><Timer className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Organization type</h2>
                                            <h4 className='SubHeading'>Private Company</h4>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Team Size</h2>
                                            <h4 className='SubHeading'>120-300 Candidates</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Wallet className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Industry types</h2>
                                            <h4 className='SubHeading'>Technology</h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Box>

                        <CompanyBox>
                            <h3 className='boxHeading'>Follow Us On:</h3>
                            <div className='flex-icons'>
                                <span className='Box-icons'><Social1 className='Color' /></span>
                                <span className='Box-icons'><Social2 className='Color' /></span>
                                <span className='Box-icons'><Social3 className='Color' /></span>
                                <span className='Box-icons'><Social4 className='Color' /></span>
                            </div>
                        </CompanyBox>

                    </div>
                </div>
            </Main>
        </div>
    )
}

export default RecruiterProfile