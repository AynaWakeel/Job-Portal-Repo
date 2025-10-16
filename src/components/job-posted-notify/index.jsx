import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import Check from '../../assets/icons/Check.svg'
import { RecentlyPostedJobs } from '../../helper/dummyData'

const JobPostedNotify = () => {

    const [notify , setNotify] = useState([])
    const [isRead , setIsRead] = useState("unread")

    const handleReadStatus = (id)=>{
        setIsRead("read")
    }

    // const fetch = async()=>{
    //     const res = await api()
    //     if(res?.data){
    //         setNotify(res.data)
    //     }
    // }

    // useEffect(()=>{
    //     fetch()
    // },[])

    return (
        <div>

            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {RecentlyPostedJobs.map((items) => {

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
                                        <span className='Active'>{items.applications}</span>&
                                        <span className='Active'>Job Posted</span>
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