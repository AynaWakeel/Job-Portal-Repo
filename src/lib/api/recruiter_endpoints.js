import { deleteData, getData, postData, putData } from "../methods"

export const Recruiter_Endpoints = {
    //-----profile
    put_company_setting: async(body)=> await putData("/api/companyprofile/profile",body),
    get_company_profile: async()=>await getData("/api/companyprofile/profile"),
    post_banner: async(body)=>await postData("/api/images/upload/bannerImage", body),
    post_logo: async(body)=> await postData("/api/images/upload/profilepic", body),
    //-----change password
    post_changePassword: async(body)=> await postData("/api/users/change-password", body),
    //------dashboard
    //---------analytics
    get_recruiter_analytics: async()=>await getData("/api/admin/recruiterStats"),
    //------post a job
    post_job: async(body)=> await postData("/api/jobpost/createJob", body),
    delete_job_by_id: async(id)=> await deleteData(`/api/jobpost/${id}`),
    expire_job_by_id: async(id)=> await putData(`/api/jobpost/expire-jobs/${id}`),
    get_recruiter_job_only : async()=> await getData("/api/jobpost/recruiter/job"),
    //------post a job ( reported job data )
    get_reported_job_by_id: async(jobId)=> await getData(`/api/jobpost/jobs/recruiter/reported/${jobId}`),
    put_post_job_by_id: async(jobId, body)=> await putData(`/api/jobpost/jobs/recruiter/reported/${jobId}`, body),
    //------all jobs
    get_all_job: async()=> await getData("/api/jobpost/jobs/recruiterOnlyjobs"),
    //-------get industry
    get_industry: async()=> await getData("/api/industries"),
     get_location: async()=> await getData("/api/locations"),
    //----- applications
    get_application_detail: async(jobId,applicationId)=> await getData(`/api/application/jobs/${jobId}/applications/${applicationId}`),
    get_applications: async(jobId)=> await getData(`/api/application/recruiter/jobs/${jobId}/applicants`),
    // put_shortlist_applicant_by_id: async(applicationId, body)=> await putData(`/api/application/applications/${applicationId}/status`, body),
    put_applicantion_Status_by_id: async(applicationId, body)=> await putData(`/api/application/applications/${applicationId}/status`, body),


    //-------find candidates
    get_all_applicants: async()=>await getData("/api/users/allApplicants"),
    get_applicants_by_title: async(title)=>await getData(`/api/users/applicants/search?title=${title}`),
    get_profile_by_id: async(id)=>await getData(`/api/users/applicants/${id}`),
}