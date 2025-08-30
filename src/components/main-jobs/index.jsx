import React from 'react'
import { CompanyCards, MainSec } from './style'
import { CompanyJobs } from '../../helper/dummyData'

const MainJobs = ({ limit }) => {
    const ShowCards = limit ? CompanyJobs.slice(0, limit) : CompanyJobs;
    return (
        <div>
            <MainSec>
                <CompanyCards>
                    <div className='CardDiv'>
                        <div className='Grid'>
                            {ShowCards.map((items) => (
                                <div className='Card'>
                                    <div className='CardFlex'>
                                        <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                            <img src={items.logo} className='IconColor' />
                                        </div>
                                        <div>
                                            <h3 className='Heading'>{items.name}</h3>
                                            <h4 className='FlexIcon'>
                                                <span><img src={items.icon} /></span>
                                                <span className='SubHeading'>{items.location}</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='Inner-flex'>
                                        {items.detail.slice(0, 2).map((d) => (
                                            <h4 className='FlexIcon'>
                                                <span><img src={d.icon} /></span>
                                                <span className='small'>{d.text}</span>
                                            </h4>

                                        ))}
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