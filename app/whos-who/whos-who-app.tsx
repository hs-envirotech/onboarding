"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, ArrowLeft, Mail, Phone } from "lucide-react";
import styles from "../company/company.module.css";
import {
  boardLeadership,
  evpsAndVps,
  corporateAndHseq,
  groupHr,
  groupFinance,
  businessUnitHeadsEnergy,
  businessUnitHeadsEmergingMarket,
  type Contact,
} from "./data";

type Theme = "dark" | "light";

const THEME_KEY = "whoswho.theme";

function cx(...classNames: Array<string | false | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

function initialsOf(name: string) {
  return name
    .replace(/^(Dato['’]?|Dr\.?|Ir\.?|Ts\.?|Haji|Hj\.?)\s+/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function ContactCard({ c }: { c: Contact }) {
  return (
    <div className={cx(styles.card, styles.person)}>
      <div className={styles.personTop}>
        <span className={styles.avatar}>{initialsOf(c.name)}</span>
        <div>
          <div className={styles.personName}>{c.name}</div>
          <div className={styles.personRole}>{c.role}</div>
        </div>
      </div>
      <p className={styles.personBio}>{c.unit}</p>
      {((c.emails && c.emails.length > 0) || c.phone) && (
        <div className={styles.personMeta}>
          {c.emails?.map((email, i) => (
            <div key={email} style={{ marginTop: i > 0 ? 4 : 0 }}>
              <Mail size={12} style={{ verticalAlign: -2, marginRight: 6 }} />
              {email}
            </div>
          ))}
          {c.phone && (
            <div style={{ marginTop: c.emails?.length ? 4 : 0 }}>
              <Phone size={12} style={{ verticalAlign: -2, marginRight: 6 }} />
              {c.phone}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function WhosWhoApp() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Reading persisted UI state after mount is intentional here: the static
    // export always prerenders the defaults, and localStorage only exists in
    // the browser, so this necessarily runs post-hydration.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    } catch {
      // localStorage unavailable — fall back to defaults
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

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
        <div className={styles.brand} title="HRSB Group">
          <span className={styles.brandBadge}>
            <Image
              src="/logos/hrsb-holdings.png"
              alt="HRSB Holdings"
              width={140}
              height={68}
              className={styles.brandLogo}
              priority
            />
          </span>
        </div>
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
        <section className={styles.screen} role="tabpanel">
          <div className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={cx(styles.eyebrow, styles.heroEyebrow)}>HRSB Group</div>
              <h1 style={{ marginTop: 16 }}>Who&apos;s who</h1>
              <p className={styles.heroLead}>
                Names, titles and contacts worth knowing across the Group — Board &amp;
                leadership, EVPs &amp; VPs, corporate office heads, and every Business Unit head.
              </p>
            </div>
          </div>

          <div className={styles.wrap}>
            <div className={styles.block}>
              <div className={styles.divisionLabel}>Board &amp; group leadership</div>
              <div className={cx(styles.grid, styles.cols2)}>
                {boardLeadership.map((c) => (
                  <ContactCard key={c.name} c={c} />
                ))}
              </div>

              <div className={styles.divisionLabel}>EVPs &amp; VPs</div>
              <div className={cx(styles.grid, styles.cols2)}>
                {evpsAndVps.map((c) => (
                  <ContactCard key={c.name} c={c} />
                ))}
              </div>

              <div className={styles.divisionLabel}>Corporate office &amp; HSEQ</div>
              <div className={cx(styles.grid, styles.cols2)}>
                {corporateAndHseq.map((c) => (
                  <ContactCard key={c.name} c={c} />
                ))}
              </div>

              <div className={styles.divisionLabel}>Group HR</div>
              <div className={cx(styles.grid, styles.cols2)}>
                {groupHr.map((c) => (
                  <ContactCard key={c.name} c={c} />
                ))}
              </div>

              <div className={styles.divisionLabel}>Group Finance</div>
              <div className={cx(styles.grid, styles.cols2)}>
                {groupFinance.map((c) => (
                  <ContactCard key={c.name} c={c} />
                ))}
              </div>

              <div className={styles.divisionLabel}>Heads of business units — Energy Division</div>
              <div className={cx(styles.grid, styles.cols2)}>
                {businessUnitHeadsEnergy.map((c) => (
                  <ContactCard key={c.name} c={c} />
                ))}
              </div>

              <div className={styles.divisionLabel}>Heads of business units — Emerging Market Division</div>
              <div className={cx(styles.grid, styles.cols2)}>
                {businessUnitHeadsEmergingMarket.map((c) => (
                  <ContactCard key={c.name} c={c} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className={styles.footer}>
        <span className={styles.pulse} />
        <span>HRSB Group · Who&apos;s who</span>
        <span style={{ color: "var(--text-muted)" }}>·</span>
        <span>
          Styled in <strong style={{ color: "var(--text-body)" }}>ENVY</strong>
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          Internal use only
        </span>
      </div>
    </div>
  );
}
