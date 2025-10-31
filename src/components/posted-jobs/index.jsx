import React, { useEffect, useState } from 'react'
import { MainSec, Pagination } from './style'
import { ReactComponent as Close } from '../../assets/icons/XCircle.svg'
import { ReactComponent as Eye } from '../../assets/icons/fi_eye.svg'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import ApplyUsers from '../../assets/icons/applications.svg'
import DOt from '../../assets/icons/•.svg'
import Threedot from '../../assets/icons/DotsThreeVertical.svg'
import { useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'
import Loader from '../loading-spinner'
import { useRecruiter } from '../../shared/dashboard/recruiter/useRecruiter'

const PostedJobs = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(null)
    const [jobs, setJobs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true)
    const { delete_a_job, expire_a_job } = useRecruiter()

    const fetchData = async (page = 1, limit = 10) => {
        try {
            const res = await Recruiter_Endpoints.get_recruiter_job_only(page, limit)
            if (res?.data?.jobs) {
                setJobs(res.data.jobs)
                setTotalPages(res.data.totalPages)
                setCurrentPage(res.data.currentPage)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
        } 
    }

    useEffect(() => {
        fetchData(currentPage)
    }, [currentPage])


    const handleDelete = async (id) => {
        await delete_a_job(id)
        fetchData()
        console.log("job deleted")
    }

    const [isStatusExpire, setIsStatusExpire] = useState([])
    const handleStatus = (id) => {
        if (!isStatusExpire.includes(id)) {
            setIsStatusExpire([...isStatusExpire, id])
        }
    }

    const handleExpire = async (id) => {
        await expire_a_job(id)
        fetchData()
        console.log('job expired')
        handleStatus(id)
    }

    const ViewApplications = (jobId) => {
        navigate("/recruiter/dashboard/myjobs/applications", { state: { jobId } })

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


    if (isLoading) return <Loader />


    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>

                        {jobs.length > 0 ? (
                            jobs.map((items) => {


                                const Expired = isStatusExpire.includes(items.id)

                                return (

                                    <div className='Card' key={items.id}>
                                        <div className='Inner-flex'>
                                            <div className='Gap'>
                                                <div className='Inner-flex'>
                                                    <h3 className='Heading'>{items.title}</h3>
                                                </div>
                                                <div className='Inner-flex'>
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={DOt} /></span>
                                                        <span className='SubHeading'>{items.jobType}</span>
                                                    </h4>

                                                    <h4 className='FlexIcon'>
                                                        <span><img src={DOt} /></span>
                                                        <span className='SubHeading'>{items.jobExpirationDate}</span>
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex-col'>
                                            <div className='Activediv'>
                                                <span><img src={ApplyUsers} alt='icon' /></span>
                                                <span className='SubHeading'>{items.applicationsCount}</span>
                                            </div>

                                            <div className='Activediv'>
                                                <span><Eye className='closeicon' /></span>
                                                <span className='SubHeading'>{items.views}</span>
                                            </div>
                                        </div>

                                        {items.status === "expired" ?

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Expire</span>
                                            </div>)

                                            :

                                            (<div className='Activediv'>
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>Active</span>
                                            </div>)
                                        }

                                        <div className='Right-side'>
                                            <button className='CardBtn' onClick={() => ViewApplications(items.id)}>
                                                <span>View Applications</span>
                                            </button>
                                            <span className='Box' onClick={() => setIsOpen(isOpen === items.id ? null : items.id)}>
                                                <img src={Threedot} />
                                            </span>
                                        </div>

                                        {isOpen === items.id &&

                                            <div className='dropdown'>

                                                {!Expired &&

                                                    <div className="dropdown-row" onClick={() => handleExpire(items.id)}>
                                                        <span><Close className='closeicon' /></span>
                                                        <span className='expire'>Expire</span>
                                                    </div>

                                                }
                                                <div className='dropdown-row' onClick={() => handleDelete(items.id)}>
                                                    <span><Close className='closeicon' /></span>
                                                    <span className='expire'>Delete</span>
                                                </div>
                                            </div>
                                        }
                                    </div>

                                )
                            }
                            )

                        ) : (

                            <div className='Card'>
                                <div className='Inner-flex'>
                                    <div className='Gap'>
                                        <div className='Inner-flex'>
                                            <h3 className='Heading'>No Data Found</h3>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        )}


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

export default PostedJobs