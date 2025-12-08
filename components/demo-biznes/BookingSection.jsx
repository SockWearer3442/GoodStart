import Link from "next/link";
import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";

const features = [
  "Wybierz ulubioną stylistkę i usługę w jednym miejscu",
  "Otrzymasz potwierdzenie mailowe i przypomnienie SMS",
  "Możesz dodać notatkę dla stylistki lub poprosić o konsultację",
  "Obsługujemy przedpłaty online oraz vouchery podarunkowe",
];

export default function BookingSection() {
  return (
    <section className={`${styles.sectionWrapper} ${styles.bookingSection}`}>
      <div className={styles.bookingContent}>
        <SectionIntro
          eyebrow="Rezerwacje"
          title="Umawiaj wizyty, kiedy tylko masz chwilę"
          description="W dedykowanym kalendarzu sprawdzisz dostępne terminy, wybierzesz usługę oraz stylistkę. Po rezerwacji dostaniesz mail i SMS z potwierdzeniem – a dzień przed wizytą krótkie przypomnienie."
          align="left"
        />

        <div className={styles.bookingFeatures}>
          {features.map((item) => (
            <div key={item} className={styles.bookingFeature}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.statBar}>
          <span className={styles.statPill}>📆 Dostępność 24/7</span>
          <span className={styles.statPill}>⏱️ Przypomnienia SMS</span>
          <span className={styles.statPill}>💳 Płatności online i na miejscu</span>
        </div>

        <Link href="/demo-biznes/rezerwacje" className={styles.primaryButton}>
          Zobacz pełny kalendarz
        </Link>
      </div>
    </section>
  );
}
