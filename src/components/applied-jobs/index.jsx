import React, { useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import { AppliedJobsCards } from '../../helper/dummyData'
import { useNavigate } from 'react-router'

const AppliedJobs = ({ limit }) => {
    const [isActive, setIsActive] = useState("Active")
    const [Status, setStatus] = useState("Rejected")

    const navigate = useNavigate()
    const ViewDetail = () => {
        navigate('/applicant/company')
    }
    const ShowCards = limit ? AppliedJobsCards.slice(0, limit) : AppliedJobsCards;
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {ShowCards.map((items) => {
                            return (
                                <div className='Card'>
                                    <div className='Inner-flex'>
                                        <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                            <img src={items.logo} />
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                                <span className='Badge'>{items.badge}</span>
                                            </div>
                                            <div className='Inner-flex'>
                                                {items.detail.slice(0, 2).map((d) => (
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={d.icon} /></span>
                                                        <span className='SubHeading'>{d.text}</span>
                                                    </h4>

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='SubHeading'>{items.date}</span>
                                    </div>

                                    <div className='status-flex'>
                                        {isActive === "Active" ?

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Active</span>
                                            </div>)

                                            :

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Expire</span>
                                            </div>)

                                        }

                                         {Status === "Selected" &&

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Accepted</span>
                                            </div>)

                                        }

                                         {Status === "Rejected" &&

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Rejected</span>
                                            </div>)

                                        }

                                         {Status === "Applied" &&

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Applied</span>
                                            </div>)

                                        }
                                    </div>

                                    <div className='Right-side'>
                                        <button className='CardBtn' onClick={ViewDetail}>
                                            <span>{items.btn}</span>
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