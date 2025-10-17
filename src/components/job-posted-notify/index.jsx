import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import Check from '../../assets/icons/Check.svg'
import { RecentlyPostedJobs } from '../../helper/dummyData'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'

const JobPostedNotify = () => {

    const [notify , setNotify] = useState([])
    const [isRead , setIsRead] = useState("unread")

    const handleReadStatus = (id)=>{
        setIsRead("read")
    }

    const fetch = async()=>{
        const res = await Recruiter_Endpoints.get_unread_notifications()
        if(res?.data){
            setNotify(res.data.data)
            console.log("noti", res.data.data);
            console.log("noti", res.data.unreadCount);
        }
    }

    useEffect(()=>{
        fetch()
    },[])

    return (
        <div>

            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {notify.map((items) => {

                            return (
                                <div className={`Card ${isRead === "unread" ? "readed" : "unRead"}`} 
                                key={items.id} onClick={()=>handleReadStatus(items.id)}>

                                    <div className='Inner-flex'>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className='Activediv'>
                                        <span><img src={Check} alt='icon' /></span>
                                        <span className='Active'>{items.status || "12 applications"}</span>&
                                        <span className='Active'>{items.status || "job posted"}</span>
                                         {/* <span className='Active'>{items.status || items.title}</span> */}
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

export default JobPostedNotify