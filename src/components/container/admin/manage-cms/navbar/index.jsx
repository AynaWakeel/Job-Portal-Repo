import React, { useState } from 'react'
import { Settings } from './style'
import { ReactComponent as Brief } from '../../../../../assets/icons/Briefcase.svg'
import { ReactComponent as PlusCircle } from '../../../../../assets/icons/PlusCircle.svg'
import { ReactComponent as UserProfile } from '../../../../../assets/icons/UserProfile.svg'
import CMSAbout from '../about'
import CMSContact from '../contact'
import CMSfaqs from '../faqs/view'

const CMSNavbar = () => {
    const [isActive, setIsActive] = useState("About")

    const Link1 = () => {
        setIsActive("About")
    }
    const Link2 = () => {
        setIsActive("Contact")
    }
    const Link3 = () => {
        setIsActive("FAQs")
    }

    return (
        <div>

            <Settings>

                <div className='Fixednav'>
                    <div>
                        <h1 className='TopHeading'>Manage CMS</h1>
                    </div>

                    <ul className='Navlinks'>
                        <li onClick={Link1} className={isActive === "About" ? "tab active" : "tab"}>
                            <Brief className='IconColor' />
                            <a>About</a>
                        </li>
                        <li onClick={Link2} className={isActive === "Contact" ? "tab active" : "tab"}>
                            <UserProfile className='IconColor' />
                            <a>Contact</a>
                        </li>
                        <li onClick={Link3} className={isActive === "FAQs" ? "tab active" : "tab"}>
                            <PlusCircle className='IconColor' />
                            <a>FAQs</a>
                        </li>
                    </ul>
                </div>

                <div className="ScrollContent">
                    {isActive === "About" &&
                        <CMSAbout />
                    }

                    {isActive === "Contact" &&
                        <CMSContact />
                    }

                    {isActive === "FAQs" &&
                        <CMSfaqs />
                    }
                </div>
            </Settings>

        </div>
    )
}

export default CMSNavbar