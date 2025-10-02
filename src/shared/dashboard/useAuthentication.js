import React from 'react'
import { TwoFactor_Endpoints } from '../../lib/api/twoFactor_endpoints'
import { showError, showSuccess } from '../../components/toasters'

export const useAuthentication = () => {

     const Enable = async (body) => {

        const response = await TwoFactor_Endpoints.enable_authentication(body)
        const {message} = response
        if (response) {
            showSuccess(message);
            return response
        } else {
            showError(message);
        }
    }

     const Verify = async (body) => {

        const response = await TwoFactor_Endpoints.verify_authentication(body)
        const {message} = response
        if (response) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }

     const Disable = async (body) => {

        const response = await TwoFactor_Endpoints.disable_authentication(body)
        const {message} = response
        if (response) {
            showSuccess(message);
        } else {
            showError(message);
        }
    }


  return {Enable , Verify , Disable}
}
