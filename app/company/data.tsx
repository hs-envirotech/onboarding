import type { ReactNode } from "react";
import styles from "./company.module.css";

export type Stat = { n: string; l: string };

export const heroStats: Stat[] = [
  { n: "2001", l: "Incorporated" },
  { n: "1,283", l: "Total workforce" },
  { n: "11", l: "Subsidiaries" },
  { n: "6", l: "States" },
];

export type ValueTile = {
  title: string;
  body: string;
};

export const missionVision: ValueTile[] = [
  {
    title: "Vision",
    body: "To be reliable partner in emerging industries for our clients, employees and communities we serve, by pioneering excellence towards fostering growth & sustainability.",
  },
  {
    title: "Mission",
    body: "We are the reliable partner and pace setter for the provision of qualified and competent resource in our field of expertise, and timely execution of business deliverables meeting high standards of HSE, quality and cost efficiency.",
  },
  {
    title: "Motto",
    body: "We are a systematic, structured and innovative organisation, capitalising on digital technologies to render high quality business deliverables.",
  },
];

export const coreValues: string[] = [
  "Professionalism",
  "Agility",
  "Cohesiveness",
  "Ethical",
  "Resilience",
];

export type Era = {
  years: string;
  tag: string;
  items: ReactNode[];
};

export const journey: Era[] = [
  {
    years: "2001–2004",
    tag: "Establishment",
    items: [
      "Established in Melaka, known as HSE Resources Sdn. Bhd.",
      "ISO 9001 certification",
      "Branch opened at Paka, Terengganu",
      "First turnaround contract, lasting up to 7 years",
      "Competency training from JKKP Malaysia",
    ],
  },
  {
    years: "2005–2013",
    tag: "Expansion",
    items: [
      "Renamed HRSB Holdings Sdn Bhd",
      "Blitz Training & Consultancy, HRSB Plant Services, HRSB Power Control and HRSB Hydropower incorporated",
      "Awarded IMS: ISO 9001:2015, ISO 14001:2015, OHSAS 18001:2007",
    ],
  },
  {
    years: "2015–2017",
    tag: "Ventures",
    items: [
      "Ventured into mechanical turnaround, hot works and tank maintenance",
      "First plant turnaround awarded by Optimal Chemical (M) Sdn Bhd",
      "10-year long-term contract with PCG as TA contractor",
    ],
  },
  {
    years: "2017–2019",
    tag: "Excellence",
    items: [
      "Awarded ASMF (R, U, S)",
      "New FRP system for managing procurement and financials",
      "HRSB Scaffolding, HRSB Fabricator and HRSB Sigma Envirotech incorporated",
      "Began digital transformation",
    ],
  },
  {
    years: "2020–2022",
    tag: "20 years of service",
    items: [
      "Asset Integrity Technology, Infracomm, Infrabina and Databolt incorporated",
    ],
  },
  {
    years: "2023–2025",
    tag: "Commitment",
    items: [
      "Moved into a new HQ office",
      "Corporate transformation — split into Energy and Emerging Market divisions",
      "New cloud ERP (Acumatica)",
      "T4MS contract extended to 2027, inclusive of additional OPU",
      "Neo Bio-Infinite (NBI) Sdn Bhd incorporated",
    ],
  },
  {
    years: "2026–2030",
    tag: "Towards excellence",
    items: [
      "Road to Bursa — working towards a listing on Bursa Malaysia",
      "The next chapter — where we're headed as a group.",
    ],
  },
];

export type FactRow = { label: string; value: ReactNode };

export const factsheet: FactRow[] = [
  { label: "Company name", value: "HRSB Holdings Sdn. Bhd." },
  { label: "Registration no.", value: "564407-P" },
  { label: "Date of incorporation", value: "15 November 2001" },
  {
    label: "Registered address",
    value: "81-1, Jalan KU 2, Taman Klebang Utama, 75200 Melaka.",
  },
  { label: "Income tax no.", value: "E9010670901" },
  { label: "CIDB registration", value: "Grade G7 Contractor" },
  {
    label: "Company secretary",
    value: "Junainah Binti Haji Ismail",
  },
  { label: "Auditor", value: "PricewaterhouseCoopers (PwC)" },
];

export type Person = {
  name: string;
  role: string;
  bio: string;
  photo?: { src: string; w: number; h: number };
};

