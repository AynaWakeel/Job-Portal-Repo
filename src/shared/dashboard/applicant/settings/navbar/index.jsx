import React, { useState } from 'react'
import { Settings } from './style'
import { ReactComponent as Gear } from '../../../../../assets/icons/Gear.svg'
import { ReactComponent as PlusCircle } from '../../../../../assets/icons/PlusCircle.svg'
import { ReactComponent as UserProfile } from '../../../../../assets/icons/UserProfile.svg'
import ApplicantPersonalProfile from '../personal-profile'
import ApplicantAccountSetting from '../account-setting'
import ApplicantCreateResume from '../create-resume'

const Setting = () => {
    const [isActive, setIsActive] = useState("Personal profile")

    const Link1 = () => {
        setIsActive("Personal profile")
    }
    const Link2 = () => {
        setIsActive("Account Setting")
    }
    const Link3 = () => {
        setIsActive("Create Resume")
    }

    return (
        <div>
            <Settings>
                <div>
                    <h1 className='TopHeading'>Settings</h1>
                </div>
                <div>
                    <ul className='Navlinks'>
                        <li onClick={Link1} className={isActive === "Personal profile" ? "tab active" : "tab"}>
                            <UserProfile className='IconColor' />
                            <a>Personal profile</a>
                        </li>
                        <li onClick={Link2} className={isActive === "Account Setting" ? "tab active" : "tab"}>
                            <Gear className='IconColor' />
                            <a>Account Setting</a>
                        </li>
                        <li onClick={Link3} className={isActive === "Create Resume" ? "tab active" : "tab"}>
                            <PlusCircle className='IconColor' />
                            <a>Create Resume</a>
                        </li>
                    </ul>
                </div>
                    {isActive === "Personal profile" &&
                        <ApplicantPersonalProfile />
                    }

                    {isActive === "Account Setting" &&
                        <ApplicantAccountSetting />
                    }

                    {isActive === "Create Resume" &&
                        <ApplicantCreateResume />
                    }
            </Settings>
        </div>
    )
}

export default Setting