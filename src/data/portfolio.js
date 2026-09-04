export const profile = {
  name: 'Dinithi Rajapaksha',
  title: 'Software Engineering Graduate | Frontend & Interactive Web Developer',
  availability: 'Available for Software Engineering Opportunities',
  location: 'Gampaha, Sri Lanka',
  summary:
    'Fresh Software Engineering graduate with one year of industry experience building real-world web, interactive, gaming, and immersive digital experiences.',
  intro:
    'My work includes React applications deployed across Dialog customer centres, interactive Three.js experiences, community platforms, tourism experiences, and IEEE-published research on machine-learning-driven adaptive user interfaces.',
  footer:
    'Software Engineering Graduate · Frontend · Interactive Web · React · 3D Experiences',
  resumePath: '/cv.pdf',
}

export const highlights = [
  { value: '1+ Year', label: 'Industry Experience' },
  { value: '8+', label: 'Professional Projects' },
  { value: '24', label: 'Dialog Centres Reached by Digital Game Deployments' },
  { value: '1', label: 'IEEE-Published Research Project' },
]

export const featuredOrder = [
  'AURA — Adaptive UI Research',
  'Dialog TV 3D Troubleshooting',
  'VibeSpace SL',
  'Dialog Awurudu / Fun Games',
  'Pushpaka Vimana',
  'VibeSpace',
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'R Factory',
    period: 'Current',
    summary:
      'Continuing with R Factory as a Software Engineer after completing a one-year Software Engineering internship.',
    details:
      'My work spans frontend development, interactive digital experiences, 3D web applications, gaming experiences, UI design, community platforms, and client-facing web products.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Three.js', 'Firebase', 'Git/GitHub', 'Figma'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'R Factory',
    period: '1-Year Internship',
    summary:
      'Worked on commercial and experimental digital products including projects for Dialog Axiata, immersive 3D applications, digital promotional games, tourism experiences, productivity platforms, and event/community applications.',
    contributions: [
      'Frontend implementation',
      'UI design and ideation',
      'React application development',
      'Interactive game interfaces',
      'Three.js development',
      'Integration of 3D assets',
      'Responsive interface development',
      'Figma-based interface design',
      'Firebase-backed web experiences',
    ],
  },
]

