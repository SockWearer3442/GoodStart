import SectionHeading from "./SectionHeading";
import styles from "./demoStarter.module.css";

const stats = [
  { value: "10+ lat", label: "Doświadczenia" },
  { value: "5000+", label: "Zadowolonych klientów" },
  { value: "100%", label: "Kosmetyków premium" },
];

export default function About() {
  return (
    <section id="o-nas" className={`${styles.sectionWrapper} ${styles.aboutSection}`}>
      <SectionHeading
        eyebrow="O nas"
        title="Salon fryzjerski Elegancja"
        description="Tradycyjne rzemiosło w nowoczesnym wydaniu. Tworzymy stylizacje dopasowane do indywidualnych potrzeb, dbając o komfort i wyjątkowe doświadczenie każdego klienta."
      />

      <div className={styles.aboutGrid}>
        <div className={styles.aboutImage} aria-hidden="true" />

        <div className={styles.aboutContent}>
          <p className={styles.aboutIntro}>
            Zespół Elegancja to mistrzowie fryzjerstwa z pasją do piękna. Regularnie szkolimy się z najnowszych technik
            koloryzacji i stylizacji, aby dostarczać usługi na najwyższym poziomie. W naszym atelier dbamy o relaksującą
            atmosferę, indywidualne konsultacje oraz precyzję w każdym cięciu.
          </p>

          <div className={styles.aboutStats}>
            {stats.map((stat) => (
              <div key={stat.value} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
