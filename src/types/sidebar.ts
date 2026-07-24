import { IconType } from "react-icons";
import {
  FiHome,
  FiUser,
  FiBookOpen,
  FiCode,
  FiFolder,
  FiTrendingUp,
  FiFileText,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

export interface NavItem {
  name: string;
  href: string;
  icon: IconType;
}

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export const cvDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1GHL3zzQbN8yOT_JlZOwKGzQMe-a_9m2b";

export const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "About", href: "/about", icon: FiUser },
  { name: "Skills", href: "/skills", icon: FiCode },
  { name: "Projects", href: "/projects", icon: FiFolder },
  { name: "Journey", href: "/journey", icon: FiTrendingUp },
  { name: "Education", href: "/education", icon: FiBookOpen },
  { name: "Blog", href: "/blog", icon: FiFileText },
  { name: "Contact", href: "/contact", icon: FiMail },
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/Haolader91", icon: FiGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/akhaolader",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/AK_Haolader", icon: FiTwitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/ak_haolader",
    icon: FiInstagram,
    label: "Instagram",
  },
];
