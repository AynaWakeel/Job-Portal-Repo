import React, { useEffect, useState } from 'react'
import { CompanyCards } from './style'
import { JobApplicationCards } from '../../helper/dummyData'
import Dot from '../../assets/icons/•.svg'
import Check from '../../assets/icons/CheckCircle.svg'
import Profile from '../../assets/images/Ellipse 18.png'
import { useLocation, useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'

const Selected = () => {
     const location = useLocation()
    const jobId = location.state.jobId
    const navigate = useNavigate()
    const [applicants, setApplicants] = useState([])

    const fetchData = async () => {
        if (!jobId) return
        const res = await Recruiter_Endpoints.get_applications(jobId)
        console.log(res);

        if (res?.data?.selected) {
            setApplicants(res.data.selected)
            console.log(res.data.selected, "selected")
        }
    }


    useEffect(() => {
        fetchData()
    }, [jobId])


    const gotoProfile = (applicationId) => {
        navigate('/recruiter/dashboard/applicate-profile' , {state:{jobId , applicationId}})
    }

    return (
        <div>
            <CompanyCards>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {applicants.length > 0 ?
                        
                        applicants.map((items) => (
                            <div className='Card'>
                                <div className='flex'>
                                    <div className='CardFlex'>
                                        <div className='IconBox photo'  onClick={()=>gotoProfile(items.id)}>
                                            <img src={items.profilepic} className='IconColor' />
                                        </div>
                                        <div>
                                            <h3 className='Heading'>{items.fullName}</h3>
                                            <span className='SubHeading'>{items.title}</span>
                                        </div>
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

export default Selected