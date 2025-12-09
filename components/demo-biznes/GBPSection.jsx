"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendContact } from "../../app/actions/sendContact";
import SectionIntro from "./SectionIntro";
import styles from "./demoBiznes.module.css";
import { servicesPricing } from "./servicesData";

const initialState = {
  ok: false,
  message: "",
};

const locationDetails = [
  {
    icon: "📍",
    label: "Adres",
    value: "ul. Piękna 15, Warszawa",
  },
  {
    icon: "☎️",
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: "✉️",
    label: "E-mail",
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

export default function ContactPage() {
  const [state, formAction] = useFormState(sendContact, initialState);
  const serviceOptions = servicesPricing.map((service) => service.title);

  useEffect(() => {
    if (state.ok) {
      const form = document.getElementById("demo-biznes-contact-form");
      form?.reset();
    }
  }, [state.ok]);

  return (
    <section className={`${styles.sectionWrapper} ${styles.gbpSection}`}>
      <SectionIntro
        eyebrow="Kontakt"
        title="Gdzie nas znaleźć i jak się z nami skontaktować"
        description="Znajdziesz nas w centrum Warszawy – umów termin, zapytaj o szczegóły lub daj znać, że chcesz zarezerwować stylistkę na ważną okazję."
        align="left"
      />

      <div className={styles.locationGrid}>
        <div className={styles.locationDetails}>
          <div className={styles.locationList}>
            {locationDetails.map((item) => (
              <div key={item.label} className={styles.locationItem}>
                <span className={styles.locationIcon}>{item.icon}</span>
                <div className={styles.locationCopy}>
                  <h4>{item.label}</h4>
                  {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.reviewButtons}>
            <a
              className={styles.primaryButton}
              href="https://www.google.com/maps/place/Pi%C4%99kna+15,+Warszawa"
              target="_blank"
              rel="noreferrer"
            >
              ⭐ Wystaw opinię
            </a>
            <a
              className={styles.secondaryButton}
              href="https://www.google.com/maps/dir/?api=1&destination=Pi%C4%99kna+15+Warszawa"
              target="_blank"
              rel="noreferrer"
            >
              📍 Wyznacz trasę
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
        id="demo-biznes-contact-form"
        className={styles.contactForm}
        action={formAction}
        aria-label="Formularz kontaktowy Salon Elegancja"
      >
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="contact-name">Imię i nazwisko*</label>
            <input id="contact-name" name="name" type="text" required className={styles.input} placeholder="Jak możemy się do Ciebie zwracać?" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="contact-email">E-mail*</label>
            <input
              id="contact-email"
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
            <label htmlFor="contact-phone">Telefon</label>
            <input id="contact-phone" name="phone" type="tel" className={styles.input} placeholder="Opcjonalnie: numer telefonu" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="contact-service">Wybrana usługa</label>
            <select id="contact-service" name="service" className={styles.input} defaultValue="">
              <option value="" disabled>
                Co Cię interesuje?
              </option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
              <option value="inne">Inne / Mam pomysł</option>
            </select>
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="contact-message">Wiadomość*</label>
          <textarea
            id="contact-message"
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
