import {
  CircleCheckBig,
  Gem,
  TrendingUp,
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
    duration: '3 years',
    responsibilities: [
      "✨ Spearheaded development of the Blockops user dashboard, powering product features like Telescope 🔭 (node monitoring), Mission Control 🚀 (infrastructure orchestration), and Pulsar 🌌 (seamless indexer deployment). These contributions supported key partnerships with SSV, Obol, Starknet, Lido, Subquery, and Paycrest, directly driving adoption and credibility.",
      "⚡ Reduced EVM chain onboarding time by ~70% (from 2–4 weeks down to 3–7 days) through streamlined integration flows, modularized components , and enhanced developer experience, driving faster time-to-market ⏩ for new EVM networks.",
      "🧩 Modularized all major frontend features for clarity, composability, and scalability, laying the foundation for a smooth transition into a microfrontend architecture, ensuring long-term flexibility and maintainability 🛡️.",
      "🤝 Collaborated closely with cross-functional teams (backend, product 📦, and design 🎨) to bring new features to market, bridging technical execution with deep user experience insights for Web3 developers, and strengthening product-market fit 🎯.",
      /* "🔍 Initiated deep research into Grafana integration for Telescope tooling, enhancing observability 👀 and performance monitoring, for Telescope 🔭." */
    ],
    website: "https://blockops.network/",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS", "Redux", "Jest", "Cypress"],
    impact: [
      "⚡ Cut integration time for EVM chains by 70% through reusable, modular components.",
      "🛰️ Spearheaded MissionControl (node orchestration), Telescope (graph visualizations), and Pulsar (blockchain indexing).",
      "🤝 Enabled adoption across major blockchain providers (Obol, SSV, Lido) via seamless integrations.",
    ],

  },
  {
    imgPath: "/images/localhost.png",
    logoPath: "/images/nautilus-logo.png",
    title: "Devops Engineer (Intern)",
    date: "July 2022 - December 2022",
    duration: "6 months",
    responsibilities: [
      "⚡ Implemented and optimized CI/CD pipelines using GitHub Actions, streamlining the development workflow and cutting release cycles by 50%+ 🚀.",
      "🔧 Automated infrastructure provisioning and configuration management with Ansible and Terraform, improving application deployment efficiency by 40%+ ⏩.",
      "🛠️ Assisted in diagnosing and resolving production incidents by analyzing logs and leveraging monitoring tools like Grafana, ensuring minimal downtime and reducing average resolution time to ~15 minutes 📉.",
    ],
    website: "https://www.nautilus.tech/",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"],
    impact: [
      "⚙️ Automated CI/CD pipelines to improve deployment efficiency and reduce release times.",
      "☁️ Managed containerized environments with Docker and Kubernetes for scalable apps.",
      "📊 Optimized infrastructure monitoring and logging, improving system reliability.",
    ],


  },
  {
    imgPath: "/images/alx-cert.png",
    logoPath: "/images/alx-logo.png",
    title: "Software Engineering Fellowship",
    date: "Aug 2021 - Sept 2022",
    duration: "1 year",
    responsibilities: [
      "Gained strong foundations in software engineering, mastering C, Python, JavaScript, Bash, operating systems, and networking.",
      "Built and deployed real-world projects in cross-functional teams with peers across Africa.",
      "Graduated in the top 10% of thousands of students in 2022, demonstrating excellence and consistency.",
    ],

    website: "https://www.alxafrica.com/",
    tech: ["C", "Linux", "Docker", "Javascript", "Python", "Express", "SQL", "Docker",],
    impact: [
      "💻 Mastered core software engineering across C, Python, JavaScript, Bash, OS, and networking.",
      "🤝 Collaborated with peers across Africa on real-world engineering projects.",
      "🏆 Graduated in the top 10% of thousands of enrolled students (2022).",
      "🧠 Built strong foundations in problem-solving, algorithms, and system design.",
    ],


  },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  /* {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  }, */
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
    link: "/blog",
  },
  {
    name: "Experience",
    link: "/#experience",
  },
  {
    name: "Skills",
    link: "/#skills",
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
