import React, { useEffect, useState } from 'react'
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
import { useLocation, useParams } from 'react-router'
import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'
import Loader from '../../../components/loading-spinner'

const CompanyJobDetail = () => {
     const [isLoading, setIsLoading] =  useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const PopupModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const location = useLocation()
    const id = location.state.id

    const ContentPage = ['/admin/dashboard/job-detail']
    const hideContent = ContentPage.some(path => location.pathname.startsWith(path))

    const [jobData, setJobData] = useState({})
    const [companyData, setCompanyData] = useState({})
     const [match, setMatch] = useState({})

    const fetchData = async () => {
        const res = await Applicant_Endpoints.get_job_detail_by_id(id)
        if (res?.data?.job) {
            console.log(id,":id")
            setJobData(res.data.job)
            setIsLoading(false)
            setCompanyData(res.data.job.company)
        }
    }
    
    const fetchScore = async()=>{
        const matchRes = await Applicant_Endpoints.get_job_match_score_by_id(id)
        if(matchRes?.data?.matchScore){
            console.log(matchRes.data.matchScore.jobId,":jobId")
            setMatch(matchRes.data.matchScore)
            console.log(matchRes.data.matchScore);          
            setIsLoading(false)
        }
    }

    useEffect(() => {

        if (id) fetchData()
        if(id) fetchScore()

    }, [id])

     if(isLoading) return <Loader/>

    return (
        <div>
            <Main>
                <div className='profile'>
                    <div className='profile-intro'>
                        <div className='profile-pic'>
                            <img src={companyData.profilepic || Company} alt='icon' />
                        </div>
                        <div className='profile-flex-col'>
                            <div className='detail-flex'>
                                <h2 className='Name'>{jobData.title}</h2>
                                <span className='Badge'>{jobData.jobType}</span>
                                {!hideContent &&
                                    <span className='Badge'>Total Job match {match.totalMatchScore}</span>
                                }
                            </div>
                            <div className='detail-flex'>
                                <div className='sub-flex'>
                                    <Link className='IconColor' />
                                    <h4 className='Title'>{companyData.companyWebsite || "N/A"}</h4>
                                </div>
                                <div className='detail-flex'>
                                    <Call className='IconColor' />
                                    <h4 className='Title'>{companyData.phoneNumber || "N/A"}</h4>
                                </div>
                                <div className='sub-flex'>
                                    <SmallEnv className='IconColor' />
                                    <h4 className='Title'>{companyData.email || "N/A"}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-flex-col'>
                        {!hideContent &&
                            <div className='Right-side'>
                                {jobData.status === "active" &&

                                <>
                                
                                <span className='Box'><FavIcon className='Color' /></span>
                                
                                <button className='CardBtn' onClick={PopupModal}>
                                    <span>Apply Now</span>
                                    <ArrowIcon className='IconColor' />
                                </button>

                                </>

                               
                               }
                                {isModalOpen &&
                                    <ApplyModal jobId={jobData.id} onClose={() => setIsModalOpen(false)} />
                                }
                            </div>
                        }
                        <div className='status-side'>
                            <h4 className='Title'>Job expire in:</h4>
                            <h4 className='status'>{jobData.jobExpirationDate}</h4>
                        </div>

                    </div>
                </div>
                <div className='profile-content'>
                    <div className='content-left'>
                        <div>
                            <h2 className='Heading'>Job Description</h2>
                            <p className='Sub' dangerouslySetInnerHTML={{__html: jobData.description}}></p>

                        </div>
                        <div>
                            <h2 className='Heading'>Responsibilities</h2>
                            <ul className='List'>
                                <li>
                                    <p className='Sub' dangerouslySetInnerHTML={{__html: jobData.responsibilities}}></p>
                                </li>
                               
                            </ul>

                        </div>
                    </div>
                    <div className='Profile-box'>
                        <Box>
                            <h3 className='boxHeading'>Job Match</h3>
                            <div className='flex-col'>
                                <div className='flex'>
                                    <div className='content-row'>
                                        <Calender className='IconColor' />
                                        <h2 className='Title'>Skills:</h2>
                                        <h4 className='SubHeading'>{match.skillsMatchScore}%</h4>
                                    </div>
                                    <div className='content-row'>
                                        <Brief className='IconColor' />
                                        <h2 className='Title'>Education:</h2>
                                        <h4 className='SubHeading'>{match.educationMatchScore}%</h4>
                                    </div>
                                    <div className='content-row'>
                                        <Timer className='IconColor' />
                                        <h2 className='Title'>Experience</h2>
                                        <h4 className='SubHeading'>{match.experienceMatchScore}%</h4>
                                    </div>
                                </div>
                            </div>
                        </Box>

                        <Box>
                            <h3 className='boxHeading'>Job Overview</h3>
                            <div className='flex-col'>
                                <div className='flex'>
                                    {/* <div className='content'>
                                        <div><Calender className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Job Posted:</h2>
                                            <h4 className='SubHeading'>14 June, 2021</h4>
                                        </div>
                                    </div> */}

                                    <div className='content'>
                                        <div><Map className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Location:</h2>
                                            <h4 className='SubHeading'>{companyData.location || "N/A"}</h4>
                                        </div>
                                    </div>

                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Job Type:</h2>
                                            <h4 className='SubHeading'>{jobData.jobType}</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Experience</h2>
                                            <h4 className='SubHeading'>{jobData.experience} years</h4>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div className='content'>
                                        <div><Brief className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Education</h2>
                                            <h4 className='SubHeading'>{jobData.education}</h4>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div><Wallet className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Salary:</h2>
                                            <h4 className='SubHeading'>${jobData.salaryRange}</h4>
                                        </div>
                                    </div>
                                    {/* <div className='content'>
                                        <div><Map className='IconColor' /></div>
                                        <div>
                                            <h2 className='Title'>Location:</h2>
                                            <h4 className='SubHeading'>{companyData.location || "N/A"}</h4>
                                        </div>
                                    </div> */}
                                </div>


                            </div>
                        </Box>

                        <CompanyBox>
                            <div className='profile-intro'>
                                <div className='profile-logo photo'>
                                    <img src={companyData.profilepic || Company} alt='icon' />
                                </div>
                                <div>
                                    <h2 className='Name'>Instagram</h2>
                                    <h2 className='Title'>Social networking service</h2>
                                </div>

                            </div>
                            <div className='content'>
                                <div className='flex'>
                                    <h2 className='Title'>Founded in:</h2>
                                    <h4 className='SubHeading'>{companyData.yearOfEstablishment || "N/A"}</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Organization type:</h2>
                                    <h4 className='SubHeading'>{companyData.organizationType || "N/A"}</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Company size:</h2>
                                    <h4 className='SubHeading'>{companyData.teamSize || "N/A"} Employers</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Phone</h2>
                                    <h4 className='SubHeading'>{companyData.phoneNumber || "N/A"}</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Email</h2>
                                    <h4 className='SubHeading'>{companyData.email || "N/A"}</h4>
                                </div>
                                <div className='flex'>
                                    <h2 className='Title'>Website</h2>
                                    <h4 className='SubHeading'>{companyData.companyWebsite || "N/A"}</h4>
                                </div>

                            </div>
                            <div className='flex-icons'>
                                <a href={companyData.facebookLink} className='Box-icons'><Social1 className='Color' /></a>
                                <a href={companyData.twitterLink} className='Box-icons'><Social2 className='Color' /></a>
                                <a href={companyData.instagramLink} className='Box-icons'><Social3 className='Color' /></a>
                                <a href={companyData.linkedInLink} className='Box-icons'><Social4 className='Color' /></a>
                            </div>
                        </CompanyBox>

                    </div>
                </div>
            </Main>
        </div>
    )
}

export default CompanyJobDetail