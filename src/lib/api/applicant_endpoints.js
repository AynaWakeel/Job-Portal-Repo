import { getData, postData } from "../methods";


export const Applicant_Endpoints = {
    //---------- applicant setting profile
    post_profile_pic: async(body)=> await postData("/api/images/upload/profilepic", body),
    post_upload_resume : async(body)=> await postData("/api/images/upload/resume", body),
    post_profile_setting: async(body)=> await postData("/api/profile", body),
    // get_profile_pic: async()=> await getData("/api/images/upload/profilepic"),
}