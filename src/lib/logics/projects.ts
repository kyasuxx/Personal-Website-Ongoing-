export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  media: string;
  isVideo: boolean;
}

export const projects: Project[] = [
  {
    title: "CyberPablo",
    subtitle: "Secure Heatmap & Incident Tracker",
    description: "Secure web-based incident tracking platform featuring an interactive geographical heatmap for real-time monitoring, built in collaboration with the Department of Justice.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    media: "/assets/demo_cyberpablo.mp4",
    isVideo: true
  },
  {
    title: "LCHAT",
    subtitle: "Laguna College Chatbot",
    description: "Web-based AI chatbot providing instant responses to college inquiries using Flask backend logic and natural language parsing.",
    tags: ["Python", "Flask", "SCSS", "NLP"],
    media: "/assets/demo_lchat.mp4",
    isVideo: true
  },
  {
    title: "SocialEyes | YUNA",
    subtitle: "YouTube Channel Content Analyzer",
    description: "Comprehensive web tool analyzing YouTube video content and comment sections using Natural Language Processing for sentiment reports.",
    tags: ["Python", "Flask", "NLP"],
    media: "/assets/demo_socialeyes.png",
    isVideo: false
  },
  {
    title: "EuroTropics Grill",
    subtitle: "Restaurant Management System",
    description: "Responsive website for managing food orders featuring a secure login system and interactive administrative dashboards.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    media: "/assets/demo_eurotropics.png",
    isVideo: false
  }
];
