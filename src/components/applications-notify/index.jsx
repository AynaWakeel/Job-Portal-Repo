import React from 'react'
import { MainSec } from './style'
import { RecentlyPostedJobs } from '../../helper/dummyData'

const ApplicationsNotify = () => {
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {RecentlyPostedJobs.map((items) => {

                            return (
                                <div className='Card' key={items.id}>
                                    <div className='Inner-flex'>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className='Activediv'>
                                        <span><img src={items.icon} alt='icon' /></span>
                                        <span className='Active'>234 Applications</span>
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

export default ApplicationsNotify