import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import Currency from '../../assets/icons/currency-dollar 1.svg'
import Map from '../../assets/icons/fi_map-pin.svg'
import { useNavigate } from 'react-router'
import { ReactComponent as Arrow } from '../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as Fav } from '../../assets/icons/Vector.svg'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'

const Jobs = () => {
    const [isSelected,setIsSelected] = useState([])
    const handleFavourite = (id) =>{
        if(isSelected.includes(id)){
            setIsSelected(isSelected.filter((item)=> item !== id))
        }else{
           setIsSelected([...isSelected,id])
        }
    }
    const navigate = useNavigate()
    const ViewDetail = (id) =>{
        navigate('/applicant/company', {state: {id}})
    }

    const [jobData, setJobData] = useState([])
    
        useEffect(() => {
            const fetchData = async () => {
                const res = await Applicant_Endpoints.get_all_jobs()
                if (res?.data.jobs) {
                    setJobData(res.data.jobs)
                }
            }
            fetchData()
        }, [])

    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {jobData.map((items) =>(

                                <div className='Card' key={items.id}>                                    
                                    <div className='Inner-flex'>
                                        <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                           <img src={items.recruiter.profilepic}/>
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                                <span className='Badge'>{items.jobType}</span>
                                            </div>
                                            <div className='Inner-flex'>
                                               
                                                 <h4 className='FlexIcon'>
                                                    <span><img src={Map}/></span>
                                                    <span className='SubHeading'>{items.location}</span>
                                                </h4>    
                                                <h4 className='FlexIcon'>
                                                    <span><img src={Currency}/></span>
                                                    <span className='SubHeading'>{items.salaryMin} - {items.salaryMax}</span>
                                                </h4>    
                                                 <h4 className='FlexIcon'>
                                                    <span><img src=''/></span>
                                                    <span className='SubHeading'>{items.jobExpirationDate}</span>
                                                </h4>  

                                                <div className='status-flex'>
                                                {items.status === "active" ?

                                                    (<div className='Activediv'>
                                                        <span><img src={Check} alt='icon' /></span>
                                                        <span className='Active'>Active</span>
                                                    </div>)

                                                    :

                                                    (<div className='Activediv'>
                                                        <span><img src={StatusClose} alt='icon' /></span>
                                                        <span className='red'>Expire</span>
                                                    </div>)

                                                }                                             
                                               
                                            </div>                                            

                                               
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className='Right-side'>
                                        <span className='Box' onClick={()=>handleFavourite(items.id)}>
                                            <Fav className={isSelected.includes(items.id) ? "Color active" : "Color"} /></span>

                                        <button className='CardBtn' onClick={()=>ViewDetail(items.id)}>
                                            <span>View Detail</span>
                                            <Arrow className='IconColor' />
                                        </button>
                                    </div>
                                </div>
                        ))}

                    </div>


                </div>
            </MainSec>
        </div>
    )
}

export default Jobs