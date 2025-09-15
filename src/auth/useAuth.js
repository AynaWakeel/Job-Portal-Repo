import React from 'react'
import { ApiEndPoints } from '../lib/api/endpoints'
import { useNavigate } from 'react-router'
import { ROLE } from '../enum/roles'
import { showError, showSuccess } from '../components/toasters'

const UseAuth = () => {
    const navigate = useNavigate()

    const login = async (body) => {

        const response = await ApiEndPoints.login(body)

        const { sucess, message, user } = response
        if (sucess) {
            localStorage.setItem('token',response.token)
             localStorage.setItem('role',response.user.role)
            showSuccess(message);

            if (user.role === ROLE.RECRUITER) {
                navigate('/recruiter/dashboard/recruiter-overview');
                console.log(response.user.role)

            } else if (user.role === ROLE.APPLICANT) {
                navigate('/applicant/dashboard/applicant-overview');
                 console.log(response.user.role)

            } else if (user.role === ROLE.ADMIN) {
                navigate('/admin/dashboard/overview');
                 console.log(response.user.role)
            }

        } else {
            showError(message);
            navigate('/auth/register');
        }

    }


    const logout = async (body) => {

        const response = await ApiEndPoints.logout(body)
        
        const { sucess, message } = response
        if (sucess) {
            showSuccess(message);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate('/auth/login');

        } else {
            showError(message);
        }

    }


    const signup = async (body) => {

        const response = await ApiEndPoints.signup(body)

        const { sucess, message } = response
        if (sucess) {
            showSuccess(message);

        } else {
            showError(message);
        }

    }

     const verify_otp = async (body) => {

        const response = await ApiEndPoints.otp(body)

        const { sucess, message } = response
        if (sucess) {
            showSuccess(message);

        } else {
            showError(message);
        }

    }


    const forget_password = async (body) => {

        const response = await ApiEndPoints.forget_password(body)

        const { sucess, message } = response
        if (sucess) {
            showSuccess(message);
            navigate('/auth/reset');

        } else {
            showError(message);
        }

    }

    const reset_password = async (body) => {

        const response = await ApiEndPoints.reset_password(body)

        const { sucess, message } = response
        if (sucess) {
            showSuccess(message);

        } else {
            showError(message);
        }

    }


    return { login, logout, signup , verify_otp, forget_password ,reset_password}
}

export default UseAuth


