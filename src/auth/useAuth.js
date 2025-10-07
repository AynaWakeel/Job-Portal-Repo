import React from 'react'
import { ApiEndPoints } from '../lib/api/auth_endpoints'
import { useNavigate } from 'react-router'
import { ROLE } from '../enum/roles'
import { showError, showSuccess } from '../components/toasters'
import { TwoFactor_Endpoints } from '../lib/api/twoFactor_endpoints'

const UseAuth = () => {
    const navigate = useNavigate()

    const login = async (body) => {

        const response = await ApiEndPoints.login(body)

        const { success, message, user } = response
        if (success) {
            localStorage.setItem('token', response.token)
            localStorage.setItem('role', response.user.role)
            showSuccess(message)

            if (user.role === ROLE.RECRUITER) {
                navigate('/recruiter/dashboard/overview')
                console.log(response.user.role)

            } else if (user.role === ROLE.APPLICANT) {
                navigate('/applicant/dashboard/overview')
                console.log(response.user.role)

            } else if (user.role === ROLE.ADMIN) {
                navigate('/admin/dashboard/overview')
                console.log(response.user.role)
            }

        } else {
            showError(message);
            navigate('/auth/register')
        }

    }

    // const login = async (body) => {

    //     const response = await ApiEndPoints.login(body)

    //     const { success, message, user } = response
    //     if (success) {
    //         localStorage.setItem('token', response.token)
    //         localStorage.setItem('role', response.user.role)
    //         showSuccess(message)
    //         try {
    //             const res = await TwoFactor_Endpoints.get_authentication_status()

    //             if (res?.data?.is2FAEnabled) {
    //                 navigate('/auth/two-factor-authentication')
    //             } else {
    //                 if (user.role === ROLE.RECRUITER) {
    //                     navigate('/recruiter/dashboard/overview')
    //                 } else if (user.role === ROLE.APPLICANT) {
    //                     navigate('/applicant/dashboard/overview')
    //                 } else if (user.role === ROLE.ADMIN) {
    //                     navigate('/admin/dashboard/overview')
    //                 }
    //             }
    //         } catch (err) {
    //             console.error('Error checking 2FA status:', err)
    //             if (user.role === ROLE.RECRUITER) {
    //                 navigate('/recruiter/dashboard/overview')
    //             } else if (user.role === ROLE.APPLICANT) {
    //                 navigate('/applicant/dashboard/overview')
    //             } else if (user.role === ROLE.ADMIN) {
    //                 navigate('/admin/dashboard/overview')
    //             }
    //         }

    //     } else {
    //         showError(message);
    //         navigate('/auth/register');
    //     }

    // }

    const signin_google = async ({ token }) => {
        const res = await ApiEndPoints.google_signin({ token })
        if (res) {
            localStorage.setItem("token", res.token)
            // localStorage.setItem("role", res.role)
            return res
        } else {
            console.log("err")
            return null
        }

    }


    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        showSuccess("you are logout")

    }


    const signup = async (body) => {

        const response = await ApiEndPoints.signup(body)

        const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

    const send_otp = async ({ email, type }) => {

        const response = await ApiEndPoints.otp({ email, type })
        const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

    const verify_otp = async ({ email, otpCode, type }) => {

        const response = await ApiEndPoints.otp({ email, otpCode, type })

        const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }


    // const reset_password = async ({newPassword, tempToken}) => {

    //     const body = { newPassword }
    //     if( tempToken ) body.tempToken = tempToken
    //     const response = await ApiEndPoints.reset_password(body)

    //     const {success , message } = response
    //     if (success) {
    //         showSuccess(message);
    //         return response

    //     } else {
    //         showError(message);
    //         return null
    //     }
    // }

    const reset_password = async ({ newPassword, tempToken }) => {
        try {
            const body = { newPassword }
            if (tempToken) body.tempToken = tempToken;

            const response = await ApiEndPoints.reset_password(body);
            const { success, message } = response
            // if(success){

            // }
            showSuccess(message)
            console.log(message, "reset ")
            return response
        } catch (error) {
            const msg = error?.response?.data?.message || "Reset failed";
            showError(msg);
            return null
        }
    }



    return { login, signin_google, logout, signup, send_otp, verify_otp, reset_password }
}

export default UseAuth


