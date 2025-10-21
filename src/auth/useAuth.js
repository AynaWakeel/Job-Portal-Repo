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

        const { is2FAEnabled, success, message, user } = response

        if(success === false){
            showError(message);
            navigate('/auth/register')
        }

        if (is2FAEnabled) {
            const email = user.email
            navigate('/auth/two-factor-authentication', { state: { email } })
            showSuccess(message)
            return response

        } else if (!is2FAEnabled) {
            localStorage.setItem('token', response.token)
            localStorage.setItem('role', response.user.role)
            localStorage.setItem('id', response.user.id)
            showSuccess(message)

            if (user.role === ROLE.RECRUITER) {
                navigate('/recruiter/dashboard/overview')
                console.log(response.user.role)
                 console.log("id",response.user.id)

            } else if (user.role === ROLE.APPLICANT) {
                navigate('/applicant/dashboard/overview')
                console.log(response.user.role)
                 console.log("id",response.user.id)

            } else if (user.role === ROLE.ADMIN) {
                navigate('/admin/dashboard/overview')
                console.log(response.user.role)
                 console.log("id",response.user.id)
            }

        }else{
            showError(message)
        }


    }

    const login_with_2FA = async (body) => {

        const response = await ApiEndPoints.login_2FA(body)

        const { success, message, user } = response
        if (success) {
             localStorage.setItem('token', response.token)
            localStorage.setItem('role', response.user.role)
            localStorage.setItem('id', response.user.id)
            showSuccess(message)

            if (user.role === ROLE.RECRUITER) {
                navigate('/recruiter/dashboard/overview')
                console.log(response.user.role)

            } else if (user.role === ROLE.APPLICANT) {
                navigate('/applicant/dashboard/overview')
                console.log(response.user.role)

            }

        } else {
            showError(message);
            navigate('/auth/register');
        }

    }

    const signin_google = async (body) => {
        const res = await ApiEndPoints.google_signin({token:body.token})
        if (res) {
             localStorage.setItem('token', res.token)
            localStorage.setItem('role', res.user.role)
            localStorage.setItem('id', res.user.id)
            return res
        } else {
            console.log("err")
            return null
        }

    }


    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("tempToken")
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
        try{
            const response = await ApiEndPoints.otp({ email, type })
            const { success, message } = response
            if (success) {
                showSuccess(message);
                return response
    
            } else {
                showError(message);
                return null
            }

        }catch(err){
            console.log("erro here");
            
        }


    }

    const verify_otp = async ({ email, otpCode, type }) => {

        try{
            const response = await ApiEndPoints.otp({ email, otpCode, type })
    
            const { success, message } = response
            if (success) {
                showSuccess(message);
                return response
    
            } else {
                showError(message);
                return null
            }

        }catch(err){
            console.log("error here");
            
        }


    }


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



    return { login, signin_google , logout, signup, send_otp, verify_otp, reset_password, login_with_2FA }
}

export default UseAuth


