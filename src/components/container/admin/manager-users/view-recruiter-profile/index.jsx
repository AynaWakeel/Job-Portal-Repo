import React, { useEffect, useState } from 'react'
import { Box, Contact, Main } from './style'
import { ReactComponent as Calender } from '../../../../../assets/icons/CalendarBlank2.svg'
import { ReactComponent as Map } from '../../../../../assets/icons/MapPinLine.svg'
import { ReactComponent as Brief } from '../../../../../assets/icons/briefcase2.svg'
import { ReactComponent as Timer } from '../../../../../assets/icons/Timer.svg'
import Company from '../../../../../assets/images/Ellipse 18.png'
import BannerImg from '../../../../../assets/images/banner.png'
import { ReactComponent as Global } from '../../../../../assets/icons/GlobeSimple.svg'
import { ReactComponent as Envelope } from '../../../../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../../../../assets/icons/phone-call-duotone 1.svg'
import { ReactComponent as File } from '../../../../../assets/icons/FileText.svg'
import { useLocation, useNavigate } from 'react-router'
import { Applicant_Endpoints } from '../../../../../lib/api/applicant_endpoints'
import Loader from '../../../../../components/loading-spinner'
import { showError } from '../../../../../components/toasters'
import { ROLE } from '../../../../../enum/roles'
import { Recruiter_Endpoints } from '../../../../../lib/api/recruiter_endpoints'
import { Admin_Endpoints } from '../../../../../lib/api/admin_endpoints'

const ShowRecruiterToAdmin = () => {
  const [profile, setProfile] = useState({})
  const location = useLocation()
   const navigate = useNavigate()
  const id = location.state.id
  console.log("userId of show applicant : --", id);


  useEffect(() => {
    const fetchProfile = async () => {
      console.log("userId of show applicant in fetch : --", id);

      const data = await Applicant_Endpoints.get_company_profile_by_id(id)
      
      if (data?.data) {
        setProfile(data.data)
        console.log(data, 'here is msg of applicant')
        console.log("show applicant data",data);
        
      }

      //  if(id){
      //   const data = await Recruiter_Endpoints.get_profile_by_id(id)
      //   // const data = await Applicant_Endpoints.get_company_profile_by_id(id)

      //   if (data?.data) {
      //     setProfile(data.data)
      //     console.log(data, 'here is data of applicant')
      //   }

      // }

    }
    fetchProfile();
  }, [])

//    const viewresume = (userId) => {
//     navigate('/applicant/applicant-resume', { state: { userId } })
//   }


//   const ContentPage = ['/admin/dashboard/profile']
//   const hideContent = ContentPage.some(path => location.pathname.startsWith(path))

  return (
    <div>

      {profile ?

        <Main>
          <div className='banner'>
            <img src={BannerImg} alt='banner' />
          </div>
          <div className='profile'>
            <div className='profile-intro'>
              {profile?.profilepic ?

                <div className='profile-pic'>
                  <img src={profile.profilepic} alt='img' />
                </div>

                :

                <div className='profile-pic'></div>

              }
              <div className='profile-flex-col'>
                <div className='detail-flex'>
                  <h2 className='Name'>{profile.fullName || "Not Provided"}</h2>
                </div>
                <div className='sub-flex'>
                  <h4 className='Title'>{profile.title || "Not Provided"}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-content'>
            <div className='content-left'>
              <div>
                <h2 className='Heading'>Biography</h2>
                <p className='Sub' dangerouslySetInnerHTML={{ __html: profile.bioGraphy  || "Not Provided" }}></p>

              </div>

              <Contact>
                <h3 className='boxHeading'>Contact Information</h3>
                <div className='flex'>
                  <div className='content'>
                    <div><Global className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Website</h2>
                      <h4 className='SubHeading'>{profile.personalwebsite || "Not Provided"}</h4>
                    </div>
                  </div>
                  <div>
                    <div className='content'>
                      <div><Map className='IconColor' /></div>
                      <div>
                        <h2 className='Title'>Location</h2>
                        <h4 className='SubHeading'>{profile.location || "Not Provided"}</h4>
                      </div>
                    </div>

                  </div>
                  <div className='content'>
                    <div><Phone className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Phone</h2>
                      <h4 className='SubHeading'>{profile.phoneNumber || "Not Provided"}</h4>
                    </div>
                  </div>
                  <div className='content'>
                    <div><Envelope className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Email Address</h2>
                      <h4 className='SubHeading'>{profile.email || "Not Provided"}</h4>
                    </div>
                  </div>
                </div>
              </Contact>

            </div>
            <div className='Profile-box'>
              <Box>
                <div className='flex-col'>
                  <div className='flex'>

                    <div className='content'>
                      <div><Timer className='IconColor' /></div>
                      <div>
                        <h2 className='Title'>Experience</h2>
                        <h4 className='SubHeading'>{profile.experience || "Not Provided"}</h4>
                      </div>
                    </div>

                  </div>
                  <div className='flex'>
                    <div className='content'>
                      <div><Brief className='IconColor' /></div>
                      <div>
                        <h2 className='Title'>Education</h2>
                        <h4 className='SubHeading'>{profile.education || "Not Provided"}</h4>
                      </div>
                    </div>

                  </div>
                </div>
              </Box>

        
            </div>
          </div>
        </Main>

        : <Loader />
      }


    </div>
  )
}

export default ShowRecruiterToAdmin