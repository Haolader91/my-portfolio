export interface JourneyItem {
  title: string;
  subTitle: string;
  duration: string;
  description: string;
}

export const journeyData: JourneyItem[] = [
  {
    title: "Full Stack & Next.js Ecosystem",
    subTitle: "Advanced Web Application Development",
    duration: "2024 - Present",
    description:
      "Mastering Next.js (App Router), Server Actions, Prisma ORM, and Full Stack integration. Building complex projects like SkillSphere and KeenKeeper.",
  },
  {
    title: "Frontend Mastery & Modern UI",
    subTitle: "React.js & Utility-First CSS Frameworks",
    duration: "2023 - 2024",
    description:
      "Deep-dived into React, Hooks, Tailwind CSS, DaisyUI, and JavaScript (ES6+). Developed interactive dashboard interfaces and responsive web layouts.",
  },
  {
    title: "Programming Foundation",
    subTitle: "HTML, CSS & Basic Problem Solving",
    duration: "2023",
    description:
      "Started web development journey. Focused on core web standards, HTML5, CSS3, Flexbox/Grid layouts, and building fundamental logical thinking.",
  },
];
