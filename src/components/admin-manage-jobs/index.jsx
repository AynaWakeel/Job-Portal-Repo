import React, { useState } from 'react'
import { MainSec } from './style'
import { ReactComponent as Close } from '../../assets/icons/XCircle.svg'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/CheckCircle.svg'
import { RecentlyPostedJobs } from '../../helper/dummyData'
import { useNavigate } from 'react-router'

const ManageJobCards = () => {
    const [Status, setStatus] = useState({})
    const [isOpen, setIsOpen] = useState(null)
    const OpenDropdown = (id) => {
        if (isOpen === id) {
            setIsOpen(null)
        } else {
            setIsOpen(id)
        }
    }

    const handleStatusChange = (id, newstatus)=>{
        setStatus((prev)=>({
            ...prev,
            [id]: newstatus,
        }))
        setIsOpen(null)
    }

    const navigate = useNavigate()
    const ViewDetails = () => {
        navigate('/admin/dashboard/job-detail')
    }

    return (
        <div>

            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {RecentlyPostedJobs.map((items) => {
                            const cardStatus = Status[items.id] || "accepted"

                            return (
                                <div className='Card' key={items.id}>
                                    <div className='Inner-flex'>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                            </div>
                                            <div className='Inner-flex'>
                                                {items.detail.map((d) => (
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={d.icon} /></span>
                                                        <span className='SubHeading'>{d.text}</span>
                                                    </h4>

                                                ))}
                                            </div>
                                        </div>
                                    </div>


                                    <div className='Right-side'>
                                        {cardStatus === 'rejected' ?

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Rejected</span>
                                            </div>)

                                            : cardStatus === 'reported' ?

                                           ( <div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Reported</span>
                                            </div>)

                                            : 

                                            (<div className='Activediv'>
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>Accepted</span>
                                            </div>)
                                        }
                                        <button className='CardBtn' onClick={ViewDetails}>
                                            <span>View Details</span>
                                        </button>
                                        <span className='Box'>
                                            <img src={items.optionIcon} onClick={() => OpenDropdown(items.id)} />
                                        </span>
                                    </div>

                                    {isOpen === items.id &&

                                        <div className='dropdown' >
                                            <ul>
                                                <li onClick={() => handleStatusChange(items.id , 'accepted')} >Accepted</li>
                                                <li onClick={() => handleStatusChange(items.id , 'rejected')}>Rejected</li>
                                                <li onClick={() => handleStatusChange(items.id , 'reported')}>Reported</li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            );
                        })}

                    </div>
                </div>
            </MainSec>

        </div>
    )
}

export default ManageJobCards