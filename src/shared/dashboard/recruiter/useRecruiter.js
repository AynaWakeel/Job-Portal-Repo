import React from 'react'
import { Recruiter_Endpoints } from '../../../lib/api/recruiter_endpoints'
import { showError, showSuccess } from '../../../components/toasters'

export const useRecruiter = () => {

    const company_profile = async (body) => {

        const response = await Recruiter_Endpoints.put_company_setting(body)
        const {message} = response
        if (response) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }

    const upload_logo = async (body) => {

        const response = await Recruiter_Endpoints.post_logo(body)
        const {message} = response
        if (response) {
            showSuccess(message);
        } else {
            showError(message);
        }

    }

    const upload_banner = async (body) => {
        try {
            const response = await Recruiter_Endpoints.post_banner(body);
        const {message} = response
        if (response) {
            showSuccess(message);
        } else {
            showError(message);
        }
        } catch (error) {
            showError(error?.response?.data?.message);
        }
    }

      const change_recruiter_password = async(body) =>{

        const response = await Recruiter_Endpoints.post_changePassword(body)
        const {message} = response
        if(response){
            showSuccess(message)
        }else{
            showError(message)
        }
    }

    const post_a_job = async(body)=>{

        const response = await Recruiter_Endpoints.post_job(body)
            
        const {message} = response
        if (response) {
            showSuccess(message);
        } else {
            showError(message);
        }
       
    }

     const expire_a_job = async(id)=>{

        const response = await Recruiter_Endpoints.expire_job_by_id(id)
        
        if (response?.message) {
            showSuccess(response.message);
        } else {
            showError(response?.message);
        }
    }

     const delete_a_job = async(id)=>{

        const response = await Recruiter_Endpoints.delete_job_by_id(id)
        
        if (response?.message) {
            showSuccess(response.message);
        } else {
            showError(response?.message);
        }
    }

     const change_applicantion_Status_by_id = async(applicationId, body)=>{

        const response = await Recruiter_Endpoints.put_applicantion_Status_by_id(applicationId , body)
        
        if (response?.message) {
            showSuccess(response.message);
        } else {
            showError(response?.message);
        }
    }

    const have_reported_job_by_id = async(jobId, body)=>{

        const response = await Recruiter_Endpoints.get_reported_job_by_id(jobId , body)
        console.log(response);
        if (response?.data?.success) {
            showSuccess("fetch");
        } else {
            showError(response?.message);
        }
        return response;
        
    }

    const edit_post_job_by_id = async(jobId, body)=>{

        const response = await Recruiter_Endpoints.put_post_job_by_id(jobId , body)
        
        if (response?.message) {
            showSuccess(response.message);
        } else {
            showError(response?.message);
        }
    }

     const read_notifications = async(id)=>{

        const response = await Recruiter_Endpoints.put_read_notifications_by_id(id)
        
        if (response?.message) {
            showSuccess(response.message);
        } else {
            showError(response?.message);
        }
        return response
    }


    return { company_profile, upload_logo, upload_banner, post_a_job , delete_a_job , expire_a_job , change_recruiter_password , change_applicantion_Status_by_id , have_reported_job_by_id , edit_post_job_by_id , read_notifications}
}
