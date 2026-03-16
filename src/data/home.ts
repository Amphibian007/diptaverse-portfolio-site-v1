export const homeNav = {
  brand: "Dipta Brata Das",
  links: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Email", href: "#" },
  ],
} as const;

export const heroData = {
  category: "Enterprise Sales Engineering",
  name: "Dipta Brata Das",
  role: "Director, Sales Engineering & Alliances at AppsCode Inc.",
  rotatingRoles: [
    "Guiding enterprise evaluations with technical clarity",
    "Translating platform depth into buying confidence",
    "Building partner momentum across cloud-native adoption",
  ],
  statement:
    "I help enterprise teams evaluate, trust, and expand complex cloud-native platforms with the technical depth buyers need and the clarity decision-makers expect.",
  description:
    "My work sits at the intersection of architecture, discovery, platform storytelling, and deal execution, bridging engineers, stakeholders, and executive sponsors through high-stakes enterprise journeys.",
  actions: [
    { label: "See Enterprise Impact", href: "#hero-metrics", variant: "primary" },
    { label: "Review Technical Signals", href: "#hero-signals", variant: "secondary" },
  ],
  metrics: [
    { value: "470+", label: "Enterprise Discovery Conversations" },
    { value: "$376K+", label: "Enterprise Deals Closed" },
    { value: "50+", label: "Enterprise Customers Supported" },
  ],
  signals: [
    {
      title: "Enterprise Discovery",
      description:
        "Clarifying technical requirements, buyer urgency, platform fit, and adoption risks early in the evaluation cycle.",
    },
    {
      title: "Proof-of-Concept Leadership",
      description:
        "Guiding solution design, validation milestones, and internal alignment so evaluations convert into confident decisions.",
    },
    {
      title: "Alliance Growth",
      description:
        "Connecting product, partner, and customer conversations into a single enterprise value narrative.",
    },
  ],
} as const;

export const currentFocusData = {
  eyebrow: "Current Focus",
  title: "What I am focused on in enterprise platform growth right now.",
  description:
    "My current work is centered on helping enterprise teams move from initial curiosity to operational confidence across platform evaluation, adoption planning, and alliance-led expansion.",
  summary:
    "The emphasis is not on broad activity. It is on the few moments that most influence enterprise trust: technical discovery, solution fit, proof design, and stakeholder alignment.",
  areas: [
    {
      title: "Evaluation Readiness",
      description:
        "Turning early-stage requirements into clear technical decision paths, with enough rigor for architects and enough clarity for executive sponsors.",
    },
    {
      title: "Platform Storytelling",
      description:
        "Explaining complex cloud-native capabilities in terms of operational outcomes, risk reduction, and long-term platform confidence.",
    },
    {
      title: "Alliance Momentum",
      description:
        "Coordinating partner, customer, and product conversations so the enterprise narrative stays consistent through the buying process.",
    },
    {
      title: "Customer Expansion",
      description:
        "Supporting adoption beyond the first decision by connecting technical success to broader organizational rollout and value realization.",
    },
  ],
} as const;

export const salesApproachData = {
  eyebrow: "Sales Approach",
  title: "A technical sales approach built around clarity, confidence, and execution.",
  description:
    "My approach to sales engineering is structured around how enterprise decisions actually move: through trust-building, technical alignment, and well-run proof points rather than generic product demos.",
  principles: [
    {
      step: "01",
      title: "Frame the evaluation correctly",
      description:
        "Start by clarifying the real problem, internal urgency, architecture context, and the criteria that will shape adoption decisions.",
    },
    {
      step: "02",
      title: "Translate platform depth into buyer language",
      description:
        "Bridge product capabilities with the language used by engineers, platform teams, and executive stakeholders so the value story remains credible at every layer.",
    },
    {
      step: "03",
      title: "Design focused proof points",
      description:
        "Guide proof-of-concept work around the capabilities that matter most, keeping evaluation scope practical, measurable, and aligned to enterprise buying risk.",
    },
    {
      step: "04",
      title: "Support expansion after the decision",
      description:
        "Carry technical confidence beyond the close by helping customers translate a successful evaluation into repeatable adoption and broader internal support.",
    },
  ],
} as const;
