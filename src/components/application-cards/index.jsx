import React, { useState } from 'react'
import { CompanyCards } from './style'
import { JobApplicationCards } from '../../helper/dummyData'
import Dot from '../../assets/icons/•.svg'
import {ReactComponent as Like} from '../../assets/icons/fi_thumbs-up.svg'
import Profile from '../../assets/images/Ellipse 18.png'

const ApplicationCards = () => {
    const [isLike,setIsLike] = useState(false)
   
    const Active = () =>{
        setIsLike(!isLike)
    }
    return (
        <div>
            <CompanyCards>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {JobApplicationCards.map((items) => (
                            <div className='Card'>
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
                                    <div>
                                        <Like className={isLike ? "tab active" : "tab"} onClick={Active}/>
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

export default ApplicationCards