"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Network,
  Users,
  Boxes,
  MapPin,
  Sun,
  Moon,
  Target,
  Compass as CompassIcon,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import styles from "./company.module.css";
import {
  heroStats,
  missionVision,
  coreValues,
  journey,
  factsheet,
  boardOfDirectors,
  keyPersons,
  energySubsidiaries,
  nonEnergySubsidiaries,
  workforce,
  locations,
  orgAffairs,
  orgVentures,
  orgCeoOffice,
  orgTopLevel,
  type Person,
} from "./data";

type Tab = "overview" | "structure" | "board" | "subsidiaries" | "locations";
type Theme = "dark" | "light";

const THEME_KEY = "hrsb.theme";
const TAB_KEY = "hrsb.tab";

function cx(...classNames: Array<string | false | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

const valueIcons = [Target, CompassIcon, Sparkles];

function PersonCard({ person }: { person: Person }) {
  const initials = person.name
    .replace(/^Dato['’]?\s*(Hj\.?)?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className={cx(styles.card, styles.person)}>
      <div className={styles.personTop}>
        {person.photo ? (
          <span className={styles.avatarPhoto}>
            <Image
              src={person.photo.src}
              alt={person.name}
              width={person.photo.w}
              height={person.photo.h}
            />
          </span>
        ) : (
          <span className={styles.avatar}>{initials}</span>
        )}
        <div>
          <div className={styles.personName}>{person.name}</div>
          <div className={styles.personRole}>{person.role}</div>
        </div>
      </div>
      <p className={styles.personBio}>{person.bio}</p>
    </div>
  );
}

export default function CompanyApp() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [tab, setTab] = useState<Tab>("overview");

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
      const savedTab = localStorage.getItem(TAB_KEY);
      if (
        savedTab === "overview" ||
        savedTab === "structure" ||
        savedTab === "board" ||
        savedTab === "subsidiaries" ||
        savedTab === "locations"
      ) {
        setTab(savedTab);
      }
    } catch {
      // localStorage unavailable — fall back to defaults
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function goToTab(next: Tab) {
    setTab(next);
    try {
      localStorage.setItem(TAB_KEY, next);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // ignore
    }
  }

  return (
    <div className={styles.page} data-theme={theme}>
      <header className={styles.topbar}>
        <div className={styles.brand} title="HRSB Holdings">
          <span className={styles.brandBadge}>
            <Image
              src="/logos/hrsb-holdings.png"
              alt="HRSB Holdings"
              width={200}
              height={97}
              className={styles.brandLogo}
              priority
            />
          </span>
        </div>
        <nav className={styles.tabs} role="tablist" aria-label="Sections">
          <button className={cx(styles.tab, tab === "overview" && styles.tabOn)} role="tab" aria-selected={tab === "overview"} onClick={() => goToTab("overview")}>
            <Building2 size={16} /> Overview
          </button>
          <button className={cx(styles.tab, tab === "structure" && styles.tabOn)} role="tab" aria-selected={tab === "structure"} onClick={() => goToTab("structure")}>
            <Network size={16} /> Structure
          </button>
          <button className={cx(styles.tab, tab === "board" && styles.tabOn)} role="tab" aria-selected={tab === "board"} onClick={() => goToTab("board")}>
            <Users size={16} /> Board
          </button>
          <button className={cx(styles.tab, tab === "subsidiaries" && styles.tabOn)} role="tab" aria-selected={tab === "subsidiaries"} onClick={() => goToTab("subsidiaries")}>
            <Boxes size={16} /> Subsidiaries
          </button>
          <button className={cx(styles.tab, tab === "locations" && styles.tabOn)} role="tab" aria-selected={tab === "locations"} onClick={() => goToTab("locations")}>
            <MapPin size={16} /> Locations
          </button>
        </nav>
        <div className={styles.spacer} />
        <Link href="/onboarding/anne" className={styles.navLink}>
          <ArrowLeft size={14} style={{ marginRight: 6, verticalAlign: -2 }} />
          Onboarding
        </Link>
        <button className={styles.iconbtn} aria-label="Toggle theme" title="Toggle light / dark" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>

      <main className={styles.main}>
        {tab === "overview" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.hero}>
              <div className={styles.heroInner}>
                <div className={cx(styles.eyebrow, styles.heroEyebrow)}>Our parent company</div>
                <h1 style={{ marginTop: 16 }}>HRSB Holdings Sdn Bhd</h1>
                <p className={styles.heroLead}>
                  Incorporated on 15 November 2001 in Melaka as HSE Resources Sdn Bhd, HRSB is an
                  oil & gas services provider specialising in project management, plant
                  maintenance, turnaround works, EPCC, scaffolding services and training. In
                  April 2010 HRSB qualified as an Integrated Management System (IMS) certified
                  company, and has since diversified into technology, telecommunications,
                  construction and consumer products — with Envirotech carrying the water &amp;
                  wastewater engineering work under the Energy division.
                </p>
                <div className={styles.heroStats}>
                  {heroStats.map((s) => (
                    <div key={s.l} className={styles.heroStat}>
                      <div className={cx(styles.n, styles.tnum)}>{s.n}</div>
                      <div className={styles.l}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.wrap}>
              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>01</span>
                  <div>
                    <h2>Vision, mission &amp; motto</h2>
                    <div className={styles.blockSub}>What HRSB is working towards</div>
                  </div>
                </div>
                <div className={cx(styles.grid, styles.cols3)}>
                  {missionVision.map((v, i) => {
                    const Icon = valueIcons[i % valueIcons.length];
                    return (
                      <div key={v.title} className={cx(styles.card, styles.valueCard)}>
                        <span className={styles.valueIco}>
                          <Icon size={19} />
                        </span>
                        <h3>{v.title}</h3>
                        <p>{v.body}</p>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.eyebrow} style={{ margin: "18px 0 10px" }}>
                  Core values
                </div>
                <div className={styles.chips}>
                  {coreValues.map((v) => (
                    <span key={v} className={styles.chipItem}>
                      <span className={styles.chipDot} /> {v}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>02</span>
                  <div>
                    <h2>Our journey</h2>
                    <div className={styles.blockSub}>From a Melaka scaffolding outfit to a diversified group</div>
                  </div>
                </div>
                <div className={cx(styles.card, styles.timeline)}>
                  {journey.map((era) => (
                    <div key={era.years} className={styles.era}>
                      <div className={styles.eraWhen}>
                        <div className={cx(styles.eraYears, styles.tnum)}>{era.years}</div>
                        <div className={styles.eraTag}>{era.tag}</div>
                      </div>
                      <div className={styles.eraBody}>
                        <ul>
                          {era.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "structure" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.wrap}>
              <div className={styles.block} style={{ paddingTop: 40 }}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Governance</span>
                </div>
                <h1 className={styles.pageTitle}>Company structure</h1>
                <p className={styles.pageLead} style={{ marginBottom: 26 }}>
                  Governance flows from the Board down through the Group President/CEO into two
                  operating divisions — Energy and Emerging Market — each with its own
                  subsidiaries.
                </p>

                <div className={styles.tree}>
                  <div className={cx(styles.card, styles.treeRoot)}>Board of Directors</div>
                  <div className={cx(styles.grid, styles.cols2)}>
                    {orgTopLevel.slice(0, 2).map((t: string) => (
                      <div key={t} className={cx(styles.card, styles.treeBranch)}>
                        <div className={styles.branchList}>
                          <span className={styles.branchItem}>{t}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={cx(styles.card, styles.treeRoot)}>Group President / CEO</div>
                  <div className={cx(styles.grid, styles.cols3, styles.alignStart)}>
                    <div className={cx(styles.card, styles.treeBranch)}>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>
                        {orgCeoOffice.title}
                      </div>
                      <div className={styles.branchList}>
                        {orgCeoOffice.items.map((t) => (
                          <span key={t} className={styles.branchItem}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className={cx(styles.card, styles.treeBranch)}>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>
                        {orgAffairs.title}
                      </div>
                      <div className={styles.branchList}>
                        {orgAffairs.items.map((t) => (
                          <span key={t} className={styles.branchItem}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className={cx(styles.card, styles.treeBranch)}>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>
                        {orgVentures.title}
                      </div>
                      <div className={styles.branchList}>
                        {orgVentures.items.map((t) => (
                          <span key={t} className={styles.branchItem}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={cx(styles.card, styles.treeBranch)}>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>
                      {orgTopLevel.slice(2).join(" & ")}
                    </div>
                    <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                      Report directly to the Board, independent of both EVP lines.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Registration</span>
                </div>
                <h2 style={{ marginBottom: 16 }}>Company factsheet</h2>
                <div className={styles.card}>
                  {factsheet.map((row) => (
                    <div key={row.label} className={styles.factRow}>
                      <div className={styles.factLabel}>{row.label}</div>
                      <div className={styles.factValue}>{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "board" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.wrap}>
              <div className={styles.block} style={{ paddingTop: 40 }}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Leadership</span>
                </div>
                <h1 className={styles.pageTitle}>Board of Directors</h1>
                <p className={styles.pageLead} style={{ marginBottom: 26 }}>
                  The four directors driving HRSB&apos;s strategy, plus the division Vice Presidents
                  who run Energy and Emerging Markets day to day.
                </p>
                <div className={cx(styles.grid, styles.cols2)}>
                  {boardOfDirectors.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>

                <div className={styles.eyebrow} style={{ margin: "32px 0 14px" }}>
                  Division key persons
                </div>
                <div className={cx(styles.grid, styles.cols2)}>
                  {keyPersons.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "subsidiaries" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.wrap}>
              <div className={styles.block} style={{ paddingTop: 40 }}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Group companies</span>
                </div>
                <h1 className={styles.pageTitle}>Subsidiaries &amp; businesses</h1>
                <p className={styles.pageLead} style={{ marginBottom: 20 }}>
                  {workforce.subsidiaryCount} subsidiaries across two divisions — {workforce.total.toLocaleString()} people
                  in total ({workforce.permanent} permanent, {workforce.contract} contract).
                </p>

                <div className={styles.divisionLabel}>Energy division</div>
                <div className={cx(styles.grid, styles.cols3)}>
                  {energySubsidiaries.map((s) => (
                    <div key={s.name} className={cx(styles.card, styles.subCard)}>
                      <span className={styles.subLogo}>
                        <Image src={s.logo.src} alt={s.name} width={s.logo.w} height={s.logo.h} />
                      </span>
                      <div className={styles.subTop}>
                        <span className={styles.subName}>{s.name}</span>
                        <span className={styles.subOwn}>{s.ownership}</span>
                      </div>
                      <p className={styles.subDesc}>{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.divisionLabel}>Emerging Market division</div>
                <div className={cx(styles.grid, styles.cols3)}>
                  {nonEnergySubsidiaries.map((s) => (
                    <div key={s.name} className={cx(styles.card, styles.subCard)}>
                      <span className={styles.subLogo}>
                        <Image src={s.logo.src} alt={s.name} width={s.logo.w} height={s.logo.h} />
                      </span>
                      <div className={styles.subTop}>
                        <span className={styles.subName}>{s.name}</span>
                        <span className={styles.subOwn}>{s.ownership}</span>
                      </div>
                      <p className={styles.subDesc}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "locations" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.wrap}>
              <div className={styles.block} style={{ paddingTop: 40 }}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Geography</span>
                </div>
                <h1 className={styles.pageTitle}>Locations</h1>
                <p className={styles.pageLead} style={{ marginBottom: 20 }}>
                  Six sites across Peninsular Malaysia, including two in Melaka — the Masjid
                  Tanah headquarters and the Bertam fabrication facility.
                </p>

                <div className={cx(styles.card, styles.mapCard)}>
                  <div className={styles.mapWrap}>
                    <svg
                      className={styles.mapSvg}
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <polygon points="32,2 18,10 15,22 20,38 24,52 28,64 33,74 38,84 48,97 58,91 65,76 70,58 78,42 72,26 60,13 45,4" />
                    </svg>
                    {locations.map((loc) => (
                      <div
                        key={loc.name}
                        className={styles.pin}
                        style={{ left: `${loc.map.x}%`, top: `${loc.map.y}%` }}
                      >
                        <span className={styles.pinDot} />
                        <span className={styles.pinLabel}>{loc.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={cx(styles.grid, styles.cols3)}>
                  {locations.map((loc) => (
                    <div key={loc.name} className={cx(styles.card, styles.locCard)}>
                      <div className={styles.locTop}>
                        <span className={styles.locIco}>
                          <MapPin size={17} />
                        </span>
                        <div className={styles.locName}>{loc.name}</div>
                      </div>
                      <div className={styles.locSubs}>
                        {loc.subs.map((s) => (
                          <span key={s} className={styles.locSub}>
                            {s}
                          </span>
                        ))}
                      </div>
                      {loc.addr && <p className={styles.locAddr}>{loc.addr}</p>}
                      {loc.meta && <div className={styles.locMeta}>{loc.meta}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <div className={styles.footer}>
        <span className={styles.pulse} />
        <span>HRSB Holdings Sdn Bhd · Company overview</span>
        <span style={{ color: "var(--text-muted)" }}>·</span>
        <span>
          Styled in <strong style={{ color: "var(--text-body)" }}>ENVY</strong>
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          Reliable partner. Pace setter.
        </span>
      </div>
    </div>
  );
}
