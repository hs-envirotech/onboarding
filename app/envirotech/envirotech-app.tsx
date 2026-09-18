"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  BadgeCheck,
  Network,
  Sun,
  Moon,
  Target,
  Compass as CompassIcon,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react";
import styles from "../company/company.module.css";
import {
  heroStats,
  missionVision,
  philosophy,
  prideValues,
  serviceGroups,
  sectors,
  whyChooseUs,
  botSteps,
  trackRecord,
  factsheet,
  licences,
  keyPersonnel,
  preExit,
  postExit,
  orgCeo,
  orgTeams,
  orgTrainee,
  orgFootnote,
} from "./data";

type Tab = "overview" | "corporate" | "structure";
type Theme = "dark" | "light";

const THEME_KEY = "envirotech.theme";
const TAB_KEY = "envirotech.tab";

function cx(...classNames: Array<string | false | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

const valueIcons = [Target, CompassIcon];

export default function EnvirotechApp() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [tab, setTab] = useState<Tab>("overview");

  useEffect(() => {
    // Reading persisted UI state after mount is intentional here: the static
    // export always prerenders the defaults, and localStorage only exists in
    // the browser, so this necessarily runs post-hydration.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
      const savedTab = localStorage.getItem(TAB_KEY);
      if (savedTab === "overview" || savedTab === "corporate" || savedTab === "structure") {
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
        <div className={styles.brand} title="Envirotech">
          <span className={styles.brandBadge} style={{ background: "#0d2740" }}>
            <Image
              src="/logos/envirotech.png"
              alt="Envirotech"
              width={176}
              height={67}
              className={styles.brandLogo}
              priority
            />
          </span>
        </div>
        <nav className={styles.tabs} role="tablist" aria-label="Sections">
          <button className={cx(styles.tab, tab === "overview" && styles.tabOn)} role="tab" aria-selected={tab === "overview"} onClick={() => goToTab("overview")}>
            <Building2 size={16} /> Overview
          </button>
          <button className={cx(styles.tab, tab === "corporate" && styles.tabOn)} role="tab" aria-selected={tab === "corporate"} onClick={() => goToTab("corporate")}>
            <BadgeCheck size={16} /> Corporate info
          </button>
          <button className={cx(styles.tab, tab === "structure" && styles.tabOn)} role="tab" aria-selected={tab === "structure"} onClick={() => goToTab("structure")}>
            <Network size={16} /> Structure
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
                <div className={cx(styles.eyebrow, styles.heroEyebrow)}>Our own entity</div>
                <h1 style={{ marginTop: 16 }}>HRSB Sigma Envirotech Sdn Bhd</h1>
                <p className={styles.heroLead}>
                  Trading as Envirotech — a Malaysia-based water and wastewater solutions provider,
                  established in 2019. We support industries in reducing environmental impact while
                  maintaining operational performance, helping clients manage water responsibly,
                  minimise waste, and meet regulatory requirements through practical, implementable
                  solutions — end-to-end, from concept to long-term operation.{" "}
                  <strong>hs-envirotech.com</strong>
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
                    <h2>Vision &amp; mission</h2>
                    <div className={styles.blockSub}>What Envirotech is working towards</div>
                  </div>
                </div>
                <div className={cx(styles.grid, styles.cols2)}>
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
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>02</span>
                  <div>
                    <h2>Our philosophy</h2>
                    <div className={styles.blockSub}>Plus the PRIDE core values behind it</div>
                  </div>
                </div>
                <div className={cx(styles.grid, styles.cols2)}>
                  {philosophy.map((p) => (
                    <div key={p.title} className={styles.card} style={{ padding: 18 }}>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>
                        {p.title}
                      </div>
                      <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{p.body}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.eyebrow} style={{ margin: "18px 0 10px" }}>
                  Core values — PRIDE
                </div>
                <div className={cx(styles.grid, styles.cols2)}>
                  {prideValues.map((v) => (
                    <div key={v.letter} className={styles.card} style={{ padding: "14px 18px" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--accent)", marginRight: 8 }}>
                        {v.letter}
                      </span>
                      <strong style={{ color: "var(--text-strong)" }}>{v.word}</strong>
                      <p style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 4 }}>{v.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>03</span>
                  <div>
                    <h2>Services, products &amp; sectors</h2>
                    <div className={styles.blockSub}>What we deliver, and who for</div>
                  </div>
                </div>
                <div className={cx(styles.grid, styles.cols3)}>
                  {serviceGroups.map((g) => (
                    <div key={g.title} className={cx(styles.card, styles.treeBranch)}>
                      <div className={styles.branchTitle}>{g.title}</div>
                      <div className={styles.branchList}>
                        {g.items.map((item) => (
                          <span key={item} className={styles.branchItem}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.eyebrow} style={{ margin: "18px 0 10px" }}>
                  Sectors we serve
                </div>
                <div className={styles.chips}>
                  {sectors.map((s) => (
                    <span key={s} className={styles.chipItem}>
                      <span className={styles.chipDot} /> {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>04</span>
                  <div>
                    <h2>Why choose us</h2>
                    <div className={styles.blockSub}>&amp; our Build-Operate-Transfer model</div>
                  </div>
                </div>
                <div className={cx(styles.card, styles.treeBranch)}>
                  <div className={styles.branchList}>
                    {whyChooseUs.map((item) => (
                      <span key={item} className={styles.branchItem}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.eyebrow} style={{ margin: "18px 0 10px" }}>
                  Build, Operate, Transfer (BOT)
                </div>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginBottom: 14 }}>
                  Most Envirotech projects are delivered as Build-Operate-Transfer concessions — we
                  finance, build and run the plant; the client simply pays for treated water or
                  capacity. Zero client CAPEX, operating risk transferred, guaranteed performance.
                </p>
                <div className={cx(styles.grid, styles.cols3)}>
                  {botSteps.map((s) => (
                    <div key={s.n} className={cx(styles.card, styles.valueCard)}>
                      <span className={styles.valueIco}>{s.n}</span>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>05</span>
                  <div>
                    <h2>Technology partner &amp; track record</h2>
                    <div className={styles.blockSub}>Gradiant, plus a selection of awarded projects</div>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginBottom: 14 }}>
                  Envirotech partners with <strong>Gradiant</strong>, a global leader in advanced
                  water and wastewater technology, pairing our local engineering, delivery and
                  lifecycle service with Gradiant&apos;s differentiated process technologies —
                  desalination, reuse, recovery and zero-liquid-discharge.
                </p>
                <div className={styles.card}>
                  {trackRecord.map((row) => (
                    <div key={row.project} className={styles.factRow}>
                      <div className={styles.factLabel}>{row.location}</div>
                      <div className={styles.factValue}>
                        <strong>{row.project}</strong> — {row.client}
                        <div style={{ color: "var(--text-muted)", fontSize: 12.5, marginTop: 2 }}>{row.capacity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "corporate" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.wrap}>
              <div className={styles.block} style={{ paddingTop: 40 }}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Registration</span>
                </div>
                <h1 className={styles.pageTitle}>Corporate information</h1>
                <p className={styles.pageLead} style={{ marginBottom: 26 }}>
                  Legal entity details, key personnel, and current licences &amp; registrations.
                </p>

                <div className={styles.card}>
                  {factsheet.map((row) => (
                    <div key={row.label} className={styles.factRow}>
                      <div className={styles.factLabel}>{row.label}</div>
                      <div className={styles.factValue}>{row.value}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.eyebrow} style={{ margin: "28px 0 14px" }}>
                  Key personnel
                </div>
                <div className={styles.card}>
                  {keyPersonnel.map((p) => (
                    <div key={p.name} className={styles.factRow}>
                      <div className={styles.factLabel}>{p.role}</div>
                      <div className={styles.factValue}>{p.name}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.eyebrow} style={{ margin: "28px 0 14px" }}>
                  Licences &amp; registrations
                </div>
                <div className={styles.card}>
                  {licences.map((l) => (
                    <div key={l.name} className={styles.factRow}>
                      <div className={styles.factLabel}>{l.name}</div>
                      <div className={styles.factValue}>
                        {l.scope}
                        <div style={{ color: "var(--text-muted)", fontSize: 12.5, marginTop: 2 }}>{l.validity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Ownership</span>
                </div>
                <h2 style={{ marginBottom: 6 }}>Directors &amp; shareholders</h2>
                <p style={{ color: "var(--text-muted)", fontSize: 13.5, marginBottom: 18 }}>
                  Gradiant&apos;s co-shareholder position (via Sigma Water Engineering) has exited.
                  Both states are shown for reference.
                </p>
                <div className={cx(styles.grid, styles.cols2)}>
                  <div className={cx(styles.card, styles.treeBranch)}>
                    <div className={styles.branchTitle}>{preExit.label}</div>
                    <div className={styles.eyebrow} style={{ margin: "4px 0 8px" }}>Directors</div>
                    <div className={styles.branchList}>
                      {preExit.directors.map((d) => (
                        <span key={d} className={styles.branchItem}>{d}</span>
                      ))}
                    </div>
                    <div className={styles.eyebrow} style={{ margin: "14px 0 8px" }}>Shareholders</div>
                    <div className={styles.branchList}>
                      {preExit.shareholders.map((s) => (
                        <span key={s.holder} className={styles.branchItem}>{s.holder}</span>
                      ))}
                    </div>
                  </div>
                  <div className={cx(styles.card, styles.treeBranch)}>
                    <div className={styles.branchTitle}>{postExit.label}</div>
                    <div className={styles.eyebrow} style={{ margin: "4px 0 8px" }}>Directors</div>
                    <div className={styles.branchList}>
                      {postExit.directors.map((d) => (
                        <span key={d} className={styles.branchItem}>{d}</span>
                      ))}
                    </div>
                    <div className={styles.eyebrow} style={{ margin: "14px 0 8px" }}>Shareholders</div>
                    <div className={styles.branchList}>
                      {postExit.shareholders.map((s) => (
                        <span key={s.holder} className={styles.branchItem}>
                          {s.holder}
                          {s.stake && <strong style={{ color: "var(--accent)" }}> — {s.stake}</strong>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={cx(styles.callout, styles.calloutWarn)} style={{ marginTop: 16 }}>
                  <span className={styles.calloutTitle}>
                    <AlertTriangle size={12} style={{ verticalAlign: -2, marginRight: 4 }} />
                    Pending SSM officialisation
                  </span>
                  The post-exit directors and shareholding above reflect the agreed restructuring
                  and are the operating reality — but the change has not yet been formally lodged
                  with the Companies Commission of Malaysia (SSM). Treat SSM/e-search records as
                  lagging until the filing completes.
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
                <h1 className={styles.pageTitle}>Our organisation chart</h1>
                <p className={styles.pageLead} style={{ marginBottom: 26 }}>
                  The Board of Directors (3 pax) sits above the CEO, who is supported by four
                  functional teams. &quot;Vacancy&quot; marks a budgeted, currently open role.
                </p>

                <div className={styles.tree}>
                  <div className={cx(styles.card, styles.treeRoot)}>
                    {orgCeo.role} — {orgCeo.name}
                  </div>
                  <div className={cx(styles.grid, styles.cols2, styles.alignStart)}>
                    {orgTeams.map((team) => (
                      <div key={team.title} className={cx(styles.card, styles.treeBranch)}>
                        <div className={styles.branchTitle}>{team.title}</div>
                        <div className={styles.branchList}>
                          <span className={styles.branchItem}>
                            <strong>{team.lead.role}</strong> — {team.lead.name}
                          </span>
                          {team.reports.map((r) => (
                            <span key={r.role} className={styles.branchItem}>
                              {r.role} — {r.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={cx(styles.card, styles.treeBranch)}>
                    <div className={styles.branchTitle}>Trainee intake</div>
                    <div className={styles.branchList}>
                      <span className={styles.branchItem}>{orgTrainee}</span>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 12.5, color: "var(--text-faint)", marginTop: 16 }}>{orgFootnote}</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <div className={styles.footer}>
        <span className={styles.pulse} />
        <span>HRSB Sigma Envirotech Sdn Bhd · Company overview</span>
        <span style={{ color: "var(--text-muted)" }}>·</span>
        <span>
          Styled in <strong style={{ color: "var(--text-body)" }}>ENVY</strong>
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          hs-envirotech.com
        </span>
      </div>
    </div>
  );
}
