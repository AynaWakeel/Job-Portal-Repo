import React, { useState, useEffect } from 'react'
import { CompanyCards, Pagination } from './style'
import Dot from '../../assets/icons/•.svg'
import { ReactComponent as Like } from '../../assets/icons/fi_thumbs-up.svg'
import ProfilePic from '../../assets/images/Ellipse 18.png'
import RightArrow from '../../assets/icons/fi_arrow-right.svg'
import LeftArrow from '../../assets/icons/fi_arrow-left.svg'
import { useLocation, useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'
import { useRecruiter } from '../../shared/dashboard/recruiter/useRecruiter'


const ApplicationCards = ({onStatusChange,onRefresh}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const jobId = location.state.jobId
    const [isLike, setIsLike] = useState(false)
    const [applicants, setApplicants] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const { change_applicantion_Status_by_id } = useRecruiter()

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
    onStatusChange()
    }

    const fetchData = async (page = 1, limit = 10) => {
        // if (!jobId) return;
        const res = await Recruiter_Endpoints.get_applications(jobId, page, limit)
        const { currentPage, totalPages } = res.data.all;
        if (res?.data?.all?.data) {
            setApplicants(res.data.all.data)
            setTotalPages(totalPages)
            console.log(res.data.all.data)
        }
    }
    useEffect(() => {
        fetchData(currentPage)
    }, [jobId, currentPage,onRefresh])

    const Profile = (applicationId) => {
        navigate('/recruiter/dashboard/myjobs/applications/applicate-profile', { state: { jobId, applicationId } })
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
                                <div className='Card' key={items.id} onDoubleClick={() => Profile(items.id)}>
                                    <div className='flex'>
                                        <div className='CardFlex'>
                                            <div className='IconBox photo' >
                                                <img src={items.profilepic} className='IconColor' />
                                            </div>
                                            <div>
                                                <h3 className='Heading'>{items.fullName}</h3>
                                                <span className='SubHeading'>{items.title}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Like className={items.status === "shortlisted" ? "tab active" : "tab"}
                                                // onClick={()=>onLike(items.id, items.status === "pending" ? "shortlisted" : "pending")} 
                                                onClick={() => onLike(items.id, "shortlisted")}

                                            />
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
                            <img src={LeftArrow} alt='left' className='color' />
                        </button>
                    </div>
                    <div>
                        <span className='Num'>{currentPage}</span>
                    </div>
                    <div>
                        <button className='Btn' onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <img src={RightArrow} alt='right' className='color' />
                        </button>
                    </div>
                </Pagination>


            </CompanyCards>
        </div>
    )
}

export default ApplicationCards