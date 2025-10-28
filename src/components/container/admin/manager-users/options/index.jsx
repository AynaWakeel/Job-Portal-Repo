import React, { useState } from 'react'
import { Main } from './style'
import { useNavigate } from 'react-router'
import RecruiterManageUsersTable from '../recruiter'
import ApplicantManageUsersTable from '../applicant'

const ManageUsers = () => {
    
    // const [activeRole, setActiveRole] = useState("recruiter")

     const [isActive, setIsActive] = useState("recruiter")
      
        const OpenApplicantData = () => {
            setIsActive("applicant")
        }
        const OpenRecruiterData = () => {
            setIsActive("recruiter")
        }



    return (
        <div>

            <Main>
                <div className='flex-box'>
                    <h1 className='TopHeading'>Manage Users</h1>
                    <div className='flex'>
                        <button className={`CardBtn ${isActive === "recruiter" ? "active" : ""}`}
                         onClick={OpenRecruiterData}
                         >Recruiter</button>
                        <button  className={`CardBtn ${isActive === "applicant" ? "active" : ""}`}
                        onClick={OpenApplicantData}
                        >Applicant</button>
                    </div>
                </div>
                  {isActive === "recruiter" && 
                    <RecruiterManageUsersTable/>
                  }

                   {isActive === "applicant" && 
                    <ApplicantManageUsersTable/>
                  }

            </Main>

        </div>
    )
}

export default ManageUsers