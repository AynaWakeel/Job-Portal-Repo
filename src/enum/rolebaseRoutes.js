import { ROLE } from "./roles";
import { siteRoutes } from "./siteRotes";

export const RoleBaseRoutes = {

    [ROLE.ADMIN]:[

        siteRoutes.Admin_manage_category,
        siteRoutes.Admin_manage_cms,
        siteRoutes.Admin_manage_jobs,
        siteRoutes.Admin_manage_users,
        siteRoutes.Admin_notifications,
        siteRoutes.Admin_overview,
        siteRoutes.Admin_profile,
        siteRoutes.Admin_user_accounts,
        siteRoutes.view_applicant_profile,
        siteRoutes.view_job_detail,

        //----------- auth
        siteRoutes.register,
        siteRoutes.login,
        siteRoutes.forget_password,
        siteRoutes.reset_password,
        siteRoutes.otp_verification,
        siteRoutes.two_factor_authentication
    ],
    [ROLE.APPLICANT]:[
        //------------- applicant pages
        siteRoutes.applicant_dashboard,
        siteRoutes.applicant_profile,
        siteRoutes.applicant_support,
        siteRoutes.findjobs,
        siteRoutes.findjobs_detail,
        siteRoutes.applicant_chat,
        //--------------- applicant dashboard pages
        siteRoutes.applicant_applied_jobs,
        siteRoutes.applicant_favourities,
        siteRoutes.applicant_notifications,
        siteRoutes.applicant_overview,
        siteRoutes.applicant_settings,
        
        //----------- auth
        siteRoutes.register,
        siteRoutes.login,
        siteRoutes.forget_password,
        siteRoutes.reset_password,
        siteRoutes.otp_verification,
        siteRoutes.two_factor_authentication
    ],
    [ROLE.RECRUITER]:[
        //----------- recruiter pages
        siteRoutes.recruiter_profile,
        siteRoutes.recruiter_support,
        // siteRoutes.recruiter_dashboard,

        //-------------- recruiter dashboard pages
        siteRoutes.recruiter_overview,
        siteRoutes.recruiter_applications,
        siteRoutes.recruiter_myjobs,
        siteRoutes.recruiter_postjobs,
        siteRoutes.recruiter_settings,
        siteRoutes.recruiter_notifications,

         //----------- auth
        siteRoutes.register,
        siteRoutes.login,
        siteRoutes.forget_password,
        siteRoutes.reset_password,
        siteRoutes.otp_verification,
        siteRoutes.two_factor_authentication
    ]
}