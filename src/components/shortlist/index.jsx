import React from 'react'
import { CompanyCards } from './style'
import { JobApplicationCards } from '../../helper/dummyData'
import Dot from '../../assets/icons/•.svg'
import Cross from '../../assets/icons/XCircleRed.svg'
import Check from '../../assets/icons/CheckCircle.svg'
import Profile from '../../assets/images/Ellipse 18.png'
import { useNavigate } from 'react-router'

const Shortlist = () => {
     const navigate = useNavigate()

    const Profile = () =>{
        navigate("/recruiter/applicant-profile")
    }
    return (
        <div>
            <CompanyCards>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {JobApplicationCards.map((items) => (
                            <div className='Card' onClick={Profile}> 
                                <div className='flex'>
                                    <div className='CardFlex'>
                                        <div className='IconBox'>
                                            <img src={Profile} className='IconColor' />
                                        </div>
                                        <div>
                                            <h3 className='Heading'>{items.name}</h3>
                                            <span className='SubHeading'>{items.title}</span>
                                        </div>
                                    </div>
                                    <div className='gap'>
                                        <img src={Cross} />
                                        <img src={Check} />
                                    </div>
                                </div>
                                <div className='flex-col'>
                                    <h4 className='FlexIcon'>
                                        <span><img src={Dot} /></span>
                                        <span className='small'>{items.experience}</span>
                                    </h4>
                                    <h4 className='FlexIcon'>
                                        <span><img src={Dot} /></span>
                                        <span className='small'>{items.education}</span>
                                    </h4>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </CompanyCards>
        </div>
    )
}

export default Shortlist