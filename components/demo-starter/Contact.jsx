"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendContact } from "../../app/actions/sendContact";
import SectionHeading from "./SectionHeading";
import styles from "./demoStarter.module.css";

const initialState = {
  ok: false,
  message: "",
};

const contactItems = [
  {
    icon: "📍",
    label: "Adres",
    value: "ul. Piękna 15, 00-001 Warszawa",
  },
  {
    icon: "📞",
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "kontakt@salon-elegancja.pl",
    href: "mailto:kontakt@salon-elegancja.pl",
  },
  {
    icon: "🕒",
    label: "Godziny",
    value: "Pon–Sob 9:00–19:00",
  },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.primaryButton} type="submit" disabled={pending}>
      {pending ? "Wysyłanie..." : "Wyślij wiadomość"}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(sendContact, initialState);

  useEffect(() => {
    if (state.ok) {
      const form = document.getElementById("demo-starter-contact-form");
      form?.reset();
    }
  }, [state.ok]);

  return (
    <section id="kontakt" className={`${styles.sectionWrapper} ${styles.contactSection}`}>
      <SectionHeading
        eyebrow="Kontakt"
        title="Umów wizytę w Elegancja Hair Atelier"
        description="Zadzwoń lub napisz, a nasz zespół dobierze idealny termin i usługę dopasowaną do Twoich potrzeb."
      />

      <div className={styles.contactGrid}>
        <div className={styles.contactDetails}>
          <div className={styles.contactList}>
            {contactItems.map((item) => (
              <div key={item.label} className={styles.contactItem}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <div className={styles.contactCopy}>
                  <h4>{item.label}</h4>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contactActions}>
            <a className={styles.primaryButton} href="tel:+48123456789">
              ☎️ Zadzwoń teraz
            </a>
            <a className={styles.secondaryButton} href="mailto:kontakt@salon-elegancja.pl">
              ✉️ Napisz wiadomość
            </a>
          </div>
        </div>

        <div>
          <iframe
            className={styles.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.689651268141!2d21.00752547693696!3d52.22976887198361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6695d6c8cf%3A0x9d8f8cfea06fdc1!2sPi%C4%99kna%2015%2C%2000-001%20Warszawa!5e0!3m2!1spl!2spl!4v1733665133000!5m2!1spl!2spl"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa salonu Elegancja"
          />
        </div>
      </div>

      <form
        id="demo-starter-contact-form"
        className={styles.contactForm}
        action={formAction}
        aria-label="Formularz kontaktowy salonu"
      >
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="name">Imię i nazwisko*</label>
            <input id="name" name="name" type="text" required className={styles.input} placeholder="Jak możemy się do Ciebie zwracać?" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">E-mail*</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="Podaj adres, na który odpiszemy"
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="phone">Telefon</label>
            <input id="phone" name="phone" type="tel" className={styles.input} placeholder="Opcjonalnie: numer telefonu" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="service">Wybrana usługa</label>
            <input
              id="service"
              name="service"
              type="text"
              className={styles.input}
              placeholder="Napisz, co Cię interesuje"
            />
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="message">Wiadomość*</label>
          <textarea
            id="message"
            name="message"
            required
            className={styles.textarea}
            placeholder="Opisz swoje oczekiwania i preferowany termin"
          />
        </div>

        <div className={styles.formActions}>
          <SubmitButton />
          {state.message && (
            <p className={`${styles.statusMessage} ${state.ok ? styles.statusSuccess : styles.statusError}`}>
              {state.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
