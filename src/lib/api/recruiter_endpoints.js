import { getData, postData, putData } from "../methods"

export const Recruiter_Endpoints = {
    put_company_setting: async(body)=>{ await putData("/api/companyprofile/profile",body)},
    get_company_profile: async(body)=>{ await getData("/api/companyprofile/profile",body)},
    post_banner: async(body)=>{ await postData("/api/images/upload/bannerImage", body)},
    post_logo: async(body)=>{ await postData("/api/images/upload/profilepic", body)},
    post_job: async(body)=>{ await postData("/api/jobpost", body)}
}