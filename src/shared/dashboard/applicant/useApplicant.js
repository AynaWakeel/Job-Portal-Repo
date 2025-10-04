import React from 'react'
import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'
import { showError, showSuccess } from '../../../components/toasters'

export const useApplicant = () => {

    const profile_pic = async (body) => {

        const response = await Applicant_Endpoints.post_profile_pic(body)
        const { message } = response
        if (response) {
            // localStorage.getItem("token", response.token)
            showSuccess(message)
            return response
        } else {
            showError(message)
            return null
        }

    }

    const upload_resume = async (body) => {

        const response = await Applicant_Endpoints.post_upload_resume(body)
        const { message } = response
        if (response) {
            showSuccess(message)
        } else {
            showError(message)
        }
    }

    const profile_setting = async (body) => {

        const response = await Applicant_Endpoints.put_profile_setting(body)
        const { message } = response
        if (response) {
            showSuccess(message)
        } else {
            showError(message)
        }
    }


    const create_resume = async (body) => {

        const response = await Applicant_Endpoints.post_create_resume(body)
        const { message, sucess } = response
        if (sucess) {
            showSuccess(message)
        } else {
            showError(message)
        }
    }

    const update_applicant_resume = async (body) => {

        const response = await Applicant_Endpoints.update_resume(body)
        const { message, sucess } = response
        if (sucess) {
            showSuccess(message)
            return response.data
        } else {
            showError(message)
            return null
        }
    }

    const change_applicant_password = async (body) => {

        const response = await Applicant_Endpoints.post_changePassword(body)
        const { message } = response
        if (response) {
            showSuccess(message)
        } else {
            showError(message)
        }
    }

    const apply_job_by_id = async (id,body) => {

        const response = await Applicant_Endpoints.post_apply_job(id,body)
        const { message } = response
        if (response) {
            showSuccess(message)
        } else {
            showError(message)
        }
    }

     const save_job = async (body) => {

        const response = await Applicant_Endpoints.post_saved_jobs(body)
        const { message } = response
        if (response) {
            showSuccess(message)
        } else {
            showError(message)
        }
    }

     const remove_save_job = async (jobId) => {

        const response = await Applicant_Endpoints.delete_saved_jobs(jobId)
        const { message } = response
        if (response) {
            showSuccess(message)
        } else {
            showError(message)
        }
    }

    return { profile_pic, upload_resume, profile_setting, create_resume, update_applicant_resume, change_applicant_password , apply_job_by_id , save_job , remove_save_job}
}
