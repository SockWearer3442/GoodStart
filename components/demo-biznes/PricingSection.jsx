import SectionIntro from "./SectionIntro";
import { servicesPricing } from "./servicesData";
import styles from "./demoBiznes.module.css";

export default function PricingSection() {
  return (
    <section id="cennik" className={styles.sectionWrapper}>
      <SectionIntro
        eyebrow="Cennik"
        title="Ulubione usługi naszych klientek"
        description="Stawiamy na przejrzystość – poniżej znajdziesz orientacyjne ceny najczęściej wybieranych usług. Pełny koszt ustalamy po konsultacji i analizie włosów."
      />

      <div className={styles.cardGrid}>
        {servicesPricing.map((service) => (
          <article key={service.title} className={styles.card}>
            <div className={styles.cardIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p className={styles.servicePrice}>{service.price}</p>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.statBar}>
        <span className={styles.statPill}>📅 Zarezerwuj termin online 24/7</span>
        <span className={styles.statPill}>💳 Płatność kartą lub gotówką</span>
        <span className={styles.statPill}>🎁 Karty podarunkowe dostępne na miejscu</span>
      </div>
    </section>
  );
}
