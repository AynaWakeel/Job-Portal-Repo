import React, { useState } from 'react'
import { MainSec } from './style'
import { ReactComponent as Close } from '../../assets/icons/XCircle.svg'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import { RecentlyPostedJobs } from '../../helper/dummyData'
import { useNavigate } from 'react-router'

const PostedJobs = ({ limit }) => {
    const [isStatusExpire, setIsStatusExpire] = useState([])
    const handleStatus = (id)=>{
        if(!isStatusExpire.includes(id)){
            setIsStatusExpire([...isStatusExpire,id])
        }
    }
    const [isOpen, setIsOpen] = useState(null)

    const navigate = useNavigate()
    const ViewApplications = () => {
        navigate('/recruiter/dashboard/recruiter-applications')
    }
    const ShowCards = limit ? RecentlyPostedJobs.slice(0, limit) : RecentlyPostedJobs;
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {ShowCards.map((items) => {
                            const Expired = isStatusExpire.includes(items.id)

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
                                    <div className='Activediv'>
                                        <span><img src={items.user} alt='icon' /></span>
                                        <span className='SubHeading'>{items.applications}</span>
                                    </div>

                                    {Expired ?

                                        (<div className='Activediv'>
                                            <span><img src={StatusClose} alt='icon' /></span>
                                            <span className='red'>Expire</span>
                                        </div>)

                                        :

                                        (<div className='Activediv'>
                                            <span><img src={items.icon} alt='icon' /></span>
                                            <span className='Active'>Active</span>
                                        </div>)
                                    }

                                    <div className='Right-side'>
                                        <button className='CardBtn' onClick={ViewApplications}>
                                            <span>{items.btn}</span>
                                        </button>
                                        <span className='Box' 
                                        onClick={() => setIsOpen(isOpen === items.id ? null : items.id)}>
                                            <img src={items.optionIcon} />
                                        </span>
                                    </div>

                                    {isOpen === items.id && !Expired &&

                                        <div className='dropdown' onClick={() => handleStatus(items.id)}>
                                            <span><Close className='closeicon' /></span>
                                            <span className='expire'>Make it expire</span>
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

export default PostedJobs