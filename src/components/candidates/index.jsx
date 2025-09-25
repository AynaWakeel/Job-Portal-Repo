import React from 'react'
import { CompanyCards, MainSec } from './style'
import { useNavigate } from 'react-router'

const Candidates = ({ applicants}) => {
    const navigate = useNavigate()
    const ViewProfile = (id) => {
        navigate('/recruiter/applicant-profile' , {state:{id}})
    }

    return (
        <div>
            <MainSec>
                <CompanyCards>

                    <div className='CardDiv'>
                        <div className='Grid'>
                            {applicants.map((items) => (
                                <div className='Card'>
                                    <div className='CardFlex'>
                                        <div className='photo'>
                                          <img src={items.profilepic} className='IconColor' />
                                        </div>

                                        <div>
                                            <h3 className='Heading'>{items.name}</h3>
                                            <h4 className='FlexIcon'>
                                                <span className='SubHeading'>{items.title}</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <button className='CardBtn' onClick={ViewProfile(items.id)}>View Profile</button>
                                </div>
                            ))}

                        </div>
                    </div>

                </CompanyCards>
            </MainSec>
        </div>
    )
}

export default Candidates