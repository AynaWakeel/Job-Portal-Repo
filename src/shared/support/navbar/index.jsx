import React, { useState } from 'react'
import { Main } from './style'
import AboutUs from '../about'
import ContactUs from '../contact'
import Faqs from '../faqs'

const Support = () => {
  const [isActive,setIsActive] = useState("about")
  
  return (
    <div>

      <Main>
        <ul className='List'>
          <li><a className={isActive === "about" ? "tab active" : "tab"} onClick={()=>setIsActive("about")}>About us</a></li><span>/</span>
          <li><a className={isActive === "contact" ? "tab active" : "tab"} onClick={()=>setIsActive("contact")}>Contact Us</a></li><span>/</span>
          <li><a className={isActive === "faqs" ? "tab active" : "tab"} onClick={()=>setIsActive("faqs")}>Faqs</a></li>
        </ul>
      </Main>

      {isActive === "about" && <AboutUs/>}

      {isActive === "contact" && <ContactUs/>}

      {isActive === "faqs" && <Faqs/>} 

    </div>
  )
}

export default Support