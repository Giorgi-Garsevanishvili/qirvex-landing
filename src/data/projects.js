import voteESNIMG from "../assets/photos/vote-esn-logo.png";
import ankhLogo from "../assets/photos/ankh-logo.png";
import qirvexLogo from "../assets/photos/qirvex-portfolio.png";
import contriboIMG from "../assets/photos/Contribo-qirvex-fill.svg";

export const projects = [
  {
    title: "VoteESN | Digital Elections Platform",
    description:
      "A secure and lightweight digital voting platform designed for Erasmus Student Network (ESN) sections and adaptable for NGOs or small-to-mid-scale organizations. This frontend interface, built with Vanilla JavaScript, seamlessly integrates with the VoteESN API for real-time election results.",
    stack: ["Vanilla JS", "Netlify"],
    github: "https://github.com/Giorgi-Garsevanishvili/VoteESN-Web",
    live: "https://voteesn.qirvex.dev/",
    image: voteESNIMG,
    type: "front",
    id: 1,
  },
  {
    title: "VoteESN | Core API Service",
    description:
      "The backend engine powering VoteESN. Built with Node.js, Express, and MongoDB Atlas, it ensures secure, section-based voting, real-time tallying, and reliable data management for elections in ESN and other volunteer-driven organizations.",
    stack: ["Node.js", "MongoDB Atlas", "Express", "Mongoose"],
    github: "https://github.com/Giorgi-Garsevanishvili/VoteESN-API",
    live: "https://voteesn-api.onrender.com/",
    image: voteESNIMG,
    type: "back",
    id: 2,
  },
  {
    title: "Ankh Tools | Digital Board Companion",
    description:
      "A interactive board tool for the strategy game Ankh: Gods of Egypt. It replicates the physical board experience, enabling smooth and immersive gameplay for both remote and in-person sessions.",
    stack: ["Vanilla JS", "Netlify"],
    github:
      "https://github.com/Giorgi-Garsevanishvili/Ankh-Gods-of-Egypt---IIG-s-Prod",
    live: "https://ankh-tools-gg.netlify.app/",
    image: ankhLogo,
    type: "front",
    id: 3,
  },
  {
    title: "Qirvex | Portfolio Website",
    description:
      "My personal portfolio website, built with React and Vite and auto-deployed to Netlify. Features a dynamic hero section, curated project showcase, responsive layouts, and subtle animations for a modern, polished presentation.",
    stack: ["React", "Vite", "Netlify"],
    github: "https://github.com/Giorgi-Garsevanishvili/qirvex-landing",
    live: "https://qirvex.dev",
    image: qirvexLogo,
    type: "front",
    id: 4,
  },
  {
    title: "Contribo | Volunteer Engagement Platform",
    description:
      "A next-generation volunteer engagement and management platform built with React and Vite. Offers a fully responsive UI, interactive dashboards, event tracking, and performance analytics — all optimized for easy scaling and future feature expansion.",
    stack: ["React", "NextJS", "TypeScript", "SQL", "Prisma", "Neon"],
    github: "https://github.com/Giorgi-Garsevanishvili/Contribo",
    live: "https://contribo.qirvex.dev",
    image: contriboIMG,
    type: "front",
    soon: true,
    id: 5,
  },
];

const defaultData = [
  {
    title: "Contribo | Core API Service",
    description:
      "The backend service for Contribo, built for performance, scalability, and security. Handles volunteer data management, attendance tracking, and event analytics, providing a reliable foundation for the entire Contribo platform.",
    stack: ["Node.js", "Express", "PostgreSQL"],
    // github: "https://qirvex.dev",
    // live: "https://qirvex.dev",
    image: contriboIMG,
    type: "back",
    soon: true,
    id: 6,
  },
];
