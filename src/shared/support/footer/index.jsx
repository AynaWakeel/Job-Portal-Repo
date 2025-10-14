import React from 'react'
import { Down, Main, Top } from './style'
import { ReactComponent as Social1 } from '../../../assets/icons/social-media1.svg'
import { ReactComponent as Social2 } from '../../../assets/icons/social-media2.svg'
import { ReactComponent as Social3 } from '../../../assets/icons/social-media3.svg'
import { ReactComponent as Social4 } from '../../../assets/icons/social-media4.svg'
import { ReactComponent as Brief } from '../../../assets/icons/briefcase2.svg'
import { ROLE } from '../../../enum/roles'
import { useNavigate } from 'react-router'

const Footer = () => {
    const navigate = useNavigate()
    const userRole = localStorage.getItem("role")
    console.log(localStorage.getItem("role"))

    return (
        <div>
            <Main>
                <Top>
                    <div className='logo-sec'>
                        <div className='logo-flex'>
                            <div><Brief className='Color' /></div>
                            <div className='name'>MyJob</div>
                        </div>
                        <div>
                            <span className='title'>email now:</span><span className='sub'> myjobportal@email.com</span>
                            <p className='para'>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
                        </div>
                    </div>
                    <div className='flex-list'>

                        { userRole === ROLE.RECRUITER && 
                        <>
                        
                        <div className='list'>
                            <h4>Recruiter</h4>
                            <ul>
                                <li><a onClick={() => navigate('/recruiter/find-candidates')}>Find Candidates</a></li>
                                <li><a >All Candidates</a></li>
                                <li><a onClick={() => navigate('/recruiter/profile')}>Company Profile</a></li>
                                <li><a >Candidates Profile</a></li>
                            </ul>
                        </div>
                        <div className='list'>
                            <h4>Dashboard</h4>
                            <ul>
                                <li><a onClick={() => navigate('/recruiter/dashboard/overview')}>Overview</a></li>
                                <li><a  onClick={() => navigate('/recruiter/dashboard/postjob')}>Post A Job</a></li>
                                <li><a  onClick={() => navigate('/recruiter/dashboard/myjobs')}>My Jobs</a></li>
                                  <li><a onClick={() => navigate('/recruiter/dashboard/alljobs')}>All Job</a></li>
                                <li><a  onClick={() => navigate('/recruiter/dashboard/settings')}>Setting</a></li>

                            </ul>
                        </div>
                        
                        </>
                        }

                        { userRole === ROLE.APPLICANT && 
                        
                        <>

                        <div className='list'>
                            <h4>Applicant</h4>
                            <ul>
                                <li><a onClick={() => navigate('/applicant/findjobs')}>Find a Job</a></li>
                                <li><a >All Jobs</a></li>
                                <li><a onClick={() => navigate('/applicant/profile')}>My Profile</a></li>
                            </ul>
                        </div>
                        <div className='list'>
                            <h4>Dashboard</h4>
                            <ul>
                                <li><a onClick={() => navigate('/applicant/dashboard/overview')}>Overview</a></li>
                                <li><a onClick={() => navigate('/applicant/dashboard/applied')}>Applied Jobs</a></li>
                                <li><a onClick={() => navigate('/applicant/dashboard/favourities')}>Favourite Jobs</a></li>
                                <li><a onClick={() => navigate('/applicant/dashboard/personal-profile')}>Setting</a></li>
                            </ul>
                        </div>
                        
                        </>

                        }


                        <div className='list'>
                            <h4>Support</h4>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Faqs</a></li>
                            </ul>
                        </div>
                    </div>
                </Top>
                <Down>
                    <div><h4 className='H4'>@ 2024 MyJob - Job Portal. All rights Rserved</h4></div>
                    <div className='flex-icons'>
                        {/* <h4 className='H4'>myjobportal@example.com</h4> */}
                        {/* <Social1 className='Color' /> */}
                        {/* <Social2 className='Color' /> */}
                        {/* <Social3 className='Color' /> */}
                        {/* <Social4 className='Color' /> */}
                    </div>
                </Down>
            </Main>
        </div>
    )
}

export default Footer