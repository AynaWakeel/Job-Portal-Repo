import React from 'react'
import { AdminHeroCards } from '../../helper/dummyData';
import { MainSec } from './style';

const AdminAnalyticCards = () => {
    return (
        <div>

            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>

                        {AdminHeroCards.map((items) => {
                            const Icon = items.icon;
                            return (
                                <div className='Card'>
                                    <div>
                                        <h3 className='Heading'>{items.title}</h3>
                                        <h4 className='SubHeading'>{items.positions}</h4>
                                    </div>
                                    <div className='IconBox'>
                                        <Icon className='IconColor' />
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

export default AdminAnalyticCards