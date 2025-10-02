import React, { useState, useEffect } from 'react'
import { CompanyCards } from './style'
import Dot from '../../assets/icons/•.svg'
import { ReactComponent as Like } from '../../assets/icons/fi_thumbs-up.svg'
import ProfilePic from '../../assets/images/Ellipse 18.png'
import { useLocation, useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'
import { useRecruiter } from '../../shared/dashboard/recruiter/useRecruiter'


const ApplicationCards = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const jobId = location.state.jobId
    const [applicants, setApplicants] = useState([])

    const { shortlist_applicant_by_id } = useRecruiter()

    const onLike = async (applicationId, newStatus) => {
        const res = await shortlist_applicant_by_id(applicationId, { status: newStatus})
        if (res) {
            setApplicants(prev =>
                prev.map(app =>
                    app.id === applicationId ? { ...app, status: newStatus } : app
                )
            )
        }
        fetchData()
    }
    const fetchData = async () => {
        if (!jobId) return;
        const res = await Recruiter_Endpoints.get_applications(jobId)

        if (res?.data?.all) {
            setApplicants(res.data.all)
            console.log(res.data.all)
        }
    }
    useEffect(() => {
        fetchData()
    }, [jobId])

    const Profile = (applicationId) => {
        navigate('/recruiter/dashboard/applicate-profile' , {state:{jobId , applicationId}})
    }
    const [isLike, setIsLike] = useState(false)

    const Active = () => {
        setIsLike(!isLike)
    }
    return (
        <div>
            <CompanyCards>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {applicants.length > 0 ?
                        
                        applicants.map((items) => (
                            <div className='Card' key={items.id}>
                                <div className='flex'>
                                    <div className='CardFlex'>
                                        <div className='IconBox photo'  onClick={() => Profile(items.id)} >
                                            <img src={items.profilepic || ProfilePic} className='IconColor' />
                                        </div>
                                        <div>
                                            <h3 className='Heading'>{items.fullName}</h3>
                                            <span className='SubHeading'>{items.title}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Like className={items.status === "shortlisted" ? "tab active" : "tab"}
                                            onClick={()=>onLike(items.id, items.status === "pending" ? "shortlisted" : "pending")} />
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

export default ApplicationCards