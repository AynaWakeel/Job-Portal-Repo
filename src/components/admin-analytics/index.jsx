import React, { useEffect, useState } from 'react'
import { MainSec } from './style';
import { ReactComponent as Brief } from '../../assets/icons/briefcase-duotone 1.svg'
import { ReactComponent as Building } from '../../assets/icons/buildings-duotone 1.svg'
import { Admin_Endpoints } from '../../lib/api/admin_endpoints';

const AdminAnalyticCards = () => {
    const [analytics, setAnalytics] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await Admin_Endpoints.get_analytics()
            if (res?.data?.totals) {
                setAnalytics(res.data.totals)
                console.log(res.data)
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
                                <h3 className='Heading'>{analytics.users}</h3>
                                <h4 className='SubHeading'>Users</h4>
                            </div>
                            <div className='IconBox'>
                                <Brief className='IconColor' />
                            </div>
                        </div>

                        <div className='Card'>
                            <div>
                                <h3 className='Heading'>{analytics.jobs}</h3>
                                <h4 className='SubHeading'>Posted Jobs</h4>
                            </div>
                            <div className='IconBox'>
                                <Building className='IconColor' />
                            </div>
                        </div>

                          <div className='Card'>
                            <div>
                                <h3 className='Heading'>{analytics.applications}</h3>
                                <h4 className='SubHeading'>Applications</h4>
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

export default AdminAnalyticCards