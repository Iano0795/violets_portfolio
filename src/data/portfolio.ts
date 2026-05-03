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

export type AboutCapability = {
  title: string;
  description: string;
};

export type AboutProfile = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  capabilities: AboutCapability[];
  targetRoles: string[];
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
  source: string;
  summary: string;
  objective: string;
  actions: string[];
  tools: string[];
  skills: string[];
  outcome: string;
  href?: string;
};

export type Credential = {
  type: string;
  title: string;
  issuer: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  featured?: boolean;
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

export const projects = [
  {
    title: "Security Monitoring & Enumeration Lab",
    source: "TryHackMe",
    summary:
      "Practiced service enumeration, network scanning, and basic exploitation analysis in a controlled lab environment.",
    objective:
      "Identify exposed services, understand attack surface, and document findings from a vulnerable machine.",
    actions: [
      "Performed network scanning and service enumeration using Nmap.",
      "Identified open ports, service versions, and potential attack paths.",
      "Reviewed common misconfigurations and exploitation possibilities.",
      "Documented findings, risk areas, and basic mitigation recommendations.",
    ],
    tools: ["Nmap", "Wireshark", "Metasploit", "Linux"],
    skills: [
      "Enumeration",
      "Network analysis",
      "Vulnerability assessment",
      "Documentation",
    ],
    outcome:
      "Improved understanding of how exposed services can be identified, assessed, and reported during early-stage security analysis.",
  },
  {
    title: "Basic Pentesting & Incident Analysis Lab",
    source: "Custom Lab",
    summary:
      "Simulated a basic attack investigation workflow from discovery to incident documentation.",
    objective:
      "Trace a controlled attack path, identify indicators of compromise, and summarize incident findings.",
    actions: [
      "Used basic scanning and enumeration to identify possible entry points.",
      "Reviewed authentication weaknesses and brute-force concepts using Hydra in a controlled setting.",
      "Mapped observed activity to possible incident indicators.",
      "Created a short incident-style summary with findings and recommendations.",
    ],
    tools: ["Hydra", "Nmap", "Linux", "Burp Suite"],
    skills: [
      "Incident analysis",
      "Brute-force analysis",
      "Authentication testing",
      "Security reporting",
    ],
    outcome:
      "Built practical understanding of how offensive observations can support defensive investigation and SOC-style triage.",
  },
  {
    title: "Reverse Engineering & Malware Analysis Practice",
    source: "CrackMe / Practice Binary",
    summary:
      "Analyzed a simple practice binary to understand program behavior, strings, and basic reverse engineering workflow.",
    objective:
      "Inspect binary behavior, identify useful strings, and understand how sensitive logic can be exposed through poor software protection.",
    actions: [
      "Loaded and inspected a practice binary using Ghidra.",
      "Reviewed strings, functions, and control flow at a basic level.",
      "Identified exposed logic and sensitive indicators.",
      "Documented observations in a beginner-friendly analysis note.",
    ],
    tools: ["Ghidra", "Linux", "Strings", "Terminal"],
    skills: [
      "Reverse engineering basics",
      "Malware analysis fundamentals",
      "Static analysis",
      "Technical documentation",
    ],
    outcome:
      "Developed foundational awareness of binary analysis, exposed logic risks, and malware investigation concepts.",
  },
] satisfies Project[];

export const credentials = [
  {
    type: "Education",
    title: "Bachelor's Degree in Mathematics and Computer Science",
    issuer: "Kirinyaga University",
    period: "2021 - 2025",
    status: "Completed / Awaiting Graduation",
    description:
      "Built a strong foundation in programming, systems thinking, mathematics, databases, and computer science fundamentals.",
    highlights: [
      "Programming fundamentals",
      "Computer science foundations",
      "Mathematics and analytical thinking",
      "Databases and systems concepts",
    ],
    featured: true,
  },
  {
    type: "Certification / Training",
    title: "CCNA / Networking Fundamentals",
    issuer: "Cisco Networking Academy",
    period: "In Progress",
    status: "Learning Path",
    description:
      "Developing networking fundamentals relevant to SOC analysis, network security, and infrastructure monitoring.",
    highlights: [
      "TCP/IP",
      "Routing and switching basics",
      "Subnetting",
      "Network troubleshooting",
      "Security fundamentals",
    ],
  },
  {
    type: "Practical Labs",
    title: "Cybersecurity Labs & SOC Foundations",
    issuer: "TryHackMe",
    period: "Ongoing",
    status: "Hands-on Practice",
    description:
      "Completing practical cybersecurity labs focused on enumeration, Linux, network scanning, security tools, and beginner SOC concepts.",
    highlights: [
      "Pre-Security",
      "Linux fundamentals",
      "Nmap",
      "Web security basics",
      "Defensive security concepts",
    ],
  },
  {
    type: "Learning Track",
    title: "SOC Analyst & Incident Response Preparation",
    issuer: "Cybersecurity Self-Study",
    period: "Ongoing",
    status: "Active Development",
    description:
      "Structured self-study focused on SOC monitoring, phishing analysis, alert triage, incident response, and vulnerability assessment.",
    highlights: [
      "SIEM concepts",
      "Alert triage",
      "Phishing analysis",
      "Incident response lifecycle",
      "Vulnerability assessment",
    ],
  },
] satisfies Credential[];

export const about = {
  eyebrow: "About Violet",
  title: "A focused defensive security profile.",
  description:
    "Violet brings an analytical and disciplined approach to cybersecurity, shaped by her Mathematics and Computer Science background. Her work is grounded in careful investigation, clear documentation, and practical security learning.",
  paragraphs: [
    "She is developing capability across SOC monitoring, network security, vulnerability assessment, phishing analysis, and incident response. Through hands-on labs and guided practice, she has worked with tools such as Nmap, Wireshark, Hydra, Burp Suite, Linux, and Ghidra to understand how threats are identified, analyzed, and reported.",
    "Violet is especially drawn to defensive security because it combines technical curiosity with real-world problem solving. She is looking for opportunities where she can support security monitoring, investigate alerts, document findings, and continue growing within a structured security team.",
  ],
  capabilities: [
    {
      title: "Defensive Mindset",
      description:
        "Interested in protecting systems through monitoring, investigation, and practical risk reduction.",
    },
    {
      title: "Analytical Foundation",
      description:
        "Applies structured thinking from mathematics and computer science to security analysis.",
    },
    {
      title: "Hands-on Practice",
      description:
        "Builds practical confidence through labs, simulations, and security tool workflows.",
    },
    {
      title: "Clear Documentation",
      description:
        "Values accurate notes, concise reporting, and evidence-based communication.",
    },
  ],
  targetRoles: [
    "Cybersecurity Intern",
    "SOC Analyst L1",
    "Network Security Analyst",
    "IT Security Support",
  ],
} satisfies AboutProfile;

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
  about,
  experienceFocus: [
    "Cybersecurity Labs",
    "Data Integrity",
    "Technical Support",
    "Documentation",
  ],
  experience,
  projectFocus: [
    "Lab-based learning",
    "Defensive analysis",
    "Tool familiarity",
    "Report writing",
  ],
  projects,
  credentialFocus: [
    "Academic foundation",
    "Networking fundamentals",
    "Practical labs",
    "SOC learning path",
  ],
  credentials,
  contactLinks: [
    { label: "Email", href: "mailto:violet@example.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "TryHackMe", href: "https://tryhackme.com/" },
  ] satisfies ContactLink[],
};
