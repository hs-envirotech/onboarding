import type { ReactNode } from "react";

export type Stat = { n: string; l: string };

export const heroStats: Stat[] = [
  { n: "2019", l: "Established" },
  { n: "3R", l: "Reuse · Recycle · Recovery" },
  { n: "G7", l: "CIDB grade" },
  { n: "20", l: "PETRONAS categories" },
];

export type ValueTile = { title: string; body: string };

export const missionVision: ValueTile[] = [
  {
    title: "Vision",
    body: "To become a leading water and wastewater specialist providing innovative and sustainable environmental solutions globally.",
  },
  {
    title: "Mission",
    body: "To provide end-to-end solutions in treating water and wastewater — enabling environmental sustainability through customised engineering, the 3Rs, and creative, emerging technology.",
  },
];

export type PhilosophyTile = { title: string; body: string };

export const philosophy: PhilosophyTile[] = [
  { title: "Practical by design", body: "Engineered for operability and ease of maintenance." },
  { title: "Efficient & scalable", body: "Modular systems with a minimal footprint." },
  { title: "Performance-driven", body: "Focused on recovery, reliability & lifecycle cost." },
  { title: "Customer-centric", body: "Solutions tailored to actual site conditions." },
];

export type PrideValue = { letter: string; word: string; body: string };

export const prideValues: PrideValue[] = [
  { letter: "P", word: "Passion", body: "Our work makes a positive impact on customers and the environment — a belief that drives and inspires us." },
  { letter: "R", word: "Respect", body: "We value each other, welcome diverse ideas, and build meaningful relationships with all stakeholders." },
  { letter: "I", word: "Integrity", body: "We conduct all aspects of our business the right way, with zero tolerance for unethical practices." },
  { letter: "D", word: "Diligence", body: "We deliver what we promise and go the extra mile on safety, quality, timeliness and cost." },
  { letter: "E", word: "Empowerment", body: "We encourage our people to be creative, proactive and resourceful, and open to new ideas and technology." },
];

export type ServiceGroup = { title: string; items: string[] };

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Water solutions",
    items: [
      "Water treatment & purification systems",
      "Industrial & municipal wastewater treatment",
      "Water reclamation & reuse systems",
      "Reuse, recycle & recovery (3R)",
      "Seawater desalination",
      "Compliance & discharge management",
    ],
  },
  {
    title: "Plant services & lifecycle",
    items: [
      "System audits, upgrades & expansions",
      "Engineering, procurement & construction (EPC)",
      "Commissioning & performance optimisation",
      "Operation & maintenance (O&M)",
      "Build-Operate-Transfer (BOT) & concession delivery",
    ],
  },
  {
    title: "Products",
    items: [
      "Spill prevention, containment & response",
      "Responsible cleaning & maintenance solutions",
      "Bio-based & low-impact alternatives",
    ],
  },
];

export const sectors: string[] = [
  "Oil, Gas & Petrochemicals",
  "Power Generation & Utilities",
  "Data Centres & Digital Infrastructure",
  "Electronics & High-Purity Manufacturing",
  "Municipal & Industrial Water",
  "Palm Oil",
  "Rubber",
  "Pulp & Paper",
];

export const whyChooseUs: string[] = [
  "Sustainability-first engineering and decision-making",
  "Trusted partner for mission-critical and regulated industries",
  "End-to-end delivery from concept to long-term operation",
  "Premium solutions combining systems, services & selected products",
  "Strong focus on water stewardship, environmental risk reduction & lifecycle value",
];

export type BotStep = { n: string; title: string; body: string };

export const botSteps: BotStep[] = [
  { n: "01", title: "Build", body: "Envirotech funds, designs and constructs the plant to specification — no capital expenditure on the client's balance sheet." },
  { n: "02", title: "Operate", body: "Envirotech operates and maintains it across the concession term, guaranteeing output, quality and compliance." },
  { n: "03", title: "Transfer", body: "At the end of term the asset transfers to the client in sound, fully-maintained condition." },
];

export type TrackRecordRow = { project: string; client: string; location: string; capacity: string };

export const trackRecord: TrackRecordRow[] = [
  { project: "EPCC Effluent Management at Source (EMAS)", client: "HRSB Holdings Sdn. Bhd. — Malaysian Refining Company Sdn. Bhd. (MRCSB)", location: "Sg. Udang, Melaka", capacity: "5,040 m³/day" },
  { project: "Portable Demin Water Plant Rental", client: "PRPC Utilities & Facilities Sdn. Bhd.", location: "Pengerang, Johor", capacity: "3,600 m³/day" },
  { project: "CCRO Water Treatment Plant", client: "Kuala Langat Power Plant Sdn. Bhd. (KLPP)", location: "Banting, Selangor", capacity: "2,400 m³/day · 90% recovery" },
  { project: "Raw Water Treatment Plant Refurbishment", client: "YTY Industry Sdn. Bhd. — GPL (GP Lumut)", location: "Lumut, Perak", capacity: "19,200 m³/day" },
];

