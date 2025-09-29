import { deleteData, getData, postData, putData } from "../methods"

export const Recruiter_Endpoints = {
    //-----profile
    put_company_setting: async(body)=> await putData("/api/companyprofile/profile",body),
    get_company_profile: async(body)=>await getData("/api/companyprofile/profile", body),
    post_banner: async(body)=>await postData("/api/images/upload/bannerImage", body),
    post_logo: async(body)=> await postData("/api/images/upload/profilepic", body),
    //-----change password
    post_changePassword: async(body)=> await postData("/api/users/change-password", body),
    //------dashboard
    //---------analytics
    get_recruiter_analytics: async(body)=>await getData("/api/admin/recruiterStats", body),
    //------post a job
    post_job: async(body)=> await postData("/api/jobpost/createJob", body),
    delete_job_by_id: async(id)=> await deleteData(`/api/jobpost/${id}`),
    expire_job_by_id: async(id)=> await putData(`/api/jobpost/expire-jobs/${id}`),
    get_recruiter_job_only : async(body)=> await getData("/api/jobpost/recruiter/job", body),
    //------post a job ( reported job data )
    get_reported_job_by_id: async(jobId, body)=> await getData(`/api/jobpost/jobs/recruiter/reported/${jobId}`, body),
    put_post_job_by_id: async(jobId, body)=> await putData(`/api/jobpost/jobs/recruiter/reported/${jobId}`, body),
    //------all jobs
    get_all_job: async(body)=> await getData("/api/jobpost/jobs/recruiterOnlyjobs", body),
    //-------get industry
    get_industry: async(body)=> await getData("/api/industries", body),
     get_location: async(body)=> await getData("/api/locations", body),
    //----- applications
    get_application_detail: async(jobId,applicationId,body)=> await getData(`/api/application/jobs/${jobId}/applications/${applicationId}`,body),
    get_applications: async(jobId,body)=> await getData(`/api/application/recruiter/jobs/${jobId}/applicants`,body),
    put_shortlist_applicant_by_id: async(applicationId, body)=> await putData(`/api/application/applications/${applicationId}/status`, body),

    //-------find candidates
    get_all_applicants: async(body)=>await getData("/api/users/allApplicants", body),
    get_applicants_by_title: async(title)=>await getData(`/api/users/applicants/search?title=${title}`),
    get_profile_by_id: async(id, body)=>await getData(`/api/users/applicants/${id}`, body),
}