import { getData, postData, putData } from "../methods";


export const Applicant_Endpoints = {
    //---------- applicant setting profile
    post_profile_pic: async (body) => await postData("/api/images/upload/profilepic", body),
    post_upload_resume: async (body) => await postData("/api/images/upload/resume", body),
    put_profile_setting: async (body) => await putData("/api/profile", body),
    get_profile: async (body) => await getData("/api/profile", body),
    post_create_resume: async (body) => await postData("/api/structuredresume/resume", body),
    get_resume: async (body) => await getData("/api/structuredresume/resume", body),
    update_resume: async (body) => await putData("/api/structuredresume/resume", body),
    //-----change password
    post_changePassword: async(body)=> await postData("/api/users/change-password", body),
    //------industry
    get_industry: async (body) => await getData("/api/industries", body),
    //------jobs
    get_all_jobs: async (body) => await getData("/api/jobpost", body),
    get_applied_jobs: async (body) => await getData("/api/application/my-applications", body),
    get_job_detail_by_id: async (id,body) => await getData(`/api/jobpost/getJobDetail/${id}`, body),
    post_apply_job: async(id,body)=> await postData(`/api/application/jobs/${id}/apply`, body),

    //-----fav-jobs
    get_saved_jobs: async (body) => await getData("/api/saved-jobs", body),
}