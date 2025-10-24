import React, { useEffect, useState } from 'react'
import { CompanyCards, Pagination } from './style'
import Dot from '../../assets/icons/•.svg'
import Cross from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/CheckCircle.svg'
import Profile from '../../assets/images/Ellipse 18.png'
import RightArrow from '../../assets/icons/fi_arrow-right.svg'
import LeftArrow from '../../assets/icons/fi_arrow-left.svg'
import { useLocation, useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'
import { useRecruiter } from '../../shared/dashboard/recruiter/useRecruiter'
import Loader from '../loading-spinner'

const Shortlist = () => {
    const location = useLocation()
    const jobId = location.state.jobId
    const navigate = useNavigate()
    const [applicants, setApplicants] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState()

    const { change_applicantion_Status_by_id } = useRecruiter()

    const fetchData = async (page = 1, limit = 10) => {
        // if (!jobId) return;
        const res = await Recruiter_Endpoints.get_applications(jobId, page, limit)
        console.log(res);

        const { currentPage, totalPages } = res.data.shortlisted;
        if (res?.data?.shortlisted?.data) {
            setApplicants(res.data.shortlisted.data)
            setTotalPages(totalPages)
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
        fetchData(currentPage)
    }, [jobId, currentPage])


    const gotoProfile = (applicationId) => {
        navigate('/recruiter/dashboard/applicate-profile', { state: { jobId, applicationId } })
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
            <CompanyCards>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {applicants.length > 0 ?

                            applicants.map((items) => (
                                <div className='Card' key={items.id} onDoubleClick={() => gotoProfile(items.id)}>
                                    <div className='flex'>
                                        <div className='CardFlex'>
                                            <div className='IconBox photo'>
                                                <img src={items.profilepic} className='IconColor' />
                                            </div>
                                            <div>
                                                <h3 className='Heading'>{items.fullName}</h3>
                                                <span className='SubHeading'>{items.title}</span>
                                            </div>
                                        </div>
                                        <div className='gap'>
                                            <img src={Cross} onClick={() => onLike(items.id, "rejected")} />
                                            <img src={Check} onClick={() => onLike(items.id, "selected")} />
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


                <Pagination>
                    <div>
                        <button className='Btn' onClick={handlePrevPage} disabled={currentPage === 1}>
                            <img src={LeftArrow} alt='left' />
                        </button>
                    </div>
                    <div>
                        <span className='Num'>{currentPage}</span>
                    </div>
                    <div>
                        <button className='Btn' onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <img src={RightArrow} alt='right' />
                        </button>
                    </div>
                </Pagination>

            </CompanyCards>
        </div>
    )
}

export default Shortlist