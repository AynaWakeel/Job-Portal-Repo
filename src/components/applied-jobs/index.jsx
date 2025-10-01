import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import { ReactComponent as Fav } from '../../assets/icons/Vector.svg'
import Currency from '../../assets/icons/currency-dollar 1.svg'
import Map from '../../assets/icons/fi_map-pin.svg'
import { useNavigate } from 'react-router'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'
import Loader from '../loading-spinner'

const AppliedJobs = () => {
     const [isLoading, setIsLoading] =  useState(true)
    const navigate = useNavigate()
    const viewDetail = (id) =>{
        navigate('/applicant/company' , {state:{id}})
    }
    const [Status, setStatus] = useState("Rejected")
    const [jobData, setJobData] = useState([])

     useEffect(() => {
        const fetchData = async () => {
            const res = await Applicant_Endpoints.get_applied_jobs()
            if (res?.data) {
                setJobData(res.data)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    if(isLoading) return <Loader/>

   
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {jobData.map((items) => {
                            return (
                                <div className='Card' key={items.id}>
                                    <div className='Inner-flex'>
                                        <div className='IconBox' 
                                        // style={{ backgroundColor: `${items.color}` }}
                                        >
                                             <h3 className='Heading'>{items.id}</h3>
                                            {/* <img src={items.recruiter.profilepic} /> */}
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.job.title}</h3>
                                                <span className='Badge'>{items.job.jobType}</span>
                                            </div>
                                            <div className='Inner-flex'>
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={Map} /></span>
                                                        <span className='SubHeading'>{items.job.location}</span>
                                                    </h4>
                                                     <h4 className='FlexIcon'>
                                                        <span><img src={Currency} /></span>
                                                        <span className='SubHeading'>${items.job.salaryMin} - ${items.job.salaryMax}</span>
                                                    </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='SubHeading'>{items.job.jobExpirationDate}</span>
                                    </div>

                                    <div className='status-flex'>
                                        {items.status === "active" ?

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

                                         {items.status === "selected" &&

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Accepted</span>
                                            </div>)

                                        }

                                          {items.status === "shortlisted" &&

                                            (<div className='Activediv'>
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>shortlisted</span>
                                            </div>)

                                        }

                                         {items.status === "rejected" &&

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Rejected</span>
                                            </div>)

                                        }

                                         {items.status === "pending" &&

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Pending</span>
                                            </div>)

                                        }
                                    </div>

                                    <div className='Right-side'>
                                        <button className='CardBtn' onClick={()=>viewDetail(items.id)}>
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