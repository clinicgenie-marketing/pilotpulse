export type TeamPerson = {
  name: string;
  title: string;
  initials: string;
  bullets: readonly string[];
  linkedin?: string;
  photo?: string;
};

export const aboutPage = {
  meta: {
    title: "About PilotPulse",
    description: "AI that understands how your business runs.",
  },
  hero: {
    eyebrow: "About Us",
    titleBefore: "We are",
    titleHighlight: "PilotPulse",
    subtitle: "AI that understands how your business runs",
    secondaryCta: { label: "Watch our story", href: "/about#our-story" },
    paragraphs: [
      "PilotPulse builds AI workers for repetitive workflows such as quoting, screening, scheduling and follow-ups. They work alongside your team and systems.",
      "We help businesses work faster, serve customers better and grow with less friction.",
      "Your team works alongside AI agents that increase productivity, not replace people.",
    ],
  },
  humanFirst: {
    heading: "Human-First. Outcome-Driven.",
    subtitle: "Practical automation, built around your SOPs",
    body: "Trained on your logic, not generic datasets. Our AI assistants follow your processes and scale when results are measurable.",
    pull: "Pilot first. Prove value. Scale what works.",
  },
  featuredVideo: {
    eyebrow: "Our story",
    heading: "Building AI people trust",
    lead: "Built on trust, human-centred design and Singapore’s innovation ecosystem, PilotPulse helps businesses adopt practical AI with confidence.",
    videoId: "Khu45qAVoO0",
    title: "Building AI People Trust: PilotPulse's Journey | Icons of Innovation",
  },
  belief: {
    heading: "We Believe AI That Makes Work Better",
    subtitle: "Born from real-world pain points",
    body: "Our founders saw businesses slowed by manual work and rising costs. Existing AI tools often felt too rigid or complex, so we built PilotPulse to make practical AI accessible, one workflow at a time.",
  },
  team: {
    eyebrow: "Team PilotPulse",
    heading: "Deep tech meets operational clarity",
    body: "Our team combines AI expertise with operational experience, having built systems across healthcare, education, logistics and more. We bring product, research and business insight to AI that works in practice.",
  },
  leadership: {
    eyebrow: "Leadership",
    people: [
      {
        name: "Soh Chong Kian",
        title: "Founder & CEO",
        initials: "CK",
        linkedin: "https://www.linkedin.com/in/chongkian",
        photo: "/team/soh-chong-kian.jpg",
        bullets: [
          "Technopreneur with 12+ years experience in mobility, edtech and healthcare",
          "Successfully scaled platforms with 100k+ users",
          "Stanford MSc in Management Science and Engineering",
        ],
      },
      {
        name: "Wu Tian Yee",
        title: "Founder & CTO",
        initials: "TY",
        linkedin: "https://www.linkedin.com/in/tianyee",
        bullets: [
          "Ex-product director at listed tech firm, 11+ years tech R&D experience",
          "Previous ventures in US and SEA",
          "Stanford MSc in Electrical Engineering",
        ],
      },
      {
        name: "Scott Tan",
        title: "COO & Consulting Lead",
        initials: "ST",
        linkedin: "https://www.linkedin.com/in/scott-tan-sg",
        bullets: [
          "Ex-Accenture business architect, principal director and delivery/consulting lead. 10+ years experience in design thinking, project management, technology implementation and leading various Transformation Offices",
          "15+ years experience in healthcare, trade and logistics, technology and professional services",
          "Stanford MSc in Electrical Engineering (machine learning)",
        ],
      },
    ] satisfies TeamPerson[],
  },
  advisors: {
    eyebrow: "Our advisors",
    people: [
      {
        name: "Dr Ben Leong",
        title: "Advisor",
        initials: "BL",
        linkedin: "https://www.linkedin.com/in/benleong",
        photo: "/team/ben-leong.jpg",
        bullets: [
          "Director at AI Centre for Educational Technologies, AI.sg",
          "Associate Professor of Computer Science with the School of Computing, NUS, 15+ years in edtech AI",
          "Active voice in various national technology advisory panels, MIT PhD",
        ],
      },
      {
        name: "Dr Lin Shaowei",
        title: "Advisor",
        initials: "LS",
        linkedin: "https://www.linkedin.com/in/shaoweilin",
        photo: "/team/lin-shaowei.jpg?v=2",
        bullets: [
          "Director of Research, Topos Institute; Head of AI at Awecom",
          "Former SUTD professor; UC Berkeley PhD in advanced AI systems",
        ],
      },
    ] satisfies TeamPerson[],
  },
};