export const professionalProjects = [
  {
    name: 'Dialog TV 3D Troubleshooting Experience',
    client: 'Dialog Axiata',
    type: 'Interactive Customer-Support Experience',
    role: '3D Web Developer',
    summary:
      'Transforms traditional Dialog TV troubleshooting instructions into an interactive 3D customer-support experience.',
    description:
      'Users can select common Dialog TV technical problems and explore a virtual setup showing how components such as the television, remote control, antenna, cables, and set-top box should be correctly connected and configured. Instead of relying entirely on text instructions, users can visually inspect and interact with the setup to better understand how the system works.',
    contribution:
      'Implemented the interactive application using provided 3D GLB models and built the web-based 3D environment and interactions.',
    technologies: ['Three.js', 'JavaScript', 'CSS', 'GLB 3D Models'],
    note: 'Commercial client project. Source code is private.',
    featured: true,
  },
  {
    name: 'VibeSpace SL',
    subtitle: 'Event Platform & Fan Circle Community',
    type: 'Event + Community Platform',
    role: 'UI/UX Design & Full Frontend Development',
    summary:
      "A community-driven digital platform designed around Sri Lanka's underground progressive music community.",
    description:
      'The platform combines event promotion with a private fan community, allowing organizers, artists, and attendees to interact within a shared digital ecosystem. The website supported immersive music experiences including the Warehouse X Edition and provided event information, announcements, ticket details, exclusive releases, and community access.',
    features: [
      'Community posts',
      'Comments and replies',
      'Hashtags and trending conversations',
      'Announcements and community notifications',
      'Ticket-release information',
      'Venue reveals and exclusive content',
      'Member interaction inside the community',
    ],
    contribution:
      'Designed and developed the complete VibeSpace SL website and Fan Circle experience, covering the user journey from discovering events and accessing ticket information to joining the community and interacting with other members.',
    technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
    featured: true,
  },
  {
    name: 'Dialog Awurudu Games',
    client: 'Dialog Axiata',
    type: 'Interactive Promotional Gaming Experience',
    role: 'Frontend Developer',
    summary:
      'A digital interpretation of four traditional Sri Lankan Awurudu games, redesigned to be played using digital screens.',
    description:
      "The experience was deployed across 24 Dialog customer centres throughout Sri Lanka as part of Dialog's seasonal Awurudu activities.",
    contribution:
      'Implemented the frontend of the gaming experience, translating the game concepts into interactive digital interfaces suitable for customer-facing screens.',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git/GitHub'],
    note: 'Commercial client project. Source code is private.',
    featured: true,
  },
  {
    name: 'Dialog Fun Games',
    client: 'Dialog Axiata',
    type: 'Interactive Mini-Game Platform',
    role: 'Ideation, UI Design & Frontend Development',
    summary:
      'A collection of mini-games adapted from a seasonal campaign into an evergreen Dialog customer-centre gaming platform.',
    description:
      'After the Awurudu campaign, the original gaming experience was transformed into Dialog Fun Games, a collection of mini-games designed to remain relevant throughout the year rather than being limited to a single seasonal campaign. The experience was also deployed across 24 Dialog customer centres island-wide.',
    contributions: [
      'Ideated the Fun Games concept from the R Factory side',
      'Designed the game interfaces',
      'Developed the frontend',
      'Adapted the experience from a seasonal campaign into a reusable gaming platform',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git/GitHub'],
    note: 'Commercial client project. Source code is private.',
    featured: true,
  },
  {
    name: 'Pushpaka Vimana',
    client: 'Sri Lanka Tourism × India Tourism',
    type: 'Tourism / VR Experience Platform',
    role: 'UI Designer & Frontend Developer',
    summary:
      'A supporting web platform for a VR tourism experience featuring locations associated with the ancient Ramayana story.',
    description:
      'The supporting web platform introduced the experience to visitors and provided access to project and ticketing information.',
    contributions: [
      'Designed the project website using Figma',
      'Developed the website frontend using React',
      "Developed the frontend of the project's ticketing system",
      'Implemented responsive interfaces using Tailwind CSS',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Figma'],
    featured: true,
  },
  {
    name: 'VibeSpace',
    subtitle: 'Immersive Digital Wellbeing & Productivity Platform',
    company: 'R Factory',
    type: 'Web / 3D Platform',
    role: 'Web / 3D Developer',
    audience: 'USA and Japanese youth',
    summary:
      'An immersive digital wellbeing and productivity platform combining organization, self-expression, communication, productivity, and entertainment inside interactive digital environments.',
    features: [
      'Interactive virtual environments',
      'Customizable characters',
      'Dynamic weather and ambient animations',
      'Mood-based visual personalization',
      'Calendar and event management',
      'Meeting reminders',
      'Habit tracking',
      'Goal and subtask management',
      'Progress tracking',
      'Digital journaling',
      'Stickers and personalization',
      'Music playback',
      'Vibz Chat',
      'Notifications',
    ],
    contribution:
      'Built interactive 3D worlds using Three.js, integrated pre-built GLB and FBX 3D assets, and developed interactive virtual spaces users could navigate.',
    technologies: ['Three.js', 'JavaScript', 'GLB Models', 'FBX Models', '3D Web Development'],
    featured: true,
  },
  {
    name: 'Dialog Christmas Pop AR Game',
    client: 'Dialog Axiata',
    type: 'Mobile AR Promotional Game',
    role: 'Frontend Developer',
    summary:
      "An augmented-reality mini-game created for one of Dialog's annual Christmas promotional campaigns.",
    description:
      'When the game timer begins, 3D Christmas-themed objects appear around the player through the mobile AR view. Players interact with the appearing objects and attempt to pop the correct prize-related objects within the available time to earn Star Points.',
    contribution:
      'Implemented the frontend experience of the Christmas Pop game, helping create the interactive player-facing interface used during the campaign.',
    technologies: [],
    note: 'Commercial client project. Source code is private.',
  },
  {
    name: 'Dialog Future Lens',
    client: 'Dialog Axiata',
    type: 'Experimental Smart Home Concept',
    role: '3D Web Developer',
    summary:
      'An experimental interactive 3D concept proposed around Dialog Smart Home experiences.',
    description:
      'The application allows users to create and explore a personalized virtual room. Based on user choices, mood, and preferences, a rule-based system modifies the room and generates a customized immersive environment that the user can navigate and explore.',
    contribution:
      'Implemented the interactive 3D experience and room customization behaviour.',
    technologies: ['Three.js', 'JavaScript', '3D Web Development'],
    note: 'Experimental client concept. Source code is private.',
  },
]

export const researchProject = {
  name: 'AURA',
  subtitle: 'Machine-Learning-Driven Adaptive Web UI Personalization',
  type: 'Final-Year Research Project',
  grade: 'A',
  presented: '6th International Symposium on Computer Technology and Information Science — ISCTIS 2026',
  published: 'IEEE Xplore',
  summary:
    'AURA explores adaptive web interfaces for adults with visual impairments, motor impairments, and low computer literacy.',
  description:
    'Instead of giving every user the same interface, AURA creates an individual personalization profile and allows supported web applications to adapt their interfaces according to that profile.',
  workflow: [
    {
      title: 'Browser Extension & User Categorization',
      body:
        'The Chrome extension acts as the user-facing input layer, gathering onboarding information and behavioural data that helps categorize users based on visual, motor, or computer-literacy-related requirements.',
    },
    {
      title: 'Machine Learning Personalization Engine',
      body:
        'The ML engine generates a personalization profile. For new users, the system can begin from category-level personalization and become increasingly individual as more behavioural data becomes available.',
    },
    {
      title: 'Adaptive React NPM Package',
      body:
        'My main contribution was the developer-facing frontend adaptation layer. Developers can integrate adaptive behaviour using reusable AURA components based on Atomic Design principles or AURA-specific class names for standard HTML and React elements.',
    },
    {
      title: 'Optimization & User Control',
      body:
        'The wider architecture includes a reinforcement-learning-based optimization component and a user dashboard through the extension for manual interface preference adjustment.',
    },
  ],
  contribution: [
    'Reusable adaptive React components',
    'Atomic Design-based component selection',
    'React Context-based profile distribution',
    'Token-driven UI adaptation',
    'Adaptive class-name support for existing applications',
    'Connecting personalization information with frontend presentation behaviour',
    'Providing developers with a reusable mechanism for building adaptive interfaces',
  ],
  outcomes: ['Grade A — Final-Year Research', 'Accepted and Presented — ISCTIS 2026', 'Published — IEEE Xplore'],
  technologies: [
    'NPM Package Development',
    'React Context',
    'Adaptive User Interfaces',
    'Atomic Design',
    'Machine Learning Integration',
    'Human-Computer Interaction',
    'Personalized User Interfaces',
  ],
  featured: true,
}

export const universityProjects = [
  {
    name: 'Personal Finance Tracker RESTful API',
    type: 'Backend / REST API Project',
    summary:
      'A personal finance management REST API created using Node.js, Express.js, and MongoDB.',
    description:
      'The system supports authentication, transaction management, budgeting, financial goals, reporting, multiple currencies, recurring transactions, and role-based access.',
    features: [
      'JWT-based registration and authentication',
      'Admin and regular-user roles',
      'Income and expense CRUD operations',
      'Transaction categorization and custom tags',
      'Recurring transaction management',
      'Email reminders for recurring transactions',
      'Monthly and category-specific budgets',
      'Budget-overrun notifications',
      'Spending-trend reporting',
      'Financial goal tracking',
      'Savings tracking',
      'Multi-currency support',
      'Role-based dashboards',
      'Swagger / OpenAPI documentation',
      'Jest unit testing',
      'Supertest integration testing',
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'CORS',
      'Swagger / OpenAPI',
      'Jest',
      'Supertest',
      'dotenv',
    ],
  },
  {
    name: 'REST Countries App',
    type: 'React Frontend Application',
    summary:
      'A responsive React application for exploring information about countries around the world.',
    description:
      'Users can search for countries, filter countries by region, view detailed country information, explore country locations through interactive maps, and view information through charts.',
    features: [
      'Country search',
      'Region filtering',
      'Detailed country information',
      'Country flags and statistics',
      'Interactive Leaflet maps',
      'Chart.js visualizations',
      'Responsive interface',
      'Client-side routing',
      'Loading and error states',
      'Failed API request handling',
      'Search and filtering tests using mocked application data',
    ],
    technologies: [
      'React 19',
      'React Router',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'Axios',
      'Leaflet',
      'React Leaflet',
      'Chart.js',
      'React ChartJS 2',
      'Vitest',
      'React Testing Library',
      'ESLint',
    ],
  },
  {
    name: 'Eatsy',
    subtitle: 'Microservices Food Ordering & Delivery System',
    course: 'Distributed Systems',
    type: 'Group Project',
    role: 'Restaurant Service Microservice',
    summary:
      'A cloud-native food ordering and delivery application built using a microservices architecture.',
    description:
      'The wider system contains independently separated services for users, restaurants, orders, delivery, payments, and notifications. Customer and administrative frontend applications communicate with the services through REST APIs.',
    contribution:
      'Implemented the Restaurant Service microservice, contributing to the distributed backend architecture of the platform.',
    features: [
      'JWT authentication',
      'Multiple system roles',
      'REST-based microservice communication',
      'Food ordering workflows',
      'Restaurant management',
      'Order management',
      'Delivery management',
      'Payment integration',
      'Notifications',
      'Containerized services',
    ],
    technologies: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Docker',
      'Docker Compose',
      'Nginx',
      'REST APIs',
    ],
  },
  {
    name: 'Eatsy Security Patch',
    subtitle: 'Secure Software Development Project',
    type: 'Group Project',
    focus: 'Application Security',
    summary:
      'A security-focused patch of the Eatsy microservices application created as part of Secure Software Development coursework.',
    contribution:
      'Focused on identifying and addressing security logging and monitoring failures, security misconfiguration, and database connection configuration issues.',
    features: [
      'Security Logging and Monitoring Failures',
      'Security Misconfiguration',
      'Database Configuration',
      'Microservices Security',
    ],
    technologies: [
      'Secure Software Development',
      'Security Logging',
      'Monitoring',
      'Security Misconfiguration',
      'Database Configuration',
      'Microservices Security',
    ],
  },
]

export const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'React Router', 'Responsive Web Development', 'Axios'],
  },
  {
    category: 'Interactive & 3D Web',
    skills: ['Three.js', 'Interactive Web Experiences', 'GLB Model Integration', 'FBX Model Integration', '3D Web Environments'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Mongoose'],
  },
  {
    category: 'Databases & Services',
    skills: ['MongoDB', 'MongoDB Atlas', 'Firebase'],
  },
  {
    category: 'Authentication & Security',
    skills: ['JWT Authentication', 'Role-Based Access Control', 'bcrypt', 'CORS', 'Protected API Routes', 'Security Logging & Monitoring', 'Security Configuration'],
  },
  {
    category: 'Testing & API Documentation',
    skills: ['Jest', 'Supertest', 'Vitest', 'React Testing Library', 'Swagger / OpenAPI', 'ESLint'],
  },
  {
    category: 'DevOps & Development Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Nginx', 'Vite', 'Figma'],
  },
  {
    category: 'Research & Specialized Areas',
    skills: ['NPM Package Development', 'React Context', 'Adaptive User Interfaces', 'Atomic Design', 'Machine Learning Integration', 'Human-Computer Interaction', 'Personalized User Interfaces'],
  },
]

export const education = {
  degree: 'BSc (Hons) in Information Technology',
  specialization: 'Specialization in Software Engineering',
  period: '2022 – 2026',
  gpa: '3.1',
  classification: 'Second Class',
}
