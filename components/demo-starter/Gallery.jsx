import SectionHeading from "./SectionHeading";
import styles from "./demoStarter.module.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    alt: "Nowoczesne stanowisko fryzjerskie",
  },
  {
    src: "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?auto=format&fit=crop&w=800&q=80",
    alt: "Stylowy fryzjer pracujący z klientem",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    alt: "Sesja zdjęciowa dwóch kobiet z pięknymi fryzurami",
  },
  {
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    alt: "Koloryzacja włosów w salonie",
  },
  {
    src: "https://images.unsplash.com/photo-1649984984585-fe474143d946?auto=format&fit=crop&w=800&q=80",
    alt: "Stylizacja włosów afro",
  },
  {
    src: "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&w=800&q=80",
    alt: "Akcesoria fryzjerskie na stanowisku",
  },
  {
    src: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=800&q=80",
    alt: "Przygotowanie do stylizacji włosów",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102d25e?auto=format&fit=crop&w=800&q=80",
    alt: "Stylista tworzący fale na włosach klientki",
  },
  {
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    alt: "Zespół stylistów pracujących w salonie",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className={styles.sectionWrapper}>
      <SectionHeading eyebrow="Galeria" title="Zobacz nasze prace" description="Portfolio stylizacji, które powstały w atelier Elegancja." />

      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <figure key={`${image.src}-${index}`} className={styles.galleryItem}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
