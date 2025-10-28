import React, { useEffect, useState } from 'react'
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
import Loader from '../loading-spinner'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'

const Resume = ({onClose, resumeData}) => {
    const [isResume, setIsResume] = useState(resumeData || {})

    useEffect(()=>{
        if(resumeData){
            setIsResume(resumeData)
        }
        else{

            const fetchProfile = async ()=>{
              const data = await Applicant_Endpoints.get_resume()
              if(data){
                setIsResume(data)
                // console.log(data)
              }
            }
            fetchProfile();
        }
     },[resumeData])
    
    return (

        <Overlay>
        {isResume ? 
           
            <Main>
                <div className='profile'>
                    <div className='profile-intro'>
                        <div className='profile-pic'></div>
                        <div>
                            <h2 className='Name'>{isResume.fullname}</h2>
                            <h4 className='Title'>{isResume.title}</h4>
                        </div>
                    </div>
                    <div className='Circle' >
                        <img src={Close} alt='close' onClick={onClose}/>
                    </div>
                </div>
                <div className='profile-content'>
                    <div className='bioDiv'>
                        <h2 className='Heading'>BIOGRAPHY</h2>
                        <p className='Sub' dangerouslySetInnerHTML={{ __html: isResume.biography}}></p>
                   
                    </div>
                    <div className='Profile-box'>
                        <Box>
                            <h3 className='boxHeading'>Personal Information</h3>
                            <div className='flex'>
                                <div className='content'>
                                    <div><Cap className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Education</h2>
                                        <h4 className='SubHeading'>{isResume.degree}</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Clipboard className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Institude</h2>
                                        <h4 className='SubHeading'>{isResume.institute}</h4>
                                    </div>
                                </div>
                                 <div className='content'>
                                    <div><Cap className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Skill</h2>
                                        <h4 className='SubHeading'>{isResume.skills}</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Layers className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Experience</h2>
                                        <h4 className='SubHeading'>{isResume.experience}</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><UserCircle className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Gender</h2>
                                        <h4 className='SubHeading'>{isResume.gender}</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><UserCircle className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Projects</h2>
                                        <h4 className='SubHeading'>{isResume.projects}</h4>
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
                                        <h4 className='SubHeading'>{isResume.personalwebsite}</h4>
                                    </div>
                                </div>
                                <div className='flex-div'>
                                    <div className='content'>
                                        <div><Map className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Location</h2>
                                            <h4 className='SubHeading'>{isResume.location}</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='content'>
                                    <div><Phone className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Phone</h2>
                                        <h4 className='SubHeading'>{isResume.phonenumber}</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Envelope className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Email Address</h2>
                                        <h4 className='SubHeading'>{isResume.email}</h4>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </Main>

              :  <Loader/>}
        </Overlay>
    )
}

export default Resume