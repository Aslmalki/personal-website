// Edit everything on the site from this one file.
// Empty lists ([]) show a short "coming soon" note on the site until you add items.

export type PublicationType = "journal" | "conference" | "preprint"

export type Publication = {
  authors: string[]
  title: string
  venue: string
  year: number
  type: PublicationType
  href: string
}

export type OutreachType = "talk" | "article" | "workshop" | "media"

export type OutreachItem = {
  type: OutreachType
  date: string
  title: string
  venue: string
  href: string
}

export type ReadingItem = {
  title: string
  authors: string
  year: number
  href: string
  note: string
  tags: string[]
}

export type NewsItem = { date: string; text: string }

export type Course = {
  code: string
  name: string
  term: string
  description: string
  level: string
}

export type Project = {
  title: string
  kind: string
  description: string
  // Paths starting with "/" are served from this site (the public/ folder).
  href: string
  cta: string
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  readingTime: string
  summary: string
  tags: string[]
  body: string[]
}

export const site = {
  name: "Abdullah Almalki",
  displayName: "Dr. Abdullah Almalki",
  fullName: "Abdullah S. Almalki",
  citationName: "Almalki, A.",
  title: "Assistant Professor of Computational Science and Informatics",
  emphasis: "Space Informatics",
  department: "Department of Information Systems",
  university: "King Abdulaziz University",
  universityShort: "KAU",
  city: "Jeddah, Saudi Arabia",
  coordinates: "21.49° N, 39.25° E",
  tagline:
    "Computational methods for space data, from exoplanet signals to the literature that interprets them.",
  email: "asalmalki@kau.edu.sa",
  // Leave empty ("") to hide these lines in the contact section.
  office: "",
  officeHours: "",
}

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Publications", href: "/#publications" },
  { label: "Projects", href: "/#projects" },
  { label: "Teaching", href: "/#teaching" },
  { label: "Lab", href: "/#lab" },
  { label: "Outreach", href: "/#outreach" },
  { label: "Reading", href: "/#reading" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
]

