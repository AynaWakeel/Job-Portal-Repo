import React, { useEffect, useState } from 'react'
import { MainSec } from './style'
import StatusClose from '../../assets/icons/XCircleRed.svg'
import DOt from '../../assets/icons/•.svg'
import { useNavigate } from 'react-router'

const AllTypesOfJobs = ({ jobs }) => {
    const navigate = useNavigate()

    const Edit = (jobId) => {
        navigate('/recruiter/dashboard/postjob', { state: { jobId } })
    }

    return (
        <div>
            <MainSec>
                <div className='CardDiv'>
                    <div className='Grid'>

                        {jobs.length > 0 ? (
                            jobs.map((items) => {

                                return (

                                    <div className='Card' key={items.id}>
                                        <div className='Inner-flex'>
                                            <div className='Gap'>
                                                <div className='Inner-flex'>
                                                    <h3 className='Heading'>{items.title}</h3>
                                                </div>
                                                <div className='Inner-flex'>
                                                    <h4 className='FlexIcon'>
                                                        <span><img src={DOt} /></span>
                                                        <span className='SubHeading'>{items.jobType}</span>
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>



                                        {items.approvalStatus === "rejected" &&

                                            <div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Rejected</span>
                                            </div>

                                        }

                                        {items.approvalStatus === "pending" &&

                                            <div className='Activediv'>
                                                <span><img src={StatusClose} alt='icon' /></span>
                                                <span className='red'>Pending</span>
                                            </div>

                                        }

                                        {items.approvalStatus === "reported" &&

                                            <>

                                                <div className='Activediv'>
                                                    <span><img src={StatusClose} alt='icon' /></span>
                                                    <span className='red'>Reported</span>
                                                </div>

                                                <div className='Right-side'>
                                                    <button className='CardBtn'
                                                        onClick={() => Edit(items.id)}
                                                    >
                                                        <span>Edit Job</span>
                                                    </button>

                                                </div>

                                            </>

                                        }

                                    </div>

                                )
                            }
                            )

                        ) : (

                            <div className='Card'>
                                <div className='Inner-flex'>
                                    <div className='Gap'>
                                        <div className='Inner-flex'>
                                            <h3 className='Heading'>No Data Found</h3>
                                        </div>
                                       
                                    </div>
                                </div>

                            </div>
                        )}


                    </div>
                </div>
            </MainSec>
        </div>
    )
}

export default AllTypesOfJobs