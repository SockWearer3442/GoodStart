import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";

const highlights = [
  {
    icon: "💎",
    title: "Pielęgnacja premium",
    description: "Pracujemy na kosmetykach KEVIN.MURPHY i widzimy się na indywidualnych konsultacjach przed każdą metamorfozą.",
  },
  {
    icon: "🧘",
    title: "Relaksująca atmosfera",
    description: "Kameralne stanowiska, aromatyczna kawa i playlista, która pozwoli Ci się odciąć od miejskiego zgiełku.",
  },
  {
    icon: "👩‍🎨",
    title: "Doświadczony zespół",
    description: "Stylistki specjalizujące się w koloryzacjach blond, strzyżeniach curly i stylizacjach okolicznościowych.",
  },
];

const stats = [
  "5 000+ zadowolonych klientek",
  "10 lat doświadczenia",
  "Średnia ocena 4.9/5",
];

export default function GrowthHighlights() {
  return (
    <section className={styles.sectionWrapper}>
      <SectionIntro
        eyebrow="Dlaczego Salon Elegancja?"
        title="Poczuj różnicę od pierwszej konsultacji"
        description="Stawiamy na indywidualne podejście, najwyższej jakości produkty i atmosferę, w której możesz odpocząć. Nasz zespół dba o detale – od analiz koloru po pielęgnację domową."
      />

      <div className={`${styles.cardGrid} ${styles.highlightsGrid}`}>
        {highlights.map((item) => (
          <article key={item.title} className={`${styles.card} ${styles.cardAccent}`}>
            <div className={styles.cardIcon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.statBar}>
        {stats.map((stat) => (
          <span key={stat} className={styles.statPill}>
            ⭐ {stat}
          </span>
        ))}
      </div>
    </section>
  );
}
