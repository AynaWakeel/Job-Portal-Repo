import React from 'react'
import { Admin_Endpoints } from '../../../lib/api/admin_endpoints'
import { showError, showSuccess } from '../../toasters'

export const useAdmin = () => {

  const update_AboutUs_cms = async (body) => {
 
         const response = await Admin_Endpoints.put_Aboutus(body)
 
         if (response) {
             showSuccess(response);
         } else {
             showError("Something went wrong");
         }
     }


  return {update_AboutUs_cms}
}
