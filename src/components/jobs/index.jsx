import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import Currency from '../../assets/icons/currency-dollar 1.svg'
import Map from '../../assets/icons/fi_map-pin.svg'
import { useNavigate } from 'react-router'
import { ReactComponent as Arrow } from '../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as Fav } from '../../assets/icons/Vector.svg'
import UnFav from '../../assets/icons/bookmark_remove.svg'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'
import { useApplicant } from '../../shared/dashboard/applicant/useApplicant'
import Loader from '../loading-spinner'

const Jobs = () => {
    const [isLoading, setIsLoading] = useState(true)
    // const [isSelected, setIsSelected] = useState([])
    const [jobData, setJobData] = useState([])
    const [savedJobData , setSavedJobData] = useState([])

    const { save_job, remove_save_job } = useApplicant()

    const handleFavourite = async (id) => {

        const body = { jobId: id }
        await save_job(body)
        setSavedJobData([...savedJobData, id])
        fetchSavedData()
    }

    const handleUnFavourite = async (jobId) => {

        await remove_save_job(jobId)
        setSavedJobData(savedJobData.filter(id => id !== jobId))
        fetchSavedData()

    }

    const navigate = useNavigate()
    const ViewDetail = (id) => {
        navigate('/applicant/company', { state: { id } })
    }
 
    const fetchData = async () => {
        const res = await Applicant_Endpoints.get_all_jobs()

        if (res?.data.jobs) {
            setJobData(res.data.jobs)
            setIsLoading(false)
        }
    }

    const fetchSavedData = async () => {
        const savedRes = await Applicant_Endpoints.get_saved_jobs()

          if (savedRes?.data) {
            setSavedJobData(savedRes.data.map(job => job.job.id))
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        fetchSavedData()
    }, [])

    if (isLoading) return <Loader />

    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {jobData.map((items) => (

                            <div className='Card' key={items.id}>
                                <div className='Inner-flex'>
                                    <div className='IconBox photo' style={{ backgroundColor: `${items.color}` }}>
                                        <img src={items.recruiter.profilepic} />
                                    </div>
                                    <div className='Gap'>
                                        <div className='Inner-flex'>
                                            <h3 className='Heading'>{items.title}</h3>
                                            <span className='Badge'>{items.jobType}</span>
                                        </div>
                                        <div className='Inner-flex'>

                                            <h4 className='FlexIcon'>
                                                <span><img src={Map} /></span>
                                                <span className='SubHeading'>{items.locationId}</span>
                                            </h4>
                                            <h4 className='FlexIcon'>
                                                <span><img src={Currency} /></span>
                                                <span className='SubHeading'>{items.salaryMin} - {items.salaryMax}</span>
                                            </h4>
                                            <h4 className='FlexIcon'>
                                                <span><img src='' /></span>
                                                <span className='SubHeading'>{items.jobExpirationDate}</span>
                                            </h4>

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

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='Right-side'>
                                    {savedJobData.includes(items.id) ? 
                                    
                                    <span className='Box' onClick={() => handleUnFavourite(items.id)} >
                                        <img src={UnFav} className="Color" />
                                    </span>

                                    :

                                    <span className='Box' onClick={() => handleFavourite(items.id)} >
                                        <Fav className="Color "  />
                                    </span>

                                    }
                                    
                                    <button className='CardBtn' onClick={() => ViewDetail(items.id)}>
                                        <span>View Detail</span>
                                        <Arrow className='IconColor' />
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>
            </MainSec>
        </div>
    )
}

export default Jobs