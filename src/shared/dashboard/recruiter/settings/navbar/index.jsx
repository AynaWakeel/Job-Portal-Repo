import React, { useState } from 'react'
import { Settings } from './style'
import { ReactComponent as Gear } from '../../../../../assets/icons/Gear.svg'
import { ReactComponent as PlusCircle } from '../../../../../assets/icons/PlusCircle.svg'
import { ReactComponent as UserProfile } from '../../../../../assets/icons/UserProfile.svg'
import CompanyInfo from '../company-info'
import RecruiterAccountSetting from '../account-setting'
import SocialMediaProfile from '../social-media-links'
import FoundingInfo from '../founding-info'

const RecruiterSettings = () => {
  const [isActive, setIsActive] = useState("Company Info")
  
      const Link1 = () => {
          setIsActive("Company Info")
      }
      const Link2 = () => {
          setIsActive("Account Setting")
      }
      const Link3 = () => {
          setIsActive("Social Media Profile")
      }
       const Link4 = () => {
          setIsActive("Founding Info")
      }
  
  return (
    <div>
      <Settings>
        <div className='Fixednav'>
        <div>
          <h1 className='TopHeading'>Settings</h1>
        </div>
        <div>
          <ul className='Navlinks'>
            <li onClick={Link1} className={isActive === "Company Info" ? "tab active" : "tab"}>
              <UserProfile className='IconColor' />
              <a>Company Info</a>
            </li>
             <li onClick={Link4} className={isActive === "Founding Info" ? "tab active" : "tab"}>
              <PlusCircle className='IconColor' />
              <a>Founding Info</a>
            </li>
            <li onClick={Link3} className={isActive === "Social Media Profile" ? "tab active" : "tab"}>
              <PlusCircle className='IconColor' />
              <a>Social Media Profile</a>
            </li>
            <li onClick={Link2} className={isActive === "Account Setting" ? "tab active" : "tab"}>
              <Gear className='IconColor' />
              <a>Account Setting</a>
            </li>
          </ul>
        </div>

        </div>
          {isActive === "Company Info" &&
            <CompanyInfo />
          }

          {isActive == "Founding Info" &&
          <FoundingInfo/>
          }

          {isActive === "Account Setting" &&
            <RecruiterAccountSetting />
          }

          {isActive === "Social Media Profile" &&
            <SocialMediaProfile />
          }
      </Settings>
    </div>
  )
}

export default RecruiterSettings