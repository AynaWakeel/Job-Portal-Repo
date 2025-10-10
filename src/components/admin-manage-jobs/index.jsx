import React, { useEffect, useState } from 'react'
import { MainSec , Pagination } from './style'
import { ReactComponent as Close } from '../../assets/icons/XCircle.svg'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/CheckCircle.svg'
import Dot from '../../assets/icons/•.svg'
import Threedot from '../../assets/icons/DotsThreeVertical.svg'
import { RecentlyPostedJobs } from '../../helper/dummyData'
import { useNavigate } from 'react-router'
import { Admin_Endpoints } from '../../lib/api/admin_endpoints'
import { useAdmin } from '../container/admin/useAdmin'
import Loader from '../loading-spinner'

const ManageJobCards = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [jobData, setJobData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
    const [Status, setStatus] = useState([])
    const [isOpen, setIsOpen] = useState(null)

    const fetchData = async (page = 1, limit = 10) => {
        const res = await Admin_Endpoints.get_manageJobs(page, limit)
        if (res?.data?.jobs) {
            setJobData(res.data.jobs)
             setTotalPages(res.data.totalPages)
            setCurrentPage(res.data.currentPage)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData(currentPage)
    }, [currentPage])

    const OpenDropdown = (id) => {
        if (isOpen === id) {
            setIsOpen(null)
        } else {
            setIsOpen(id)
        }
    }

    const { change_manageJobsStatus } = useAdmin()

    const handleChangeStatus = async (jobId, newStatus) => {

        const res = await change_manageJobsStatus(jobId, { status: newStatus })
        setStatus(prev => prev.map(jobData => jobData.jobId === jobId ? { ...jobData, status: newStatus } : jobData))
        console.log("status changed")
        setIsOpen(false)
        fetchData()
    }


    const navigate = useNavigate()
    const ViewDetails = (jobId) => {
        navigate('/admin/dashboard/job-detail', { state: { jobId } })
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
                        {jobData.length > 0 ?

                            jobData.map((items) => (

                                <div className='Card' key={items.id}>
                                    <div className='Inner-flex'>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                            </div>
                                            <div className='Inner-flex'>

                                                <h4 className='FlexIcon'>
                                                    <span><img src={Dot} /></span>
                                                    <span className='SubHeading'>{items.jobType}</span>
                                                </h4>
                                                <h4 className='FlexIcon'>
                                                    <span><img src={Dot} /></span>
                                                    <span className='SubHeading'>{items.jobExpirationDate}</span>
                                                </h4>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='Right-side'>
                                        {items.approvalStatus === 'rejected' ?

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Rejected</span>
                                            </div>)

                                            : items.approvalStatus === 'reported' ?

                                                (<div className='Activediv'>
                                                    <span><img src={StatusClose} alt='icon' /></span>
                                                    <span className='red'>Reported</span>
                                                </div>)

                                                : items.approvalStatus === 'pending' ?

                                                    (<div className='Activediv'>
                                                        <span><img src={StatusClose} alt='icon' /></span>
                                                        <span className='red'>Pending</span>
                                                    </div>)

                                                    :

                                                    (<div className='Activediv'>
                                                        <span><img src={Check} alt='icon' /></span>
                                                        <span className='Active'>Accepted</span>
                                                    </div>)
                                        }
                                        <button className='CardBtn' onClick={() => ViewDetails(items.id)}>
                                            <span>View Details</span>
                                        </button>
                                        <span className='Box'>
                                            <img src={Threedot} onClick={() => OpenDropdown(items.id)} />
                                        </span>
                                    </div>

                                    {isOpen === items.id &&

                                        <div className='dropdown' >
                                            <ul>
                                                <li onClick={() => handleChangeStatus(items.id, 'accepted')} >Accepted</li>
                                                <li onClick={() => handleChangeStatus(items.id, 'rejected')}>Rejected</li>
                                                <li onClick={() => handleChangeStatus(items.id, 'reported')}>Reported</li>
                                            </ul>
                                        </div>
                                    }
                                </div>

                            ))


                            :

                            (
                                <div className='Card'>
                                    <div className='Inner-flex'>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>No Data Found</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

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

export default ManageJobCards