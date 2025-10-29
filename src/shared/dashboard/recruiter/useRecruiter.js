import React from 'react'
import { Recruiter_Endpoints } from '../../../lib/api/recruiter_endpoints'
import { showError, showSuccess } from '../../../components/toasters'

export const useRecruiter = () => {

    const company_profile = async (body) => {

        const response = await Recruiter_Endpoints.put_company_setting(body)
        const { success, message } = response
        if (success) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }

    const upload_logo = async (body) => {

        const response = await Recruiter_Endpoints.post_logo(body)
        const { success, message } = response
        if (success) {
            showSuccess(message);
        } else {
            showError(message);
        }

    }

    const upload_banner = async (body) => {
        try {
            const response = await Recruiter_Endpoints.post_banner(body);
            const { success, message } = response
            if (success) {
                showSuccess(message);
            } else {
                showError(message);
            }
        } catch (error) {
            showError(error?.response?.data?.message);
        }
    }

    const change_recruiter_password = async (body) => {

        const response = await Recruiter_Endpoints.post_changePassword(body)
        const { success, message } = response
        if (success) {
            showSuccess(message)
        } else {
            console.log(message)
        }


    }

    const post_a_job = async (body) => {
        try {
            const response = await Recruiter_Endpoints.post_job(body)

            const { success, message } = response
            if (success) {
                showSuccess(message);
            } else {
                showError(message);
            }

        } catch (err) {
            console.log("post a job error");
        }


    }

    const expire_a_job = async (id) => {

        const response = await Recruiter_Endpoints.expire_job_by_id(id)

        const { success, message } = response
        if (success) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }

    const delete_a_job = async (id) => {

        const response = await Recruiter_Endpoints.delete_job_by_id(id)

        const { success, message } = response
        if (success) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }

    const change_applicantion_Status_by_id = async (applicationId, body) => {

        const response = await Recruiter_Endpoints.put_applicantion_Status_by_id(applicationId, body)
        const { success, message } = response
        if (success) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }

    const have_reported_job_by_id = async (jobId, body) => {

        const response = await Recruiter_Endpoints.get_reported_job_by_id(jobId, body)
        console.log(response);
         const { success } = response
        if (success) {
            showSuccess("fetch");
        } else {
            showError("Something went wrong");
        }
        return response;

    }

    const edit_post_job_by_id = async (jobId, body) => {

        console.log("Editing Job ID:", jobId);
        console.log("Payload:", body);
        const response = await Recruiter_Endpoints.put_post_job_by_id(jobId, body)
        const { success, message } = response
        if (success) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }

    const read_notifications = async (id) => {

        const response = await Recruiter_Endpoints.put_read_notifications_by_id(id)
        const { success, message } = response
        if (success) {
            showSuccess(message);
            return response
        } else {
            showError(message);
        }
    }


    return { company_profile, upload_logo, upload_banner, post_a_job, delete_a_job, expire_a_job, change_recruiter_password, change_applicantion_Status_by_id, have_reported_job_by_id, edit_post_job_by_id, read_notifications }
}
