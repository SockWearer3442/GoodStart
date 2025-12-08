import styles from "./demoBiznes.module.css";

export default function Hero() {
  return (
    <section className={`${styles.sectionWrapper} ${styles.hero}`}>
      <span className={styles.heroTag}>Salon Elegancja • Warszawa</span>
      <h1 className={styles.heroTitle}>Twoje miejsce na wyjątkową stylizację i odprężającą wizytę.</h1>
      <p className={styles.heroSubtitle}>
        Tworzymy fryzury, które podkreślają charakter i dodają pewności siebie. Zadbamy o Ciebie od pierwszego telefonu,
        przez konsultację, aż po pielęgnację w domu.
      </p>
      <div className={styles.heroActions}>
        <a className={styles.primaryButton} href="/demo-biznes/rezerwacje">
          📅 Umów wizytę online
        </a>
        <a className={styles.secondaryButton} href="tel:+48123456789">
          ☎️ Zadzwoń do nas
        </a>
      </div>
      <div className={styles.heroHighlights}>
        <div className={styles.heroHighlight}>
          <span>Stylizacje</span>
          <strong>Premium care</strong>
          <p>Koloryzacje, cięcia i pielęgnacje oparte na kosmetykach KEVIN.MURPHY.</p>
        </div>
        <div className={styles.heroHighlight}>
          <span>Termin</span>
          <strong>24/7 online</strong>
          <p>Wybierz usługę i stylistę w kalendarzu – a my wyślemy przypomnienie SMS.</p>
        </div>
        <div className={styles.heroHighlight}>
          <span>Atmosfera</span>
          <strong>W centrum miasta</strong>
          <p>Kameralne studio przy ul. Pięknej 15 z kawą, muzyką i strefą relaksu.</p>
        </div>
      </div>
    </section>
  );
}
