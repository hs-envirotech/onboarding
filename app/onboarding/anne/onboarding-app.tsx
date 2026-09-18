"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Compass,
  LayoutGrid,
  ListChecks,
  Sun,
  Moon,
  MapPin,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  ChevronDown,
  Info,
  CheckCircle2,
  Building2,
  Droplet,
  Users,
} from "lucide-react";
import styles from "./onboarding.module.css";
import {
  quickLinks,
  keyPaths,
  swatches,
  calendarRows,
  remitChips,
  remitSections,
  checklistGroups,
} from "./data";

type Tab = "start" | "remit" | "checklist";
type Theme = "dark" | "light";

const THEME_KEY = "anne.theme";
const TAB_KEY = "anne.tab";
const CHECKLIST_KEY = "anne.checklist.v1";

function cx(...classNames: Array<string | false | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

function EnvyMark() {
  return (
    <svg
      width="44"
      height="28"
      viewBox="0 0 128 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ENVY mark"
    >
      <polyline
        points="10,58 32,24 54,54 76,20 98,50 118,34"
        fill="none"
        stroke="#06B074"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="76" cy="20" r="9" fill="#06B074" />
    </svg>
  );
}

export default function OnboardingApp() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [tab, setTab] = useState<Tab>("start");
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(
    () => new Set(remitSections.filter((s) => s.defaultOpen).map((s) => s.n))
  );
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<{ msg: string; show: boolean }>({
    msg: "",
    show: false,
  });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    // Reading persisted UI state after mount is intentional here: the static
    // export always prerenders the defaults, and localStorage only exists in
    // the browser, so this necessarily runs post-hydration.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
      const savedTab = localStorage.getItem(TAB_KEY);
      if (savedTab === "start" || savedTab === "remit" || savedTab === "checklist") {
        setTab(savedTab);
      }
      const savedChecklist = localStorage.getItem(CHECKLIST_KEY);
      if (savedChecklist) setChecklist(JSON.parse(savedChecklist));
    } catch {
      // localStorage unavailable — fall back to defaults
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function showToast(msg: string) {
    setToast({ msg, show: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 1700);
  }

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

  async function copyText(key: string, text: string, successMsg: string) {
    let ok = true;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("no clipboard api");
      }
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (!ok) {
      showToast("Copy failed");
      return;
    }
    showToast(successMsg);
    setCopiedKey(key);
    clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopiedKey(null), 1600);
  }

  function toggleAccordion(n: string) {
    setOpenAccordions((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  }

  function toggleChecklistItem(id: string) {
    setChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }

  function resetChecklist() {
    setChecklist({});
    try {
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify({}));
    } catch {
      // ignore
    }
    showToast("Checklist reset");
  }

  const totalItems = useMemo(
    () => checklistGroups.reduce((sum, g) => sum + g.items.length, 0),
    []
  );
  const doneItems = useMemo(
    () => Object.values(checklist).filter(Boolean).length,
    [checklist]
  );
  const pct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <div className={styles.page} data-theme={theme}>
      <header className={styles.topbar}>
        <div className={styles.brand} title="ENVY">
          <EnvyMark />
          <span className={styles.brandWord}>envy</span>
        </div>
        <nav className={styles.tabs} role="tablist" aria-label="Sections">
          <button
            className={cx(styles.tab, tab === "start" && styles.tabOn)}
            role="tab"
            aria-selected={tab === "start"}
            onClick={() => goToTab("start")}
          >
            <Compass size={16} />
            <span className={styles.tabLabel}>Start here</span>
          </button>
          <Link href="/company" className={styles.tab}>
            <Building2 size={16} />
            <span className={styles.tabLabel}>HRSB</span>
          </Link>
          <Link href="/envirotech" className={styles.tab}>
            <Droplet size={16} />
            <span className={styles.tabLabel}>Envirotech</span>
          </Link>
          <Link href="/whos-who" className={styles.tab}>
            <Users size={16} />
            <span className={styles.tabLabel}>Who&apos;s who</span>
          </Link>
          <button
            className={cx(styles.tab, tab === "remit" && styles.tabOn)}
            role="tab"
            aria-selected={tab === "remit"}
            onClick={() => goToTab("remit")}
          >
            <LayoutGrid size={16} />
            <span className={styles.tabLabel}>Your remit</span>
          </button>
          <button
            className={cx(styles.tab, tab === "checklist" && styles.tabOn)}
            role="tab"
            aria-selected={tab === "checklist"}
            onClick={() => goToTab("checklist")}
          >
            <ListChecks size={16} />
            <span className={styles.tabLabel}>Week 1</span>
          </button>
        </nav>
        <div className={styles.spacer} />
        <button
          className={styles.iconbtn}
          aria-label="Toggle theme"
          title="Toggle light / dark"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>

      <main className={styles.main}>
        {tab === "start" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.hero}>
              <div className={styles.heroInner}>
                <div className={cx(styles.eyebrow, styles.heroEyebrow)}>
                  Corporate Services — welcome
                </div>
                <h1 style={{ marginTop: 16 }}>Welcome, Anne.</h1>
                <p className={styles.heroLead}>
                  Corporate Services is yours to run — and this is your working companion for
                  it. You don&apos;t need to memorise anything here; you just need to know where
                  to find things. Keep it close for your first few months.
                </p>
                <div className={styles.heroLoc}>
                  <MapPin size={16} /> Level 5, Syed Kechik Foundation Building, Jalan Kapas,
                  Bangsar, KL
                </div>
                <div className={styles.ctaRow}>
                  <button
                    className={cx(styles.btn, styles.btnPrimary)}
                    onClick={() => goToTab("checklist")}
                  >
                    <ListChecks size={17} /> Start the Week 1 checklist
                  </button>
                  <button
                    className={cx(styles.btn, styles.btnGhost)}
                    onClick={() => goToTab("remit")}
                  >
                    <ArrowRight size={17} /> See what you own
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.wrap}>
              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>01</span>
                  <div>
                    <h2>Quick links</h2>
                    <div className={styles.blockSub}>Everything you&apos;ll log into</div>
                  </div>
                </div>
                <p className={styles.blockIntro}>
                  All logins live in one place — the Accounts Credentials file below. These
                  links work on your phone or laptop.
                </p>
                <div className={cx(styles.grid, styles.links)}>
                  {quickLinks.map((link) => (
                    <a
                      key={link.title}
                      className={cx(styles.card, styles.linkCard)}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                    >
                      <div className={styles.lcTop}>
                        <span className={styles.lcIco}>
                          <link.icon size={18} />
                        </span>
                        <h3>{link.title}</h3>
                        <span className={styles.ext}>
                          <ExternalLink size={16} />
                        </span>
                      </div>
                      <p>{link.description}</p>
                      <span className={styles.dom}>{link.domain}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>02</span>
                  <div>
                    <h2>Key paths</h2>
                    <div className={styles.blockSub}>Where things live</div>
                  </div>
                </div>
                <p className={styles.blockIntro}>
                  Copy a path, then paste it into SharePoint search or File Explorer once
                  folders are synced.
                </p>
                <div className={styles.pathList}>
                  {keyPaths.map((kp) => (
                    <div key={kp.path} className={cx(styles.card, styles.path)}>
                      <div className={styles.pmeta}>
                        <div className={styles.pt}>{kp.title}</div>
                        <div className={styles.pp}>{kp.path}</div>
                      </div>
                      <button
                        className={cx(
                          styles.copyBtn,
                          copiedKey === kp.path && styles.copyBtnDone
                        )}
                        onClick={() => copyText(kp.path, kp.path, "Path copied")}
                      >
                        {copiedKey === kp.path ? (
                          <>
                            <Check size={14} /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copy path
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>03</span>
                  <div>
                    <h2>Brand palette</h2>
                    <div className={styles.blockSub}>Envirotech colours &amp; type on hand</div>
                  </div>
                </div>
                <p className={styles.blockIntro}>
                  Everything you produce uses these. Tap a swatch to copy its hex.
                </p>
                <div className={styles.swatches}>
                  {swatches.map((sw) => (
                    <div
                      key={sw.hex}
                      className={cx(
                        styles.card,
                        styles.swatch,
                        copiedKey === sw.hex && styles.swatchDone
                      )}
                      onClick={() => copyText(sw.hex, sw.hex, `${sw.hex} copied`)}
                    >
                      <div
                        className={styles.chip}
                        style={{
                          background: sw.hex,
                          borderBottom:
                            sw.name === "Paper" ? "1px solid var(--border-subtle)" : undefined,
                        }}
                      />
                      <div className={styles.sinfo}>
                        <div className={styles.sname}>{sw.name}</div>
                        <div className={styles.shex}>
                          {sw.hex} <Check size={14} className={styles.shexOk} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={cx(styles.card, styles.typeNote)}>
                  Type: <strong>Manrope</strong> for headers ·{" "}
                  <strong>Source Sans 3</strong>{" "}for body text. The &quot;HRSB Sigma&quot;
                  naming has been dropped — everything runs under Envirotech.
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>04</span>
                  <div>
                    <h2>Renewal calendar</h2>
                    <div className={styles.blockSub}>Deadlines to build in early</div>
                  </div>
                </div>
                <p className={styles.blockIntro}>
                  Set recurring reminders from month one — well ahead of each date, not on it.
                </p>
                <div className={cx(styles.card, styles.cal)}>
                  {calendarRows.map((row, i) => (
                    <div key={i} className={styles.calRow}>
                      <div className={cx(styles.calWhen, row.roll && styles.calWhenRoll)}>
                        <div className={cx(styles.calWhenBig, styles.tnum)}>{row.when}</div>
                        {row.tag && <div className={styles.calWhenTag}>{row.tag}</div>}
                      </div>
                      <div className={styles.calBody}>{row.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "remit" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.wrap}>
              <div className={styles.block} style={{ paddingTop: 40 }}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Systems &amp; processes</span>
                </div>
                <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "var(--ls-tighter)", marginBottom: 12 }}>
                  Your remit
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 660, marginBottom: 26 }}>
                  Everything that sits under Corporate Services, in one place. Open a section
                  when you need it — this is a living reference, so flag anything that changes to
                  Rusydi.
                </p>

                <div className={styles.eyebrow} style={{ marginBottom: 12 }}>
                  At a glance — what you own
                </div>
                <div className={styles.chips}>
                  {remitChips.map((chip) => (
                    <span key={chip} className={styles.chipItem}>
                      <span className={styles.chipDot} /> {chip}
                    </span>
                  ))}
                </div>

                <div className={styles.accordion}>
                  {remitSections.map((section) => {
                    const isOpen = openAccordions.has(section.n);
                    return (
                      <div
                        key={section.n}
                        className={cx(styles.card, styles.acc, isOpen && styles.accOpen)}
                      >
                        <button
                          className={styles.accHead}
                          onClick={() => toggleAccordion(section.n)}
                        >
                          <span className={styles.accN}>{section.n}</span>
                          <span className={styles.accT}>{section.title}</span>
                          <span className={styles.accChev}>
                            <ChevronDown size={18} />
                          </span>
                        </button>
                        {isOpen && <div className={styles.accBody}>{section.body}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "checklist" && (
          <section className={styles.screen} role="tabpanel">
            <div className={styles.wrap}>
              <div className={styles.block} style={{ paddingTop: 40 }}>
                <div className={styles.blockHead}>
                  <span className={styles.blockNum}>Orient fast</span>
                </div>
                <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "var(--ls-tighter)", marginBottom: 12 }}>
                  Week 1 checklist
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 660, marginBottom: 24 }}>
                  Tick things off as you go — your progress is saved on this device. Don&apos;t
                  hesitate to ask Rusydi for a walkthrough on anything.
                </p>

                <div className={cx(styles.card, styles.progressCard)}>
                  <div className={styles.progressTop}>
                    <span className={styles.progressLabel}>
                      {doneItems === totalItems && totalItems > 0
                        ? "All done — nice work"
                        : `${doneItems} of ${totalItems} done`}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span className={styles.progressPct}>{pct}%</span>
                      <button className={styles.resetBtn} onClick={resetChecklist}>
                        Reset
                      </button>
                    </div>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${pct}%` }} />
                  </div>
                </div>

                {checklistGroups.map((group) => {
                  const groupDone = group.items.filter(
                    (_, i) => checklist[`${group.id}-${i}`]
                  ).length;
                  return (
                    <div key={group.id} className={cx(styles.card, styles.clGroup)}>
                      <div className={styles.clGroupHead}>
                        <span className={styles.clDay}>{group.day}</span>
                        <h3>{group.title}</h3>
                        <span className={styles.clCount}>
                          {groupDone}/{group.items.length}
                        </span>
                      </div>
                      <div className={styles.clItems}>
                        {group.items.map((item, i) => {
                          const id = `${group.id}-${i}`;
                          const done = !!checklist[id];
                          return (
                            <label
                              key={id}
                              className={cx(styles.clItem, done && styles.clItemDone)}
                              onClick={(e) => {
                                e.preventDefault();
                                toggleChecklistItem(id);
                              }}
                            >
                              <span className={styles.clBox}>
                                <Check size={13} />
                              </span>
                              <span className={styles.clTxt}>{item}</span>
                            </label>
                          );
                        })}
                        {group.notes?.map((note, i) => (
                          <div key={i} className={styles.clNote}>
                            <Info size={16} />
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <div className={styles.footer}>
        <span className={styles.pulse} />
        <span>Corporate Services onboarding companion · Anne</span>
        <span style={{ color: "var(--text-muted)" }}>·</span>
        <span>
          Styled in <strong style={{ color: "var(--text-body)" }}>ENVY</strong>{" "}— the digital
          operating system
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          See everything. Decide faster.
        </span>
      </div>

      <div className={cx(styles.toast, toast.show && styles.toastShow)}>
        <CheckCircle2 size={16} />
        <span>{toast.msg}</span>
      </div>
    </div>
  );
}
