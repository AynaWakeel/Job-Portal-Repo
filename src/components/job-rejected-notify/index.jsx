import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import { AppliedJobsCards } from '../../helper/dummyData'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'

const JobRejectedNotify = () => {

    const [notify, setNotify] = useState([])
    const [Status, setStatus] = useState("Rejected")

    const [isRead, setIsRead] = useState("unread")

    const handleReadStatus = (id) => {
        setIsRead("read")

    }

    const fetch = async () => {
        const res = await Applicant_Endpoints.get_unread_notifications()
        if (res?.data) {
            setNotify(res.data.data)
            console.log("noti", res.data.data);
            console.log("noti", res.data.unreadCount);
        }
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {notify.map((items) => {
                            return (

                                <div className={`Card ${isRead === "unread" ? "readed" : "unRead"}`}
                                    key={items.id} onClick={() => handleReadStatus(items.id)}>

                                    <div className='Inner-flex'>
                                        <div className='IconBox'>
                                            <img src={items.profilepic || "no"} />
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='status-flex'>


                                        {items.status === "selected" &&

                                            (<div className='Activediv'>
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>Accepted</span>
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
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>Applied</span>
                                            </div>)

                                        }

                                         {items.status === "shortlisted" &&

                                            (<div className='Activediv'>
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>Shortlisted</span>
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