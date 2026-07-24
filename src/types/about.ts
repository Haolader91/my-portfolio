import { IconType } from "react-icons";
import { FiUser, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";
import { FaCode, FaPalette, FaServer, FaLightbulb } from "react-icons/fa";

export interface InfoItem {
  label: string;
  value: string;
  icon: IconType;
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: IconType;
}

export const cvDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1GHL3zzQbN8yOT_JlZOwKGzQMe-a_9m2b";

export const infoList: InfoItem[] = [
  { label: "Name", value: "AK Haolader", icon: FiUser },
  { label: "Email", value: "haolader910@gmail.com", icon: FiMail },
  { label: "Location", value: "Dhaka, Bangladesh", icon: FiMapPin },
  { label: "Freelance", value: "Available", icon: FiBriefcase },
];

export const services: ServiceItem[] = [
  {
    title: "Web Development",
    desc: "Building responsive, modern, and scalable web applications.",
    icon: FaCode,
  },
  {
    title: "UI/UX Design",
    desc: "Designing clean, aesthetic, and user-friendly web interfaces.",
    icon: FaPalette,
  },
  {
    title: "Backend Development",
    desc: "Building secure, fast, and scalable APIs & database structures.",
    icon: FaServer,
  },
  {
    title: "Problem Solving",
    desc: "Love to solve complex logical problems and learn new tech.",
    icon: FaLightbulb,
  },
];
