import React from 'react'
import { MainSec } from './style'
import { CategoryCards } from '../../helper/dummyData'

const Category = ({limit}) => {

    const ShowCards = limit ? CategoryCards.slice(0,limit) : CategoryCards;
    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        
                        {ShowCards.map((items)=>{
                            const Icon= items.icon;
                        return (
                        <div className='Card'>
                            <div className='IconBox'>
                                <Icon className='IconColor' />
                            </div>
                            <div>
                                <h3 className='Heading'>{items.title}</h3>
                                <h4 className='SubHeading'>{items.positions}</h4>
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

export default Category