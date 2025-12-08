"use client";

import Link from "next/link";
import styles from "./demoStarter.module.css";

const links = [
  { href: "#start", label: "Start" },
  { href: "#o-nas", label: "O nas" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <header className={styles.navbarShell}>
      <div className={`${styles.sectionWrapper} ${styles.navbar}`}>
        <Link href="#start" className={styles.navLogo}>
          <span className={styles.navLogoMark}>✂️</span>
          Salon Elegancja
        </Link>

        <nav className={styles.navMenu} aria-label="Główne">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.navContact}>
          <span className={styles.phoneBadge}>📞</span>
          <a href="tel:+48123456789">+48 123 456 789</a>
        </div>
      </div>
    </header>
  );
}
