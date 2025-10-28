import React, { useEffect, useState } from 'react'
import { Box, Contact, Main, UploadPdf } from './style'
import { ReactComponent as Calender } from '../../../../assets/icons/CalendarBlank2.svg'
import { ReactComponent as Map } from '../../../../assets/icons/MapPinLine.svg'
import { ReactComponent as Brief } from '../../../../assets/icons/briefcase2.svg'
import { ReactComponent as Timer } from '../../../../assets/icons/Timer.svg'
import Company from '../../../../assets/images/Ellipse 18.png'
import BannerImg from '../../../../assets/images/banner.png'
import { ReactComponent as Global } from '../../../../assets/icons/GlobeSimple.svg'
import { ReactComponent as Envelope } from '../../../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../../../assets/icons/phone-call-duotone 1.svg'
import { ReactComponent as File } from '../../../../assets/icons/FileText.svg'
import { useLocation, useNavigate, useParams } from 'react-router'
import Loader from '../../../../components/loading-spinner'
import { showError } from '../../../../components/toasters'
import { Recruiter_Endpoints } from '../../../../lib/api/recruiter_endpoints'

const ViewProfileApplications = () => {
  const [profile, setProfile] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const jobId = location.state.jobId
  const applicationId = location.state.applicationId

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await Recruiter_Endpoints.get_application_detail(jobId, applicationId)
      if (data?.data?.applicant) {
        setProfile(data.data.applicant)
        console.log(data, 'here is data of applicant')
      }
    }
    if (jobId, applicationId) {
      fetchProfile();
    }
  }, [jobId, applicationId])

  const viewresume = (userId) => {
    navigate('/recruiter/applicant-resume', { state: { userId } })
  }


  const ContentPage = ['/admin/dashboard/profile']
  const hideContent = ContentPage.some(path => location.pathname.startsWith(path))

  return (
    <div>

      {profile ?

        <Main>
          <div className='banner'>
            <img src={BannerImg} alt='banner' />
          </div>
          <div className='profile'>
            <div className='profile-intro'>
              {profile.profilepic &&
                <div className='profile-pic'>
                  <img src={profile.profilepic} alt='profile' />
                </div>

              }
              <div className='profile-flex-col'>
                <div className='detail-flex'>
                  <h2 className='Name'>{profile.fullName}</h2>
                </div>
                <div className='sub-flex'>
                  <h4 className='Title'>{profile.title}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-content'>
            <div className='content-left'>
              {profile?.bioGraphy &&

                <div>
                  <h2 className='Heading'>Biography</h2>
                  <p className='Sub' dangerouslySetInnerHTML={{ __html: profile.bioGraphy }}></p>

                </div>

              }

              <div>
                <h2 className='Heading'>Cover Letter</h2>
                <p className='Sub' dangerouslySetInnerHTML={{ __html: profile.coverLetter }}></p>

              </div>

              <Contact>
                <h3 className='boxHeading'>Contact Information</h3>
                <div className='flex'>
                  <div className='content'>
                    <div><Global className='IconColor' /></div>
                    {profile?.personalwebsite &&

                      <div>
                        <h2 className='Title'>Website</h2>
                        <h4 className='SubHeading'>{profile.personalwebsite}</h4>
                      </div>
                    }
                  </div>

                  {profile?.location &&

                    <div>
                      <div className='content'>
                        <div><Map className='IconColor' /></div>
                        <div>
                          <h2 className='Title'>Location</h2>
                          <h4 className='SubHeading'>{profile.location}</h4>
                        </div>
                      </div>
                    </div>

                  }

                  {profile?.phoneNumber &&

                    <div className='content'>
                      <div><Phone className='IconColor' /></div>
                      <div>
                        <h2 className='Title'>Phone</h2>
                        <h4 className='SubHeading'>{profile.phoneNumber}</h4>
                      </div>
                    </div>

                  }

                  {profile?.email &&

                    <div className='content'>
                      <div><Envelope className='IconColor' /></div>
                      <div>
                        <h2 className='Title'>Email Address</h2>
                        <h4 className='SubHeading'>{profile.email}</h4>
                      </div>
                    </div>

                  }
                </div>
              </Contact>

            </div>
            <div className='Profile-box'>

              <Box>
                <div className='flex-col'>

                  {profile?.experience &&

                    <div className='flex'>

                      <div className='content'>
                        <div><Timer className='IconColor' /></div>
                        <div>
                          <h2 className='Title'>Experience</h2>
                          <h4 className='SubHeading'>{profile.experience}</h4>
                        </div>
                      </div>

                    </div>
                  }

                  {profile?.education &&

                    <div className='flex'>
                      <div className='content'>
                        <div><Brief className='IconColor' /></div>
                        <div>
                          <h2 className='Title'>Education</h2>
                          <h4 className='SubHeading'>{profile.education}</h4>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </Box>

              {!hideContent &&

                <>

                  <div className='flex'>

                    {profile?.resume &&

                      <UploadPdf>
                        <button
                          className='center'
                          onClick={() => {
                            if (profile?.resume) {
                              const resumePdf = `${profile.resume}`
                              window.open(resumePdf, "_black")
                            } else {
                              showError("resume not found")
                            }
                          }}
                        >
                          <div><File className='IconColor' /></div>
                          <div>
                            <h5 className='Title'>Pdf Resume</h5>
                            <h6 className='info'>Click to View</h6>
                          </div>
                        </button>
                      </UploadPdf>

                    }




                    {profile.hasStructuredResume &&

                      <UploadPdf>
                        <button
                          onClick={() => viewresume(profile.id)}
                          className='center' >
                          <div><File className='IconColor' /></div>
                          <div>
                            <h5 className='Title'>Professional Resume</h5>
                            <h6 className='info'>Click to View</h6>
                          </div>
                        </button>
                      </UploadPdf>

                    }

                  </div>
                </>

              }


            </div>
          </div>
        </Main>

        : <Loader />
      }


    </div>
  )
}

export default ViewProfileApplications