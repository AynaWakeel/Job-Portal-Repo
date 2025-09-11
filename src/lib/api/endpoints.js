import { postData } from "../methods";

export const ApiEndPoints = {

    login: async (body) => await postData("/api/auth/login", body),
    logout: async (body) => await postData("/api/auth/logout", body),
    signup: async (body) => await postData("/api/auth/register", body),
    forgetPassword: async (body) => await postData("/api/auth/forget", body),
    resetPassword: async (body) => await postData("/api/auth/reset", body),
    otp: async (body) => await postData("/api/auth/otp", body),
    twoFactor: async (body) => await postData("/api/auth/two-factor", body),

}   