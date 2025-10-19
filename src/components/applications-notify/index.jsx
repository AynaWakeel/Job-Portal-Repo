import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import { Admin_Endpoints } from '../../lib/api/admin_endpoints'
import { useAdmin } from '../container/admin/useAdmin'

const AdminNotify = () => {
    const [notify, setNotify] = useState([])

    const { read_notifications } = useAdmin()

    const handleReadStatus = async (id) => {
        const res = await read_notifications(id);
        if (res) {
            setNotify(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, is_read: true } : item
                )
            );
            fetch()
        }
    }

    const fetch = async () => {
        const res = await Admin_Endpoints.get_unread_notifications()
        if (res?.data) {
            setNotify(res.data.data)
            console.log("noti", res.data.data);
            console.log("noti", res.data.unreadCount);
        }
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>
                        {notify.map((items) => {

                            return (
                                <div className={`Card ${items.is_read === false ? "unRead" : "readed"}`}
                                    key={items.id} onClick={() => handleReadStatus(items.id)}>

                                    <div className='Inner-flex'>
                                        <div className='Gap'>
                                            <div className='Inner-flex'>
                                                <h3 className='Heading'>{items.jobTitle}</h3>
                                            </div>

                                        </div>
                                    </div>

                                    { items.approvalStatus === "pending" &&

                                    (<div className='Activediv'>
                                        <span><img src={StatusClose} alt='icon' /></span>
                                        <span className='red'>{items.approvalStatus}</span>
                                    </div>)

                                   
                                }

                                </div>
                            );
                        })}

                    </div>
                </div>
            </MainSec>
        </div>
    )
}

export default AdminNotify