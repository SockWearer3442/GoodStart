import SectionHeading from "./SectionHeading";
import styles from "./demoStarter.module.css";

const services = [
  {
    title: "Strzyżenie damskie",
    price: "od 80 zł",
    description: "Precyzyjne cięcie dopasowane do kształtu twarzy.",
    icon: "💇‍♀️",
  },
  {
    title: "Strzyżenie męskie",
    price: "od 50 zł",
    description: "Klasyczne i nowoczesne fryzury męskie.",
    icon: "💇‍♂️",
  },
  {
    title: "Koloryzacja",
    price: "od 150 zł",
    description: "Farbowanie, pasemka, balayage, ombre.",
    icon: "🎨",
  },
  {
    title: "Stylizacja włosów",
    price: "od 60 zł",
    description: "Układanie, prostowanie, lokowanie.",
    icon: "🌀",
  },
  {
    title: "Trwała ondulacja",
    price: "od 200 zł",
    description: "Długotrwałe loki i fale.",
    icon: "🌊",
  },
  {
    title: "Keratynowe prostowanie",
    price: "od 300 zł",
    description: "Wygładzenie i odżywienie włosów.",
    icon: "✨",
  },
  {
    title: "Pasemka",
    price: "od 120 zł",
    description: "Rozjaśnianie wybranych pasemek.",
    icon: "🌟",
  },
  {
    title: "Strzyżenie dziecięce",
    price: "od 40 zł",
    description: "Fryzury dla najmłodszych w przyjaznej atmosferze.",
    icon: "🧒",
  },
  {
    title: "Upięcia okolicznościowe",
    price: "od 100 zł",
    description: "Eleganckie fryzury na specjalne okazje.",
    icon: "👑",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className={styles.sectionWrapper}>
      <SectionHeading
        eyebrow="Nasze usługi"
        title="Profesjonalne usługi fryzjerskie"
        description="Przed każdą stylizacją prowadzimy krótką konsultację, aby dopasować zabieg do kondycji włosów i oczekiwań klienta."
      />

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <article key={service.title} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p className={styles.servicePrice}>{service.price}</p>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
