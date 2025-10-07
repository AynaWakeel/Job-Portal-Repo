import React, { useEffect, useState } from 'react'
import { Box, Main, Overlay } from './style'
import { ReactComponent as Global } from '../../../assets/icons/GlobeSimple.svg'
import { ReactComponent as UserCircle } from '../../../assets/icons/UserCircle.svg'
import { ReactComponent as Map } from '../../../assets/icons/map-pin-line-duotone.svg'
import { ReactComponent as Envelope } from '../../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../../assets/icons/phone-call-duotone 1.svg'
import { ReactComponent as Layers } from '../../../assets/icons/fi_layers.svg'
import { ReactComponent as Cap } from '../../../assets/icons/GraduationCap.svg'
import { ReactComponent as Clipboard } from '../../../assets/icons/ClipboardText.svg'
import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'
import BannerImg from '../../../assets/images/banner.png'
import Company from '../../../assets/images/Logo.png'
import { useLocation } from 'react-router'



const ViewApplicantResume = () => {
    const location = useLocation()
    const [isResume, setIsResume] = useState({})
    // const userId = location.state.userId

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         const res = await Applicant_Endpoints.get_resume_by_id(userId)
    //         if (res?.data) {
    //             setIsResume(res.data)
    //             console.log(res.data)
    //         }
    //     }
    //     fetchProfile();

    // }, [])

    return (

        <Main>
            <div className='banner'>
                <img src={BannerImg} alt='banner' />
            </div>
            <div className='profile'>
                <div className='profile-intro'>
                    <div className='profile-pic'>
                        <img src={Company} alt='profile' />
                    </div>
                    <div className='profile-flex-col'>
                        <div className='detail-flex'>
                            <h2 className='Name'>{isResume.fullName || "name"}</h2>
                        </div>
                        <div className='sub-flex'>
                            <h4 className='Title'>{isResume.title || "title"}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile-content'>
                <div className='content-left'>
                    <div>
                        <h2 className='Heading'>Biography</h2>
                        <p className='Sub'>Biography</p>

                        <p className='Sub' dangerouslySetInnerHTML={{ __html: isResume.bioGraphy || "bioGraphy" }}></p>

                    </div>



                </div>
                <div className='Profile-box'>
                    <Box>
                        <h3 className='boxHeading'>Personal Information</h3>
                        <div className='flex'>
                            <div className='content'>
                                <div><Cap className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Education</h2>
                                    <h4 className='SubHeading'>{isResume.degree || "N/A"}</h4>
                                </div>
                            </div>
                            <div className='content'>
                                <div><Clipboard className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Institude</h2>
                                    <h4 className='SubHeading'>{isResume.institute || "N/A"}</h4>
                                </div>
                            </div>
                            <div className='content'>
                                <div><Cap className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Skill</h2>
                                    <h4 className='SubHeading'>{isResume.skills || "N/A"}</h4>
                                </div>
                            </div>
                            <div className='content'>
                                <div><Layers className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Experience</h2>
                                    <h4 className='SubHeading'>{isResume.experience || "N/A"}</h4>
                                </div>
                            </div>
                            <div className='content'>
                                <div><UserCircle className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Gender</h2>
                                    <h4 className='SubHeading'>{isResume.gender || "N/A"}</h4>
                                </div>
                            </div>
                            <div className='content'>
                                <div><UserCircle className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Projects</h2>
                                    <h4 className='SubHeading'>{isResume.projects || "N/A"}</h4>
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
                                    <h4 className='SubHeading'>{isResume.personalwebsite || "N/A"}</h4>
                                </div>
                            </div>
                            <div className='flex-div'>
                                <div className='content'>
                                    <div><Map className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Location</h2>
                                        <h4 className='SubHeading'>{isResume.location || "N/A"}</h4>
                                    </div>
                                </div>
                              
                            </div>
                            <div className='content'>
                                <div><Phone className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Phone</h2>
                                    <h4 className='SubHeading'>{isResume.phonenumber || "N/A"}</h4>
                                </div>
                            </div>
                            <div className='content'>
                                <div><Envelope className='IconColor' /></div>
                                <div>
                                    <h2 className='Title'>Email Address</h2>
                                    <h4 className='SubHeading'>{isResume.email || "N/A"}</h4>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </Main>


    )
}

export default ViewApplicantResume