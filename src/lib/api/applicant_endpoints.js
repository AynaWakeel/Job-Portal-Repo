import { getData, postData, putData } from "../methods";


export const Applicant_Endpoints = {
    //---------- applicant setting profile
    post_profile_pic: async(body)=> await postData("/api/images/upload/profilepic", body),
    post_upload_resume : async(body)=> await postData("/api/images/upload/resume", body),
    put_profile_setting: async(body)=> await putData("/api/profile", body),
    get_profile: async(body)=> await getData("/api/profile", body),
    post_create_resume : async(body)=> await postData("/api/structuredresume/resume", body),
    get_resume : async(body)=> await getData("/api/structuredresume/resume", body),
    update_resume : async(body)=> await putData("/api/structuredresume/resume", body),
    // get_profile: async(body)=> await getData("", body),
}