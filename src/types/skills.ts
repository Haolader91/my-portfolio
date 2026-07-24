import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

export interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
      { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "REST API", icon: TbApi, color: "text-purple-400" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-600" },
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
      { name: "Figma", icon: FaFigma, color: "text-pink-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-400" },
    ],
  },
];
