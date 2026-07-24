import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export interface ContactDetail {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export const contactDetails: ContactDetail[] = [
  {
    icon: FiMail,
    label: "Email",
    value: "haolader910@gmail.com",
    href: "mailto:haolader910@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+880 1619 013056",
    href: "tel:+8801619013056",
  },
  {
    icon: FiMapPin,
    label: "Your Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

export const socialLinks: SocialLink[] = [
  { icon: FiGithub, href: "https://github.com/Haolader91", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/akhaolader",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/AK_Haolader", label: "Twitter" },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/ak_haolader",
    label: "Instagram",
  },
];
