import React from 'react'
import { Main } from './style'
import JobPostedNotify from '../../../../components/job-posted-notify'

const AdminNotification = () => {
    return (
        <div>

            <Main>
                <div>
                    <h1 className='TopHeading'>Notifications</h1>
                </div>

                <div>
                    <JobPostedNotify/>
                </div>
            </Main>


        </div>
    )
}

export default AdminNotification