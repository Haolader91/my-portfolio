import { IconType } from "react-icons";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaStar,
} from "react-icons/fa";

export interface LearningStep {
  phase: string;
  title: string;
  icon: IconType;
  color: string;
  glow: string;
}

export const learningSteps: LearningStep[] = [
  {
    phase: "Phase 1",
    title: "HTML, CSS & JS",
    icon: FaCode,
    color:
      "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-emerald-500/20",
    glow: "shadow-emerald-500/30",
  },
  {
    phase: "Phase 2",
    title: "React & Tailwind",
    icon: FaLaptopCode,
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-blue-500/20",
    glow: "shadow-blue-500/30",
  },
  {
    phase: "Phase 3",
    title: "Next.js & Fullstack",
    icon: FaServer,
    color:
      "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-purple-500/20",
    glow: "shadow-purple-500/30",
  },
  {
    phase: "Phase 4",
    title: "Real World Projects",
    icon: FaRocket,
    color:
      "text-amber-400 border-amber-500/30 bg-amber-500/10 shadow-amber-500/20",
    glow: "shadow-amber-500/30",
  },
  {
    phase: "Current",
    title: "Job Ready & Growing",
    icon: FaStar,
    color: "text-rose-400 border-rose-500/30 bg-rose-500/10 shadow-rose-500/20",
    glow: "shadow-rose-500/30",
  },
];
