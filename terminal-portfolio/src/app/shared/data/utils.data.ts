import { ECommandType } from '../models/commands.model';
import { ETheme } from '../models/themes.model';

export const email = 'ktismail97@gmail.com.com';
export const cvURL = 'https://1drv.ms/b/s!AkD34JHCNHdBg6csbgpvmbTLz81IUA?e=oOxFkn';
export const linkedInProfileURL = 'https://www.linkedin.com/in/anirban-kar-498027130/';
export const projects = [
  {
    name: 'Caller Sentiment Analysis',
    date: '09/2020 - 08/2021',
    pointers: [
      'A web-based tool that conducts sentiment analysis specifically designed for call centers.',
      'Enables managers to evaluate the performance of calls and provide feedback to operational executives.',
      'Designed backend with Node.js, Express.js, Mongoose and frontend with Angular 10 from scratch.',
      'Constructed a Machine Learning pipeline utilizing Python and IBM Watson NLU.'
    ],
    technologies: [
      'Node.js',
      'Angular 10',
      'Express.js',
      'MongoDB',
      'Python',
      'Natural Language Processing',
      'Azure Active Directory Authentication',
      'IBM Watson NLU'
    ]
  },
  {
    name: 'Intelligent Assistant',
    date: '03/2020 - 09/2020',
    pointers: [
      `A web-based platform that reviews and instructs machine learning models for ticketing tools,
      <br class="bg-screen"> aimed at decreasing SLA duration.`,
      `Enterprises can upload data for training machine learning models and set up the application
      <br class="bg-screen"> with an existing ticketing tool to categorize upcoming ticket data.`,
      'Developed the complete frontend and backend from scratch using Python and fastapi.'
    ],
    technologies: ['Python', 'FastAPI', 'MongoDB', 'Natural Language Processing']
  },
  {
    name: 'Ticket Management System',
    date: '08/2019 - 03/2020',
    pointers: [
      'A client ticket management application for businesses.',
      'Developed multiple RESTful APIs along with few UI pages.'
    ],
    technologies: ['.Net MVC', 'Dapper', 'MS SQL Server']
  },
  {
    name: 'Thrifty',
    date: '04/2019 - 05/2019',
    pointers: ['A web-based platform that contrasts food and lodging rates across multiple websites.'],
    technologies: ['.Net Core', 'Angular 6', 'MS SQL Server']
  }
];
export const workEx = [
    {
      position: 'Software Engineer',
      company: 'ZilMoney',
      date: 'Oct 2021 - Present',
      location: 'Manjeri, Kerala',
      technologiesUsed: ['Angular (v13 to v17)', 'Ionic', 'RxJS', 'Signals', 'AG Grid', 'Tailwind CSS'],
      tasks: [
        'Onlinecheckwriter.com: Simple and secure way to ACH payments, direct deposits, or RTP.',
        'Persona Verification System: Integrated a system for personal and ID verification with enhanced security and streamlined processes.',
        'Bank Account Verification System: Integrated Yodlee and Plaid for instant bank account verification, ensuring secure and efficient processing.',
        'Admin Panel Management: Developed and maintained Super Admin and Master Admin panels for efficient system control and user management.',
        'White-label Configuration: Handled white-label configuration for custom branding and seamless integration across multiple platforms.',
        'Contributions and Responsibilities: Contributed to various areas of development, integrated VGS for secure card payments, and played a key role in code reviews, merging, and deployment tasks.',
        'ZilBank Website and Mobile App: Modern Digital Banking Platform For Business Owners.'
      ]
    },
    {
      position: 'Trainee Software Engineer',
      company: 'Xtapps Software Solutions Pvt. Ltd.',
      date: 'Mar 2021 - Sep 2021',
      location: 'Kerala, India',
      tasks: [
        'Worked on developing music apps and the admin panel for Xtapps.'
      ]
    },
    {
      position: 'Angular Developer',
      company: 'Quest Innovative Solutions',
      date: 'Mar 2021 - Sep 2021',
      location: 'Kadavanthra, Kochi, Kerala, India',
      tasks: [
        'Gained hands-on experience in software development, supporting the team in building and implementing applications, with a focus on Python Django.'
      ]
    },
    {
      position: 'App Developer',
      company: 'Edu-HorM Software Services',
      date: 'Mar 2020 - Sep 2020',
      location: 'Ottapalam, Kerala, India',
      tasks: [
        'Gained experience in app and web development, building foundational skills in both areas.'
      ]
    }
  ];
  
export const certificates = [
  {
    name: 'The Complete Node.js Developer Course',
    link: 'https://1drv.ms/b/s!AkD34JHCNHdBg6croRjMpQrCrnHxjQ?e=mVcmaf'
  },
  {
    name: 'Deep Learning with Advanced NLP',
    link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dRKnQ0CZizugSBTg?e=toTtFT'
  },
  {
    name: 'NLP with Classification and Vector Spaces',
    link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dP-c8x1EgvXWHosw?e=0E7des'
  },
  {
    name: 'NLP with Probabilistic Models',
    link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dOwxpw-0jqlD_kDQ?e=TyyhiX'
  },
  {
    name: 'NLP with Sequence Models',
    link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dQrnZ19sxVi1j40g?e=LFxDZ8'
  },
  {
    name: 'Rajasthan Hackathon',
    link: 'https://1drv.ms/b/s!AkD34JHCNHdBg410jQmJZ0-NC3ptyA?e=31drwv'
  }
];
export const skills = [
  'Node.js',
  'Angular',
  'AWS',
  'Serverless',
  'AWS Lambda',
  'Express.js',
  'Python',
  'Flask',
  'FastAPI',
  'Sequelize',
  'Mongoose',
  'MySQL',
  'MongoDB',
  'Machine Learning',
  'Natural Language Processing'
];
export const availableThemes = [...Object.values(ETheme)];