export type FactRow = { label: string; value: ReactNode };

export const factsheet: FactRow[] = [
  { label: "Company name", value: "HRSB Sigma Envirotech Sdn. Bhd." },
  { label: "Registration no.", value: "201901032716 (1342046-W)" },
  { label: "Date of incorporation", value: "12 September 2019" },
  { label: "Registered address", value: "16-3, Jalan Ecohill 1/5A, Setia Ecohill Taipan, 43500 Semenyih, Selangor." },
  { label: "Operating office", value: "Level 5, Syed Kechik Foundation Building, Jalan Kapas, Bangsar, Kuala Lumpur." },
  { label: "Contact", value: "+603-8725 0957 · general@hs-envirotech.com" },
  { label: "Authorised capital", value: "RM 750,000.00" },
  { label: "Paid-up capital", value: "RM 750,000.00" },
  { label: "Bankers", value: "CIMB Bank Berhad · Maybank Berhad · SME Bank · MBSB Bank" },
];

export type Licence = { name: string; scope: string; validity: string };

export const licences: Licence[] = [
  { name: "SSM registration", scope: "Companies Commission of Malaysia", validity: "201901032716 (1342046-W)" },
  { name: "CIDB G7", scope: "B (B04, B27) · CE (CE21, CE39) · ME (M15) — no tendering limit", validity: "to 19 Nov 2028" },
  { name: "SPAN C1 — Bekalan Air", scope: "Semenanjung Malaysia, WP Putrajaya & Labuan", validity: "to 21 Dec 2026" },
  { name: "SPAN C1 — Pembetungan", scope: "Semenanjung Malaysia, WP Putrajaya & Labuan", validity: "to 21 Jan 2027" },
  { name: "SPAN D — Bekalan Air", scope: "Selangor Darul Ehsan", validity: "to 2 Mar 2028" },
  { name: "PETRONAS licence to supply", scope: "20 approved product & service categories", validity: "to 29 Dec 2027" },
];

export type OwnershipRow = { holder: string; stake?: string };

export type CapTable = {
  label: string;
  directors: string[];
  shareholders: OwnershipRow[];
};

export const preExit: CapTable = {
  label: "Pre-Gradiant exit",
  directors: [
    "Dato' Hj. Jamil Bin Hashim",
    "Dato' Hj. Mohd Faizal Bin Hj. Mohd Hassim",
    "Noranis Bin Bohari",
    "Muhammad Rusydi Bin Jamil",
    "Balasubramaniam A/L Sinniah",
    "M Kerbanandhan Pillay",
  ],
  shareholders: [
    { holder: "HRSB Holdings Sdn. Bhd.", stake: "70%" },
    { holder: "Sigma Water Engineering (M) Sdn. Bhd.", stake: "30%" },
  ],
};

export const postExit: CapTable = {
  label: "Post-Gradiant exit",
  directors: [
    "Sayyid Syafiq Bin Syed Mohamed",
    "Muhammad Rusydi Bin Jamil",
    "Ridzuan Bin Ismail",
  ],
  shareholders: [
    { holder: "HRSB Holdings Sdn. Bhd.", stake: "75%" },
    { holder: "Sayyid Syafiq Bin Syed Mohamed", stake: "25%" },
  ],
};

export type OrgNode = { role: string; name: string };
export type OrgTeam = { title: string; lead: OrgNode; reports: OrgNode[] };

export const orgCeo: OrgNode = {
  role: "Chief Executive Officer",
  name: "Ir. Ts. Sayyid Syafiq Bin Syed Mohamed",
};

export const orgTeams: OrgTeam[] = [
  {
    title: "Business Development",
    lead: { role: "Business Development Manager", name: "Nasrieq Naser" },
    reports: [
      { role: "Service Manager", name: "Zulkurnain Hassan" },
      { role: "Engineer, Proposal", name: "Vacancy" },
    ],
  },
  {
    title: "Corporate Services",
    lead: { role: "HOD, Corporate Services", name: "Rusydi Jamil" },
    reports: [
      { role: "Senior Executive, Finance", name: "Vacancy" },
      { role: "Executive, Corporate Services", name: "Anne Mahadi" },
      { role: "Executive, Accounts", name: "Vacancy" },
      { role: "Executive, Procurement", name: "Vacancy" },
      { role: "Executive, Data Analyst", name: "Maryam Safyah" },
    ],
  },
  {
    title: "Operations",
    lead: { role: "Head, Operations", name: "Vacancy" },
    reports: [{ role: "Engineer, Privasia SWRO", name: "Vacancy" }],
  },
  {
    title: "Projects",
    lead: { role: "Project Manager", name: "Vacancy" },
    reports: [{ role: "Engineer, Project", name: "M. Iqbal" }],
  },
];

export const orgTrainee = "K-Youth Development Programme — 2 pax";

export const orgFootnote =
  "Board of Directors (3 pax) sits above the CEO. Structure approved at Board Meeting dated 30 June 2026 — reflects the 2027 headcount plan, including open (“Vacancy”) roles.";
