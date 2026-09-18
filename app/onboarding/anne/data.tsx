import type { ComponentType, ReactNode } from "react";
import {
  Folder,
  Users,
  Globe,
  BadgeCheck,
  Droplet,
  Share2,
  Briefcase,
  Server,
} from "lucide-react";
import styles from "./onboarding.module.css";

export type IconType = ComponentType<{ size?: number | string }>;

export type QuickLink = {
  icon: IconType;
  title: string;
  description: string;
  domain: string;
  href: string;
};

export const quickLinks: QuickLink[] = [
  {
    icon: Folder,
    title: "SharePoint",
    description:
      "Document home. Once folders are synced to your laptop, the paths below open straight from File Explorer.",
    domain: "hrsbone.sharepoint.com",
    href: "https://hrsbone.sharepoint.com",
  },
  {
    icon: Users,
    title: "HRSBOne",
    description:
      'HR self-service — where staff submit monthly claims. Also on mobile: search "HRSBOne" on the App Store or Google Play.',
    domain: "one.hrsb.com.my",
    href: "https://one.hrsb.com.my",
  },
  {
    icon: Globe,
    title: "Company website",
    description:
      "Live — Maryam deployed it directly via Shinjiru. Liaise with her on any site update; you own the announcements & media-release content that feeds it.",
    domain: "hs-envirotech.com",
    href: "https://hs-envirotech.com",
  },
  {
    icon: BadgeCheck,
    title: "CIDB CIMS",
    description: "Contractor registrations & renewals — five G7 categories currently held.",
    domain: "cims.cidb.gov.my",
    href: "https://cims.cidb.gov.my",
  },
  {
    icon: Droplet,
    title: "SPAN",
    description: "Water services regulator — relevant to the Permit C / CE20 application.",
    domain: "span.gov.my",
    href: "https://span.gov.my",
  },
  {
    icon: Share2,
    title: "Facebook page",
    description:
      'Runs under the "Envirotech" brand only. Page login is in Accounts Credentials. Reports up to Group under the Digital Marketing Transformation initiative — PIC Hamizan Hamdan.',
    domain: "facebook.com/61591527082715",
    href: "https://facebook.com/61591527082715",
  },
  {
    icon: Briefcase,
    title: "LinkedIn page",
    description:
      "Content calendar, sourcing, design and posting are yours. Reports up to Group under the Digital Marketing Transformation initiative — Hamizan Hamdan is the PIC there.",
    domain: "linkedin.com/company/hrsb-sigma-envirotech",
    href: "https://linkedin.com/company/hrsb-sigma-envirotech",
  },
  {
    icon: Server,
    title: "Shinjiru",
    description:
      "Domain registrar — and, since Maryam's redeploy, direct website hosting too. Confirm the renewal date in week one; site changes still go through Maryam.",
    domain: "shinjiru.com.my",
    href: "https://shinjiru.com.my",
  },
];

export type KeyPath = {
  title: string;
  path: string;
};

export const keyPaths: KeyPath[] = [
  {
    title: "Corporate Services directory — the CS team's own working folder",
    path: "Envirotech Corporate Services \\ Documents",
  },
  {
    title: "Accounts Credentials — every login & renewal date",
    path: "Envirotech \\ Documents \\ Accounts Credentials.xlsx",
  },
  {
    title: "Master policies, procedures & forms — current source of truth",
    path: "HRSB Holdings Sdn. Bhd. \\ Documents \\ General \\ 01 MASTER INTEGRATED MANAGEMENT",
  },
  {
    title: "Monthly claims upload — report & attachments by the 1st",
    path: "ADMIN TEAM-SIGMA ENVIROTECH \\ Documents \\ HRSB SIGMA ENVIROTECH SDN BHD \\ CLAIM 2026",
  },
  {
    title: "Monthly Admin Report — template & submission folder",
    path: "ADMIN TEAM \\ Documents \\ General \\ Admin Reporting \\ 2026",
  },
];

export type Swatch = {
  name: string;
  hex: string;
};

export const swatches: Swatch[] = [
  { name: "Navy", hex: "#21528A" },
  { name: "Sea-green", hex: "#14B096" },
  { name: "Aqua", hex: "#16B1C4" },
  { name: "Slate", hex: "#4A5C6A" },
  { name: "Paper", hex: "#F4F7FB" },
];

export type CalendarRow = {
  when: string;
  tag: string;
  roll?: boolean;
  body: ReactNode;
};

