export const personal = {
  name: "Adarsh Shukla",
  title: "Software Developer",
  tagline: "I build fast, accessible web experiences with modern tools.",
  email: "adarshshuklaup72@gmail.com",
  location: "Pratapgarh, Uttar pradesh",
  bio: "My name is Adarsh Shukla, and I am from Pratapgarh, Uttar Pradesh. I have hands-on experience in c+, python, Java, django, SpringBoot, SQL, and MongoDB. I am a self-motivated, quick learner with a strong passion for coding, and I aspire to build my career as a Software Developer.",
  resumeUrl: "#",
  social: {
    github: "https://github.com/Adarshshukla0001",
    linkedin: "https://www.linkedin.com/in/adarshshukla0001/",
    leetcode: "https://leetcode.com/u/Adarshshukla0001/",
  },
    education: [
      {
        degree: "B.Tech (Computer Science & Engineering)",
        college: "Noida Institute of engineering and Technology",
        board: "AKTU",
        year: "2024 - 2027",
        location: "Greater Noida, Uttar Pradesh",
      },
      {
        degree: "Diploma (Computer Science & Engineering)",
        college: "Firoze Gandhi Polytechnic, Raebareli",
        board: "BTEUP",
        year: "2021 - 2024",
        location: "Raebareli, Uttar Pradesh",
      },
      {
        degree: "Class XII (Intermediate)",
        college: "S.S.P. Inter College",
        board: "U.P. Board",
        year: "2019 - 2020",
        location: "Amethi, Uttar Pradesh",
      },
      {
        degree: "Class X (High School)",
        college: "S.S.P. Inter College",
        board: "U.P. Board",
        year: "2017 - 2018",
        location: "Amethi, Uttar Pradesh",
      },
    ],
};

    export const navLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Skills", href: "/skills" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ]

export const skills = [
      { name: "HTML", category: "Frontend", percent: 90 },
      { name: "CSS", category: "Frontend", percent: 85 },
      { name: "Tailwind CSS", category: "Frontend", percent: 60 },
      { name: "JavaScript", category: "Programming Language", percent: 60 },
      { name: "Python", category: "Programming Language", percent: 70 },
      { name: "React", category: "Frontend", percent: 40 },
      { name: "SpringBoot", category: "Backend", percent: 65 },
      { name: "Django", category: "Backend", percent: 80 },
      { name: "MongoDB", category: "Database", percent: 50 },
      { name: "MySQL", category: "Database", percent: 69 },
      { name: "SQLite", category: "Database", percent: 70 },
      { name: "Git", category: "Tools", percent: 80 },
      { name: "Github", category: "Tools", percent: 60 },
      { name: "VScode", category: "Tools", percent: 55 },
      { name: "C++", category: "Programming Language", percent: 70 },
      { name: "Java", category: "Programming Language", percent: 55 },
    ]

export const projects = [
      {
        title: "Portfolio Website",
        description:
          "A modern, fully responsive developer portfolio built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode, interactive UI, project showcase, skills section, and a functional contact form powered by EmailJS for seamless communication.",
        tags: ["React","Vite","Tailwind CSS","JavaScript","Framer Motion","EmailJS"],
        image: "/assets/portfolio.png",
        liveUrl: "#",
        githubUrl: "https://github.com/Adarshshukla0001",
        featured: true,
      },
{
    title: "CharchaDesk",
    description:
      "A real-time chat application inspired by WhatsApp, built using Django Channels and WebSockets for instant messaging. Includes AI-powered chat summarization with Multi-Language support , emotion detection using the Gemini API, user authentication, online status, and a modern responsive interface.",
    tags: [
      "Django",
      "Python",
      "PostgreSQL",
      "WebSockets",
      "Django Channels",
      "Gemini API",
      "HTML",
      "Tailwind CSS"
    ],
    image: "/assets/charchadesk.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Adarshshukla0001",
    featured: true,
  },

  {
    title: "Incubify",
    description:
      "An intelligent incubation discovery platform that helps startups discover, compare, and apply to incubation centers. Features smart search, center comparison, secure authentication, role-based access, and a scalable full-stack architecture powered by Spring Boot, React, and MongoDB Atlas.",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Vite",
      "Tailwind CSS",
      "MongoDB Atlas",
      "JWT",
      "REST API"
    ],
    image: "/assets/incubify.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Adarshshukla0001",
    featured: true,
  },

      {
    title: "Finora",
    description:
      "A personal finance tracker that helps users manage income, expenses, and budgets with interactive financial insights. Features expense categorization, transaction history, visual analytics using Chart.js, and an intuitive dashboard.",
    tags: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "Bootstrap",
      "SQLite",
      "Chart.js"
    ],
    image: "/assets/finora.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Adarshshukla0001",
    featured: true,
  },
      {
    title: "College Management System",
    description:
      "A web-based college management system for managing students, faculty, courses, attendance, and academic records. Provides an admin dashboard with secure authentication and efficient data management.",
    tags: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "Bootstrap",
      "SQLite"
    ],
    image: "/assets/sms.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Adarshshukla0001",
    featured: false,
  },
      {
    title: "HRMS",
    description:
      "A Human Resource Management System designed to simplify employee management. Includes employee records, attendance tracking, leave management, department organization, and role-based administrative features.",
    tags: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "Bootstrap",
      "SQLite"
    ],
    image: "/assets/hrms.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Adarshshukla0001",
    featured: false,
  },
    ]


export const portfolioStats = {
  totalProjects: projects.length,
  totalSkills: skills.length,
};