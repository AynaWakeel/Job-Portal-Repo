import React from 'react'
import { Admin_Endpoints } from '../../../lib/api/admin_endpoints'
import { showError, showSuccess } from '../../toasters'

export const useAdmin = () => {

    const update_AboutUs_cms = async (body) => {

        const response = await Admin_Endpoints.put_Aboutus(body)

        if (response) {
            showSuccess(response);
        } else {
            showError("Something went wrong");
        }
    }

    const updata_ContactUs_cms = async(body) =>{

        const response = await Admin_Endpoints.put_Contactus(body)
        const { message } = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const create_faq_cms = async(body) =>{
        
        const response = await Admin_Endpoints.post_faqs(body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

     const update_faq_cms = async(id, body)=>{

        const response = await Admin_Endpoints.put_faqs(id, body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const delete_faq_cms = async(id)=>{

        const response = await Admin_Endpoints.delete_faqs(id)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const update_admin_profile = async(body) =>{

        const response = await Admin_Endpoints.put_profile(body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

     const change_admin_password = async(body) =>{

        const response = await Admin_Endpoints.post_changePassword(body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const upload_admin_photo = async(body) =>{

        const response = await Admin_Endpoints.post_photo(body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const create_industry = async(body) =>{

        const response = await Admin_Endpoints.post_industry(body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const delete_industry_by_id = async(id) =>{

        const response = await Admin_Endpoints.delete_industry(id)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

     const create_location = async(body) =>{

        const response = await Admin_Endpoints.post_location(body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const delete_location_by_id = async(id) =>{

        const response = await Admin_Endpoints.delete_location(id)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

     const change_manageUsersStatus = async(id, body)=>{

        const response = await Admin_Endpoints.put_manageUsersStatus(id, body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

     const change_manageJobsStatus = async(jobId, body)=>{

        const response = await Admin_Endpoints.put_manageJobsStatus(jobId, body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }


    return { update_AboutUs_cms , updata_ContactUs_cms , create_faq_cms , update_faq_cms , delete_faq_cms , update_admin_profile , upload_admin_photo , create_industry , delete_industry_by_id , change_manageUsersStatus , create_location , delete_location_by_id , change_admin_password , change_manageJobsStatus}
}
