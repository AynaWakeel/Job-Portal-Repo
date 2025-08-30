import React from 'react'
import { Jobdiv } from './style'
import JobRejectedNotify from '../../../../components/job-rejected-notify'

const Notifications = () => {
    return (
        <div>

            <Jobdiv>
                <div>
                    <h1 className='TopHeading'>Notifications</h1>
                </div>

                <div>
                  <JobRejectedNotify/>
                </div>
            </Jobdiv>

        </div>
    )
}

export default Notifications