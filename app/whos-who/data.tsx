export type Contact = {
  name: string;
  role: string;
  unit: string;
  emails?: string[];
  phone?: string;
};

export const boardLeadership: Contact[] = [
  {
    name: "Dato' Haji Jamil Bin Hashim",
    role: "Executive Chairman",
    unit: "HRSB Holdings",
    emails: ["jamil@hrsb.com.my", "jamil@hs-envirotech.com"],
    phone: "+6 012-631 2421",
  },
  {
    name: "Dato' Haji Mohd Faizal Bin Mohd Hassim",
    role: "Group President",
    unit: "HRSB Holdings",
    emails: ["faizal.hassim@hrsb.com.my"],
    phone: "+6 010-900 0070",
  },
  {
    name: "Dato' Haji Mohd Sabri Bin Zahari",
    role: "EVP, Strategic Growth & Planning",
    unit: "HRSB Holdings",
    phone: "+6 013-938 2008",
  },
  {
    name: "Noranis Bin Bohari",
    role: "EVP, Corporate Affairs",
    unit: "HRSB Holdings",
    emails: ["noranis@hrsb.com.my"],
    phone: "+6 019-711 6768",
  },
];

export const evpsAndVps: Contact[] = [
  {
    name: "Ridzuan Bin Ismail",
    role: "Vice President, Energy Division",
    unit: "VP Office — Energy Division",
    emails: ["ridzuan@hrsb.com.my"],
    phone: "+6 019-988 9796",
  },
  {
    name: "Hadfi Bin Abdul Halim",
    role: "Vice President, Emerging Market Division",
    unit: "VP Office — Emerging Market Division",
    emails: ["hadfi.halim@hrsb.com.my"],
    phone: "+6 010-712 5448",
  },
  {
    name: "Zulfadhli Bin Jamil",
    role: "Assistant Vice President",
    unit: "Strategic Planning Office",
    emails: ["zulfadhli@hrsb.com.my"],
    phone: "+6 017-639 7478",
  },
];

export const corporateAndHseq: Contact[] = [
  {
    name: "Ramli Bin Khalid",
    role: "Corporate Head of HSEQ",
    unit: "HSEQ",
    emails: ["ramli.khalid@hrsb.com.my"],
    phone: "+6 011-2097 8928",
  },
  {
    name: "Farizan Binti Idris",
    role: "Corporate HSEQ",
    unit: "HSEQ",
    emails: ["farizan.idris@hrsb.com.my"],
    phone: "+6 013-508 0128",
  },
  {
    name: "Muhammad Hazree Bin Abdul Maroof",
    role: "Head of Strategic Planning & Business Development",
    unit: "Corporate Office",
    emails: ["hazree.maroof@hrsb.com.my"],
  },
  {
    name: "Ts. Mohd Zulfadhli Bin Idrus",
    role: "Senior Manager",
    unit: "President Office",
    emails: ["zulfadhli.idrus@hrsb.com.my"],
  },
  {
    name: "Suhaimi Bin Shahmin",
    role: "Procurement Manager",
    unit: "Group Procurement",
    emails: ["suhaimi@hrsb.my"],
    phone: "+6 019-374 8040",
  },
];

export const groupHr: Contact[] = [
  {
    name: "Ainuddin Nazlee Bin Jamil",
    role: "Senior Talent Manager",
    unit: "Group HR",
    emails: ["nazlee.jamal@hrsb.com.my"],
    phone: "+6 019-263 3013",
  },
  {
    name: "Adibah Binti Taib",
    role: "Group HR",
    unit: "Group HR",
    emails: ["adibah@hrsb.com.my"],
    phone: "+6 010-667 4968",
  },
  {
    name: "Noorul Asikin Binti Abdul Jalil @ Abas",
    role: "Compensation & Benefits Manager",
    unit: "Group HR",
    emails: ["noorulasikin@hrsb.com.my"],
    phone: "+6 016-476 7621",
  },
];

