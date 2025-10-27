import React, { useEffect, useState } from 'react'
import { MainSec , Pagination } from './style'
import { JobCards } from '../../helper/dummyData'
import { useNavigate } from 'react-router'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import Currency from '../../assets/icons/currency-dollar 1.svg'
import Map from '../../assets/icons/fi_map-pin.svg'
import { ReactComponent as Arrow } from '../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as Fav } from '../../assets/icons/Vector.svg'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'
import { useApplicant } from '../../shared/dashboard/applicant/useApplicant'
import Loader from '../loading-spinner'

const FavJobCards = () => {
    const [isLoading, setIsLoading] =  useState(true)
    const [savejobData, setSaveJobData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isSelected, setIsSelected] = useState([])
    const {remove_save_job} = useApplicant()

   
    const navigate = useNavigate()
    const ViewDetail = (id) => {
        navigate('/applicant/company', {state:{id}})
    }

     const handleUnFavourite = async(jobId) =>{

        await remove_save_job(jobId)
        fetchData()
    }

     const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const fetchData = async (page = 1, limit = 10) => {
        const res = await Applicant_Endpoints.get_saved_jobs(page, limit)
        if (res?.data?.savedJobs) {
            setSaveJobData(res.data.savedJobs)
            setTotalPages(res.data.totalPages)
            setCurrentPage(res.data.currentPage)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData(currentPage)
    }, [currentPage])

    if(isLoading) return <Loader/>


    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {savejobData.length > 0 ?
                        
                        savejobData.map((items) => (

                            <div className='Card' key={items.job.id}>
                                <div className='Inner-flex'>
                                    <div className='IconBox photo' style={{ backgroundColor: `${items.color}` }}>
                                        <img src={items.job.profilepic} />
                                    </div>
                                    <div className='Gap'>
                                        <div className='Inner-flex'>
                                            <h3 className='Heading'>{items.job.title}</h3>
                                            <span className='Badge'>{items.job.jobType}</span>
                                        </div>
                                        <div className='Inner-flex'>

                                            <h4 className='FlexIcon'>
                                                <span><img src={Map} /></span>
                                                <span className='SubHeading'>{items.job.locationId}</span>
                                            </h4>
                                            <h4 className='FlexIcon'>
                                                <span><img src={Currency} /></span>
                                                <span className='SubHeading'>${items.job.salaryMin} - ${items.job.salaryMax}</span>
                                            </h4>
                                            <h4 className='FlexIcon'>
                                                <span><img src='' /></span>
                                                <span className='SubHeading'>{items.job.jobExpirationDate}</span>
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
                                    <span className='Box' 
                                    onClick={()=>handleUnFavourite(items.job.id)}
                                    >
                                        <Fav className={isSelected.includes(items.job.id) ? "Color " : "Color active"} /></span>

                                    <button className='CardBtn' onClick={()=>ViewDetail(items.job.id)}>
                                        <span>View Details</span>
                                        <Arrow className='IconColor' />
                                    </button>
                                </div>
                            </div>
                        ))

                        :
                          <div className='Card'>
                                <div className='Inner-flex'>
                                    <div className='Gap'>
                                        <div className='Inner-flex'>
                                            <h3 className='Heading'>No Data Found</h3>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        
                        }

                    </div>
                </div>

                  <Pagination>
                    <div>
                        <button className={`${currentPage === 1 ? "BtnOff" : "Btn"}`} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    </div>
                    <div>
                        <span className='Num'>{currentPage}</span>
                    </div>
                    <div>
                        <button className={`${currentPage === totalPages ? "BtnOff" : "Btn"}`} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </Pagination>

            </MainSec>
        </div>
    )
}

export default FavJobCards