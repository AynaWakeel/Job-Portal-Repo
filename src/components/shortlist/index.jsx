import React, { useEffect, useState } from 'react'
import { CompanyCards } from './style'
import Dot from '../../assets/icons/•.svg'
import Cross from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/CheckCircle.svg'
import Profile from '../../assets/images/Ellipse 18.png'
import { useLocation, useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'

const Shortlist = () => {
    const location = useLocation()
    const jobId = location.state.jobId
    
    
    const navigate = useNavigate()
    const [applicants, setApplicants] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (!jobId) return;
            const res = await Recruiter_Endpoints.get_applications(jobId)
            console.log(res);
            

            if (res?.data?.shortlisted) {
                setApplicants(res.data.shortlisted)
                console.log(res.data.shortlisted, "shortlist")
            }
        }
        fetchData()
    }, [jobId])


    const gotoProfile = (applicationId) => {
        // navigate(`/recruiter/dashboard/applications/${jobId}/applicate-profile/${applicationId}`)
    }
    return (
        <div>
            <CompanyCards>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {applicants.map((items) => (
                            <div className='Card' onClick={gotoProfile(items.id)}>
                                <div className='flex'>
                                    <div className='CardFlex'>
                                        <div className='IconBox'>
                                            {/* <img src={items.profilepic || Profile} className='IconColor' /> */}
                                        </div>
                                        <div>
                                            <h3 className='Heading'>{items.fullName}</h3>
                                            <span className='SubHeading'>{items.title}</span>
                                        </div>
                                    </div>
                                    <div className='gap'>
                                        <img src={Cross} />
                                        <img src={Check} />
                                    </div>
                                </div>
                                <div className='flex-col'>
                                    <h4 className='FlexIcon'>
                                        <span><img src={Dot} /></span>
                                        <span className='small'>{items.experience}</span>
                                    </h4>
                                    <h4 className='FlexIcon'>
                                        <span><img src={Dot} /></span>
                                        <span className='small'>{items.education}</span>
                                    </h4>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </CompanyCards>
        </div>
    )
}

export default Shortlist