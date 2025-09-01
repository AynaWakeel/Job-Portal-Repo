import React from 'react'
import { Box, Contact, Main, UploadPdf } from './style'
import { ReactComponent as Calender } from '../../../../assets/icons/CalendarBlank2.svg'
import { ReactComponent as Map } from '../../../../assets/icons/MapPinLine.svg'
import { ReactComponent as Wallet } from '../../../../assets/icons/Wallet.svg'
import { ReactComponent as Brief } from '../../../../assets/icons/briefcase2.svg'
import { ReactComponent as Timer } from '../../../../assets/icons/Timer.svg'
import Company from '../../../../assets/images/Ellipse 18.png'
import BannerImg from '../../../../assets/images/banner.png'
import { ReactComponent as Global } from '../../../../assets/icons/GlobeSimple.svg'
import { ReactComponent as Envelope } from '../../../../assets/icons/Envelope.svg'
import { ReactComponent as Phone } from '../../../../assets/icons/phone-call-duotone 1.svg'
import { ReactComponent as File } from '../../../../assets/icons/FileText.svg'


const ApplicantProfile = () => {
  return (
    <div>

      <Main>
        <div className='banner'>
          <img src={BannerImg} alt='banner' />
        </div>
        <div className='profile'>
          <div className='profile-intro'>
            <div className='profile-pic'>
              <img src={Company} alt='icon' />
            </div>
            <div className='profile-flex-col'>
              <div className='detail-flex'>
                <h2 className='Name'>John Ellender</h2>
              </div>
              <div className='sub-flex'>
                <h4 className='Title'>This is my title</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='profile-content'>
          <div className='content-left'>
            <div>
              <h2 className='Heading'>Biography</h2>
              <p className='Sub'>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.</p>
              <p className='Sub'>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.</p>
            </div>

            <Contact>
              <h3 className='boxHeading'>Contact Information</h3>
              <div className='flex'>
                <div className='content'>
                  <div><Global className='IconColor' /></div>
                  <div>
                    <h2 className='Title'>Website</h2>
                    <h4 className='SubHeading'>www.estherhoward.com</h4>
                  </div>
                </div>
                <div>
                  <div className='content'>
                    <div><Map className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Location</h2>
                      <h4 className='SubHeading'>Beverly Hills, California 90202</h4>
                    </div>
                  </div>
                  <div>
                    <p className='Title'>Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland, </p>
                  </div>
                </div>
                <div className='content'>
                  <div><Phone className='IconColor' /></div>
                  <div>
                    <h2 className='Title'>Phone</h2>
                    <h4 className='SubHeading'>+1-202-555-0141</h4>
                  </div>
                </div>
                <div className='content'>
                  <div><Envelope className='IconColor' /></div>
                  <div>
                    <h2 className='Title'>Email Address</h2>
                    <h4 className='SubHeading'>john.ellender@gmail.com</h4>
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
                    <div><Calender className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Projects</h2>
                      <h4 className='SubHeading'>Something..</h4>
                    </div>
                  </div>

                  <div className='content'>
                    <div><Timer className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Experience</h2>
                      <h4 className='SubHeading'>7 years</h4>
                    </div>
                  </div>

                </div>
                <div className='flex'>
                  <div className='content'>
                    <div><Brief className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Education</h2>
                      <h4 className='SubHeading'>Masters degree</h4>
                    </div>
                  </div>
                  <div className='content'>
                    <div><Wallet className='IconColor' /></div>
                    <div>
                      <h2 className='Title'>Institude</h2>
                      <h4 className='SubHeading'>LUMS</h4>
                    </div>
                  </div>

                </div>
              </div>
            </Box>

            <UploadPdf>
              <label className='center'>
                <div><File className='IconColor' /></div>
                <div>
                  <h5 className='Title'>Professional Resume</h5>
                  <h6 className='info'>3.5 MB</h6>
                  <input type="file" accept=".pdf" hidden />
                </div>
              </label>
            </UploadPdf>

          </div>
        </div>
      </Main>

    </div>
  )
}

export default ApplicantProfile