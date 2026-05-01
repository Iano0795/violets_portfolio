export type NavigationLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
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
      items: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Hydra", "Ghidra"],
    },
    {
      category: "Systems & Platforms",
      description:
        "Practical operating system and lab environment skills for security work.",
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
    "SOC-ready fundamentals",
    "Practical lab exposure",
    "Network security foundation",
    "Documentation mindset",
  ],
  experience: [
    {
      role: "Cybersecurity Portfolio Builder",
      organization: "Independent Labs",
      period: "Current",
      summary:
        "Developing hands-on defensive security projects that demonstrate monitoring, investigation, and reporting ability.",
      highlights: [
        "Documents lab findings in clear, recruiter-friendly case studies.",
        "Practices alert triage, log review, and incident response workflows.",
        "Maps project work to SOC analyst responsibilities and security frameworks.",
      ],
    },
  ] satisfies ExperienceItem[],
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
