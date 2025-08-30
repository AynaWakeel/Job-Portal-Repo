import React, { useState } from 'react'
import { JobDetail } from '../../helper/dummyData';
import { MainSec } from './style';
import { useNavigate } from 'react-router';

const AllJobDetail = ({limit}) => {
    const [isActive,setIsActive] = useState(false)
    const Favourite = ()=>{
        setIsActive(!isActive)
    }
    const navigate = useNavigate()
    const DetailPage = () =>{
        navigate('/applicant/company')
    }
    const ShowCards = limit ? JobDetail.slice(0,limit) : JobDetail;
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {ShowCards.map((items) => {
                            const FavIcon = items.save;
                            const ArrowIcon = items.btnArrow;
                            return (
                                <div className='Card'>
                                    <div className='Inner-flex'>
                                        <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                            <img src={items.logo} />
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                                <span className='Badge'>{items.badge}</span>
                                            </div>
                                            <div className='Inner-flex'>
                                                {items.detail.map((d) => (
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={d.icon} /></span>
                                                        <span className='SubHeading'>{d.text}</span>
                                                    </h4>

                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='Right-side'>
                                        <span className='Box'><FavIcon className={ isActive === true ? "Color active" : "Color"} onClick={Favourite}/></span>
                                        <button className='CardBtn' onClick={DetailPage}>
                                            <span>{items.btn}</span>
                                            <ArrowIcon className='IconColor' />
                                        </button>
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

export default AllJobDetail