import React, { useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import { AppliedJobsCards } from '../../helper/dummyData'
// import { useNavigate } from 'react-router'

const JobRejectedNotify = () => {
    const [Status, setStatus] = useState("Rejected")

    const [isRead, setIsRead] = useState("unread")

    const handleReadStatus = (id) => {
        setIsRead("read")

    }


    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {AppliedJobsCards.map((items) => {
                            return (

                                <div className={`Card ${isRead === "unread" ? "readed" : "unRead"}`}
                                    key={items.id} onClick={() => handleReadStatus(items.id)}>

                                    <div className='Inner-flex'>
                                        <div className='IconBox'>
                                            <img src={items.logo} />
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='status-flex'>


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

                                </div>

                            );
                        })}

                    </div>


                </div>
            </MainSec>
        </div>
    )
}

export default JobRejectedNotify