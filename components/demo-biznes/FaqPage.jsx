import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";

const faqGroups = [
  {
    title: "Rezerwacje",
    items: [
      {
        question: "Jak anulować lub przełożyć wizytę?",
        answer:
          "Wejdź w wiadomość potwierdzającą z Calendesk i wybierz opcję 'Zmień termin'. Możesz też zadzwonić do salonu, a my zrobimy to za Ciebie w panelu.",
      },
      {
        question: "Czy mogę zarezerwować kilka usług jednocześnie?",
        answer:
          "Tak, podczas rezerwacji wybierz pakiet łączony lub dodaj kolejne usługi w sekcji 'Dodatki'. System automatycznie dobierze odpowiedni czas.",
      },
    ],
  },
  {
    title: "Płatności",
    items: [
      {
        question: "Czy wymagacie przedpłaty?",
        answer:
          "Dla usług premium prosimy o 20% przedpłaty online. W razie odwołania min. 24h przed wizytą środki wracają na konto.",
      },
      {
        question: "Jak działa bon podarunkowy?",
        answer:
          "Po zakupie bon trafia mailowo do obdarowanej osoby. Można go aktywować przy rezerwacji online lub na miejscu w salonie.",
      },
    ],
  },
  {
    title: "Panel klienta",
    items: [
      {
        question: "Czy mogę zobaczyć historię wizyt?",
        answer:
          "Tak, po zalogowaniu w panelu w zakładce 'Moje wizyty' widzisz historię zabiegów, rekomendacje produktów i notatki stylisty.",
      },
      {
        question: "Jak zmienić dane kontaktowe?",
        answer:
          "Zaloguj się do panelu, przejdź do ustawień profilu i zaktualizuj numer telefonu lub adres e-mail. Zmiany zapisują się automatycznie.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className={styles.sectionWrapper}>
      <header className={styles.pageHeader}>
        <h1>Najczęściej zadawane pytania</h1>
        <p>
          Zebraliśmy odpowiedzi dotyczące rezerwacji online, płatności oraz korzystania z naszego panelu klienta. Wszystkie
          treści możesz edytować w CMS, a FAQ aktualizuje się natychmiast po publikacji.
        </p>
      </header>

      <SectionIntro
        eyebrow="FAQ"
        title="Masz pytania? Tutaj znajdziesz odpowiedź"
        description="Jeśli potrzebujesz dodatkowych informacji, skontaktuj się z nami telefonicznie lub przez formularz rezerwacji."
      />

      <div className={styles.faqList}>
        {faqGroups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            <div className={styles.faqList}>
              {group.items.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className={styles.bookingSection}>
        <div className={styles.bookingContent}>
          <h3>Nie znalazłeś odpowiedzi?</h3>
          <p>
            Zadzwoń pod numer <strong>+48 123 456 789</strong> lub napisz na adres <strong>kontakt@salon-elegancja.pl</strong>. Zespół Elegancja odpowiada w ciągu 1
            dnia roboczego.
          </p>
          <a className={styles.primaryButton} href="/demo-biznes/rezerwacje">
            📅 Przejdź do rezerwacji
          </a>
        </div>
      </div>
    </div>
  );
}
