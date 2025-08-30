// ----------- category svg
import { ReactComponent as Pen } from '../assets/icons/code-duotone 1.svg'
import { ReactComponent as Code } from '../assets/icons/code-duotone 1.svg'
import { ReactComponent as Speaker } from '../assets/icons/megaphone-simple-duotone 1.svg'
import { ReactComponent as Monitor } from '../assets/icons/monitor-play-duotone 1.svg'
import { ReactComponent as Music } from '../assets/icons/music-notes-duotone 1.svg'
import { ReactComponent as Chart } from '../assets/icons/chart-bar-horizontal-duotone 1.svg'
import { ReactComponent as FirstAid } from '../assets/icons/first-aid-kit-duotone 1.svg'
import { ReactComponent as Database } from '../assets/icons/database-duotone 1.svg'
import { ReactComponent as Brief } from '../assets/icons/briefcase-duotone 1.svg'
import { ReactComponent as Building } from '../assets/icons/buildings-duotone 1.svg'
import StatusClose from '../assets/icons/XCircleRed.svg'
import Check from '../assets/icons/Check.svg'
import ApplyUsers from '../assets/icons/applications.svg'
import DOt from '../assets/icons/•.svg'
import Threedot from '../assets/icons/DotsThreeVertical.svg'
// ----------- companies svg
import Logo1 from '../assets/icons/Employers Logo.svg'
import Logo2 from '../assets/icons/Employers Logo2.svg'
import Logo3 from '../assets/icons/logo3.svg'
import Logo4 from '../assets/icons/Employers Logo4.svg'
import Map from '../assets/icons/fi_map-pin.svg'
// ----------- job svg
import Logo5 from '../assets/icons/Employers Logo5.svg'
import Logo6 from '../assets/icons/Employers Logo6.svg'
import Logo7 from '../assets/icons/Employers Logo7.svg'
import Logo8 from '../assets/icons/Employers Logo8.svg'
import Google from '../assets/icons/google-icon.svg'
import { ReactComponent as Arrow } from '../assets/icons/fi_arrow-right.svg'
import { ReactComponent as Fav } from '../assets/icons/Vector.svg'
import Currency from '../assets/icons/currency-dollar 1.svg'
import Calendar from '../assets/icons/calendar-blank.svg'
import Profile from '../assets/images/Ellipse 18.png'

//main-jobs
export const CompanyJobs = [
    {
        id: 1,
        logo: Logo1,
        color: 'var(--pink)',
        name: 'Dribbble',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },

    {
        id: 2,
        logo: Logo4,
        color: 'var(--purple-600)',
        name: 'Freepik',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 3,
        logo: Logo3,
        color: 'var(--gray-50)',
        name: 'Slack',
        icon: Map,
        location: 'China',
       detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 4,
        logo: Logo4,
        color: 'var(--purple-600)',
        name: 'Freepik',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 5,
        logo: Logo1,
        color: 'var(--pink)',
        name: 'Dribbble',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 6,
        logo: Logo2,
        color: 'var(--green)',
        name: 'Upwork',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 7,
        logo: Logo3,
        color: 'var(--gray-50)',
        name: 'Slack',
        icon: Map,
        location: 'China',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 8,
        logo: Logo4,
        color: 'var(--purple-600)',
        name: 'Freepik',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 9,
        logo: Logo1,
        color: 'var(--pink)',
        name: 'Dribbble',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    },
    {
        id: 10,
        logo: Logo2,
        color: 'var(--green)',
        name: 'Upwork',
        icon: Map,
        location: 'United States',
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ]
    }
]

//----------- all-job-detail

