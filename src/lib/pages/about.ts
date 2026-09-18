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
      "PilotPulse customises autonomous AI that efficiently executes everyday's repetitive workflows. Quoting, screening, scheduling, and follow-ups, seamlessly embedded into your human team's operations.",
      "We redesign businesses to work faster, serve better, and grow with less friction.",
      "We help your teams learn to work seamlessly alongside AI agents that augment their productivity, rather than replacing them.",
    ],
  },
  humanFirst: {
    heading: "Human-First. Outcome-Driven.",
    subtitle: "Practical automation, built around your SOPs",
    body: "Our AI assistants are trained with your logic, not generic datasets. They work within your processes, follow your rules, and scale only when they deliver measurable outcomes.",
    pull: "We don't deploy everything at once. We pilot. We prove. Then we scale what works.",
  },
  featuredVideo: {
    eyebrow: "Our story",
    heading: "Building AI people trust",
    lead: "On trust, human-centered design, and working with Singapore's innovation ecosystem to reach the businesses that need practical AI most.",
    videoId: "Khu45qAVoO0",
    title: "Building AI People Trust — PilotPulse's Journey | Icons of Innovation",
  },
  belief: {
    heading: "We Believe AI That Makes Work Better",
    subtitle: "Born from real-world pain points",
    body: "Our founders spent years working with businesses stretched thin by manual processes and rising operational costs. They saw how enterprise AI tools were either too rigid, too expensive, or too complex for most SMEs. So they built PilotPulse, a way to bring real AI benefits to teams that need it most, starting with one workflow at a time.",
  },
  team: {
    eyebrow: "Team PilotPulse",
    heading: "Deep tech meets operational clarity",
    body: "PilotPulse is led by a team of builders who understand both AI innovation and operational grit. We've built platforms used by tens of thousands, led R&D in frontier technologies, and shipped real systems across healthcare, education, logistics, and more. We bring together experience in product execution, research, and business systems, so our AI doesn't just sound smart. It works smart.",
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
