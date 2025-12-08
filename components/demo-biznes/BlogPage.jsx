import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";

const articles = [
  {
    title: "Trendy koloryzacji na sezon 2026",
    excerpt: "Poznaj kolory, które będą królować w tym roku — od kremowego bronde po odważne kobaltowe pasemka.",
    date: "12 listopada 2025",
    readTime: "6 min",
    cta: "Czytaj artykuł",
  },
  {
    title: "Jak przygotować włosy do wielkiej metamorfozy",
    excerpt: "Praktyczny poradnik dla klientek planujących zmianę wizerunku w jeden dzień.",
    date: "28 października 2025",
    readTime: "5 min",
    cta: "Poznaj wskazówki",
  },
  {
    title: "Marketing lokalny dla salonów fryzjerskich",
    excerpt: "Zajrzyj za kulisy — jak dbamy o obecność Salonu Elegancja w Google i social mediach.",
    date: "15 września 2025",
    readTime: "7 min",
    cta: "Przeczytaj wpis",
  },
];

export default function BlogPage() {
  return (
    <div className={styles.sectionWrapper}>
      <header className={styles.pageHeader}>
        <h1>Blog ekspercki Elegancja</h1>
        <p>
          Dzielimy się wiedzą, inspirujemy do zmian i pokazujemy, co dzieje się za kulisami Salonu Elegancja. Zajrzyj do
          naszych porad, zanim odwiedzisz nas w Warszawie.
        </p>
      </header>

      <SectionIntro
        eyebrow="Aktualności"
        title="Najświeższe artykuły z naszego salonu"
        description="Znajdziesz tu porady, rekomendacje produktów i historie naszych klientek."
      />

      <div className={styles.blogGrid}>
        {articles.map((article) => (
          <article key={article.title} className={styles.blogCard}>
            <div className={styles.blogMeta}>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <a href="#" className={styles.blogLink}>
              {article.cta} →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
