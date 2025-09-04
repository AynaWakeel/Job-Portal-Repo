import React, { useState } from 'react'
import { Box, CompanyBox, Main } from './style'
import { ReactComponent as Calender } from '../../../assets/icons/CalendarBlank2.svg'
import { ReactComponent as Map } from '../../../assets/icons/MapPinLine.svg'
import { ReactComponent as Wallet } from '../../../assets/icons/Wallet.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as FavIcon } from '../../../assets/icons/BookmarkSimple.svg'
import { ReactComponent as SmallEnv } from '../../../assets/icons/Envelope-small.svg'
import { ReactComponent as Call } from '../../../assets/icons/phone 1.svg'
import { ReactComponent as Link } from '../../../assets/icons/fi_link.svg'
import { ReactComponent as Brief } from '../../../assets/icons/briefcase2.svg'
import { ReactComponent as Timer } from '../../../assets/icons/Timer.svg'
//----------------- social media
import { ReactComponent as Social1 } from '../../../assets/icons/social-media1.svg'
import { ReactComponent as Social2 } from '../../../assets/icons/social-media2.svg'
import { ReactComponent as Social3 } from '../../../assets/icons/social-media3.svg'
import { ReactComponent as Social4 } from '../../../assets/icons/linkedin.svg'
import ApplyModal from '../../../components/apply-job-modal'
import Company from '../../../assets/images/Logo.png'

const CompanyJobDetail = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const PopupModal = () =>{
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div>
            <Main>
                <div className='profile'>
                    <div className='profile-intro'>
                        <div className='profile-pic'>
                            <img src={Company} alt='icon'/>
                        </div>
                        <div className='profile-flex-col'>
                            <div className='detail-flex'>
                                <h2 className='Name'>Senior UX Designer</h2>
                                <span className='Badge'>Full Time</span>
                                <span className='match'>40%</span>
                            </div>
                            <div className='detail-flex'>
                                <div className='sub-flex'>
                                    <Link className='IconColor' />
                                    <h4 className='Title'>https://instagram.com</h4>
                                </div>
                                <div className='detail-flex'>
                                    <Call className='IconColor' />
                                    <h4 className='Title'>(406) 555-0120</h4>
                                </div>
                                <div className='sub-flex'>
                                    <SmallEnv className='IconColor' />
                                    <h4 className='Title'>career@instagram.com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-flex-col'>
                        <div className='Right-side'>
                            <span className='Box'><FavIcon className='Color' /></span>
                            <button className='CardBtn' onClick={PopupModal}>
                                <span>Apply Now</span>
                                <ArrowIcon className='IconColor' />
                            </button>
                            {isModalOpen &&
                            <ApplyModal onClose={()=>setIsModalOpen(false)}/>
                            }
                        </div>
                        <div className='status-side'>
                            <h4 className='Title'>Job expire in:</h4>
                            <h4 className='status'>June 30, 2021</h4>
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
                        <div>
                            <h2 className='Heading'>Responsibilities</h2>
                            <ul className='List'>
                                <li>
                                    <p className='Sub'>Quisque semper gravida est et consectetur.</p>
                                </li>
                                <li>
                                    <p className='Sub'>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</p>
                                </li>
                                <li>
                                    <p className='Sub'>Morbi mattis in ipsum ac tempus.</p>
                                </li>
                                <li>
                                    <p className='Sub'>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</p>
                                </li>
                                <li>
                                    <p className='Sub'>vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</p>
                                </li>
                                <li>
                                    <p className='Sub'>Quisque semper gravida est et consectetur.</p>
                                </li>
                                <li>
                                    <p className='Sub'>commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</p>
                                </li>
                                <li>
                                    <p className='Sub'>Quisque semper gravida est et consectetur.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='Profile-box'>
                        <Box>
                            <h3 className='boxHeading'>Job Overview</h3>
                            <div className='flex-col'>
                                <div className='flex'>
                                    <div className='content'>
                                        <div><Calender className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Job Posted:</h2>
                                            <h4 className='SubHeading'>14 June, 2021</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Timer className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Job Expire In:</h2>
                                            <h4 className='SubHeading'>16 June, 2021</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Experience</h2>
                                            <h4 className='SubHeading'>7 Years</h4>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Education</h2>
                                            <h4 className='SubHeading'>Graduation</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Wallet className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Salary:</h2>
                                            <h4 className='SubHeading'>$50k-80k/month</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Map className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Location:</h2>
                                            <h4 className='SubHeading'>New York, USA</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    
                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Job Type:</h2>
                                            <h4 className='SubHeading'>Full Time</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Box>

                        <CompanyBox>
                            <div className='profile-intro'>
                                <div className='profile-logo'>
                                     <img src={Company} alt='icon'/>
                                </div>
                                <div>
                                    <h2 className='Name'>Instagram</h2>
                                    <h2 className='Title'>Social networking service</h2>
                                </div>

                            </div>
                            <div className='content'>
                                <div className='flex'>
                                    <h2 className='Title'>Founded in:</h2>
                                    <h4 className='SubHeading'>March 21, 2006</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Organization type:</h2>
                                    <h4 className='SubHeading'>Private Company</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Company size:</h2>
                                    <h4 className='SubHeading'>120-300 Employers</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Phone</h2>
                                    <h4 className='SubHeading'>(406) 555-0120</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Email</h2>
                                    <h4 className='SubHeading'>twitter@gmail.com</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Website</h2>
                                    <h4 className='SubHeading'>https://twitter.com</h4>
                                </div>

                            </div>
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

export default CompanyJobDetail