export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  grade: string;
  gradeLabel: string;
  period?: string;
  note?: string;
}

export interface PeerCounselingExperience {
  id: string;
  role: string;
  organization: string;
  parentOrg?: string;
  period: string;
  highlights: string[];
  theme: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  departmentOrDivision?: string;
  period: string;
  responsibilities: string[];
  category: "counseling" | "advocacy" | "leadership" | "development";
}

export interface OrganizationItem {
  id: string;
  name: string;
  shortName: string;
  role: string;
  period: string;
  summary: string;
  contributions: string[];
  tag: string;
}

export interface SpeakingItem {
  id: string;
  type: "speaker" | "committee";
  title: string;
  eventOrOrg: string;
  organizer?: string;
  date: string;
  roleBadge: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const yasminProfile = {
  name: "Yasmin",
  title: "Psychology Student & Peer Counselor",
  primaryIdentity: [
    "Psychology Student",
    "Peer Counselor",
    "Mental Health & Organizational Development",
  ],
  heroStatement: "Understanding people.\nCreating space to be heard.",
  heroSubtext:
    "Grounded in psychological empathy, peer support, and organizational stewardship to foster safe, developmental spaces for students and communities.",
  about: {
    mainStatement:
      "A humanistic approach to psychology—bridging genuine peer support with disciplined organizational development.",
    fullBio:
      "I am a Psychology student at Universitas Islam Negeri Maulana Malik Ibrahim Malang, experienced in organizational development and peer counseling. Knowledge in peer counseling, public speaking, and mental health. Comfortable working individually and collaboratively, disciplined, and able to actively contribute to social and educational programs.",
    meta: [
      { label: "Focus", value: "Psychology Student" },
      { label: "Practice", value: "Peer Counselor" },
      { label: "Dialogue", value: "Public Speaker" },
      { label: "Stewardship", value: "Organizational Development" },
    ],
    pillars: [
      {
        title: "Empathic Presence",
        description:
          "Creating non-judgmental environments where individuals feel acknowledged, safe, and empowered to express themselves.",
      },
      {
        title: "Constructive Dialogue",
        description:
          "Translating psychological literacy and mental health awareness into accessible conversations and workshops.",
      },
      {
        title: "Systemic Growth",
        description:
          "Building disciplined organizational workflows, member development programs, and responsive student advocacy.",
      },
    ],
  },
  education: [
    {
      id: "edu-1",
      degree: "Psychology",
      institution: "Universitas Islam Negeri Maulana Malik Ibrahim Malang",
      grade: "3.85",
      gradeLabel: "GPA 3.85 / 4.0",
      period: "Undergraduate Program",
      note: "Focus on psychological discussion, peer counseling facilitation, and behavioral dynamics.",
    },
    {
      id: "edu-2",
      degree: "MIPA",
      institution: "MA Nurul Huda Sragen",
      grade: "93.4",
      gradeLabel: "Score 93.4 / 100",
      period: "Secondary Education",
      note: "Strong foundation in analytical reasoning, academic discipline, and mathematics & natural sciences.",
    },
  ] as EducationItem[],
  peerCounseling: [
    {
      id: "counseling-1",
      role: "Peer Counselor",
      organization: "Pusat Studi Gender dan Anak (PSGA)",
      parentOrg: "UIN Maulana Malik Ibrahim Malang",
      period: "August 2023 – Present",
      theme: "Safe Space & Preventive Education",
      highlights: [
        "Responsible as Peer Counselor in 'Tim Kamu Aman'",
        "Creates counseling and mental health content for student awareness",
        "Facilitates various supportive activities and community-building programs",
      ],
    },
    {
      id: "counseling-2",
      role: "Peer Counselor",
      organization: "LSO Peer Counseling OASIS",
      parentOrg: "Fakultas Psikologi UIN Malang",
      period: "April 2024 – June 2025",
      theme: "Individual Sessions & Reflective Training",
      highlights: [
        "Serves clients in one-on-one and group counseling sessions",
        "Active in continuous training and specialized discussions related to counseling and psychology practice",
      ],
    },
  ] as PeerCounselingExperience[],
  experience: [
    {
      id: "exp-1",
      role: "Peer Counselor",
      organization: "Pusat Studi Gender dan Anak UIN Maulana Malik Ibrahim Malang",
      departmentOrDivision: "Tim Kamu Aman",
      period: "August 2023 – Present",
      category: "counseling",
      responsibilities: [
        "Peer Counselor in 'Tim Kamu Aman'",
        "Creates counseling and mental health content",
        "Facilitates activities",
      ],
    },
    {
      id: "exp-2",
      role: "Peer Counselor",
      organization: "LSO Peer Counseling OASIS",
      period: "April 2024 – June 2025",
      category: "counseling",
      responsibilities: [
        "Serves clients in counseling sessions",
        "Participates in counseling and psychology training/discussions",
      ],
    },
    {
      id: "exp-3",
      role: "Human Resource",
      organization: "LSO Peer Counseling OASIS",
      period: "September 2024 – August 2025",
      category: "development",
      responsibilities: [
        "Monitors members",
        "Runs open recruitment selection",
        "Runs member engagement programs",
      ],
    },
    {
      id: "exp-4",
      role: "Staff Advokasi dan Aspirasi",
      organization: "Senat Mahasiswa Fakultas Psikologi UIN Maulana Malik Ibrahim Malang",
      departmentOrDivision: "Komisi B",
      period: "March 2024 – December 2024",
      category: "advocacy",
      responsibilities: [
        "Bridges student aspirations and faculty administration",
        "Provides channels for student aspirations",
        "Organizes aspiration forums",
        "Supervises DEMA-F Psychology",
      ],
    },
    {
      id: "exp-5",
      role: "Head of PSDM Department",
      organization: "Forum Komunikasi Mahasiswa Pelajar (FKMP) Kobar-Malang Raya",
      period: "June 2024 – June 2025",
      category: "leadership",
      responsibilities: [
        "Collects active student data",
        "Identifies training interests",
        "Provides training",
        "Introduces Kotawaringin Barat culture",
        "Provides an aspiration channel for students",
      ],
    },
    {
      id: "exp-6",
      role: "President",
      organization: "Muharikah Mabna Khadijah Al-Kubro",
      departmentOrDivision: "Ma'had Sunan Ampel Al-'Aly",
      period: "October 2023 – June 2024",
      category: "leadership",
      responsibilities: [
        "Coordinates members and programs",
        "Supports musyrifah in discipline and order",
        "Ensures mabna activities run smoothly",
        "Provides an aspiration channel",
        "Bridges students and musyrifah/murobbiah",
      ],
    },
    {
      id: "exp-7",
      role: "Staff of Tadris Division",
      organization: "LSO Tahfidz",
      period: "March 2024 – August 2025",
      category: "development",
      responsibilities: [
        "External events for member development and organizational branding",
        "Intellectual and spiritual development focused on Qur'an",
        "Responsible for tahfidz competitions",
      ],
    },
  ] as ExperienceItem[],
  organizations: [
    {
      id: "org-1",
      name: "LSO Peer Counseling OASIS",
      shortName: "OASIS",
      role: "Peer Counselor & Human Resource",
      period: "2024 – 2025",
      tag: "Counseling & HR",
      summary:
        "Dedicated student organization focused on peer mental health consultation, active listener training, and human resource sustainability.",
      contributions: [
        "Facilitated peer counseling sessions with empathic listening protocols",
        "Orchestrated open recruitment screenings and ongoing member well-being monitoring",
      ],
    },
    {
      id: "org-2",
      name: "Senat Mahasiswa Fakultas Psikologi",
      shortName: "SEMA-F",
      role: "Staff Advokasi dan Aspirasi — Komisi B",
      period: "2024",
      tag: "Advocacy & Governance",
      summary:
        "The legislative body of the Psychology Faculty ensuring transparent representation and democratic dialog between students and faculty leadership.",
      contributions: [
        "Maintained structured communication channels for academic and non-academic aspirations",
        "Conducted supervisory oversight and collaborative forums with DEMA-F Psychology",
      ],
    },
    {
      id: "org-3",
      name: "FKMP Kobar-Malang Raya",
      shortName: "FKMP",
      role: "Head of PSDM Department",
      period: "2024 – 2025",
      tag: "Student Development",
      summary:
        "Regional student community bridging Kotawaringin Barat scholars in Malang Raya through capacity development and cultural preservation.",
      contributions: [
        "Curated skill training mapped directly from active member interest assessments",
        "Promoted regional cultural identity while facilitating community aspiration feedback",
      ],
    },
    {
      id: "org-4",
      name: "Muharikah Mabna Khadijah Al-Kubro",
      shortName: "Mabna Khadijah",
      role: "President",
      period: "2023 – 2024",
      tag: "Executive Leadership",
      summary:
        "Residential collegiate hall leadership coordinating academic, spiritual, and community life at Ma'had Sunan Ampel Al-'Aly.",
      contributions: [
        "Directed operational programs and coordinated daily student living standards",
        "Served as executive bridge between residents and institutional mentors (musyrifah)",
      ],
    },
    {
      id: "org-5",
      name: "LSO Tahfidz",
      shortName: "Tahfidz",
      role: "Staff of Tadris Division",
      period: "2024 – 2025",
      tag: "Academic & Branding",
      summary:
        "Specialized institution cultivating Quranic scholarship, spiritual integrity, and educational outreach events.",
      contributions: [
        "Managed inter-collegiate competition logistics and member development programs",
        "Enhanced organizational external branding across academic platforms",
      ],
    },
  ] as OrganizationItem[],
  speakingAndEvents: [
    {
      id: "spk-1",
      type: "speaker",
      title: "Pemateri Public Speaking",
      eventOrOrg: "FKMP Kotawaringin Barat Malang Raya",
      date: "January – February 2024",
      roleBadge: "Keynote Speaker",
      description:
        "Facilitated public speaking fundamentals, confidence-building techniques, and authentic delivery for regional undergraduate members.",
    },
    {
      id: "spk-2",
      type: "speaker",
      title: "Pemateri Kesehatan Mental",
      eventOrOrg: "Talkshow Mantra — HMPS Bahtera",
      organizer:
        "Prodi Pendidikan Bahasa Indonesia, Universitas Muhammadiyah Malang",
      date: "November 2024",
      roleBadge: "Invited Speaker",
      description:
        "Delivered reflective mental health discourse focusing on emotional awareness, healthy peer boundaries, and student resilience.",
    },
    {
      id: "evt-1",
      type: "committee",
      title: "Koordinator Lapangan",
      eventOrOrg: "FKMP Goes to School (GTS)",
      organizer: "FKMP Kotawaringin Barat Malang Raya",
      date: "Field Coordinator",
      roleBadge: "Field Leadership",
      description:
        "Oversaw on-ground team coordination, educational roadshow itineraries, and student outreach logistics across regional senior high schools.",
    },
    {
      id: "evt-2",
      type: "committee",
      title: "Ketua Pelaksana",
      eventOrOrg: "Psychostar",
      organizer: "LSO Tahfidz",
      date: "Chief Organizer",
      roleBadge: "Event Chair",
      description:
        "Steered program planning, budget execution, and cross-division alignment for the annual flagship event.",
    },
    {
      id: "evt-3",
      type: "committee",
      title: "Ketua Pelaksana",
      eventOrOrg: "Masykuran",
      organizer: "FKMP Kotawaringin Barat Malang Raya",
      date: "Chief Organizer",
      roleBadge: "Event Chair",
      description:
        "Led commemorative community assembly fostering regional togetherness and organizational reflection.",
    },
  ] as SpeakingItem[],
  skills: [
    {
      category: "COUNSELING",
      description: "Empathic, ethical, and evidence-informed peer support frameworks.",
      skills: [
        "Peer Counseling",
        "Mental Health Education",
        "Counseling Facilitation",
        "Psychology Discussion",
      ],
    },
    {
      category: "COMMUNICATION",
      description: "Articulate verbal delivery, workshop stewardship, and authentic dialogue.",
      skills: [
        "Public Speaking",
        "Presentation",
        "Facilitation",
        "Interpersonal Communication",
      ],
    },
    {
      category: "ORGANIZATION",
      description: "Strategic talent management, institutional bridging, and execution.",
      skills: [
        "Organizational Development",
        "Human Resource",
        "Team Coordination",
        "Event Management",
        "Student Advocacy",
        "Program Development",
      ],
    },
  ] as SkillCategory[],
  contact: {
    heading: "Let's create meaningful spaces for people to connect, learn, and grow.",
    subheading:
      "Open to peer counseling initiatives, mental health collaborations, student workshops, and organizational development dialogues.",
    cta: "Let's Connect",
    // Clearly marked placeholders as requested in the brief
    email: "yasmin.psychology@example.com",
    linkedin: "https://linkedin.com/in/yasmin-psychology",
    instagram: "https://instagram.com/yasmin.psych",
    isPlaceholder: true,
  },
  footer: {
    name: "Yasmin",
    role: "Psychology Student · Peer Counselor",
    year: "2025",
    rights: "All rights reserved. Dedicated to human growth and safe spaces.",
  },
};
