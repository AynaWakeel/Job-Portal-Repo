import { postData } from "../methods";

export const ApiEndPoints = {
    // ----- auth
    login: async (body) => await postData("/api/auth/login", body),
    logout: async (body) => await postData("/api/auth/logout", body),
    signup: async (body) => await postData("/api/auth/register", body),
    otp: async (body) => await postData("/api/auth/email-verification/verify-email", body),
    forget_password: async (body) => await postData("/api/auth/forgot-password", body),
    reset_password: async (body) => await postData("/api/auth/reset-password", body),
    two_Factor: async (body) => await postData("/api/auth/two-factor", body),

}   