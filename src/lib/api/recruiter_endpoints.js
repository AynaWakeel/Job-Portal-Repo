import { deleteData, getData, postData, putData } from "../methods"

export const Recruiter_Endpoints = {
    put_company_setting: async(body)=> await putData("/api/companyprofile/profile",body),
    get_company_profile: async(body)=>await getData("/api/companyprofile/profile", body),
    post_banner: async(body)=>await postData("/api/images/upload/bannerImage", body),
    post_logo: async(body)=> await postData("/api/images/upload/profilepic", body),
    post_job: async(body)=> await postData("/api/jobpost", body),
    delete_job_by_id: async(id)=> await deleteData(`/api/jobpost/${id}`),
    expire_job_by_id: async(id)=> await putData(`/api/jobpost/expire-jobs/${id}`),
    get_recruiter_job_only : async(body)=> await getData("/api/jobpost/recruiter/job", body),
    get_applications : async(jobId, body)=> await getData(`/api/application/recruiter/jobs/${jobId}/applicants`, body),
}