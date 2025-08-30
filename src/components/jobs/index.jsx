import React, { useState } from 'react'
import { MainSec } from './style'
import { JobCards } from '../../helper/dummyData'
import { useNavigate } from 'react-router'
import { ReactComponent as Arrow } from '../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as Fav } from '../../assets/icons/Vector.svg'

const Jobs = ({limit}) => {
    const [isSelected,setIsSelected] = useState([])
    const handleFavourite = (id) =>{
        if(isSelected.includes(id)){
            setIsSelected(isSelected.filter((item)=> item !== id))
        }else{
           setIsSelected([...isSelected,id])
        }
    }
    const navigate = useNavigate()
    const ViewDetail = () =>{
        navigate('/applicant/company')
    }

    const ShowCards = limit ? JobCards.slice(0,limit) : JobCards;
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {ShowCards.map((items) =>(

                                <div className='Card' key={items.id}>                                    
                                    <div className='Inner-flex'>
                                        <div className='IconBox' style={{ backgroundColor: `${items.color}` }}>
                                           <img src={items.logo}/>
                                        </div>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.title}</h3>
                                                <span className='Badge'>{items.badge}</span>
                                            </div>
                                            <div className='Inner-flex'>
                                                {items.detail.map((d)=>(
                                                <h4 className='FlexIcon'>
                                                    <span><img src={d.icon}/></span>
                                                    <span className='SubHeading'>{d.text}</span>
                                                </h4>                                              

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className='Right-side'>
                                        <span className='Box' onClick={()=>handleFavourite(items.id)}><Fav 
                                        className={isSelected.includes(items.id) ? "Color active" : "Color"} /></span>
                                        <button className='CardBtn' onClick={ViewDetail}>
                                            <span>{items.btn}</span>
                                            <Arrow className='IconColor' />
                                        </button>
                                    </div>
                                </div>
                        ))}

                    </div>


                </div>
            </MainSec>
        </div>
    )
}

export default Jobs