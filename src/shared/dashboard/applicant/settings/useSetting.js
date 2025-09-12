import React from 'react'
import { Applicant_Endpoints } from '../../../../lib/api/applicant_endpoints'

export const useSetting = () => {

  const profile_pic = async(body)=>{
    
    const response = await Applicant_Endpoints.post_profile_pic(body)
    const {sucess , message} = response
    if(sucess){
        // localStorage.getItem("token", response.token)
        console.log(message)
    }else{
      console.log(message)
    }

  }

    const upload_resume = async (body) => {

        const response = await Applicant_Endpoints.post_upload_resume(body)
        const { message, sucess } = response
        if (sucess) {
            console.log(message)
        } else {
            console.log(message)
        }
    }

      const profile_setting = async (body) => {

        const response = await Applicant_Endpoints.post_profile_setting(body)
        const { message, sucess } = response
        if (sucess) {
            console.log(message)
        } else {
            console.log(message)
        }
    }
    
  return { profile_pic, upload_resume, profile_setting}
}
