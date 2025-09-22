import { getData, postData, putData } from "../methods"

export const Recruiter_Endpoints = {
    put_company_setting: async(body)=> await putData("/api/companyprofile/profile",body),
    get_company_profile: async()=>await getData("/api/companyprofile/profile"),
    post_banner: async(body)=>await postData("/api/images/upload/bannerImage", body),
    post_logo: async(body)=> await postData("/api/images/upload/profilepic", body),
    post_job: async(body)=> await postData("/api/jobpost", body),
    get_recruiter_job_only : async(body)=> await getData("/api/jobpost/recruiter/job", body),
    get_applications : async(body)=> await getData("/api/application/recruiter/jobs/1/applicants", body),
}