export const profileLinks = [
  { label: "ORCID", href: "https://orcid.org/0000-0003-0565-1198" },
  { label: "Web of Science", href: "https://www.webofscience.com/wos/author/record/D-2530-2019" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aalmalkii" },
]

export const bio = [
  "I work in computational and data science, with a focus on natural language processing (NLP) and machine learning applied to interdisciplinary questions at the intersection of space sciences, human behavior, and scientific communication. My doctoral research at George Mason University develops NLP as a methodological framework for interdisciplinary science, with the space sciences as its application domain.",
  "I have taught data visualization, machine learning for scientific applications, R, and scientific programming, and I enjoy experimenting with adaptive, interactive teaching methods that make technical material more approachable. I am also interested in academic leadership and in co-curricular programs that support students beyond the classroom.",
]

export const news: NewsItem[] = []

export const research = {
  heading: "Language, data, and the space sciences",
  intro:
    "Space science produces data and text at scale: mission records, decades of research literature, and public conversations about discovery. I use NLP, machine learning, and network analysis to make sense of them.",
  areas: [
    {
      title: "NLP for interdisciplinary science",
      description:
        "Topic modeling, text mining, and language models used as a methodological framework for studying scientific fields.",
    },
    {
      title: "Science of science",
      description:
        "Large-scale analysis of research literature, such as decades of astrobiology on arXiv, to map how fields evolve.",
    },
    {
      title: "Public perception & communication",
      description:
        "How the public discusses and reacts to space discoveries, from biosignature claims to online narratives.",
    },
    {
      title: "Human factors in space",
      description:
        "Agent-based models, social network analysis, and digital social twins for human activity in space exploration.",
    },
  ],
}

export const publications: Publication[] = [
  {
    authors: ["Almalki, A.", "et al."],
    title: "GIS of the Moon: Current Challenges and Immediate Needs",
    venue: "57th Lunar and Planetary Science Conference",
    year: 2026,
    type: "conference",
    href: "#",
  },
  {
    authors: ["Schwarz, A.", "Berea, A.", "Almalki, A."],
    title:
      "Public Perceptions and Communications of Searching for Biosignatures and Detection Claims: A Systematic Analysis of YouTube Narratives and Reactions",
    venue: "Astrobiology Science Conference (AbSciCon) 2026, 505-05",
    year: 2026,
    type: "conference",
    href: "#",
  },
  {
    authors: ["Berea, A.", "Almalki, A."],
    title: "Nearly Three Decades of Astrobiology on ArXiv: A Large-Scale Topic Modeling Analysis",
    venue: "Astrobiology Science Conference (AbSciCon) 2026, 505-07",
    year: 2026,
    type: "conference",
    href: "#",
  },
  {
    authors: [
      "Berea, A.",
      "Kennedy, W.",
      "Vera, R.",
      "Prather, C.",
      "Grieg, C.",
      "Kobylarz, B.",
      "Stine, A.",
      "Almalki, A.",
      "Sontam, V.",
    ],
    title:
      "The Future of Humanity on the Moon: A Digital Social Twin and Agent-Based Model of Human Factors in Space",
    venue: "LPI Contributions",
    year: 2024,
    type: "conference",
    href: "#",
  },
  {
    authors: ["Khawaji, K.", "Almubark, I.", "Almalki, A.", "Taylor, B."],
    title: "Similarity Matching for Workflows in Medical Domain Using Topic Modeling",
    venue: "2018 IEEE World Congress on Services (SERVICES)",
    year: 2018,
    type: "conference",
    href: "https://doi.org/10.1109/services.2018.00023",
  },
  {
    authors: ["Al-Malki, N. A.", "Almasre, M.", "Almalki, A.", "Al-Harbi, R."],
    title: "Self-Paced E-Training in E-Learning for University Teaching Staff",
    venue: "International Journal of Advanced Corporate Learning (iJAC)",
    year: 2015,
    type: "journal",
    href: "https://doi.org/10.3991/ijac.v8i1.4371",
  },
]

export const projects: Project[] = [
  {
    title: "Stellar Drop",
    kind: "Sonification · Educational game",
    description:
      "A sky of 139 real RR Lyrae stars. Tap a star to learn what its light reveals about its distance, temperature, and true brightness, then hear its pulse as a note. You can also hear your name in star language.",
    href: "/sonification/index.html",
    cta: "Play Stellar Drop",
  },
]

export const courses: Course[] = [
  {
    code: "GMU",
    name: "Data Visualization",
    term: "Graduate Lecturer",
    description: "Principles and tools for turning scientific data into clear, honest visual stories.",
    level: "George Mason University",
  },
  {
    code: "GMU",
    name: "Machine Learning for Scientist Applications",
    term: "Graduate Lecturer",
    description: "Core machine learning methods applied to real scientific problems and datasets.",
    level: "George Mason University",
  },
  {
    code: "GMU",
    name: "R Language Lab",
    term: "Graduate Lecturer",
    description: "Hands-on data analysis and statistical programming in R.",
    level: "George Mason University",
  },
  {
    code: "GMU",
    name: "Introduction to Scientific Programming",
    term: "Graduate Lecturer",
    description: "A first programming course for students outside data science, built around scientific examples.",
    level: "George Mason University",
  },
]

export const lab = {
  name: "Space Informatics Lab",
  description:
    "A research lab for computational and data-driven work on the space sciences, including NLP, machine learning, and network analysis. Students with a background in computing, mathematics, or the sciences who are curious about space data are welcome to get in touch.",
}

export const outreach: { intro: string; items: OutreachItem[] } = {
  intro:
    "I believe the space sciences belong to everyone. Talks, articles, and workshops for students and the public will appear here.",
  items: [],
}

// Papers you have read and recommend, with a short personal note.
export const readingList: ReadingItem[] = []

// Each post gets its own page at /writing/[slug].
export const posts: BlogPost[] = []

export const contact = {
  heading: "Questions about research, courses, or collaboration? I'd love to hear from you.",
}
