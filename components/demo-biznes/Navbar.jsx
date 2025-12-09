"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./demoBiznes.module.css";

const navLinks = [
  { href: "/demo-biznes/oferta", label: "Oferta" },
  { href: "/demo-biznes/realizacje", label: "Realizacje" },
  { href: "/demo-biznes/rezerwacje", label: "Rezerwacje" },
  { href: "/demo-biznes/blog", label: "Blog" },
  { href: "/demo-biznes/faq", label: "FAQ" },
  { href: "/demo-biznes/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.navbarShell}>
      <div className={`${styles.sectionWrapper} ${styles.navbar}`}>
        <Link href="/demo-biznes" className={styles.navLogo}>
          <span className={styles.navBadge}>✂️</span>
          Salon Elegancja
        </Link>

        <nav className={styles.navMenu} aria-label="Główne">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.navActions}>
          <Link href="/demo-biznes/rezerwacje" className={`${styles.navActionLink} ${styles.navActionPrimary}`}>
            📅 Zarezerwuj termin
          </Link>
          <Link href="/demo-biznes/kontakt" className={`${styles.navActionLink} ${styles.navActionGhost}`}>
            ✉️ Kontakt
          </Link>
        </div>
      </div>
    </header>
  );
}
