import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import Check from '../../assets/icons/Check.svg'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import { RecentlyPostedJobs } from '../../helper/dummyData'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'
import { useRecruiter } from '../../shared/dashboard/recruiter/useRecruiter'

const JobPostedNotify = () => {

    const [notify , setNotify] = useState([])

    const {read_notifications} = useRecruiter()

   const handleReadStatus = async (id) => {
    const res = await read_notifications(id)
    if (res) {
        setNotify(prev =>
            prev.map(item =>
                item.id === id ? { ...item, is_read: true } : item
            )
        )
        fetch()
    }
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
                                <div className={`Card ${items.is_read === false ? "unRead" : "readed"}`} 
                                key={items.id} onClick={()=>handleReadStatus(items.id)}>

                                    <div className='Inner-flex'>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                            </div>
                                            
                                        </div>
                                    </div>

                                {items.applicationCount && items.status === null &&
                                    
                                    <div className='Activediv'>
                                        <span><img src={Check} alt='icon' /></span>
                                        <span className='Active'>{items.applicationCount}</span>
                                    </div>
                                }

                                 {items.status == "accepted" ?
                                    
                                    (<div className='Activediv'>
                                        <span><img src={Check} alt='icon' /></span>
                                        <span className='Active'>{items.status}</span>
                                    </div>)

                                    : items.rejected === "rejected" ?

                                    (<div className='Activediv'>
                                        <span><img src={StatusClose} alt='icon' /></span>
                                        <span className='red'>{items.status}</span>
                                    </div>)

                                    : items.status === "reported" ?

                                    (<div className='Activediv'>
                                        <span><img src={StatusClose} alt='icon' /></span>
                                        <span className='red'>{items.status}</span>
                                    </div>)

                                    : items.status === "pending" &&

                                    (<div className='Activediv'>
                                        <span><img src={StatusClose} alt='icon' /></span>
                                        <span className='red'>{items.status}</span>
                                    </div>)

                                   

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

export default JobPostedNotify