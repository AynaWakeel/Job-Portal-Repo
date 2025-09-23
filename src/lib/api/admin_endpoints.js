import { deleteData, getData, postData, putData } from "../methods";


export const Admin_Endpoints = {

     get_userAccounts: async(body)=> await getData("/api/users/userAccounts", body),
     get_manageUsers: async(body)=> await getData("/api/users/allmanageUsers", body),
     put_Aboutus: async(body)=> await putData("/api/cms/aboutUs", body),
     put_Contacttus: async(body)=> await putData("/api/cms/contactUs", body),
     post_faqs : async(body)=> await postData("/api/cms/faq", body),
     get_faqs: async(body)=> await getData("/api/cms/faq", body),
     put_faqs: async(id,body)=> await putData(`/api/cms/faq/${id}`, body),
     delete_faqs: async (id) => await deleteData(`/api/cms/faq/${id}`),
}