export const calendarRows: CalendarRow[] = [
  {
    when: "25th",
    tag: "Monthly",
    body: (
      <>
        Staff claims due in <strong>HRSBOne</strong>{" "}— remind, then verify and chase HOD
        approvals.
      </>
    ),
  },
  {
    when: "1st",
    tag: "Monthly",
    body: "Compiled claims workbook + attachments uploaded to the CLAIM 2026 folder.",
  },
  {
    when: "16 Aug",
    tag: "Yearly",
    body: (
      <>
        <strong>hs-envirotech.com</strong>{" "}domain &amp; hosting renewal at Shinjiru — Maryam runs
        the site itself, but this renewal affects everyone; confirm the 2026 renewal went through
        and flag the next one to her ahead of time.
      </>
    ),
  },
  {
    when: "Rolling",
    tag: "",
    roll: true,
    body: "CIDB registrations, tender portal access and company licences — log every expiry in Accounts Credentials.xlsx.",
  },
  {
    when: "Per mtg",
    tag: "",
    roll: true,
    body: "Board cycle — RSVP lead time before, minutes turnaround after, action tracker in between.",
  },
];

export const remitChips: string[] = [
  "HR admin & recruitment coordination",
  "Freelance & subcontractor paperwork",
  "Governance & board support",
  "Memos, comms & staff relations",
  "CSR — clean slate, yours to build",
  "Brand, templates & merchandise",
  "SharePoint structure & naming",
  "Announcements & media releases",
  "Facebook & LinkedIn",
  "Tender portal registrations",
  "Licensing & renewals",
  "Office admin & pantry",
  "Petty cash & requisitions",
  "Monthly claim & admin reports",
  "Travel for management",
];

export type RemitSection = {
  n: string;
  title: string;
  defaultOpen?: boolean;
  body: ReactNode;
};

