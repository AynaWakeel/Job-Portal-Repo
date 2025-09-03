import React, { useState } from 'react'
import Plus from '../../assets/icons/fi_plus.svg'
import Cross from '../../assets/icons/fi_cross.svg'
import { FaqCards } from '../../helper/dummyData'
import { Answer, Faq, FaqSec, Title } from './style'

const FaqCardComp = () => {
    const [isFaqOpen, setIsFaqOpen] = useState(null)
    const Open = (id) => {
        if (isFaqOpen === id) {
            setIsFaqOpen(null)
        } else {
            setIsFaqOpen(id)
        }
    }
    return (
        <div>

            <FaqSec>

                {FaqCards.map((items, index) => (

                        <Faq key={index}>

                            <Title onClick={() => Open(index)} >
                                <div className='H4'>{items.question}</div>
                                <div>

                                    {isFaqOpen === index ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
                                </div>
                            </Title>
                            {isFaqOpen === index &&
                                <Answer>
                                    <div className='para'>{items.answer}</div>
                                </Answer>
                            }
                        </Faq>
                  
                ))}

            </FaqSec>

        </div>
    )
}

export default FaqCardComp