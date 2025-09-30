import React, { useEffect, useState } from 'react'
import { CompanyCards, MainSec } from './style'
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints'
import Map from '../../assets/icons/fi_map-pin.svg'
import Currency from '../../assets/icons/currency-dollar 1.svg'


const MainJobs = () => {

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
                <CompanyCards>
                    <div className='CardDiv'>
                        <div className='Grid'>
                            {jobData.map((items) => (
                                <div className='Card' key={items.id}>
                                    <div className='CardFlex'>
                                        <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                            <img src={items.recruiter.profilepic} className='IconColor' />
                                        </div>
                                        <div>
                                            <h3 className='Heading'>{items.title}</h3>
                                            <h4 className='FlexIcon'>
                                                <span><img src={Map} /></span>
                                                <span className='SubHeading'>{items.location}</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='Inner-flex'>
                                           
                                              <h4 className='FlexIcon'>
                                                <span><img src={Currency} /></span>
                                                <span className='small'>{items.salaryMin} - {items.salaryMax}</span>
                                            </h4>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </CompanyCards>
            </MainSec>
        </div>
    )
}

export default MainJobs