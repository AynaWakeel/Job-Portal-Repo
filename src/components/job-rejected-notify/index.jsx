import React, { useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import { AppliedJobsCards } from '../../helper/dummyData'
// import { useNavigate } from 'react-router'

const JobRejectedNotify = () => {
        const [Status, setStatus] = useState("Rejected")
    
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {AppliedJobsCards.map((items) => {
                            return (
                                <div className='Card'>
                                    <div className='Inner-flex'>
                                        <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                            <img src={items.logo} />
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                                {/* <span className='Badge'>{items.badge}</span> */}
                                            </div>
                                            {/* <div className='Inner-flex'>
                                                {items.detail.slice(0, 2).map((d) => (
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={d.icon} /></span>
                                                        <span className='SubHeading'>{d.text}</span>
                                                    </h4>

                                                ))}
                                            </div> */}

                                        </div>
                                    </div>
                                    
                                    <div className='status-flex'>
                                        

                                        {Status === "Selected" &&

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Accepted</span>
                                            </div>)

                                        }

                                        {Status === "Rejected" &&

                                            (<div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Rejected</span>
                                            </div>)

                                        }

                                        {Status === "Applied" &&

                                            (<div className='Activediv'>
                                                <span><img src={items.icon} alt='icon' /></span>
                                                <span className='Active'>Applied</span>
                                            </div>)

                                        }
                                    </div>

                                    {/* <div className='Right-side'>
                                        <button className='CardBtn'>
                                            <span>{items.btn}</span>
                                        </button>
                                    </div> */}
                                </div>

                            );
                        })}

                    </div>


                </div>
            </MainSec>
        </div>
    )
}

export default JobRejectedNotify