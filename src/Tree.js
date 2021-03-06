import avatarPersonnel from './assets/avatar-personnel.svg'

export const Vinay = {
  id: 1,
  person: {
    id: 1,
    avatar: avatarPersonnel,
    department: '',
    name: 'Vinay Deshmukh',
    title: 'CEO',
    totalReports: 3,
  },
  hasChild: true,
  hasParent: false,
  children: [],
}

export const VinaysTeam = [
  {
    id: 2,
    person: {
      id: 2,
      avatar: avatarPersonnel,
      department: '',
      name: 'Jyotsna Deshmukh',
      title: 'CFO',
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 3,
    person: {
      id: 3,
      avatar: avatarPersonnel,
      department: '',
      name: 'Vibhor Mungee',
      title: 'CTO',
      totalReports: 6,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 4,
    person: {
      id: 4,
      avatar: avatarPersonnel,
      department: '',
      name: 'Akanksha Saxena',
      title: 'IT Specialist',
      totalReports: 3,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
]

export const JyotsnasTeam = [
  {
    id: 5,
    person: {
      id: 5,
      avatar: avatarPersonnel,
      department: '',
      name: 'Gopal Khandelwal',
      title: 'Head of Accounts',
      totalReports: 0,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 6,
    person: {
      id: 6,
      avatar: avatarPersonnel,
      department: '',
      name: 'Kaynat Nasir',
      title: 'Digital Marketing Head',
      totalReports: 4,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
  },
]

export const KaynatsTeam = [
  {
    id: 7,
    person: {
      id: 7,
      avatar: avatarPersonnel,
      department: '',
      name: 'Nitika Lunia',
      title: 'Digital Marketing - Team Lead',
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 8,
    person: {
      id: 8,
      avatar: avatarPersonnel,
      department: '',
      name: 'Anima Tripathi',
      title: 'PPC Executive',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 9,
    person: {
      id: 9,
      avatar: avatarPersonnel,
      department: '',
      name: 'Archana',
      title: 'Content Writer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const NitikasTeam = [
  {
    id: 10,
    person: {
      id: 10,
      avatar: avatarPersonnel,
      department: '',
      name: 'Bhuvnesh Mali',
      title: 'SEO Executive',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 11,
    person: {
      id: 11,
      avatar: avatarPersonnel,
      department: '',
      name: 'Wasim Khan',
      title: 'SEO Executive',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 12,
    person: {
      id: 12,
      avatar: avatarPersonnel,
      department: '',
      name: 'Anas Ahemad',
      title: 'SEO Executive',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 13,
    person: {
      id: 13,
      avatar: avatarPersonnel,
      department: '',
      name: 'Isha Choudhary',
      title: 'SEO Executive',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const VibhorsTeam = [
  {
    id: 14,
    person: {
      id: 14,
      avatar: avatarPersonnel,
      department: '',
      name: 'Sakshi Dua',
      title: 'Android Lead',
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 23,
        person: {
          id: 23,
          avatar: avatarPersonnel,
          department: '',
          name: 'Monica Patel',
          title: 'Sr. Android Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 24,
        person: {
          id: 24,
          avatar: avatarPersonnel,
          department: '',
          name: 'Dimple Badera',
          title: 'Android Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 15,
    person: {
      id: 15,
      avatar: avatarPersonnel,
      department: '',
      name: 'Hemraj Jhariya',
      title: 'iOS Lead',
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 20,
        person: {
          id: 20,
          avatar: avatarPersonnel,
          department: '',
          name: 'Suresh Patidar',
          title: 'iOS Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 16,
    person: {
      id: 16,
      avatar: avatarPersonnel,
      department: '',
      name: 'Ankit Bajaj',
      title: 'Full Stack Lead',
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 17,
    person: {
      id: 17,
      avatar: avatarPersonnel,
      department: '',
      name: 'Rajnish Malakar',
      title: 'System Admin Lead',
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 18,
        person: {
          id: 18,
          avatar: avatarPersonnel,
          department: '',
          name: 'Rajendra Patel',
          title: 'System Admin',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 19,
    person: {
      id: 19,
      avatar: avatarPersonnel,
      department: '',
      name: 'Churchill Gupta',
      title: 'Quality Analyst',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 27,
    person: {
      id: 27,
      avatar: avatarPersonnel,
      department: '',
      name: 'Amit Bokde',
      title: 'Solutions Architect',
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
]

export const AmitsTeam = [
  {
    id: 28,
    person: {
      id: 28,
      avatar: avatarPersonnel,
      department: '',
      name: 'Pankaj Sharma',
      title: 'Tech lead',
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 33,
        person: {
          id: 33,
          avatar: avatarPersonnel,
          department: '',
          name: 'Farha Khan',
          title: 'PHP Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 34,
        person: {
          id: 34,
          avatar: avatarPersonnel,
          department: '',
          name: 'Prafull Patidar',
          title: 'PHP Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 29,
    person: {
      id: 29,
      avatar: avatarPersonnel,
      department: '',
      name: 'Krishnapal Dhakad',
      title: 'Tech lead',
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 32,
        person: {
          id: 32,
          avatar: avatarPersonnel,
          department: '',
          name: 'Manish Yadav',
          title: 'Sr. PHP Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 30,
    person: {
      id: 30,
      avatar: avatarPersonnel,
      department: '',
      name: 'Prathak Godawat',
      title: 'Tech lead',
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 31,
        person: {
          id: 31,
          avatar: avatarPersonnel,
          department: '',
          name: 'Anshul Bhawasar',
          title: 'PHP Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 35,
    person: {
      id: 35,
      avatar: avatarPersonnel,
      department: '',
      name: 'Abhimanyu Soni',
      title: 'Sr. Designer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
]
export const AkankshasTeam = [
  {
    id: 36,
    person: {
      id: 36,
      avatar: avatarPersonnel,
      department: '',
      name: 'Mayank Sharma',
      title: 'Quality Analyst Lead',
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 37,
        person: {
          id: 37,
          avatar: avatarPersonnel,
          department: '',
          name: 'Poojal Joshi',
          title: 'Sr. Quality Analyst',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 38,
        person: {
          id: 38,
          avatar: avatarPersonnel,
          department: '',
          name: 'Vinod Noneria',
          title: 'Sr. Quality Analyst',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 40,
        person: {
          id: 40,
          avatar: avatarPersonnel,
          department: '',
          name: 'Shirish Gupta',
          title: 'Quality Analyst',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 41,
        person: {
          id: 41,
          avatar: avatarPersonnel,
          department: '',
          name: 'Shilpa Tiwari',
          title: 'Quality Analyst',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 42,
    person: {
      id: 42,
      avatar: avatarPersonnel,
      department: '',
      name: 'Shivani Pathak',
      title: 'Business Development Head',
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 44,
        person: {
          id: 44,
          avatar: avatarPersonnel,
          department: '',
          name: 'Tulsi Bhujel',
          title: 'Sr. Business Development Executive',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 43,
    person: {
      id: 43,
      avatar: avatarPersonnel,
      department: '',
      name: 'Abhishek Shukla',
      title: 'Sr. Project Manager',
      totalReports: 5,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
]

export const AbhisheksTeam = [
  {
    id: 45,
    person: {
      id: 45,
      avatar: avatarPersonnel,
      department: '',
      name: 'Kausar Ali',
      title: 'Design Lead',
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 50,
        person: {
          id: 50,
          avatar: avatarPersonnel,
          department: '',
          name: 'Bhupendra',
          title: 'UI/UX Designer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 51,
        person: {
          id: 51,
          avatar: avatarPersonnel,
          department: '',
          name: 'Prithviraj',
          title: 'Web Designer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      }
    ],
  },
  {
    id: 46,
    person: {
      id: 46,
      avatar: avatarPersonnel,
      department: '',
      name: 'Mohsin Abbasi',
      title: 'Sr. Designer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 47,
    person: {
      id: 47,
      avatar: avatarPersonnel,
      department: '',
      name: 'Dharamendra Parmar',
      title: 'Design Lead',
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 52,
        person: {
          id: 52,
          avatar: avatarPersonnel,
          department: '',
          name: 'Imran',
          title: 'Web Designer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 48,
    person: {
      id: 48,
      avatar: avatarPersonnel,
      department: '',
      name: 'Rahul Patidar',
      title: 'Wordpress Development Lead',
      totalReports: 3,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 53,
        person: {
          id: 53,
          avatar: avatarPersonnel,
          department: '',
          name: 'Divya',
          title: 'Web Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 54,
        person: {
          id: 54,
          avatar: avatarPersonnel,
          department: '',
          name: 'Yashwant',
          title: 'Web Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 55,
        person: {
          id: 55,
          avatar: avatarPersonnel,
          department: '',
          name: 'Roshan',
          title: 'Web Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 49,
    person: {
      id: 49,
      avatar: avatarPersonnel,
      department: '',
      name: 'Shadab Khan',
      title: 'Sr. Web Developer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
]

export const AnkitsTeam = [
  {
    id: 21,
    person: {
      id: 21,
      avatar: avatarPersonnel,
      department: '',
      name: 'Garima Sharma',
      title: 'Full-stack Developer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 22,
    person: {
      id: 22,
      avatar: avatarPersonnel,
      department: '',
      name: 'Nitin Dhote',
      title: 'Sr. Full-stack Developer',
      totalReports: 2,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 25,
        person: {
          id: 25,
          avatar: avatarPersonnel,
          department: '',
          name: 'Himanshu Pawar',
          title: 'Full-stack Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 26,
        person: {
          id: 26,
          avatar: avatarPersonnel,
          department: '',
          name: 'Vikalp Acharya',
          title: 'Full-stack Developer',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
]