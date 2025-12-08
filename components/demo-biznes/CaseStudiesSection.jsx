import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";

const caseStudies = [
  {
    title: "Metamorfoza Anny",
    description: "Rozjaśnienie i tonowanie włosów blond, uzupełnione intensywną pielęgnacją nawilżającą oraz planem domowej opieki.",
    tags: ["Koloryzacja blond", "Plan pielęgnacji", "Stylizacja falowana"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fryzura ślubna Oli",
    description: "Subtelne upięcie z żywymi kwiatami, wykonane po wcześniejszej próbie i konsultacji z makijażystką.",
    tags: ["Stylizacja ślubna", "Próba fryzury", "Wsparcie stylistki"],
    image:
      "https://images.unsplash.com/photo-1503919350387-344abd080b17?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nowa energia Adama",
    description: "Strzyżenie męskie z pielęgnacją brody i stylizacją, które dodały świeżości i pewności siebie przed ważnym wystąpieniem.",
    tags: ["Strzyżenie męskie", "Pielęgnacja brody", "Stylizacja"],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className={styles.sectionWrapper}>
      <SectionIntro
        eyebrow="Realizacje"
        title="Historie, które uwielbiamy opowiadać"
        description="Każda wizyta w Salonie Elegancja to wyjątkowa historia – poznaj kilka z nich i zobacz, jak dbamy o naszych klientów."
      />

      <div className={styles.caseGrid}>
        {caseStudies.map((item) => (
          <article key={item.title} className={styles.caseCard}>
            <div className={styles.caseImage} style={{ backgroundImage: `url(${item.image})` }} />
            <div className={styles.caseBody}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.tagList}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
