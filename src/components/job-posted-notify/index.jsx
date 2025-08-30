import React from 'react'
import { MainSec } from './style'
import { RecentlyPostedJobs } from '../../helper/dummyData'

const JobPostedNotify = () => {
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
                                            {/* <div className='Inner-flex'>
                                                {items.detail.map((d) => (
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={d.icon} /></span>
                                                        <span className='SubHeading'>{d.text}</span>
                                                    </h4>

                                                ))}
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className='Activediv'>
                                        <span><img src={items.icon} alt='icon' /></span>
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