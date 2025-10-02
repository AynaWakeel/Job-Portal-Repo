import React, { useEffect, useState } from 'react'
import { CompanyCards } from './style'
import Dot from '../../assets/icons/•.svg'
import Cross from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/CheckCircle.svg'
import Profile from '../../assets/images/Ellipse 18.png'
import { useLocation, useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'
import { useRecruiter } from '../../shared/dashboard/recruiter/useRecruiter'
import Loader from '../loading-spinner'

const Shortlist = () => {
    const location = useLocation()
    const jobId = location.state.jobId
    const navigate = useNavigate()
    const [applicants, setApplicants] = useState([])
    const [isLoading, setIsLoading] = useState()

    const { change_applicantion_Status_by_id } = useRecruiter()

    const fetchData = async () => {
        if (!jobId) return;
        const res = await Recruiter_Endpoints.get_applications(jobId)
        console.log(res);
        

        if (res?.data?.shortlisted) {
            setApplicants(res.data.shortlisted)
            setIsLoading(false)
            console.log(res.data.shortlisted, "shortlist")
        }
    }

    const onLike = async (applicationId, newStatus) => {
        const res = await change_applicantion_Status_by_id(applicationId, { status: newStatus})
        if (res) {
            setApplicants(prev =>
                prev.map(app =>
                    app.id === applicationId ? { ...app, status: newStatus } : app
                )
            )
        }
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [jobId])


    const gotoProfile = (applicationId) => {
        navigate('/recruiter/dashboard/applicate-profile' , {state:{jobId , applicationId}})
    }

    if(isLoading) return <Loader/>

    return (
        <div>
            <CompanyCards>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {applicants.length > 0 ?
                        
                        applicants.map((items) => (
                            <div className='Card'  key={items.id}>
                                <div className='flex'>
                                    <div className='CardFlex'>
                                        <div className='IconBox photo'  onClick={()=>gotoProfile(items.id)}>
                                            <img src={items.profilepic || Profile} className='IconColor' />
                                        </div>
                                        <div>
                                            <h3 className='Heading'>{items.fullName}</h3>
                                            <span className='SubHeading'>{items.title}</span>
                                        </div>
                                    </div>
                                    <div className='gap'>
                                        <img src={Cross} onClick={()=>onLike(items.id, items.status === "shortlisted" && "rejected" )}/>
                                        <img src={Check} onClick={()=>onLike(items.id, items.status === "shortlisted" && "selected" )}/>
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
                        ))

                        :

                        (
                            <h3 className='Heading'>No Data Found</h3>
                        )
                        
                        }

                    </div>
                </div>

            </CompanyCards>
        </div>
    )
}

export default Shortlist