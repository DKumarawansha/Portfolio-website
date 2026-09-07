export const profile = {
  name: 'Dasunika Kumarawansha',
  roles: ['Full-Stack Developer'],
  tagline:
    'Third-year IT undergraduate at SLIIT, building web and mobile products end to end - from a Figma frame to a deployed API.',
  location: 'Malabe, Sri Lanka',
  phone: '071-5775495',
  email: 'dasukumarawansha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dasunika-kumarawansha-9b6364386',
  github: 'https://github.com/DKumarawansha',
}

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'JavaScript', 'Kotlin', 'HTML', 'CSS', 'PHP'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'RESTful APIs'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Mobile',
    items: ['Android Studio', 'Kotlin'],
  },
  {
    title: 'Design',
    items: ['Figma', 'UI/UX Design'],
  },
]

export const softSkills = ['Problem Solving', 'Leadership', 'Communication', 'Time Management']

export const projects = [
  {
    title: 'Skill Bridge',
    type: 'Mobile App',
    stack: ['Android Studio', 'Kotlin'],
    description:
      'A mobile app that connects skilled workers with potential clients, with profile management, skill listings and a booking flow.',
    points: [
      'Built user profile management, skill listing and booking features',
      'Applied clean architecture for a modular, maintainable codebase',
    ],
  },
  {
    title: 'Juice Bar',
    type: 'UI/UX Design',
    stack: ['Figma'],
    description:
      'A complete high-fidelity mobile ordering experience, from onboarding to order tracking, designed for developer handoff.',
    points: [
      'Designed onboarding, authentication, menu, cart, order history and tracking screens',
      'Applied UX best practices for a seamless ordering experience',
    ],
  },
  {
    title: 'Solar Web Platform',
    type: 'Web App',
    stack: ['React', 'Node.js', 'MongoDB'],
    description:
      'A solar energy management platform built with the MERN stack, focused on user onboarding and subscriptions.',
    points: [
      'Implemented user registration flows',
      'Built subscription and package purchasing modules',
    ],
  },
  {
    title: 'Car Rental Web App',
    type: 'Web App',
    stack: ['PHP'],
    description:
      'A team-built car rental website, contributing key informational pages within a shared design system.',
    points: [
      'Built the Contact Us and About Us pages',
      'Collaborated with the team to keep design and functionality consistent',
    ],
  },
  {
    title: 'Learning Management System',
    type: 'Web App',
    stack: ['React', 'Node.js', 'MongoDB'],
    description:
      'A web-based LMS with a dedicated module for booking lecture sessions.',
    points: [
      'Designed and implemented the lecture session booking module',
      'Integrated frontend validation with backend API connectivity',
    ],
  },
]

export const education = [
  {
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    program: 'BSc (Hons) in Information Technology',
    period: '2022 — Present',
    detail: 'Currently in Year 3, Semester 1. Coursework: Data Structures & Algorithms, OOP, Database Management, Web Technologies, Software Engineering.',
  },
  {
    school: 'Sabaragamuwa University of Sri Lanka',
    program: 'Diploma in English',
    period: '2022 — 2023',
    detail: 'Strengthened professional English communication for academic and workplace settings.',
  },
]

export const activities = [
  'Active participant, Dance Sense — SLIIT',
  'Former member, Kalaanethra Society — SLIIT',
  'Junior Western Band Leader',
  'School Prefect',
  'Member, Environmental Club',
]

export const languages = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Sinhala', level: 'Native' },
]
