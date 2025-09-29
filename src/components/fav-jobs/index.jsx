import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import { JobCards } from '../../helper/dummyData'
import { useNavigate } from 'react-router'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/Check.svg'
import Currency from '../../assets/icons/currency-dollar 1.svg'
import Map from '../../assets/icons/fi_map-pin.svg'
import { ReactComponent as Arrow } from '../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as Fav } from '../../assets/icons/Vector.svg'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'

const FavJobCards = () => {
    const [isSelected, setIsSelected] = useState([])
    const handleFavourite = (id) => {
        if (isSelected.includes(id)) {
            setIsSelected(isSelected.filter((item) => item !== id))
        } else {
            setIsSelected([...isSelected, id])
        }
    }
    const navigate = useNavigate()
    const ViewDetail = () => {
        navigate('/applicant/company')
    }


    const [savejobData, setSaveJobData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await Applicant_Endpoints.get_saved_jobs()
            if (res?.data) {
                setSaveJobData(res.data)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {savejobData.map((items) => (

                            <div className='Card' key={items.id}>
                                <div className='Inner-flex'>
                                    <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                        <img src={items.logo} />
                                    </div>
                                    <div className='Gap'>
                                        <div className='Inner-flex'>
                                            <h3 className='Heading'>{items.job.title}</h3>
                                            <span className='Badge'>{items.job.jobType}</span>
                                        </div>
                                        <div className='Inner-flex'>

                                            <h4 className='FlexIcon'>
                                                <span><img src={Map} /></span>
                                                <span className='SubHeading'>{items.job.location}</span>
                                            </h4>
                                            <h4 className='FlexIcon'>
                                                <span><img src={Currency} /></span>
                                                <span className='SubHeading'>${items.job.salaryMin} - ${items.job.salaryMax}</span>
                                            </h4>
                                            <h4 className='FlexIcon'>
                                                <span><img src='' /></span>
                                                <span className='SubHeading'>{items.job.jobExpirationDate}</span>
                                            </h4>
                                            <div className='status-flex'>
                                                {items.job.status === "active" ?

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
                                    <span className='Box' onClick={() => handleFavourite(items.id)}><Fav
                                        className={isSelected.includes(items.id) ? "Color active" : "Color"} /></span>
                                    <button className='CardBtn' onClick={ViewDetail}>
                                        <span>Apply Now</span>
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

export default FavJobCards