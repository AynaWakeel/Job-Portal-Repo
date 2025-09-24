import React, { useEffect, useState } from 'react'
import Plus from '../../assets/icons/fi_plus.svg'
import Cross from '../../assets/icons/fi_cross.svg'
import { Answer, Faq, FaqSec, Title } from './style'
import { Admin_Endpoints } from '../../lib/api/admin_endpoints'

const ShowFaqCardComp = () => {
    const [content, setContent] = useState([])

    const fetchData = async () => {
        const res = await Admin_Endpoints.get_faqs()
        if (res?.data?.data) {
            setContent(res.data.data)
            console.log(res.data.data)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])

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

                {content.map(items => (

                        <Faq key={items.id}>

                            <Title onClick={() => Open(items.id)} >
                                <div className='H4'>{items.title}</div>
                                <div>

                                    {isFaqOpen === items.id ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
                                </div>
                            </Title>
                            {isFaqOpen === items.id &&
                                <Answer>
                                    <div className='para' dangerouslySetInnerHTML={{ __html: items.description }} />
                                </Answer>
                            }
                        </Faq>



                ))}

            </FaqSec>

        </div>
    )
}

export default ShowFaqCardComp