// thoda zada ts ho gya idhar

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  PYTHON = "python",
  YOLOV8 = "yolov8",
  FLASK = "flask",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MYSQL = "mysql",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad, still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.PYTHON]: {
    id: 5,
    name: "python",
    label: "Python",
    shortDescription:
      "powering smart solutions with clean and versatile code 🐍💻",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.YOLOV8]: {
    id: 6,
    name: "yolov8",
    label: "YOLOv8",
    shortDescription:
      "AI-powered real-time object detection and image analysis 🤖👁️",
    color: "#111111",
    icon: "https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg",
  },

  [SkillNames.FLASK]: {
    id: 7,
    name: "flask",
    label: "Flask",
    shortDescription:
      "a lightweight Python framework for building web applications 🧪🌐",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },

  [SkillNames.REACT]: {
    id: 8,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.VUE]: {
    id: 9,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 10,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 11,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.NODEJS]: {
    id: 12,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.EXPRESS]: {
    id: 13,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 14,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MYSQL]: {
    id: 15,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "keeping your data organized, one query at a time 🐬💾",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 16,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.GIT]: {
    id: 17,
    name: "git",
    label: "Git",
    shortDescription:
      "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 18,
    name: "github",
    label: "GitHub",
    shortDescription:
      "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.PRETTIER]: {
    id: 19,
    name: "prettier",
    label: "Prettier",
    shortDescription:
      "making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },

  [SkillNames.NPM]: {
    id: 20,
    name: "npm",
    label: "NPM",
    shortDescription:
      "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 21,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  [SkillNames.WORDPRESS]: {
    id: 22,
    name: "wordpress",
    label: "WordPress",
    shortDescription:
      "the grandpa of CMS, still rocking that cane 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },

  [SkillNames.LINUX]: {
    id: 23,
    name: "linux",
    label: "Linux",
    shortDescription:
      "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 24,
    name: "docker",
    label: "Docker",
    shortDescription:
      "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.NGINX]: {
    id: 25,
    name: "nginx",
    label: "NginX",
    shortDescription:
      "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },

  [SkillNames.AWS]: {
    id: 26,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },

  [SkillNames.VIM]: {
    id: 27,
    name: "vim",
    label: "Vim",
    shortDescription:
      "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 28,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "April 2026",
    title: "INTERN",
    company: "Municipality of Boac (ICT Section) | Marinduque",
    description: [
      "Developed an Employee ID System for data management and ID processing.",
      "Contributed to the FAAS System through coding, testing, debugging, and documentation.",
      "Supported network configuration, CCTV monitoring, and technical troubleshooting.",
      "Collaborated with users to gather requirements and improve system functionality.",
    ],
    skills: [
      SkillNames.MYSQL,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },

  {
    id: 2,
    startDate: "Aug 2025",
    endDate: "Dec 2025",
    title: "Software Developer / Programmer / Leader",
    company: "Thesis Project",
    description: [
      "Developed software for a Smart Fish Drying System using Arduino, Raspberry Pi, and sensors.",
      "Integrated Python, OpenCV, and YOLOv8 for AI-based fish drying analysis.",
      "Created a Flask web dashboard for real-time temperature, moisture, and progress monitoring.",
      "Applied skills in embedded systems, IoT, automation, AI, and programming.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.CSS,
      SkillNames.YOLOV8,
      SkillNames.FLASK,
      SkillNames.JS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],

  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};