export const boardOfDirectors: Person[] = [
  {
    name: "Dato' Hj. Jamil Bin Hashim",
    role: "Group Executive Chairman",
    bio: "Appointed Group Executive Chairman in November 2012. 37 years of experience in production, engineering and organisation management in the oil and gas sector, formerly with Asean Bintulu Fertiliser, Petronas Penapisan (Melaka), Petronas Chemicals Methanol and Petronas Penapisan (Terengganu), plus a stint in corporate HR talent sourcing and downstream operations at KLCC. BSc (Hons) Chemical Engineering, Oklahoma State University; Senior Management Development programme, INSEAD.",
    photo: { src: "/portraits/jamil-hashim.png", w: 180, h: 180 },
  },
  {
    name: "Dato' Hj. Mohd Faizal bin Hj Mohd Hassim",
    role: "Group President",
    bio: "Founded HSE Resources Sdn Bhd in November 2001. Bachelor (Hons) Business Administration, majoring in Finance. 26 years of experience in occupational safety and health, construction, scaffolding and plant maintenance, formerly with the Chiyoda Corp/MMC/CMSB joint venture, Taisei Sumiples Consortium and Sri Takada Industries. President of the Malaysian Scaffolding Association, founded in 2018.",
    photo: { src: "/portraits/faizal-hassim.png", w: 232, h: 232 },
  },
  {
    name: "Dato' Hj. Mohd Sabri Bin Zahari",
    role: "Executive Vice President, Group Corporate Ventures & Strategic Growth",
    bio: "Joined HRSB in October 2011 as COO for HSE Resources. 27+ years in the oil, gas and petrochemical industry, beginning at PETRONAS in 1991 as a Planning Engineer at Petronas Gas Berhad, Kerteh. Since 2002 has led more than 30 plant shutdowns and turnarounds for oil refinery, petrochemical and gas separation plants as Turnaround/Project Manager and Director/Advisor. BSc Mechanical Engineering, Case Western Reserve University, USA (1990).",
    photo: { src: "/portraits/sabri-zahari.png", w: 145, h: 150 },
  },
  {
    name: "Noranis Bin Bohari",
    role: "Executive Vice President, Group Corporate Affairs & Services",
    bio: "Appointed in April 2010. Bachelor's (Hons) Accountancy, Universiti Utara Malaysia; Chartered Accountant with the Malaysian Institute of Accountants, Certified Financial Planner, and member of the Malaysian Institute of Taxation. 27 years of experience in financial management, auditing and taxation, formerly with the Johor Corporation Group, Johor Islamic Corporation Group and Sabaka Group.",
    photo: { src: "/portraits/noranis-bohari.png", w: 238, h: 238 },
  },
];

export const keyPersons: Person[] = [
  {
    name: "Ridzuan Bin Ismail",
    role: "Vice President, Energy Division",
    bio: "More than 15 years of experience in turnaround and mechanical maintenance works, serving PETRONAS plants across Peninsular Malaysia. Strong background in project management, planning, and operational and business excellence.",
  },
  {
    name: "Hadfi Bin Abdul Halim",
    role: "Vice President, Emerging Market Division",
    bio: "32 years of experience across services, infrastructure, technology, education and F&B industries in Malaysia and Indonesia, leading operations, driving innovation and market expansion. Bachelor's (Hons) Business Administration, Universiti Utara Malaysia (1993).",
    photo: { src: "/portraits/hadfi-halim.png", w: 248, h: 248 },
  },
];

export type Subsidiary = {
  name: string;
  ownership: string;
  desc: string;
  logo: { src: string; w: number; h: number };
};

export const energySubsidiaries: Subsidiary[] = [
  {
    name: "HRSB Power Control Sdn Bhd",
    ownership: "100%",
    desc: "Mechanical & electrical systems (electricity, fire fighting, HVAC, cold water, sanitary), architectural/civil & structure, environmental services and security systems.",
    logo: { src: "/logos/hrsb-power-control.jpg", w: 185, h: 86 },
  },
  {
    name: "Hydrospeed Sdn Bhd",
    ownership: "100%",
    desc: "Industrial cleaning — high pressure water jetting, chemical & ultrasonic cleaning — plus piping & valve servicing, catalyst change-outs, robotic cleaning and tank maintenance.",
    logo: { src: "/logos/hydrospeed.jpg", w: 116, h: 113 },
  },
  {
    name: "HRSB Engineering & Construction Sdn Bhd",
    ownership: "100%",
    desc: "EPCC / EPCM / EPCIC and construction, plant maintenance & turnaround, fabrication, blasting & painting, manpower supply, and mechanical rotating & valve services.",
    logo: { src: "/logos/hrsb-engineering-construction.jpg", w: 185, h: 87 },
  },
  {
    name: "ARMS Scaffolding Sdn Bhd",
    ownership: "100%",
    desc: "Scaffolding material, manpower and erection services for plant maintenance/turnaround, shutdowns and construction.",
    logo: { src: "/logos/arms.jpg", w: 222, h: 51 },
  },
  {
    name: "HRSB Plant & Services Sdn Bhd",
    ownership: "80%",
    desc: "Plant maintenance & turnaround projects, EPCC / construction / fabrication works, and manpower supply.",
    logo: { src: "/logos/hrsb-plant-services.jpg", w: 185, h: 87 },
  },
  {
    name: "Asset Integrity Technology Sdn Bhd",
    ownership: "80%",
    desc: "Advanced and conventional NDT (radiography, penetrant, magnetic particle, ultrasonic, eddy current), NDT tubing, magnetic flux tank scanning, positive material inspection, hardness testing and manpower supply.",
    logo: { src: "/logos/asset-integrity-technology.jpg", w: 141, h: 89 },
  },
  {
    name: "HRSB Sigma Envirotech Sdn Bhd",
    ownership: "70%",
    desc: "Water and wastewater plant upgrading & expansion, operation and maintenance, skid unit rentals, chemical supply, closed circuit reverse osmosis, membrane bioreactor (MBR) and construction.",
    logo: { src: "/logos/hrsb-sigma-envirotech.jpg", w: 248, h: 84 },
  },
];

