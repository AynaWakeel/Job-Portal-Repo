import { postData } from "../methods";

export const TwoFactor_Endpoints = {
    
    enable_authentication: async(body)=> await postData("/api/auth/2fa/enable", body),
    verify_authentication: async(body)=> await postData("/api/auth/2fa/verify", body),
    disable_authentication: async(body)=> await postData("/api/auth/2fa/disable", body),
}