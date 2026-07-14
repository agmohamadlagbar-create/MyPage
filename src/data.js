export const developerData = {
  name: "MOHAMAD LAGBAR",
  title: "SOFTWARE ENGINEER",
  tags: [
    "Software Engineer",
    "Full-Stack Developer",
    "Scalable Systems",
    "AI Agent Networks"
  ],
  bio: "My primary expertise is in ASP.NET Core (C#), where I design scalable backend systems, REST APIs, and AI-powered applications. I also develop modern front-end applications using React, enabling seamless experiences across the web. I enjoy working at the intersection of Artificial Intelligence and Software Engineering.",

  sideStats: [
    { label: 'Companies', value: '1' },
    { label: 'Years Exp', value: '2+' },
    { label: 'Team Size Led', value: '0' },
    { label: 'Open Source PRs', value: '0' },
  ],

  experiences: [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Scramblebit Pazarlama Programlama LTŞ',
      period: '2024 — Present',
      location: 'Remote',
      description:
        'Developed and maintained robust backend services using ASP.NET Core and C#. Built scalable web architectures, integrated RESTful APIs, and optimized application performance.',
      tech: ['ASP.NET Core', 'C#', 'React', 'REST APIs', 'SQL Server'],
      current: true,
    },
  ],

  projects: [
    {
      id: 1,
      title: 'LagbarShop Platform',
      description:
        'A multi-platform e-commerce ecosystem with a dual-provider AI Gateway (routing between Groq and GLM) and a multi-agent AI system (Planner, Shopping, Support, Reporting). Features real-time GPS delivery tracking on interactive Leaflet maps and live order lifecycle management via SignalR.',
      tech: ['ASP.NET Core', 'React (Vite)', 'SignalR', 'Groq & GLM', 'Leaflet'],
      image: '/lagbar_shop_dashboard.png',
      alt: 'A sleek, modern dark-themed dashboard showing a real-time delivery tracking map, live chat interface with an AI assistant, and order status indicators.',
      label: 'Full-Stack & AI',
      link: 'http://lagbar.runasp.net/',
      featured: true
    },
    {
      id: 2,
      title: 'AI Academic Mentor',
      description:
        'A full-stack academic mentoring platform leveraging LLMs for personalized career advice, transcript analysis, and custom project suggestions. Features automated PDF report generation, secure authentication, and a modern Blazor frontend.',
      tech: ['ASP.NET Core', 'Blazor', 'LLMs (Groq)', 'EF Core', 'PDF Generation'],
      image: '/ai_academic_mentor.png',
      alt: 'A premium futuristic academic mentor dashboard showing grade analytics, course progress, and a friendly AI chat advisor.',
      label: 'AI & Blazor',
      link: 'https://github.com/agmohamadlagbar-create/AIAM',
      featured: false
    },
    {
      id: 3,
      title: 'NetQueue Rooms',
      description:
        'A room-based chat and file-sharing desktop application implementing a TCP/IP network protocol. Features isolated message queues, TCP/IP sockets in C#, custom room commands (/join, /rooms), and a multi-client Windows Forms UI.',
      tech: ['C#', '.NET', 'TCP/IP Sockets', 'Windows Forms', 'Message Queues'],
      image: '/socket_chat_rooms.png',
      alt: 'A retro-modern chat client showing active rooms, connected user sockets, and file transfer logs in a terminal-style layout.',
      label: 'Networking',
      link: 'https://github.com/agmohamadlagbar-create/NetQueueRooms',
      featured: false
    },
    {
      id: 4,
      title: 'TaskManager',
      description:
        'A modern task manager featuring an ASP.NET Core Web API backend and a React (Vite) frontend. Includes user registration, dynamic dashboards, task prioritization (High, Medium, Low), custom category tagging, and date sorting.',
      tech: ['ASP.NET Core API', 'React (Vite)', 'SQL Server', 'Entity Framework', 'CSS Glassmorphism'],
      image: '/task_manager_dashboard.png',
      alt: 'An elegant glassmorphic dashboard with columns of active tasks, color-coded priority badges, and category dropdowns.',
      label: 'Full-Stack',
      link: 'https://github.com/agmohamadlagbar-create/TaskManager-',
      featured: false
    }
  ],

  skillCategories: [
    {
      id: 'languages',
      label: 'Languages',
      icon: 'CodeBracketIcon',
      tags: ['C#', 'JavaScript (ES6+)', 'Python', 'SQL'],
      accent: true,
    },
    {
      id: 'frontend',
      label: 'Frontend Development',
      icon: 'ComputerDesktopIcon',
      tags: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
      accent: false,
      colSpan: 'col-span-2', // mapped in CSS
    },
    {
      id: 'backend',
      label: 'Backend (.NET Ecosystem)',
      icon: 'ServerIcon',
      tags: ['ASP.NET Core Web APIs', 'Entity Framework Core', 'LINQ', 'SignalR (Real-Time)', 'JWT Authentication', 'ASP.NET Core Identity'],
      accent: false,
    },
    {
      id: 'databases',
      label: 'Databases & Caching',
      icon: 'CircleStackIcon',
      tags: ['SQL Server', 'SQLite', 'Supabase', 'Redis Caching'],
      accent: false,
    },
    {
      id: 'ai_architecture',
      label: 'AI & Architecture',
      icon: 'CpuChipIcon',
      tags: ['LLM Integration (Groq, OpenAI)', 'AI Agent Orchestration', 'RESTful API Design', 'Microservices Architecture', 'OOP', 'Data Structures & Algorithms'],
      accent: false,
    },
    {
      id: 'tools_testing',
      label: 'DevOps, Tools & Testing',
      icon: 'WrenchScrewdriverIcon',
      tags: ['Docker', 'Git & GitHub', 'CI/CD', 'Stripe API Integration', 'xUnit Unit Testing'],
      accent: false,
      colSpan: 'col-span-3', // mapped in CSS
    },
  ],

  socialLinks: [
    {
      label: 'GitHub',
      handle: '@agmohamadlagbar-create',
      href: 'https://github.com/agmohamadlagbar-create',
      icon: 'Github',
    },
    {
      label: 'LinkedIn',
      handle: 'mohamadlagbar',
      href: 'https://www.linkedin.com/in/mohamadlagbar',
      icon: 'Linkedin',
    },
    {
      label: 'Email',
      handle: 'ag.mohamadlagbar@gmail.com',
      href: 'mailto:ag.mohamadlagbar@gmail.com',
      icon: 'Mail',
    },
  ]
};
