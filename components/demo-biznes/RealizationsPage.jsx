import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";

const projects = [
  {
    title: "Metamorfoza miejskiego stylu",
    summary: "Justyna marzyła o jaśniejszym blondzie i cięciu, które podkreśli jej rysy. Przygotowaliśmy plan rozjaśniania, pielęgnację Olaplex i stylizację na co dzień.",
    metrics: ["2 wizyty kontrolne", "Plan pielęgnacji na 6 tygodni", "Efekt: chłodny blond"],
    image: "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pakiet ślubny Oli",
    summary: "Próba fryzury, delikatne fale na ślub cywilny i upięcie na przyjęcie. Zadbałyśmy też o mamy i świadkową.",
    metrics: ["4 stylizacje w dniu ślubu", "Próba 3 tygodnie wcześniej", "Wsparcie stylistki mobilnej"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nowa energia dla Łukasza",
    summary: "Po konsultacji wykonaliśmy strzyżenie, pielęgnację brody i regenerację skóry głowy — idealne przed ważną prezentacją.",
    metrics: ["Strzyżenie + broda", "Zabieg detoksykujący", "Stylizacja z poradami do domu"],
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function RealizationsPage() {
  return (
    <div className={styles.sectionWrapper}>
      <header className={styles.pageHeader}>
        <h1>Realizacje i case studies</h1>
        <p>
          Zobacz, jak pielęgnujemy włosy naszych gości – od spektakularnych metamorfoz, przez stylizacje ślubne, po
          dopracowane strzyżenia. Każda historia pokazuje, że słuchamy i dopasowujemy się do codziennych potrzeb.
        </p>
      </header>

      <div className={styles.caseGrid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.caseCard}>
            <div className={styles.caseImage} style={{ backgroundImage: `url(${project.image})` }} />
            <div className={styles.caseBody}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className={styles.tagList}>
                {project.metrics.map((metric) => (
                  <span key={metric} className={styles.tag}>
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
