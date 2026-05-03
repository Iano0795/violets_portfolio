export type NavigationLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  category: string;
  description: string;
  label: string;
  featured?: boolean;
  items: string[];
};

export type SkillHighlight = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tags: string[];
  featured?: boolean;
};

export type Project = {
  title: string;
  type: string;
  summary: string;
  focusAreas: string[];
  href?: string;
};

export type Credential = {
  name: string;
  issuer: string;
  status: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const experience = [
  {
    company: "Adept College",
    role: "Cybersecurity & Programming Intern",
    period: "May 2024 - August 2024",
    location: "Kenya",
    summary:
      "Supported practical cybersecurity and programming activities, including hands-on labs, basic security testing, and technical learning support.",
    bullets: [
      "Facilitated hands-on security labs using tools such as Nmap and Hydra.",
      "Supported learners in understanding enumeration, brute-force concepts, and secure coding basics.",
      "Assisted with basic programming and cybersecurity exercises.",
      "Reinforced practical threat detection and incident analysis concepts through lab-based learning.",
    ],
    tags: [
      "Cybersecurity Labs",
      "Nmap",
      "Hydra",
      "Secure Coding",
      "Technical Support",
    ],
    featured: true,
  },
  {
    company: "Promze Store",
    role: "Data Encoder & Reconciliation Assistant",
    period: "September 2025 - November 2025",
    location: "Kenya",
    summary:
      "Supported data accuracy, reconciliation, and record validation workflows with a focus on consistency and auditability.",
    bullets: [
      "Validated and reconciled 500+ records to improve data accuracy and consistency.",
      "Maintained audit trails for record updates and reconciliation activities.",
      "Identified data gaps, inconsistencies, and duplicate entries for correction.",
      "Supported structured reporting and documentation for operational records.",
    ],
    tags: [
      "Data Validation",
      "Reconciliation",
      "Audit Trails",
      "Documentation",
      "Reporting",
    ],
  },
] satisfies ExperienceItem[];

export const portfolio = {
  personal: {
    name: "Violet Achieng",
    role: "Cybersecurity Analyst",
    location: "Nairobi, Kenya",
    headline:
      "Cybersecurity portfolio focused on SOC monitoring, threat detection, network security, and incident response.",
    summary:
      "Violet Achieng builds practical security skills through monitoring workflows, defensive lab work, incident analysis, and clear security documentation.",
  },
  navigationLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationLink[],
  skills: [
    {
      category: "SOC & Monitoring",
      description:
        "Monitoring and triage capabilities for entry-level SOC environments.",
      label: "SOC readiness",
      featured: true,
      items: [
        "Alert triage",
        "Log review",
        "Incident escalation",
        "Phishing investigation",
        "IOC identification",
        "Security reporting",
      ],
    },
    {
      category: "Networking",
      description:
        "Core network fundamentals for analyzing traffic and understanding security events.",
      label: "Network defense",
      items: [
        "TCP/IP",
        "DNS",
        "HTTP/S",
        "Subnetting",
        "VPN fundamentals",
        "Network segmentation",
      ],
    },
    {
      category: "Security Tools",
      description:
        "Hands-on tool exposure for scanning, testing, analysis, and lab workflows.",
      label: "Tooling",
      featured: true,
      items: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Hydra", "Ghidra"],
    },
    {
      category: "Systems & Platforms",
      description:
        "Practical operating system and lab environment skills for security work.",
      label: "Systems",
      items: [
        "Linux",
        "Windows basics",
        "Docker basics",
        "Git/GitHub",
        "Command line",
        "Virtual labs",
      ],
    },
    {
      category: "Scripting & Data",
      description:
        "Basic scripting, data handling, and documentation skills for repeatable analysis.",
      label: "Scripting",
      items: [
        "Python",
        "SQL",
        "Bash basics",
        "Data validation",
        "Automation basics",
        "Technical documentation",
      ],
    },
    {
      category: "Security Concepts",
      description:
        "Foundational security concepts practiced through labs and guided analysis.",
      label: "Security fundamentals",
      items: [
        "Vulnerability assessment",
        "Enumeration",
        "Brute-force analysis",
        "Privilege escalation basics",
        "Malware analysis basics",
        "Incident response lifecycle",
      ],
    },
  ] satisfies SkillGroup[],
  skillHighlights: [
    {
      title: "SOC-ready fundamentals",
      description: "Alert triage, log review, and clear escalation habits.",
    },
    {
      title: "Practical lab exposure",
      description: "Hands-on practice across tools, systems, and security labs.",
    },
    {
      title: "Network security foundation",
      description: "Grounded understanding of traffic, protocols, and segments.",
    },
    {
      title: "Documentation mindset",
      description: "Findings written clearly for analysts, teams, and recruiters.",
    },
  ] satisfies SkillHighlight[],
  experienceFocus: [
    "Cybersecurity Labs",
    "Data Integrity",
    "Technical Support",
    "Documentation",
  ],
  experience,
  projects: [
    {
      title: "SOC Alert Triage Lab",
      type: "Defensive Lab",
      summary:
        "A structured lab for investigating suspicious activity from logs and turning raw alerts into concise analyst notes.",
      focusAreas: ["SIEM workflow", "Alert prioritization", "Incident notes"],
    },
    {
      title: "Network Traffic Investigation",
      type: "Packet Analysis",
      summary:
        "A lab project focused on identifying abnormal network behavior and summarizing findings from traffic evidence.",
      focusAreas: ["Wireshark", "Network indicators", "Traffic review"],
    },
    {
      title: "Threat Detection Case Study",
      type: "Detection Engineering",
      summary:
        "A portfolio case study for translating attacker behavior into practical detection ideas and response steps.",
      focusAreas: ["MITRE ATT&CK", "Detection logic", "Response planning"],
    },
  ] satisfies Project[],
  credentials: [
    {
      name: "Cybersecurity Training",
      issuer: "Portfolio Credential",
      status: "In progress",
    },
    {
      name: "SOC Analyst Practice",
      issuer: "Hands-on Labs",
      status: "Ongoing",
    },
  ] satisfies Credential[],
  contactLinks: [
    { label: "Email", href: "mailto:violet@example.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "TryHackMe", href: "https://tryhackme.com/" },
  ] satisfies ContactLink[],
};
