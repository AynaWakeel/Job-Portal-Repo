import React from 'react'
import { ApiEndPoints } from '../lib/api/auth_endpoints'
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
                navigate('/recruiter/dashboard/overview');
                console.log(response.user.role)

            } else if (user.role === ROLE.APPLICANT) {
                navigate('/applicant/dashboard/overview');
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

    const signin_google = async({token}) => {
        const res = await ApiEndPoints.google_signin({token})
        if(res){
            localStorage.setItem("token", res.token)
            // localStorage.setItem("role", res.role)
            return res
        }else{
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

        const { message } = response
        if (response) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

     const send_otp = async ({email, type}) => {
        
         const response = await ApiEndPoints.otp({email, type})
         const { message } = response
         if (response) {
             showSuccess(message);
             return response
 
         } else {
             showError(message);
             return null
         }

    }

     const verify_otp = async ({email, otpCode, type}) => {

        const response = await ApiEndPoints.otp({email, otpCode, type})

        const {message } = response
        if (response) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }


    const reset_password = async ({newPassword, tempToken}) => {

        const body = { newPassword }
        if( tempToken ) body.tempToken = tempToken
        const response = await ApiEndPoints.reset_password(body)

        const { message } = response
        if (response) {
            showSuccess(message);

        } else {
            showError(message);
        }
    }


    return { login, signin_google, logout, signup ,send_otp , verify_otp, reset_password}
}

export default UseAuth


