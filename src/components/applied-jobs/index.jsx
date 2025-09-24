import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import { AppliedJobsCards } from '../../helper/dummyData'
import Check from '../../assets/icons/Check.svg'
import { useNavigate } from 'react-router'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'

const AppliedJobs = () => {
    const [isActive, setIsActive] = useState("Active")
    // const [Status, setStatus] = useState("Rejected")
    const [jobData, setJobData] = useState([])

     useEffect(() => {
        const fetchData = async () => {
            const res = await Applicant_Endpoints.get_jobs()
            if (res?.data?.jobs) {
                setJobData(res.data.jobs)
            }
        }
        fetchData()
    }, [])

    const navigate = useNavigate()
    const ViewDetail = () => {
        navigate('/applicant/company')
    }
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {jobData.map((items) => {
                            return (
                                <div className='Card'>
                                    <div className='Inner-flex'>
                                        <div className='IconBox' 
                                        // style={{ backgroundColor: `${items.color}` }}
                                        >
                                            <img src={items.recruiter.profilepic} />
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                                <span className='Badge'>{items.jobType}</span>
                                            </div>
                                            <div className='Inner-flex'>
                                                    <h4 className='FlexIcon'>
                                                        <span><img src='' /></span>
                                                        <span className='SubHeading'>{items.location}</span>
                                                    </h4>
                                                     <h4 className='FlexIcon'>
                                                        <span><img src='' /></span>
                                                        <span className='SubHeading'>${items.salaryMin} - ${items.salaryMax}</span>
                                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='SubHeading'>{items.jobExpirationDate}</span>
                                    </div>

                                    <div className='status-flex'>
                                        {isActive === "Active" ?

                                            (<div className='Activediv'>
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>Active</span>
                                            </div>)

                                            :

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Expire</span>
                                            </div>)

                                        }

                                         {items.status === "Selected" &&

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Accepted</span>
                                            </div>)

                                        }

                                         {items.status === "Rejected" &&

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Rejected</span>
                                            </div>)

                                        }

                                         {items.status === "Applied" &&

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Applied</span>
                                            </div>)

                                        }
                                    </div>

                                    <div className='Right-side'>
                                        <button className='CardBtn' onClick={ViewDetail}>
                                            <span>View Details</span>
                                        </button>
                                    </div>
                                </div>

                            );
                        })}

                    </div>


                </div>
            </MainSec>
        </div>
    )
}

export default AppliedJobs