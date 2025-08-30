import React from 'react'
import { Down, Main, Top } from './style'
import { ReactComponent as Social1 } from '../../../assets/icons/social-media1.svg'
import { ReactComponent as Social2 } from '../../../assets/icons/social-media2.svg'
import { ReactComponent as Social3 } from '../../../assets/icons/social-media3.svg'
import { ReactComponent as Social4 } from '../../../assets/icons/social-media4.svg'
import { ReactComponent as Brief } from '../../../assets/icons/briefcase2.svg'

const Footer = () => {
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
                            <span className='title'>Call now:</span><span className='sub'> (319) 555-0115</span>
                            <p className='para'>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
                        </div>
                    </div>
                    <div className='flex-list'>
                        <div className='list'>
                            <h4>Applicant</h4>
                            <ul>
                                <li><a href="">Find A Job</a></li>
                                <li><a href="">Overview</a></li>
                                <li><a href="">Applied Jobs</a></li>
                                <li><a href="">Favourite Jobs</a></li>
                                <li><a href="">Setting</a></li>
                            </ul>
                        </div>
                        <div className='list'>
                            <h4>Recruiter</h4>
                            <ul>
                                <li><a href="">Post A Job</a></li>
                                <li><a href="">Overview</a></li>
                                <li><a href="">My Jobs</a></li>
                                <li><a href="">Setting</a></li>
                            </ul>
                        </div>
                       <div className='list'>
                            <h4>Support</h4>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Faqs</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </Top>
                <Down>
                    <div><h4 className='H4'>@ 2024 MyJob - Job Portal. All rights Rserved</h4></div>
                    <div className='flex-icons'>
                        <Social1 className='Color' />
                        <Social2 className='Color' />
                        <Social3 className='Color' />
                        <Social4 className='Color' />
                    </div>
                </Down>
            </Main>
        </div>
    )
}

export default Footer