export const groupFinance: Contact[] = [
  {
    name: "Noor Baidah Binti Abdul Azis",
    role: "Accounts Manager",
    unit: "Group Finance",
    emails: ["noorbaidah@hrsb.com.my"],
    phone: "+6 013-288 0806",
  },
  {
    name: "Farhanah Al Husna Binti Harolizam",
    role: "Finance & Accounts",
    unit: "Group Finance",
    emails: ["farhanah@hrsb.com.my"],
    phone: "+6 014-618 8758",
  },
];

export const businessUnitHeadsEnergy: Contact[] = [
  {
    name: "Dr. Hj. Rozailan Bin Roslan",
    role: "Head of Business Unit",
    unit: "ARMS Scaffolding (M) Sdn Bhd",
    emails: ["rozailan@hrsb.com.my"],
    phone: "+6 019-364 1111",
  },
  {
    name: "Muhammad Ammar Bin Abd Haris",
    role: "Head of Business Unit",
    unit: "Hydrospeed Sdn Bhd",
    emails: ["ammarharis@hrsb.com.my"],
    phone: "+6 017-230 3670",
  },
  {
    name: "Fairous Bin Rosman",
    role: "Head of Business Unit",
    unit: "HRSB Plant Services Sdn Bhd",
    emails: ["fairousrosman@hrsb.com.my"],
    phone: "+6 012-601 0175",
  },
  {
    name: "Mohd Najib Bin Mohd Yusof",
    role: "Head of Business Unit",
    unit: "HRSB Power Control Sdn Bhd",
    emails: ["najib.yusof@hrsb.com.my"],
    phone: "+6 012-300 6069",
  },
  {
    name: "Mohammad Ali Mohd Hassim",
    role: "Head of Business Unit",
    unit: "HRSB Fabricator Sdn Bhd",
    emails: ["mohammadali@hrsb.com.my"],
    phone: "+6 013-626 1098",
  },
  {
    name: "Ts. Bahrul Hisham Bin Bahauddin",
    role: "Head of Business Unit",
    unit: "HRSB Engineering & Construction Sdn Bhd",
    emails: ["bahrul.hisham@hrsb.com.my"],
  },
  {
    name: "Ir. Ts. Sayyid Syafiq Bin Syed Mohamed",
    role: "CEO / Head of Business Unit",
    unit: "HRSB Sigma Envirotech Sdn Bhd",
    emails: ["sayyid@hs-envirotech.com"],
  },
  {
    name: "Mohd Qayyum Bin Mohamed Nashir",
    role: "Head of Business Unit",
    unit: "Southern Region Facilities (AIT)",
    emails: ["qayyum@hrsb.com.my"],
    phone: "+6 019-333 2854",
  },
];

export const businessUnitHeadsEmergingMarket: Contact[] = [
  {
    name: "Azizah Binti Osman",
    role: "Head of Business Unit",
    unit: "Neo Bio Infinite Sdn Bhd",
    emails: ["azizah.osman@neo-bi.com.my"],
    phone: "+6 019-589 5357",
  },
  {
    name: "Ts. Mohd Hafizullah Bin Abdullah",
    role: "Head of Business Unit",
    unit: "HRSB Infracomm Sdn Bhd",
    emails: ["hafizullah@hrsb.com.my"],
    phone: "+6 019-655 3766",
  },
  {
    name: "Azrul Khairiri Bin Ahmad Zainudin",
    role: "Head of Business Unit",
    unit: "HRSB Infrabina Sdn Bhd",
    emails: ["azrulkhairiri@hrsb.com.my"],
    phone: "+6 012-202 3511",
  },
  {
    name: "Zulfaizal Bin Noordin",
    role: "Head of Business Unit",
    unit: "Blitz Training & Consultancy",
    emails: ["faizal.noordin@hrsb.com"],
    phone: "+6 011-1117 0967",
  },
];