export const JobDetail = [
     {
        id: 1,
        logo: Logo1,
        color: 'var(--green)',
        title: 'Senior UX Designer',
        badge: 'Contract Base',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    },
    {
        id: 2,
        logo: Logo5,
        color: 'var(--dark-blue)',
        title: 'Software Engineer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'United States' },
            { icon: Currency, text: '$50k - $70k' },
            { icon: Calendar, text: '2 days remaining' }
        ]

    },
    {
        id: 3,
        logo: Logo6,
        color: 'var(--dark-900)',
        title: 'Junior Graphic Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'China' },
            { icon: Currency, text: '$80k - $100k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    },
    {
        id: 4,
        logo: Logo7,
        color: 'var(--peach)',
        title: 'Product Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Canada' },
            { icon: Currency, text: '$90k - $110k' },
            { icon: Calendar, text: '5 days remaining' }
        ]

    },
    {
        id: 5,
        logo: Logo8,
        color: 'var(--blue)',
        title: 'Marketing Officer',
        badge: 'Internship',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Germany' },
            { icon: Currency, text: '$35k - $40k' },
            { icon: Calendar, text: '1 days remaining' }
        ]

    },
    {
        id: 6,
        logo: Google,
        color: 'var(--gray-50)',
        title: 'Interaction Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'France' },
            { icon: Currency, text: '$70k - $90k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    },
    {
        id: 7,
        logo: Logo1,
        color: 'var(--green)',
        title: 'Senior UX Designer',
        badge: 'Contract Base',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    },
    {
        id: 8,
        logo: Logo5,
        color: 'var(--dark-blue)',
        title: 'Software Engineer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'United States' },
            { icon: Currency, text: '$50k - $70k' },
            { icon: Calendar, text: '2 days remaining' }
        ]

    },
    {
        id: 9,
        logo: Logo6,
        color: 'var(--dark-900)',
        title: 'Junior Graphic Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'China' },
            { icon: Currency, text: '$80k - $100k' },
            { icon: Calendar, text: '3 days remaining' }
        ]

    },
    {
        id: 10,
        logo: Logo7,
        color: 'var(--peach)',
        title: 'Product Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Canada' },
            { icon: Currency, text: '$90k - $110k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    },
    {
        id: 11,
        logo: Logo8,
        color: 'var(--blue)',
        title: 'Marketing Officer',
        badge: 'Internship',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Germany' },
            { icon: Currency, text: '$35k - $40k' },
            { icon: Calendar, text: '1 days remaining' }
        ]

    },
    {id: 12,
        logo: Google,
        color: 'var(--gray-50)',
        title: 'Interaction Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'France' },
            { icon: Currency, text: '$70k - $90k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    }
]

//--------------------

//main-jobs
export const JobApplicationCards = [
    {
        id: 1,
        logo: Logo1,
        name: 'Ronald Richards',
        title: 'UI/UX Designer',
        experience: '7 Years Experience',
        education:'Education: Master Degree'
    },

    {
        id: 2,
        logo: Logo4,
        name: 'Ronald Richards',
        title: 'UI/UX Designer',
        experience: '7 Years Experience',
        education:'Education: Master Degree'
    },
    {
        id: 3,
        logo: Logo3,
        name: 'Ronald Richards',
        title: 'UI/UX Designer',
        experience: '7 Years Experience',
        education:'Education: Master Degree'
    }
]


export const CategoryCards = [
    {
        id: 1,
        icon: Brief,
        title: '1,75,324',
        positions: 'Live Job'
    },
    {
        id: 2,
        icon: Building,
        title: '1,75,324',
        positions: 'Companies'
    },
    {
        id: 3,
        icon: Chart,
        title: '1,75,324',
        positions: 'Candidates'
    },
    {
        id: 4,
        icon: Monitor,
        title: 'Video & Animation',
        positions: '195 Open position'
    },
    {
        id: 5,
        icon: Music,
        title: 'Music & Audio',
        positions: '204 Open position'
    },
    {
        id: 6,
        icon: Chart,
        title: 'Account & Finance',
        positions: '170 Open position'
    },
    {
        id: 7,
        icon: FirstAid,
        title: 'Health & Care',
        positions: '125 Open position'
    },
    {
        id: 8,
        icon: Database,
        title: 'Data & Science',
        positions: '515 Open position'
    },
    {
        id: 9,
        icon: Pen,
        title: 'Graphics & Design',
        positions: '357 Open position'
    },
    {
        id: 10,
        icon: Code,
        title: 'Code & Programing',
        positions: '312 Open position'
    },
    {
        id: 11,
        icon: Speaker,
        title: 'Digital Marketing',
        positions: '292 Open position'
    },
    {
        id: 12,
        icon: Monitor,
        title: 'Video & Animation',
        positions: '195 Open position'
    },
    {
        id: 13,
        icon: Music,
        title: 'Music & Audio',
        positions: '204 Open position'
    },
    {
        id: 14,
        icon: Chart,
        title: 'Account & Finance',
        positions: '170 Open position'
    },
    {
        id: 15,
        icon: FirstAid,
        title: 'Health & Care',
        positions: '125 Open position'
    },
    {
        id: 16,
        icon: Database,
        title: 'Data & Science',
        positions: '515 Open position'
    }
]

//------------ overview analytics
export const HeroCards = [
    {
        id: 1,
        icon: Brief,
        title: '589',
        positions: 'Applied jobs'
    },
    {
        id: 2,
        icon: Building,
        title: '238',
        positions: 'Favorite jobs'
    },
    {
        id: 3,
        icon: Brief,
        title: '589',
        positions: 'Applied jobs'
    },
    {
        id: 4,
        icon: Building,
        title: '238',
        positions: 'Favorite jobs'
    }

]


//------------ overview analytics
export const Analytics = [
    {
        id: 1,
        icon: Brief,
        title: '589',
        positions: 'Open jobs'
    },
    {
        id: 2,
        icon: Building,
        title: '238',
        positions: 'Applicants'
    }

]


export const CandidateCards = [
    {
        id: 1,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 2,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 3,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 4,
       logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 5,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 6,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 7,
       logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 8,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 9,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 10,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 11,
       logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 12,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 13,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 14,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 15,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    },
    {
        id: 16,
        logo: Profile,
        name: 'John',
        title: 'This is my Title',
        btn: 'View Profile'
    }
]

export const JobCards = [
    {
        id: 1,
        logo: Logo1,
        color: 'var(--green)',
        title: 'Senior UX Designer',
        badge: 'Contract Base',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k' },
            { icon: StatusClose, text: 'Job Expire' }
        ]

    },
    {
        id: 2,
        logo: Logo5,
        color: 'var(--dark-blue)',
        title: 'Software Engineer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'United States' },
            { icon: Currency, text: '$50k - $70k' },
            { icon: Calendar, text: '2 days remaining' }
        ]

    },
    {
        id: 3,
        logo: Logo6,
        color: 'var(--dark-900)',
        title: 'Junior Graphic Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'China' },
            { icon: Currency, text: '$80k - $100k' },
            { icon: StatusClose, text: 'Job Expire' }
        ]

    },
    {
        id: 4,
        logo: Logo7,
        color: 'var(--peach)',
        title: 'Product Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Canada' },
            { icon: Currency, text: '$90k - $110k' },
            { icon: Calendar, text: '5 days remaining' }
        ]

    },
    {
        id: 5,
        logo: Logo8,
        color: 'var(--blue)',
        title: 'Marketing Officer',
        badge: 'Internship',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Germany' },
            { icon: Currency, text: '$35k - $40k' },
            { icon: Calendar, text: '1 days remaining' }
        ]

    },
    {
        id: 6,
        logo: Google,
        color: 'var(--gray-50)',
        title: 'Interaction Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'France' },
            { icon: Currency, text: '$70k - $90k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    },
    {
        id: 7,
        logo: Logo1,
        color: 'var(--green)',
        title: 'Senior UX Designer',
        badge: 'Contract Base',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k' },
            { icon: StatusClose, text: 'Job Expire' }
        ]

    },
    {
        id: 8,
        logo: Logo5,
        color: 'var(--dark-blue)',
        title: 'Software Engineer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'United States' },
            { icon: Currency, text: '$50k - $70k' },
            { icon: Calendar, text: '2 days remaining' }
        ]

    },
    {
        id: 9,
        logo: Logo6,
        color: 'var(--dark-900)',
        title: 'Junior Graphic Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'China' },
            { icon: Currency, text: '$80k - $100k' },
            { icon: Calendar, text: '3 days remaining' }
        ]

    },
    {
        id: 10,
        logo: Logo7,
        color: 'var(--peach)',
        title: 'Product Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Canada' },
            { icon: Currency, text: '$90k - $110k' },
            { icon: StatusClose, text: 'Job Expire' }
        ]

    },
    {
        id: 11,
        logo: Logo8,
        color: 'var(--blue)',
        title: 'Marketing Officer',
        badge: 'Internship',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Germany' },
            { icon: Currency, text: '$35k - $40k' },
            { icon: Calendar, text: '1 days remaining' }
        ]

    },
    {
        id: 12,
        logo: Google,
        color: 'var(--gray-50)',
        title: 'Interaction Designer',
        badge: 'Full Time',
        save: Fav,
        btn: 'Apply Now',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'France' },
            { icon: Currency, text: '$70k - $90k' },
            { icon: Calendar, text: '4 days remaining' }
        ]

    }
]

