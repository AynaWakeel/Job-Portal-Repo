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
     get_userAccounts: async(page = 1, limit = 10)=> await getData(`/api/users/userAccounts?page=${page}&limit=${limit}`),
     //-----dashboard-manage jobs
     get_manageJobs: async(page = 1, limit = 10)=> await getData(`/api/jobpost/getJobsOnAdmin?page=${page}&limit=${limit}`),
     put_manageJobsStatus: async(jobId,body)=> await putData(`/api/jobpost/jobs/${jobId}/approval`, body),
     get_specific_Jobs_detail: async(jobId)=> await getData(`/api/jobpost/getJobDetail/${jobId}`),
     //-----dashboard-manage users
     get_manageUsers: async(page = 1, limit = 10)=> await getData(`/api/users/allmanageUsers?page=${page}&limit=${limit}`),
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

     //notifications
    get_unread_notifications: async()=>await getData("/api/notifications/unread-notification-admin"),
    put_read_notifications_by_id: async(id)=> await putData(`/api/notifications/mark-read/${id}`),
}
