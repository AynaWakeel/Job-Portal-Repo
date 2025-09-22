// import React, { useState } from 'react'
// import { MainSec } from './style'
// import { ReactComponent as Close } from '../../assets/icons/XCircle.svg'
// import {ReactComponent as Eye} from '../../assets/icons/fi_eye.svg'
// import StatusClose from '../../assets/icons/XCircleRed.svg'
// import Check from '../../assets/icons/Check.svg'
// import ApplyUsers from '../../assets/icons/applications.svg'
// import DOt from '../../assets/icons/•.svg'
// import Threedot from '../../assets/icons/DotsThreeVertical.svg'
// import { RecentlyPostedJobs } from '../../helper/dummyData'
// import { useNavigate } from 'react-router'

// const PostedJobs = ({ limit }) => {
//     const [isStatusExpire, setIsStatusExpire] = useState([])
//     const handleStatus = (id)=>{
//         if(!isStatusExpire.includes(id)){
//             setIsStatusExpire([...isStatusExpire,id])
//         }
//     }
//     const [isOpen, setIsOpen] = useState(null)

//     const navigate = useNavigate()
//     const ViewApplications = () => {
//         navigate('/recruiter/dashboard/applications')
//     }
//     const ShowCards = limit ? RecentlyPostedJobs.slice(0, limit) : RecentlyPostedJobs;
//     return (
//         <div>
//             <MainSec>
//                 <div className='CardDiv'>
//                     <div className='Grid'>
//                         {ShowCards.map((items) => {
//                             const Expired = isStatusExpire.includes(items.id)

//                             return (
//                                 <div className='Card' key={items.id}>
//                                     <div className='Inner-flex'>
//                                         <div className='Gap'>
//                                             <div className='Inner-flex'>
//                                                 <h3 className='Heading'>{items.title}</h3>
//                                             </div>
//                                             <div className='Inner-flex'>
//                                                 {items.detail.map((d) => (
//                                                     <h4 className='FlexIcon'>
//                                                         <span><img src={DOt} /></span>
//                                                         <span className='SubHeading'>{d.text}</span>
//                                                     </h4>

//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className='flex-col'>
//                                     <div className='Activediv'>
//                                         <span><img src={ApplyUsers} alt='icon' /></span>
//                                         <span className='SubHeading'>{items.applications}</span>
//                                     </div>

//                                      <div className='Activediv'>
//                                         <span><Eye className='closeicon'/></span>
//                                         <span className='SubHeading'>800 Views</span>
//                                     </div>
//                                     </div>

//                                     {Expired ?

//                                         (<div className='Activediv'>
//                                             <span><img src={StatusClose} alt='icon' /></span>
//                                             <span className='red'>Expire</span>
//                                         </div>)

//                                         :

//                                         (<div className='Activediv'>
//                                             <span><img src={Check} alt='icon' /></span>
//                                             <span className='Active'>Active</span>
//                                         </div>)
//                                     }

//                                     <div className='Right-side'>
//                                         <button className='CardBtn' onClick={ViewApplications}>
//                                             <span>View Applications</span>
//                                         </button>
//                                         <span className='Box' 
//                                         onClick={() => setIsOpen(isOpen === items.id ? null : items.id)}>
//                                             <img src={Threedot} />
//                                         </span>
//                                     </div>

//                                     {isOpen === items.id && !Expired &&

//                                         <div className='dropdown' onClick={() => handleStatus(items.id)}>
//                                             <span><Close className='closeicon' /></span>
//                                             <span className='expire'>Make it expire</span>
//                                         </div>
//                                     }
//                                 </div>
//                             );
//                         })}

//                     </div>
//                 </div>
//             </MainSec>
//         </div>
//     )
// }

// export default PostedJobs









import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import { ReactComponent as Close } from '../../assets/icons/XCircle.svg'
import { ReactComponent as Eye } from '../../assets/icons/fi_eye.svg'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import ApplyUsers from '../../assets/icons/applications.svg'
import DOt from '../../assets/icons/•.svg'
import Threedot from '../../assets/icons/DotsThreeVertical.svg'
import { RecentlyPostedJobs } from '../../helper/dummyData'
import { useNavigate } from 'react-router'
import { Recruiter_Endpoints } from '../../lib/api/recruiter_endpoints'
import Loader from '../loading-spinner'

const PostedJobs = () => {
    const [isStatusExpire, setIsStatusExpire] = useState([])
    const handleStatus = (id) => {
        if (!isStatusExpire.includes(id)) {
            setIsStatusExpire([...isStatusExpire, id])
        }
    }
    const [isOpen, setIsOpen] = useState(null)

    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await Recruiter_Endpoints.get_recruiter_job_only()

            if (res?.data?.jobs) {
                setJobs(res.data.jobs)
                console.log(res.data.jobs)
            }
        }
        fetchData()
    }, [])

    const ViewApplications = () => {
        navigate('/recruiter/dashboard/applications')
    }
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>

                        {jobs.length > 0 ? (
                            jobs.map((items) => {


                               const Expired = isStatusExpire.includes(items.id)

                                return (

                                    <div className='Card'
                                        key={items.id}
                                    >
                                        <div className='Inner-flex'>
                                            <div className='Gap'>
                                                <div className='Inner-flex'>
                                                    <h3 className='Heading'>{items.title}</h3>
                                                </div>
                                                <div className='Inner-flex'>
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={DOt} /></span>
                                                        <span className='SubHeading'>{items.jobType}</span>
                                                    </h4>

                                                    <h4 className='FlexIcon'>
                                                        <span><img src={DOt} /></span>
                                                        <span className='SubHeading'>{items.jobExpirationDate}</span>
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex-col'>
                                            <div className='Activediv'>
                                                <span><img src={ApplyUsers} alt='icon' /></span>
                                                <span className='SubHeading'>{items.applicationsCount}</span>
                                            </div>

                                            <div className='Activediv'>
                                                <span><Eye className='closeicon' /></span>
                                                <span className='SubHeading'>800 Views</span>
                                            </div>
                                        </div>

                                        {Expired ?

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Expire</span>
                                            </div>)

                                            :

                                            (<div className='Activediv'>
                                                <span><img src={Check} alt='icon' /></span>
                                                <span className='Active'>Active</span>
                                            </div>)
                                        }

                                        <div className='Right-side'>
                                            <button className='CardBtn' onClick={ViewApplications}>
                                                <span>View Applications</span>
                                            </button>
                                            <span className='Box'
                                                onClick={() => setIsOpen(isOpen === items.id ? null : items.id)}
                                            >
                                                <img src={Threedot} />
                                            </span>
                                        </div>

                                        {isOpen === items.id && !Expired &&

                                            <div className='dropdown'
                                                onClick={() => handleStatus(items.id)}
                                            >
                                                <span><Close className='closeicon' /></span>
                                                <span className='expire'>Make it expire</span>
                                            </div>
                                        }
                                    </div>

                                )
                            }
                            )



                        ) : (<Loader />)}


                    </div>
                </div>
            </MainSec>
        </div>
    )
}

export default PostedJobs