// --------------- applied jobs
export const AppliedJobsCards = [
    {
        id: 1,
        logo: Logo1,
        color: 'var(--green)',
        title: 'Senior UX Designer',
        badge: 'Contract Base',
        btn: 'View Details',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/month' }
        ],
        date: 'Feb 2, 2019 19:28',
        icon: Check,
        status: 'Active'

    },
    {
        id: 2,
        logo: Logo5,
        color: 'var(--dark-blue)',
        title: 'Software Engineer',
        badge: 'Full Time',
         btn: 'View Details',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'United States' },
            { icon: Currency, text: '$50k - $70k/month' }
        ],
        date: 'Feb 2, 2019 19:28',
        icon: Check,
        status: 'Active'

    },
    {
        id: 3,
        logo: Logo6,
        color: 'var(--dark-900)',
        title: 'Junior Graphic Designer',
        badge: 'Full Time',
         btn: 'View Details',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'China' },
            { icon: Currency, text: '$80k - $100k/month' }
        ],
        date: 'Feb 2, 2019 19:28',
        icon: Check,
        status: 'Active'
    },
    {
        id: 4,
        logo: Logo7,
        color: 'var(--peach)',
        title: 'Product Designer',
        badge: 'Full Time',
        btn: 'View Details',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Canada' },
            { icon: Currency, text: '$90k - $110k' }
        ],
        date: 'Feb 2, 2019 19:28',
        icon: Check,
        status: 'Active'

    },
    {
        id: 5,
        logo: Logo8,
        color: 'var(--blue)',
        title: 'Marketing Officer',
        badge: 'Internship',
         btn: 'View Details',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Germany' },
            { icon: Currency, text: '$35k - $40k/month' }
        ],
        date: 'Feb 2, 2019 19:28',
        icon: Check,
        status: 'Active'

    },
    {
        id: 6,
        logo: Google,
        color: 'var(--gray-50)',
        title: 'Interaction Designer',
        badge: 'Full Time',
         btn: 'View Details',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'France' },
            { icon: Currency, text: '$70k - $90k/month' }
        ],
        date: 'Feb 2, 2019 19:28',
        icon: Check,
        status: 'Active'

    },
    {
        id: 7,
        logo: Logo1,
        color: 'var(--green)',
        title: 'Senior UX Designer',
        badge: 'Contract Base',
         btn: 'View Details',
        btnArrow: Arrow,
        detail: [
            { icon: Map, text: 'Australia' },
            { icon: Currency, text: '$30k - $45k/days' }
        ],
        date: 'Feb 2, 2019 19:28',
        icon: Check,
        status: 'Active'

    }
]

