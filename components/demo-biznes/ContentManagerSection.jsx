import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";

const treatments = [
  {
    icon: "🌸",
    title: "Rytuał pielęgnacyjny",
    description: "Dobieramy pielęgnację do typu włosów i stylu życia. Wizyta kończy się listą produktów i wskazówek na co dzień.",
  },
  {
    icon: "✨",
    title: "Stylizacje okolicznościowe",
    description: "Upięcia ślubne, wieczorowe i sesyjne – z próbą fryzury oraz wsparciem stylistki w dniu wydarzenia.",
  },
  {
    icon: "💬",
    title: "Indywidualna konsultacja",
    description: "45 minut rozmowy o potrzebach włosów. Tworzymy plan metamorfozy i harmonogram kolejnych wizyt.",
  },
];

const ritualSteps = [
  {
    title: "Poznajmy Twoje włosy",
    detail: "Analizujemy strukturę, historię koloryzacji oraz pielęgnację, żeby dobrać idealne produkty.",
  },
  {
    title: "Doświadczenie w salonie",
    detail: "Relaksujący zabieg mycia, masaż skóry głowy i stylizacja, która podkreśli Twoją osobowość.",
  },
  {
    title: "Domowa pielęgnacja",
    detail: "Wyposażymy Cię w plan i mini tutorial wideo, aby efekt wizyty utrzymał się jak najdłużej.",
  },
];

export default function ContentManagerSection() {
  return (
    <section className={`${styles.sectionWrapper} ${styles.gbpSection}`}>
      <SectionIntro
        eyebrow="Doświadczenie Elegancja"
        title="Rytuały, które rozpieszczają włosy i zmysły"
        description="Każda wizyta to chwila dla siebie – od aromatycznej kawy po personalizowany plan pielęgnacji."
        align="left"
      />

      <div className={styles.twoColumn}>
        <div>
          <div className={styles.cardGrid}>
            {treatments.map((treatment) => (
              <article key={treatment.title} className={styles.card}>
                <div className={styles.cardIcon}>{treatment.icon}</div>
                <h3>{treatment.title}</h3>
                <p>{treatment.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3>Jak wygląda wizyta?</h3>
          <div className={styles.timeline}>
            {ritualSteps.map((step) => (
              <div key={step.title} className={styles.timelineStep}>
                <strong>{step.title}</strong>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
