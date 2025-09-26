import React, { useEffect, useState } from 'react'
import { Jobdiv } from './style'
import AllTypesOfJobs from '../../../../components/all-types-of-jobs'
import { Recruiter_Endpoints } from '../../../../lib/api/recruiter_endpoints'

const RecruiterAllJobs = () => {
  const [jobs, setJobs] = useState([])
  const [activeStatus, setActiveStatus] = useState("pending")

  const handleFilter = async (status) => {
    setActiveStatus(status)
    const res = await Recruiter_Endpoints.get_all_job()

    if (status === "pending") {
      setJobs(res.data.jobs.pending)

    } else if (status === "rejected") {
      setJobs(res.data.jobs.rejected)

    } else {
      setJobs(res.data.jobs.reported)
    }
  }

  const fetchData = async () => {
    const res = await Recruiter_Endpoints.get_all_job()
    if (res?.data?.jobs?.pending) {
        setJobs(res.data.jobs.pending)
        console.log(res.data.jobs)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>

      <Jobdiv>

        <div className='flex-box'>
          <h1 className='TopHeading'>All Types of Jobs</h1>
          <div className='flex'>
            <button
              className={`CardBtn ${activeStatus === "pending" ? "active" : ""}`}
              onClick={() => handleFilter("pending")}
            >Pending</button>
            <button
              // className='CardBtn'
              className={`CardBtn ${activeStatus === "reported" ? "active" : ""}`}
              onClick={() => handleFilter("reported")}
            >Reported</button>
            <button
              //  className='CardBtn'
              className={`CardBtn ${activeStatus === "rejected" ? "active" : ""}`}
              onClick={() => handleFilter("rejected")}
            >Rejected</button>
          </div>
        </div>

        <div className='Tableheading'>
          <div><span>Job</span></div>
          <div className='TableFlex'>
            <div><span>Status</span></div>
          </div>
        </div>

        <div>

          <AllTypesOfJobs jobs={jobs} />
        </div>
      </Jobdiv>

    </div>
  )
}

export default RecruiterAllJobs