export const remitSections: RemitSection[] = [
  {
    n: "01",
    title: "Document systems & SharePoint",
    defaultOpen: true,
    body: (
      <>
        <p>
          Top-level folder on SharePoint is <strong>&quot;Envirotech&quot;</strong>. File
          naming is genuinely yours to finalise. The working defaults so far — treat them as a
          draft you can improve, not a locked standard:
        </p>
        <ul>
          <li>
            <span className={styles.lbl}>Proposals/Tenders:</span>{" "}
            <code>[Client]_[ProjectShortTitle]_[DocType]_[Version].ext</code>
          </li>
          <li>
            <span className={styles.lbl}>Internal:</span>{" "}<code>[Department]_[DocTitle]_[Version].ext</code>
          </li>
          <li>Underscores not hyphens · no dates in filenames · v1/v2/v3 versioning</li>
        </ul>
        <p>
          <strong>Accounts Credentials.xlsx</strong>{" "}is the single reference for every login —
          website, social, tender portals, licensing. Update it the moment a password changes,
          and log every portal, licence and domain expiry there too, so it doubles as your
          renewal tracker. An out-of-date entry is a real risk — it can lock the whole team out.
        </p>
        <p>
          <strong>Master policies &amp; forms</strong>{" "}live separately under HRSB Holdings — the
          01 MASTER INTEGRATED MANAGEMENT folder (path on the Start tab). Get access confirmed in
          week one; it&apos;s your first stop for any standard form or official policy.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "HR & recruitment admin",
    body: (
      <>
        <p>
          <span className={styles.lbl}>Policy source of truth:</span>{" "}Envirotech&apos;s own ENV-HRA-XXX
          policy series (including the Job Grade Framework) is still in development. Until
          it&apos;s live, follow the HRSB Holdings master IMS day to day — and expect to be
          involved in getting the ENV-HRA framework finished.
        </p>
        <p>
          <span className={styles.lbl}>New-hire onboarding:</span>{" "}you&apos;ll run onboarding logistics
          for future hires the way this document is being run for you — laptop procurement,
          system access, HR paperwork, first-week orientation. Ask Rusydi for the checklist used
          for you and Arif as your working template.
        </p>
        <p>
          <span className={styles.lbl}>Freelancers &amp; subcontractors — split by design:</span>{" "}the
          project team identifies, engages and manages the working relationship; once
          that&apos;s settled, the paperwork is yours — subcontracting forms, payroll processing
          and related admin.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "Governance & board support",
    body: (
      <>
        <p>
          Fully yours: Rusydi has been running this end-to-end and hands it over completely as
          you settle in. Expect to shadow your first one or two board meetings before running it
          solo.
        </p>
        <ul>
          <li>Board pack production — papers, minutes, action tracker</li>
          <li>RSVP coordination with board members ahead of each meeting</li>
          <li>Attending and minuting the meeting itself</li>
          <li>Following up the action tracker between meetings</li>
        </ul>
        <div className={styles.callout}>
          <span className={styles.calloutTitle}>To confirm with Rusydi</span>
          The standing board member list, meeting cadence, and any board-specific
          confidentiality protocol — before your first meeting.
        </div>
        <p style={{ marginTop: 12 }}>
          <strong>Monthly HR &amp; Admin Meetings</strong>{" "}happen as-and-when-required rather
          than on fixed dates. Business units outside Melaka join online by default.
        </p>
      </>
    ),
  },
  {
    n: "04",
    title: "Digital presence — website, Facebook & LinkedIn",
    body: (
      <>
        <p>
          Since this document was first written, Maryam has deployed the live site herself,
          directly via Shinjiru — not the Cloudflare/GitHub pipeline described here previously.{" "}
          <strong>Website platform changes go through Maryam</strong>{" "}now; your part is the
          content that feeds it. You keep full ownership of Facebook &amp; LinkedIn day to day.
          Both social channels run under the <strong>&quot;Envirotech&quot; brand only</strong>{" "}
          — the older &quot;HRSB Sigma&quot; naming should not appear.
        </p>
        <p>
          <span className={styles.lbl}>hs-envirotech.com:</span>{" "}live and yours to feed, not to
          rebuild — you own announcements, media releases and any copy/asset updates, and hand
          them to Maryam to publish. The domain (and now hosting) renewal at Shinjiru is still a
          standing item on your calendar from day one — the login is in Accounts Credentials.
          Don&apos;t rely on the registrar&apos;s own notice email — set your own reminder well
          ahead of expiry, and loop Maryam in.
        </p>
        <p>
          <span className={styles.lbl}>Facebook &amp; LinkedIn:</span>{" "}plan a simple content calendar so
          posting doesn&apos;t become reactive; source material from project/BD teams (new
          projects, milestones, hires); design in the brand palette and fonts; you hold the keys
          to publish. Both channels also report up to Group under the{" "}
          <strong>Digital Marketing Transformation</strong>{" "}initiative — <strong>Hamizan
          Hamdan</strong>{" "}is the PIC there, so loop him in on what you post and on any
          Group-level reporting asks.
        </p>
      </>
    ),
  },
  {
    n: "05",
    title: "Corporate communications & CSR",
    body: (
      <>
        <p>
          You own internal-facing communications and culture — separate from the external
          website/social work, though connected.
        </p>
        <p>
          <span className={styles.lbl}>Memos &amp; internal comms:</span>{" "}drafting and circulating
          announcements; keeping staff informed on org changes, new hires, office matters and
          similar.
        </p>
        <p>
          <span className={styles.lbl}>Staff relations &amp; team events:</span>{" "}you&apos;re the point
          person for the day-to-day pulse of the team, and you plan and run celebrations,
          gatherings and milestones.
        </p>
        <p>
          <span className={styles.lbl}>CSR — a genuine clean slate.</span>{" "}There&apos;s no existing
          direction to inherit. Identifying and proposing initiatives, then coordinating
          execution, is real ownership from scratch — building this out is part of why you were
          brought in.
        </p>
      </>
    ),
  },
  {
    n: "06",
    title: "Brand & marketing materials",
    body: (
      <>
        <p>
          You&apos;re the custodian of the Envirotech brand as it shows up physically and
          visually across the company — not just digitally.
        </p>
        <ul>
          <li>
            <span className={styles.lbl}>Brand Guidelines:</span>{" "}you hold and maintain the document —
            colours, fonts, logo usage — and make sure anyone producing company material follows
            it.
          </li>
          <li>
            <span className={styles.lbl}>Master templates &amp; letterheads:</span>{" "}memos, internal
            documents and standard forms are yours to maintain.
          </li>
          <li>
            <span className={styles.lbl}>Merchandise &amp; marketing:</span>{" "}t-shirts and branded items
            (sourcing, ordering, on-brand designs); brochures, banners, giveaways and anything
            else carrying the Envirotech look.
          </li>
        </ul>
      </>
    ),
  },
  {
    n: "07",
    title: "Tender portals",
    body: (
      <>
        <p>Registration and access management — keeping the company&apos;s presence on tender portals current.</p>
        <ul>
          <li>Maintain portal registrations and logins — keep them current in Accounts Credentials.xlsx</li>
          <li>Track renewal/expiry dates for portal access in the same file so nothing lapses unnoticed</li>
          <li>Flag upcoming tender notices to the BD team for awareness</li>
        </ul>
      </>
    ),
  },
  {
    n: "08",
    title: "Licensing — registrations & renewals",
    body: (
      <>
        <p>
          Fully yours: keep registrations current and renewals ahead of deadline. Log every
          expiry date and related login in Accounts Credentials.xlsx.
        </p>
        <p>
          <span className={styles.lbl}>Current CIDB registrations:</span>{" "}G7 CE21 · G7 CE39 · G7 ME M15
          · G7 B04 · G7 B27.
        </p>
        <p>
          <span className={styles.lbl}>Identified gap:</span>{" "}CE20 (Water Supply Systems) requires a
          SPAN Permit C — the application process was being researched. CE19 (Sewerage) is a
          related category worth tracking alongside it.
        </p>
        <div className={styles.callout}>
          <span className={styles.calloutTitle}>To confirm with Rusydi</span>
          Whether the SPAN Permit C / CE20 application has progressed by the time you start — get
          the current status handed over. CIDB C1 renewal is urgent — it expires January 2027.
        </div>
      </>
    ),
  },
  {
    n: "09",
    title: "Office, pantry & petty cash",
    body: (
      <>
        <p>
          <span className={styles.lbl}>Office admin:</span>{" "}the office runs from Level 5, Syed Kechik
          Foundation Building, Jalan Kapas, Bangsar — a 1,200 sqft space on a 24-month tenancy
          from 1 August 2026. Keep the space running, liaise with the property manager (Nira Sdn.
          Bhd.) on anything building-related, and handle routine office needs.
        </p>
        <p>
          <span className={styles.lbl}>Pantry:</span>{" "}routine restocking and vendor management. Simple,
          but establish a rhythm early — a fixed restocking day or trigger point — so it
          doesn&apos;t become ad hoc.
        </p>
        <p>
          <span className={styles.lbl}>Petty cash:</span>{" "}maintain a running ledger of all
          disbursements; the flow is request → approval → disbursement → receipt collection.
          Reconcile the float regularly and flag any shortfall immediately.
        </p>
        <p>
          <span className={styles.lbl}>Requisition forms:</span>{" "}for once-off cash transactions that
          don&apos;t need a purchase order — office supplies, small equipment, incidentals. Keep
          the standard template on hand; log requester, purpose, amount and approval status;
          route to the approver <strong>before</strong>{" "}any purchase. Anything needing a PO
          follows the separate procurement process.
        </p>
      </>
    ),
  },
  {
    n: "10",
    title: "Travel arrangements — management",
    body: (
      <>
        <p>
          Handled case-by-case as travel needs come up — board members, site visits, client
          meetings and other business travel.
        </p>
        <ul>
          <li>Flights: confirm traveller preferences, dates and budget per trip</li>
          <li>Accommodation: aligned with the trip&apos;s purpose and duration</li>
          <li>Keep a simple travel log (traveller, dates, purpose, cost) for expense tracking</li>
          <li>Coordinate directly with the traveller on itinerary changes</li>
        </ul>
      </>
    ),
  },
  {
    n: "11",
    title: "Monthly reporting — claims & admin report",
    body: (
      <>
        <p>
          <span className={styles.lbl}>Monthly claims — hard dates on both ends.</span>{" "}Staff submit
          personal claims in HRSBOne by the <strong>25th</strong>; you verify, seek HOD
          approvals, reconcile and compile the workbook, and upload the report plus attachments
          (in individual staff folders) by the <strong>1st</strong>, to the CLAIM 2026 folder.
          Build this into a recurring reminder from month one.
        </p>
        <p>
          <span className={styles.lbl}>Monthly Admin Report</span>{" "}— separate from the claims workbook.
          Template and submission both live in the Admin Reporting \ 2026 folder (path on the
          Start tab); use the stored template each month and submit into the same subfolder so
          everything stays in one place year over year.
        </p>
      </>
    ),
  },
];

export type ChecklistGroup = {
  id: string;
  day: string;
  title: string;
  items: ReactNode[];
  notes?: ReactNode[];
};

export const checklistGroups: ChecklistGroup[] = [
  {
    id: "A",
    day: "Day 1",
    title: "Access & orientation",
    items: [
      "Get SharePoint access confirmed (Envirotech folder)",
      "Locate Envirotech Corporate Services \\ Documents — the CS team's own working folder",
      <>
        Get access to HRSB Holdings \ Documents \ General \{" "}
        <strong>01 MASTER INTEGRATED MANAGEMENT</strong>{" "}— where all policies, procedures and
        standard forms live
      </>,
      "Locate Envirotech \\ Documents \\ Accounts Credentials.xlsx — all account logins (website, social, tender portals, licensing) going forward",
      "Get login access for the company Facebook & LinkedIn pages",
      "Get introduced to Maryam for website updates — the live site is deployed via Shinjiru, hers to update; get Shinjiru access for the domain/hosting renewal",
      "Get introduced to Hamizan Hamdan (Group Digital Marketing Transformation PIC) for Facebook/LinkedIn reporting",
      "Get login access for any tender portals currently registered",
      "Collect laptop/equipment and confirm IT setup",
      "Walk through office layout, pantry location and general house rules with Rusydi",
    ],
    notes: [
      "Note: the ENV-HRA policy series (incl. Job Grade Framework) is still in development — HRSB Holdings' master IMS is your source of truth for now.",
    ],
  },
  {
    id: "B",
    day: "Day 2–3",
    title: "Core handovers with Rusydi",
    items: [
      "Petty cash: current float, ledger format and requisition process — walkthrough with Rusydi",
      "Requisition forms: get the standard template — for once-off cash transactions that don't need a purchase order",
      "Travel arrangements: handled case-by-case — get walked through how it's worked in practice so far",
      "Monthly claims cycle: staff submit in HRSBOne by the 25th; you verify, get HOD approvals, compile the workbook and upload (report + attachments) by the 1st to the CLAIM 2026 folder",
      "Monthly Admin Report: locate the template at ADMIN TEAM \\ Documents \\ General \\ Admin Reporting \\ 2026",
      "Licensing: list of current CIDB registrations, renewal dates, and status of the CE20 / SPAN Permit C application",
      "Board support: get briefed on the board member list and meeting cadence — shadow the next meeting if timing allows",
    ],
    notes: [
      "Note: Monthly HR & Admin Meetings happen as-and-when-required, not fixed dates — BUs outside Melaka join online by default.",
    ],
  },
  {
    id: "C",
    day: "Day 4–5",
    title: "Ongoing items & your own agenda",
    items: [
      "Note the freelance/subcontractor split: project team manages the working relationship; you handle the subcontracting form and payroll paperwork once it's settled",
      'Confirm the current (draft) file naming convention, and add "review SharePoint structure & naming" to your own to-do list — this is yours to finalise',
      "Set up a simple content calendar for Facebook / LinkedIn",
      "Ask Rusydi about any internal memo/comms in flight, and get a feel for staff relations and the team event rhythm",
      "CSR is a clean slate — start thinking about the direction and themes you'd want to build; this is genuinely yours",
      "Set a recurring reminder for pantry restocking",
      "Confirm the brand palette & fonts (swatches on the Start tab)",
      "Get the Brand Guidelines file, master templates/letterheads, and a look at current merchandise & marketing materials from Rusydi",
      "Company t-shirt & uniform — get sizing and design sorted",
      "Renew CIDB C1 — expiring January 2027 (urgent)",
    ],
  },
  {
    id: "D",
    day: "Week 1",
    title: "Office, hiring & event prep",
    items: [
      "Coordinate and arrange interviews for vacancies — liaise with Group HR and the relevant HODs",
      "Print business cards for key personnel",
      "Order basic office items — company envelopes, stamps and similar",
      "Office interior and furnishing",
      "Prep for the Majlis Doa Selamat & opening ceremony — 30 September",
    ],
  },
  {
    id: "G",
    day: "Ongoing",
    title: "Build these habits early",
    items: [
      "Keep a renewal calendar (licences, domain, portal access) — set reminders well ahead of deadlines",
      "Update Accounts Credentials.xlsx the moment any password is renewed, and log every portal/licence expiry date there too",
      "Reconcile petty cash on a fixed schedule",
      "Restock the pantry on a fixed schedule — don't let it become reactive",
      "Update this reference whenever a process changes — it's a living document",
    ],
  },
];
