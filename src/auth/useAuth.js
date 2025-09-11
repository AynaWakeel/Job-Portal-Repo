import React from 'react'
import { ApiEndPoints } from '../lib/api/endpoints'
import { useNavigate } from 'react-router'
import { ROLE } from '../enum/roles'
// import toastr, { error } from 'toastr'

const UseAuth = () => {
    const navigate = useNavigate()

    const login = async (body) => {

        const response = await ApiEndPoints.login(body)

        const { sucess, message, user } = response
        if (sucess) {
            localStorage.setItem('token',response.token)
            // alert(message);

            if (user.role === ROLE.RECRUITER) {
                navigate('/recruiter/dashboard/recruiter-overview');
            } else if (user.role === ROLE.APPLICANT) {
                navigate('/applicant/dashboard/applicant-overview');
            } else if (user.role === ROLE.ADMIN) {
                navigate('/admin/dashboard/overview');
            }

        } else {
            // alert(message);
            navigate('/auth/register');
        }

    }


    const logout = async (body) => {

        const response = await ApiEndPoints.logout(body)

        
        const { sucess, message } = response
        if (sucess) {
            alert(message);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate('/auth/login');

        } else {
            alert(message);
        }

    }


    const signup = async (body) => {

        const response = await ApiEndPoints.signup(body)

        const { sucess, message } = response
        if (sucess) {
            alert(message);

        } else {
            alert(message);
        }

    }

     const verify_otp = async (body) => {

        const response = await ApiEndPoints.otp(body)

        const { sucess, message } = response
        if (sucess) {
            alert(message);

        } else {
            alert(message);
        }

    }


    const forget_password = async (body) => {

        const response = await ApiEndPoints.forget_password(body)

        const { sucess, message } = response
        if (sucess) {
            alert(message);
            navigate('/auth/reset');

        } else {
            alert(message);
        }

    }

    const reset_password = async (body) => {

        const response = await ApiEndPoints.reset_password(body)

        const { sucess, message } = response
        if (sucess) {
            alert(message);

        } else {
            alert(message);
        }

    }




    return { login, logout, signup , verify_otp, forget_password ,reset_password}
}

export default UseAuth


