import { getData, putData } from "../methods";


export const Admin_Endpoints = {

     get_userAccounts: async(body)=> await getData("/api/users/userAccounts", body),
     get_manageUsers: async(body)=> await getData("/api/users/allmanageUsers", body),
     put_Aboutus: async(body)=> await putData("/api/cms/aboutUs", body),
 
}
