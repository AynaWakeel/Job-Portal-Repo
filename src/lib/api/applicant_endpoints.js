import { deleteData, getData, postData, putData } from "../methods";


export const Applicant_Endpoints = {
    //---------- applicant setting profile
    post_profile_pic: async (body) => await postData("/api/images/upload/profilepic", body),
    post_upload_resume: async (body) => await postData("/api/images/upload/resume", body),
    put_profile_setting: async (body) => await putData("/api/profile", body),
    get_profile: async () => await getData("/api/profile"),
    post_create_resume: async (body) => await postData("/api/structuredresume/resume", body),
    get_resume: async () => await getData("/api/structuredresume/resume"),
    update_resume: async (body) => await putData("/api/structuredresume/resume", body),
    //-----change password
    post_changePassword: async (body) => await postData("/api/users/change-password", body),
    //------industry
    get_industry: async () => await getData("/api/industries"),
    //------location
    get_location: async () => await getData("/api/locations"),
    //------jobs
    get_all_jobs: async () => await getData("/api/jobpost"),

    // get_jobs_by_filter: async (filters) => {
    //     const params = new URLSearchParams();

    //     if (filters.title) params.append("title", filters.title);
    //     if (filters.locationId) params.append("locationId", filters.locationId);
    //     if (filters.industryId) params.append("industryId", filters.industryId);
    //     if (filters.experience) params.append("experience", filters.experience);
    //     if (filters.salary) params.append("salary", filters.salary);
    //     if (filters.jobType) params.append("jobType", filters.jobType);

    //     return await getData(`/api/jobs/filter/search?${params.toString()}`);
    // },

    get_jobs_by_filter: async({title,locationId,industryId,experience,salary,jobType})=>await getData(`/api/jobs/filter/search?title=${title}&locationId=${locationId}&industryId=${industryId}&experience=${experience}&salary=${salary}&jobType=${jobType}`),
    get_applied_jobs: async () => await getData("/api/application/my-applications"),
    get_job_detail_by_id: async (id) => await getData(`/api/jobpost/getJobDetail/${id}`),
    get_job_match_score_by_id: async (jobId) => await getData(`/api/matchScore/jobs/${jobId}/match`),
    post_apply_job: async (id, body) => await postData(`/api/application/jobs/${id}/apply`, body),

    //-----fav-jobs
    post_saved_jobs: async (body) => await postData("/api/saved-jobs", body),
    get_saved_jobs: async () => await getData("/api/saved-jobs"),
    delete_saved_jobs: async (jobId) => await deleteData(`/api/saved-jobs/${jobId}`),

    //----analytics
    get_applicant_analytics: async () => await getData("/api/admin/applicantStats"),
}