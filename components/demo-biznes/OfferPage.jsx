import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";
import { servicesPricing } from "./servicesData";

const services = [
  {
    name: "Koloryzacja Premium",
    description: "Indywidualna konsultacja, personalizowany plan pielęgnacji i koloryzacja z użyciem kosmetyków KEVIN.MURPHY.",
    benefits: ["Konsultacja 1:1", "Plan pielęgnacji", "Stylizacja końcowa"],
  },
  {
    name: "Stylizacja Ślubna",
    description: "Próba fryzury ślubnej, styling w dniu uroczystości oraz opieka stylistki mobilnej.",
    benefits: ["Próba + konsultacje", "Stylizacja w dniu ślubu", "Możliwość dojazdu"],
  },
  {
    name: "Program Metamorfoza",
    description: "Seria 3 wizyt z koloryzacją, strzyżeniem oraz warsztatem stylizacji do domu.",
    benefits: ["3 spotkania", "Dobór kosmetyków", "Tutorial wideo"],
  },
];

export default function OfferPage() {
  return (
    <div className={styles.sectionWrapper}>
      <header className={styles.pageHeader}>
        <h1>Oferta Salonu Elegancja</h1>
        <p>
          Zapraszamy na wizyty, podczas których zadbamy o pielęgnację, kolor i fryzurę dopasowaną do Twojego stylu.
          Każdą usługę poprzedzamy konsultacją, a plan dalszej opieki otrzymasz jeszcze tego samego dnia.
        </p>
      </header>

      <SectionIntro
        eyebrow="Cennik"
        title="Najczęściej wybierane usługi"
        description="Ceny zależą od długości i kondycji włosów – podczas konsultacji doprecyzujemy zakres oraz czas trwania zabiegu."
        align="left"
      />

      <div className={styles.pricingGrid}>
        {servicesPricing.map((service) => (
          <article key={service.title} className={styles.pricingCard}>
            <div className={styles.cardIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p className={styles.pricingPrice}>{service.price}</p>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <SectionIntro
        eyebrow="Usługi premium"
        title="Pakiety dopasowane do potrzeb naszych klientek"
        description="Poznaj propozycje, które najczęściej wybierają nasze klientki. Każdą wizytę dopasowujemy do kondycji włosów i oczekiwań."
        align="left"
      />

      <div className={`${styles.offerList} ${styles.offerListWithGap}`}>
        {services.map((service) => (
          <article key={service.name} className={styles.offerItem}>
            <strong>{service.name}</strong>
            <p>{service.description}</p>
            <div className={styles.tagList}>
              {service.benefits.map((benefit) => (
                <span key={benefit} className={styles.tag}>
                  {benefit}
                </span>
              ))}
            </div>
          </article>
        ))}

        <article className={`${styles.offerItem} ${styles.offerIdea}`}>
          <strong>Mam pomysł</strong>
          <p>Jeżeli masz własny, niestandardowy pomysł na metamorfozę albo potrzebujesz dedykowanej oferty, napisz do nas — wspólnie coś wykombinujemy.</p>
          <div className={styles.offerIdeaActions}>
            <a className={`${styles.navActionLink} ${styles.navActionGhost}`} href="/demo-biznes/kontakt">
              ✉️ Przejdź do kontaktu
            </a>
          </div>
        </article>
      </div>

    </div>
  );
}
