import React from 'react'
import { CompanyCards, MainSec } from './style'
import { CandidateCards } from '../../helper/dummyData'
import { useNavigate } from 'react-router'

const Candidates = ({limit}) => {
    const navigate = useNavigate()
    const ViewProfile = () =>{
        navigate('/recruiter/applicant-profile')
    }
    const ShowCards = limit ? CandidateCards.slice(0,limit) : CandidateCards;
    return (
        <div>
            <MainSec>
                <CompanyCards>
                    
                <div className='CardDiv'>
                    <div className='Grid'>
                        {ShowCards.map((items)=>(                        
                        <div className='Card'>
                            <div className='CardFlex'>
                                    <img src={items.logo} className='IconColor' />
                               
                                <div>
                                    <h3 className='Heading'>{items.name}</h3>
                                    <h4 className='FlexIcon'>
                                        <span className='SubHeading'>{items.title}</span>
                                    </h4>
                                </div>
                            </div>
                                <button className='CardBtn' onClick={ViewProfile}>{items.btn}</button>
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