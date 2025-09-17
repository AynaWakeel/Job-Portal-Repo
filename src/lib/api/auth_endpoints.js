import { getData, postData } from "../methods";

export const ApiEndPoints = {
    // ----- auth
    login: async (body) => await postData("/api/auth/login", body),
    signup: async (body) => await postData("/api/auth/register", body),
    otp: async (body) => await postData("/api/auth/otp", body),
    reset_password: async (body) => await postData("/api/auth/reset-password", body),
    // google_signin: async () => await getData(`/api/oauth/google`)
    google_signin: async ({ token }) => await getData(`/api/oauth/google?token=${token}`),

}   