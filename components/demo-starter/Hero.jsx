import styles from "./demoStarter.module.css";

export default function Hero() {
  return (
    <section id="start" className={`${styles.sectionWrapper} ${styles.hero}`}>
      <span className={styles.heroTag}>
        Salon fryzjerski • Pakiet Starter
      </span>
      <h1 className={styles.heroTitle}>Elegancja Hair Atelier</h1>
      <p className={styles.heroSubtitle}>
        Profesjonalne stylizacje, strzyżenia i koloryzacje, które podkreślają Twoją naturalną
        urodę. Tworzymy charakterne fryzury i zapewniamy opiekę dopasowaną do Twoich potrzeb.
      </p>
      <div className={styles.heroCtas}>
        <a className={styles.primaryButton} href="tel:+48123456789">
          ☎️ Zadzwoń teraz
        </a>
        <a className={styles.secondaryButton} href="#kontakt">
          ✉️ Umów wizytę
        </a>
      </div>
      <div className={styles.heroHighlights}>
        <div className={styles.highlightCard}>
          <span className={styles.highlightLabel}>Godziny</span>
          <span className={styles.highlightValue}>Pn–Sb 9:00–19:00</span>
        </div>
        <div className={styles.highlightCard}>
          <span className={styles.highlightLabel}>Lokalizacja</span>
          <span className={styles.highlightValue}>ul. Piękna 15, Warszawa</span>
        </div>
        <div className={styles.highlightCard}>
          <span className={styles.highlightLabel}>Zaufanie</span>
          <span className={styles.highlightValue}>5000+ zadowolonych klientów</span>
        </div>
      </div>
    </section>
  );
}
