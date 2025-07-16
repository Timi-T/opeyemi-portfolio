import {
  CircleCheckBig,
  Gem,
  Lightbulb,
  Package,
  TelescopeIcon,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";

export const slideWords = [
  {
    title: "High quality",
    icon: <Gem className="text-black" />,
  },
  {
    title: "Performant",
    icon: <Zap className="text-black" />,
  },
  {
    title: "Simple",
    icon: <CircleCheckBig className="text-black" />,
  },
  {
    title: "Scalable",
    icon: <TrendingUp className="text-black" />,
  },
];

export const socialLinks = {
  github: "https://github.com/Timi-T",
  medium: "https://medium.com/@ogunbodetimi",
};

export const counterItems = [
  {
    value: 4,
    label: "Years of experience",
    prefix: "~",
    href: "#experience",
  },
  {
    value: 5600,
    label: "Github contributions",
    suffix: "+",
    href: socialLinks.github,
  },
  /* {
    value: 5,
    label: "Projects",
    suffix: "+",
  }, */
  {
    value: 5,
    label: "Articles published",
    href: socialLinks.medium,
  },
];

export const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

export const experienceCards = [
  {
    imgPath: "/images/totally-ts.png",
    logoPath: "/images/blockops.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Built a powerful dashboard to simplify blockchain node deployment and management which helped land key partnerships with SSV, PayCrest, Starknet, and Obol.",
      "Developed real-time chart panels with React + Redux, optimized API calls, and boosted dashboard speed by 30%.",
      "Created a scalable TypeScript component library with Storybook, streamlining UI consistency and team velocity.",
      "Worked closely with backend and DevOps to ensure smooth data integration and faster product iterations.",
    ],
    website: "https://blockops.network/",
  },
  {
    imgPath: "/images/localhost.png",
    logoPath: "/images/blockops.png",
    title: "Devops Engineer (Intern)",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Built CI/CD pipelines with GitHub Actions, streamlining deployment in test environments.",
      "Applied core DevOps practices to reduce friction in internal project delivery.",
      "Used Grafana and logs to monitor systems and troubleshoot staging issues.",
    ],
    website: "https://blockops.network/",
  },
  {
    imgPath: "/images/alx-cert.png",
    logoPath: "/images/alx-logo.png",
    title: "Software Engineering Fellowship",
    date: "Aug 2021 - Sept 2022",
    responsibilities: [
      "Learnt core software engineering concepts across low- and high-level programming—C, Python, JavaScript, Bash scripting, operating systems, and networking.",
      "Collaborated on real-world projects with students across Africa and completed the program as part of the top 10% of graduates in 2022, out of thousands who enrolled.",
    ],
    website: "https://www.alxafrica.com/",
  },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const navLinks = [
  {
    name: "Blog",
    link: "#blog",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

export const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];
