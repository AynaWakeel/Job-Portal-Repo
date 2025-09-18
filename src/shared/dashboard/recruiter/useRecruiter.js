import React from 'react'
import { Recruiter_Endpoints } from '../../../lib/api/recruiter_endpoints'
import { showError, showSuccess } from '../../../components/toasters'

export const useRecruiter = () => {

    const company_profile = async (body) => {

        const response = await Recruiter_Endpoints.put_company_setting(body)

        if (response?.data?.message) {
            showSuccess(response.data.message);
        } else {
            showError("Something went wrong");
        }
    }

    const upload_logo = async (body) => {

        const response = await Recruiter_Endpoints.post_logo(body)

        if (response?.message) {
            showSuccess(response.message);
        } else {
            showError(response?.message);
        }

    }

    // const upload_banner = async (body) => {

    //     const response = await Recruiter_Endpoints.post_banner(body)
    //     if (response?.data?.message) {
    //         showSuccess(response.data.message)
    //     } else {
    //         showError(response.data.message)
    //     }

    // }

    const upload_banner = async (body) => {
        try {
            const response = await Recruiter_Endpoints.post_banner(body);

            if (response?.data?.message) {
                showSuccess(response.data.message);          
            } else if (response?.message) {
                showSuccess(response.message);
            } else {
                showError("Something went wrong!");
            }
        } catch (error) {
            showError(error?.response?.data?.message);
        }
    };


    return { company_profile, upload_logo, upload_banner }
}
