export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status?: string;
  result: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA) in Accounting",
    institution: "Your College / University Name",
    location: "Dhaka, Bangladesh",
    duration: "2021 - Present",
    status: "3rd Year (Running)",
    result: "CGPA: 3.50 / 4.00",
    description:
      "Currently in 3rd year, focusing on Financial Accounting, Cost Accounting, Taxation, Auditing, and Business Information Systems.",
    highlights: [
      "Financial Accounting",
      "Cost & Management",
      "Taxation & Auditing",
      "Business Information Systems",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Your College Name",
    location: "Dhaka, Bangladesh",
    duration: "2019 - 2020 (Exam 2021)",
    status: "Completed",
    result: "GPA: 5.00 / 5.00",
    description:
      "Completed Higher Secondary education from Commerce background with a strong base in Accounting, Finance, and Business Organization.",
    highlights: ["Business Studies", "Accounting", "Finance & Banking"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Your High School Name",
    location: "Dhaka, Bangladesh",
    duration: "2017 - 2019",
    status: "Completed",
    result: "GPA: 5.00 / 5.00",
    description:
      "Successfully completed secondary education from Science background with analytical problem-solving skills.",
    highlights: ["Science Stream", "Higher Mathematics", "Physics"],
  },
];
