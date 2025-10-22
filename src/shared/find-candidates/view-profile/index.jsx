import React, { useEffect, useState } from 'react'
import { Box, Contact, Main, UploadPdf } from './style'
import { ReactComponent as Calender } from '../../../assets/icons/CalendarBlank2.svg'
import { ReactComponent as Map } from '../../../assets/icons/MapPinLine.svg'
import { ReactComponent as Brief } from '../../../assets/icons/briefcase2.svg'
import { ReactComponent as Timer } from '../../../assets/icons/Timer.svg'
import Company from '../../../assets/images/Ellipse 18.png'
import Chat from '../../../assets/icons/comments-solid-full.svg'
import BannerImg from '../../../assets/images/banner.png'
import { ReactComponent as Global } from '../../../assets/icons/GlobeSimple.svg'
import { ReactComponent as Envelope } from '../../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../../assets/icons/phone-call-duotone 1.svg'
import { ReactComponent as File } from '../../../assets/icons/FileText.svg'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Recruiter_Endpoints } from '../../../lib/api/recruiter_endpoints'
import Loader from '../../../components/loading-spinner'
import { showError } from '../../../components/toasters'
import { useChat } from '../../../components/chat-system/useChat'

const ViewApplicantProfile = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({})
  const location = useLocation()
  const { create_chat_room } = useChat()
  const id = location.state.id

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await Recruiter_Endpoints.get_profile_by_id(id)

      if (data?.data?.applicant) {
        setProfile(data.data.applicant)
        console.log(data, 'here is data of applicant')
      }
    }
    if (id) fetchProfile(id);
  }, [id])

  const viewresume = (userId) => {
    navigate('/recruiter/applicant-resume', { state: { userId } })
  }

  const handleCreateChat = async (receiverId) => {
    const token = localStorage.getItem("token");
    console.log("Sender token:", token);
    console.log("Receiver ID:", receiverId);

    const body = {
      receiverId
    };

    const res = await create_chat_room(body)
    if (res?.chat) {
      console.log("chat res:", res.chat);
      navigate('/recruiter/chat')
    }
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
              {profile?.profilepic ?

                <div className='profile-pic'>
                  <img src={profile.profilepic} alt='img' />
                </div>

                :

                <div className='profile-pic'></div>

              }
              <div className='profile-flex-col'>
                <div className='detail-flex'>
                  <h2 className='Name'>{profile.fullName}</h2>
                  <img src={Chat} alt='msg' onClick={() => handleCreateChat(profile.id)} />
                </div>
                <div className='sub-flex'>
                  <h4 className='Title'>{profile.title}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-content'>
            <div className='content-left'>
              <div>
                <h2 className='Heading'>Biography</h2>
                <p className='Sub' dangerouslySetInnerHTML={{ __html: profile.bioGraphy || "N/A" }}></p>

              </div>

              <Contact>
                <h3 className='boxHeading'>Contact Information</h3>
                <div className='flex'>
                  <div className='content'>
                    <div><Global className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Website</h2>
                      <h4 className='SubHeading'>{profile.personalwebsite || "N/A"}</h4>
                    </div>
                  </div>
                  <div>
                    <div className='content'>
                      <div><Map className='IconColor' /></div>
                      <div>
                        <h2 className='Title'>Location</h2>
                        <h4 className='SubHeading'>{profile.location || "N/A"}</h4>
                      </div>
                    </div>

                  </div>
                  <div className='content'>
                    <div><Phone className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Phone</h2>
                      <h4 className='SubHeading'>{profile.phoneNumber || "N/A"}</h4>
                    </div>
                  </div>
                  <div className='content'>
                    <div><Envelope className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Email Address</h2>
                      <h4 className='SubHeading'>{profile.email || "N/A"}</h4>
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
                        <h4 className='SubHeading'>{profile.experience || "N/A"}</h4>
                      </div>
                    </div>

                  </div>
                  <div className='flex'>
                    <div className='content'>
                      <div><Brief className='IconColor' /></div>
                      <div>
                        <h2 className='Title'>Education</h2>
                        <h4 className='SubHeading'>{profile.education || "N/A"}</h4>
                      </div>
                    </div>

                  </div>
                </div>
              </Box>

              {!hideContent &&

                <>

                  {profile.resume || profile.hasStructuredResume &&

                    <Box>
                      <div className='flex-col'>


                        <div className='flex'>

                          {profile.resume !== null &&

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




                          {profile.hasStructuredResume !== false &&

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
                      </div>

                    </Box>
                  }
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

export default ViewApplicantProfile