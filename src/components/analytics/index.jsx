import React, { useEffect, useState } from 'react'
import { ReactComponent as Brief } from '../../assets/icons/briefcase-duotone 1.svg'
import { ReactComponent as Building } from '../../assets/icons/buildings-duotone 1.svg'
import { MainSec } from './style';
import { Applicant_Endpoints } from '../../lib/api/applicant_endpoints';

const Analytics = () => {


    const [analyticsData, setAnalyticsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await Applicant_Endpoints.get_applicant_analytics()
            if (res?.data?.data) {
                setAnalyticsData(res.data.data)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>

                          <div className='Card'>
                            <div>
                                <h3 className='Heading'>Applied jobs</h3>
                                <h4 className='SubHeading'>{analyticsData.totalAppliedJobs}</h4>
                            </div>
                            <div className='IconBox'>
                                <Building className='IconColor' />
                            </div>
                        </div>

                        <div className='Card'>
                            <div>
                                <h3 className='Heading'>Favorite jobs</h3>
                                <h4 className='SubHeading'>{analyticsData.totalSavedJobs}</h4>
                            </div>
                            <div className='IconBox'>
                                <Brief className='IconColor' />
                            </div>
                        </div>

                    </div>

                </div>
            </MainSec>
        </div>
    )
}

export default Analytics