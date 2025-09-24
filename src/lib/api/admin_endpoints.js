import { deleteData, getData, postData, putData } from "../methods";


export const Admin_Endpoints = {
     
     //---profile
     put_profile : async(body)=> await putData("/api/profile/admin", body),
     get_profile : async(body)=> await getData("/api/profile/admin", body),
     post_photo : async(body)=> await postData("/api/images/upload/profilepic", body),
     //-----change password
     post_changePassword: async(body)=> await postData("/api/users/change-password", body),
     //-----DASHBOARD-analytics
     get_analytics : async(body)=> await getData("/api/admin/adminAnalytics", body),
     //-----dashboard-useracc
     get_userAccounts: async(body)=> await getData("/api/users/userAccounts", body),
     //-----dashboard-manage users
     get_manageUsers: async(body)=> await getData("/api/users/allmanageUsers", body),
     put_manageUsersStatus: async(id,body)=> await putData(`/api/users/manageUsersStatus/${id}`, body),
     //------dashboard-category-industry
     get_industry: async(body)=> await getData("/api/industries", body),
     post_industry: async(body)=> await postData("/api/industries", body),
     delete_industry: async(id,body)=> await deleteData(`/api/industries/${id}`, body),
     //------dashboard-category-location
     get_location: async(body)=> await getData("/api/locations", body),
     post_location: async(body)=> await postData("/api/locations", body),
     delete_location: async(id,body)=> await deleteData(`/api/locations/${id}`, body),
     //------dashboard-cms
     put_Aboutus: async(body)=> await putData("/api/cms/aboutUs", body),
     get_Aboutus: async(body)=> await getData("/api/cms/aboutUs", body),
     put_Contactus: async(body)=> await putData("/api/cms/contactUs", body),
     get_Contactus: async(body)=> await getData("/api/cms/contactUs", body),
     post_faqs : async(body)=> await postData("/api/cms/faq", body),
     get_faqs: async(body)=> await getData("/api/cms/faq", body),
     put_faqs: async(id,body)=> await putData(`/api/cms/faq/${id}`, body),
     delete_faqs: async (id) => await deleteData(`/api/cms/faq/${id}`),
}