//-------------- posted jobs

export const RecentlyPostedJobs = [
    {
        id: 1,
        title: 'Senior UX Designer',
        btn: 'View Applications',
        detail: [
            { text: 'Part Time' },
            { icon: DOt, text: '4 days remaining' }
        ],
        user:ApplyUsers,
        applications: '556 Applications',
        icon: Check,
        status: 'Active',
        btnArrow: Arrow,
        optionIcon:Threedot

    },
    {
        id: 2,
        title: 'Software Engineer',
         btn: 'View Applications',
        detail: [
            { text: 'Full Time' },
            { icon: DOt, text: '4 days remaining' }
        ],
        user:ApplyUsers,
        applications: '556 Applications',
        icon: Check,
        status: 'Active',
        btnArrow: Arrow,
        optionIcon:Threedot

    },
    {
        id: 3,
        title: 'Junior Graphic Designer',
        btn: 'View Applications',
        detail: [
            { text: 'Internship' },
            { icon: DOt, text: '4 days remaining' }
        ],
        user:ApplyUsers,
        applications: '556 Applications',
        icon: Check,
        status: 'Active',
        btnArrow: Arrow,
        optionIcon:Threedot
    },
    {
        id: 4,
        title: 'Product Designer',
         btn: 'View Applications',
        detail: [
            { text: 'Part Time' },
            { icon: DOt, text: '4 days remaining' }
        ],
        user:ApplyUsers,
        applications: '556 Applications',
        icon: Check,
        status: 'Active',
        btnArrow: Arrow,
        optionIcon:Threedot

    },
    {
        id: 5,
        title: 'Marketing Officer',
        btn: 'View Applications',
        detail: [
            { text: 'Part Time' },
            { icon: DOt, text: '4 days remaining' }
        ],
        user:ApplyUsers,
        applications: '556 Applications',
        icon: Check,
        status: 'Active',
        btnArrow: Arrow,
        optionIcon:Threedot
    },
    {
        id: 6,
        title: 'Interaction Designer',
         btn: 'View Applications',
        detail: [
            { text: 'Part Time' },
            { icon: DOt, text: '4 days remaining' }
        ],
        user:ApplyUsers,
        applications: '556 Applications',
        icon: Check,
        status: 'Active',
        btnArrow: Arrow,
        optionIcon:Threedot

    },
    {
        id: 7,
        title: 'Senior UX Designer',
         btn: 'View Applications',
        detail: [
            { text: 'Part Time' },
            { icon: DOt, text: '4 days remaining' }
        ],
        user:ApplyUsers,
        applications: '556 Applications',
        icon: Check,
        status: 'Active',
        btnArrow: Arrow,
        optionIcon:Threedot

    }
]