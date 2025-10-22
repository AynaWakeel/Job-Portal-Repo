import React, { useEffect, useState } from 'react'
import { Box, CompanyBox, Contact, Main } from './style'
import { ReactComponent as Calender } from '../../../../assets/icons/CalendarBlank2.svg'
import { ReactComponent as Map } from '../../../../assets/icons/MapPinLine.svg'
import { ReactComponent as Wallet } from '../../../../assets/icons/Wallet.svg'
import { ReactComponent as Brief } from '../../../../assets/icons/briefcase2.svg'
import { ReactComponent as Timer } from '../../../../assets/icons/Timer.svg'
//----------------- social media
import { ReactComponent as Social1 } from '../../../../assets/icons/social-media1.svg'
import { ReactComponent as Social2 } from '../../../../assets/icons/social-media2.svg'
import { ReactComponent as Social3 } from '../../../../assets/icons/social-media3.svg'
import { ReactComponent as Social4 } from '../../../../assets/icons/linkedin.svg'
// import Company from '../../../../assets/images/Logo.png'
import BannerImg from '../../../../assets/images/banner.png'
import { ReactComponent as Global } from '../../../../assets/icons/GlobeSimple.svg'
import { ReactComponent as Envelope } from '../../../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../../../assets/icons/phone-call-duotone 1.svg'
import { Recruiter_Endpoints } from '../../../../lib/api/recruiter_endpoints'
import Loader from '../../../../components/loading-spinner'

const RecruiterProfile = () => {
    const [company, setCompany] = useState({})

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await Recruiter_Endpoints.get_company_profile()
            
            if (data?.data) {
                setCompany(data.data)
            }
        }
        fetchProfile()
    }, [])

    if (!company) {
        return <Loader />;
    }

    return (
        <div>

            <Main>
                <div className='banner'>
                    <img src={company.bannerImage || BannerImg} alt='banner' />
                </div>
                <div className='profile'>
                    <div className='profile-intro'>
                        {company?.profilepic ? 
                        
                        <div className='profile-pic'>
                            <img src={company.profilepic} alt='img' />
                        </div>

                        :
                        
                        <div className='profile-pic'></div>

                       }
                        <div className='profile-flex-col'>
                            <div className='detail-flex'>
                                <h2 className='Name'>{company.companyName}</h2>
                            </div>
                            <div className='sub-flex'>
                                <h4 className='Title'>{company.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-content'>
                    <div className='content-left'>
                        <div>
                            <h2 className='Heading'>About Us</h2>
                            <div className='Sub' dangerouslySetInnerHTML={{ __html: company.aboutUs }} />
                        </div>

                        <Contact>
                            <h3 className='boxHeading'>Contact Information</h3>
                            <div className='flex'>
                                <div className='content'>
                                    <div><Global className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Website</h2>
                                        <h4 className='SubHeading'>{company.companyWebsite}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className='content'>
                                        <div><Map className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Location</h2>
                                            <h4 className='SubHeading'>{company.location}</h4>
                                        </div>
                                    </div>

                                </div>
                                <div className='content'>
                                    <div><Phone className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Phone</h2>
                                        <h4 className='SubHeading'>{company.phoneNumber}</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><Envelope className='IconColor' /></div>
                                    <div>
                                        <h2 className='Title'>Email Address</h2>
                                        <h4 className='SubHeading'>{company.email}</h4>
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
                                            <h4 className='SubHeading'>{company.yearOfEstablishment}</h4>
                                        </div>
                                    </div>

                                    <div className='content'>
                                        <div><Timer className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Organization type</h2>
                                            <h4 className='SubHeading'>{company.organizationType}</h4>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Team Size</h2>
                                            <h4 className='SubHeading'>{company.teamSize}</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Wallet className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Industry types</h2>
                                            <h4 className='SubHeading'>{company.industryTypes}</h4>
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