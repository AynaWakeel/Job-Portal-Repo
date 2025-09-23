import React, { useEffect, useState } from 'react'
import Plus from '../../assets/icons/fi_plus.svg'
import Cross from '../../assets/icons/fi_cross.svg'
import { FaqCards } from '../../helper/dummyData'
import { Answer, Faq, FaqSec, Title } from './style'
import { Admin_Endpoints } from '../../lib/api/admin_endpoints'
import { useAdmin } from '../container/admin/useAdmin'

const FaqCardComp = ({onEdit}) => {
    const [content, setContent] = useState([])

    const { delete_faq_cms } = useAdmin()

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

    const handleEdit = (data)=>{
        onEdit(data)
    }

    const onDelete = async(id) => {
        await delete_faq_cms(id)
        fetchData()
        console.log("Faq del sucess..")
    }

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

                    <div className='faq-div'>

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

                        <div className='flex-btn'>
                            <button type='button' className='FormBtn' onClick={() => handleEdit(items)}>Edit</button>
                            <button type='button' className='FormBtn' onClick={()=> onDelete(items.id)}>Delete</button>
                        </div>

                    </div>



                ))}

            </FaqSec>

        </div>
    )
}

export default FaqCardComp