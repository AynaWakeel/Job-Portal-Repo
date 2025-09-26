import React from 'react'
import { Analytics } from '../../helper/dummyData';
import { ReactComponent as Brief } from '../../assets/icons/briefcase-duotone 1.svg'
import { ReactComponent as Building } from '../../assets/icons/buildings-duotone 1.svg'
import { MainSec } from './style';

const RecruiterAnalytics = ({analytics}) => {
    // const ShowCards = limit ? Analytics.slice(0,limit) : Analytics;
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>

                       
                        <div className='Card'>
                            <div>
                                <h3 className='Heading'>{analytics.totalJobs}</h3>
                                <h4 className='SubHeading'>Total Jobs</h4>
                            </div>
                            <div className='IconBox'>
                                <Brief className='IconColor' />
                            </div>
                        </div>

                        <div className='Card'>
                            <div>
                                <h3 className='Heading'>{analytics.totalApplicants}</h3>
                                <h4 className='SubHeading'>Total Applicants</h4>
                            </div>
                            <div className='IconBox'>
                                <Building className='IconColor' />
                            </div>
                        </div>

                    </div>

                </div>
            </MainSec>
        </div>
    )
}

export default RecruiterAnalytics