export const nonEnergySubsidiaries: Subsidiary[] = [
  {
    name: "Blitz Training & Consultancy Sdn Bhd",
    ownership: "100%",
    desc: "Formerly HRSB Training. Scaffolding competency, site safety supervisor competency, confined space entry (AESP), basic rigging & slinging, high pressure water jet (HPWJ) and soft skills training.",
    logo: { src: "/logos/blitz.jpg", w: 188, h: 88 },
  },
  {
    name: "HRSB Infracomm Sdn Bhd",
    ownership: "100%",
    desc: "Telecom tower & pole facilities (60m/76m towers, smartpoles, monopoles, rooftop structures), pylon structures, fiberisation contracting and tower buy-back.",
    logo: { src: "/logos/hrsb-infracomm.jpg", w: 195, h: 116 },
  },
  {
    name: "Databolt Sdn Bhd",
    ownership: "60%",
    desc: "Technology solutions — system development, business integration, digital agency services, IT supply, ICT consultancy and artificial intelligence.",
    logo: { src: "/logos/databolt.jpg", w: 90, h: 88 },
  },
  {
    name: "Neo Bio-Infinite Sdn Bhd",
    ownership: "55%",
    desc: "Emerging Market division subsidiary.",
    logo: { src: "/logos/neo-bio-infinite.jpg", w: 213, h: 87 },
  },
];

export const workforce = {
  permanent: 325,
  contract: 958,
  total: 1283,
  subsidiaryCount: 13,
};

export type Location = {
  tag: string;
  name: string;
  addr: string;
  meta?: string;
};

export const mainOffices: Location[] = [
  {
    tag: "Headquarters",
    name: "Melaka",
    addr: "Lot 2044, Mukim Sungai Baru Ulu, Solok Duku, 78300 Masjid Tanah, Melaka.",
    meta: "Tel +6 06 385 2803 / 2804 · melaka@hrsb.com.my",
  },
  {
    tag: "Branch office",
    name: "Terengganu",
    addr: "Lot PT 17675, Taman Industri Paka, 23100 Dungun, Terengganu.",
    meta: "Tel +6 09 827 6401 · terengganu@hrsb.com.my",
  },
];

export const satelliteOffices: Location[] = [
  {
    tag: "Satellite office",
    name: "Kedah",
    addr: "Site Office, Petronas Chemical Fertiliser Kedah, KM 3 Jalan Jeniang, PO Box 22, 08300 Gurun, Kedah.",
    meta: "Tel +6 04 466 6666",
  },
  {
    tag: "Satellite office",
    name: "Johor — Southern Region Facilities",
    addr: "32-02, Jalan Kelicap 1, Taman Bukit Pelali, 81600 Pengerang, Johor. Yard: Lot 5949 & 5950, Mukim Pengerang, Daerah Kota Tinggi, 81600 Johor Darul Takzim.",
  },
  {
    tag: "Satellite office",
    name: "Selangor",
    addr: "26-1, Tingkat 1, Jalan Puteri 2A/3, Bandar Puteri Bangi, 43000 Kajang, Selangor.",
    meta: "Tel +603 8922 3836",
  },
];

export const operationFacilities: string[] = [
  "Southern Region Facilities — Pengerang, Johor",
  "Bertam, Melaka",
  "Gurun, Kedah",
  "Paka, Terengganu",
  "Solok Duku, Melaka (HQ)",
];

export type OrgBranch = {
  title: ReactNode;
  items: string[];
};

export const orgAffairs: OrgBranch = {
  title: (
    <>
      EVP · Group Corporate Affairs &amp; Services{" "}
      <span className={styles.lbl}>→ CFO</span>
    </>
  ),
  items: [
    "Group HR Management",
    "Group Admin",
    "Group Legal & Corporate Secretariat",
    "Group Corporate Communication",
    "Group Finance, Account & Treasury",
    "Group Procurement",
  ],
};

export const orgVentures: OrgBranch = {
  title: "EVP · Group Corporate Ventures & Strategic Growth",
  items: [
    "VP Energy — VP Office, Head of Projects/PMO",
    "VP Emerging Market",
    "Business Development, Commercial & Contract",
    "Proposal Committee",
    "Transformation & Intervention Office",
  ],
};

export const orgCeoOffice: OrgBranch = {
  title: "Group President/CEO Office",
  items: ["Senior Manager"],
};

export const orgTopLevel: string[] = [
  "Nomination & Remuneration Committee",
  "Audit, Risks & Compliance Committee",
  "Group HSEQ",
  "Group Internal Audit",
];
