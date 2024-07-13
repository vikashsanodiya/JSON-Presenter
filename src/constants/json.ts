// const sampleJson = Object.freeze({
//   name: "jsontree",
//   version: "0.1.0",
//   private: true,
//   scripts: {
//     dev: "next dev",
//     build: "next build",
//     start: "next start",
//     lint: "next lint",
//     prepare: "husky install",
//   },
//   dependencies: {
//     "@headlessui/react": "^1.7.15",
//     "@monaco-editor/react": "^4.5.1",
//     "@tailwindcss/forms": "^0.5.4",
//     "@types/node": "20.3.2",
//     "@types/react": "18.2.14",
//     "@types/react-dom": "18.2.6",
//     allotment: "^1.19.0",
//     autoprefixer: "10.4.14",
//     eslint: "8.43.0",
//     "eslint-config-next": "13.4.7",
//     "html-to-image": "^1.11.11",
//     "jsonc-parser": "^3.2.0",
//     "lodash.debounce": "^4.0.8",
//     "lodash.get": "^4.4.2",
//     "lodash.set": "^4.3.2",
//     next: "13.4.7",
//     postcss: "8.4.24",
//     prettier: "^2.8.8",
//     "prettier-plugin-tailwindcss": "^0.3.0",
//     react: "18.2.0",
//     "react-dom": "18.2.0",
//     "react-zoom-pan-pinch": "^3.1.0",
//     reaflow: "5.1.2",
//     tailwindcss: "3.3.2",
//     typescript: "5.1.6",
//     zustand: "^4.3.9",
//   },
//   devDependencies: {
//     "@types/lodash.debounce": "^4.0.7",
//     husky: "^8.0.3",
//     "lint-staged": "^13.2.3",
//   },
// });

// export const JSON_TEMPLATE = JSON.stringify(sampleJson, null, 2);
const sampleJson = Object.freeze({
  personalInfo: {
    name: "Vikash Sanodiya",
    title: "Java Backend Developer",
    email: "vikassanodiyap@gmail.com",
    phone: "+919301930088",
    location: "Bengaluru, Karnataka, India",
    portfolio: "https://vikashsanodiya.github.io/",
    github: "https://github.com/vikashsanodiya",
    linkedin: "https://www.linkedin.com/in/vikashsanodiya"
  },
  professionalSummary: "Diligent Backend Developer with strong skills in Java, Spring, and Hibernate. Adept at utilizing Generative AI to optimize code and enhance backend performance. Proven ability to quickly learn new technologies and effectively collaborate with cross-functional teams to deliver robust and scalable solutions.",
  education: [
    {
      degree: "Java Backend Developer",
      institution: "Masai School",
      duration: "April 2022 - May 2023"
    },
    {
      degree: "Computer Science, B.Tech",
      institution: "AKS University",
      duration: "August 2017 - August 2021"
    }
  ],
  technicalSkills: ["Node.js", "Git", "React", "JavaScript", "CSS3", "HTML5", "MySQL", "Spring Boot", "Java"],
  softSkills: ["Problem Solving", "Teamwork", "Attention to Detail", "Adaptability", "Time Management", "Effective Communication"],
  workExperience: [
    {
      company: "Floobyte IT Solution",
      position: "SDE 1",
      duration: "October 2023 - present",
      responsibilities: [
        "Developed and maintained REST APIs for seamless frontend-backend integration, enhancing user experience and system functionality.",
        "Collaborated with cross-functional teams to gather requirements, design efficient solutions, and implement scalable backend systems.",
        "Utilized Java and related frameworks for server-side development, ensuring code quality and adherence to best practices.",
        "Optimized database queries and server configurations to improve system performance, scalability, and security."
      ]
    }
  ],
  projects: [
    {
      name: "Automated Auction System",
      liveDemo: "http://vikassanodiya.site/link1.html",
      githubRepo: "http://github.com/vikashsanodiya/Automated-Auction-System",
      features: [
        "Implemented efficient workflows for auction management using Java and JDBC.",
        "Managed database operations with MySQL ensuring seamless data transactions."
      ],
      techStack: ["Java", "MySQL", "JDBC", "Git"]
    },
    {
      name: "Online Trip Management System",
      liveDemo: "http://vikassanodiya.site/link2.html",
      githubRepo: "http://github.com/vikashsanodiya/online-trip-management-system",
      features: [
        "Collaborated with frontend developers, product managers, and designers to define project requirements and deliver efficient backend solutions.",
        "Developed and maintained server-side applications using Java and Spring Boot, ensuring stability and high performance.",
        "Implemented RESTful APIs for seamless integration with frontend components and external services, improving overall system functionality.",
        "Utilized Hibernate and ORM to manage database operations, optimizing MySQL queries for better performance and scalability.",
        "Conducted thorough testing and debugging to identify and resolve issues, enhancing the reliability of the booking and feedback functionalities.",
        "Maintained version control using Git, facilitating collaborative development within the team.",
        "Regularly updated the project with emerging technologies and best practices in backend development, improving code quality and system architecture."
      ],
      techStack: ["Java", "Spring Boot", "Hibernate", "ORM", "MySQL", "Swagger UI", "Git"]
    }
  ],
  achievements: [
    {
      title: "Volunteer",
      organization: "AKS University",
      description: "Volunteered at AKS University for the Intonation Conference, managing conference logistics and operations.",
      certificationLink: "http://vikassanodiya.site/achivement.html"
    }
  ],
  certifications: [
    {
      title: "Java Backend Development",
      institution: "Masai School",
      description: "I successfully completed Masai School's Full Stack Web Development course, acquiring skills in Java Backend Development through 2160 hours of practical training.",
      certificationLink: "https://masai-resume-builder-user-data.s3.ap-south-1.amazonaws.com/test/certificate/6559d88f2bea09fa16055711/uI89.pdf"
    }
  ],
  interests: ["Dealing with Electronic Gadgets", "Teaching"]
});

export const JSON_TEMPLATE = JSON.stringify(sampleJson, null, 2);
