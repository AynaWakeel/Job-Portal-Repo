import { deleteData, getData, postData, putData } from "../methods";


export const Admin_Endpoints = {
     
     //---profile
     put_profile : async(body)=> await putData("/api/profile/admin", body),
     get_profile : async()=> await getData("/api/profile/admin"),
     post_photo : async(body)=> await postData("/api/images/upload/profilepic", body),
     //-----change password
     post_changePassword: async(body)=> await postData("/api/users/change-password", body),
     //-----DASHBOARD-analytics
     get_analytics : async()=> await getData("/api/admin/adminAnalytics"),
     //-----dashboard-useracc
     get_userAccounts: async()=> await getData("/api/users/userAccounts"),
     //-----dashboard-manage jobs
     get_manageJobs: async()=> await getData("/api/jobpost/getJobsOnAdmin"),
     put_manageJobsStatus: async(jobId,body)=> await putData(`/api/jobpost/jobs/${jobId}/approval`, body),
     get_specific_Jobs_detail: async(jobId)=> await getData(`/api/jobpost/getJobDetail/${jobId}`),
     //-----dashboard-manage users
     get_manageUsers: async()=> await getData("/api/users/allmanageUsers"),
     put_manageUsersStatus: async(id,body)=> await putData(`/api/users/manageUsersStatus/${id}`, body),
     //------dashboard-category-industry
     get_industry: async()=> await getData("/api/industries"),
     post_industry: async(body)=> await postData("/api/industries", body),
     delete_industry: async(id)=> await deleteData(`/api/industries/${id}`),
     //------dashboard-category-location
     get_location: async()=> await getData("/api/locations"),
     post_location: async(body)=> await postData("/api/locations", body),
     delete_location: async(id)=> await deleteData(`/api/locations/${id}`),
     //------dashboard-cms
     put_Aboutus: async(body)=> await putData("/api/cms/aboutUs", body),
     get_Aboutus: async()=> await getData("/api/cms/aboutUs"),
     put_Contactus: async(body)=> await putData("/api/cms/contactUs", body),
     get_Contactus: async()=> await getData("/api/cms/contactUs"),
     post_faqs : async(body)=> await postData("/api/cms/faq", body),
     get_faqs: async()=> await getData("/api/cms/faq"),
     put_faqs: async(id,body)=> await putData(`/api/cms/faq/${id}`, body),
     delete_faqs: async (id) => await deleteData(`/api/cms/faq/${id}`),
}
