"use client";

import { useMemo, useState } from "react";
import styles from "../../../components/demo-biznes/demoBiznes.module.css";
import SectionIntro from "../../../components/demo-biznes/SectionIntro";
import { servicesPricing } from "../../../components/demo-biznes/servicesData";

const weekdays = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];

const baseCalendar = [
  "", "", "", "1", "2", "3", "4",
  "5", "6", "7", "8", "9", "10", "11",
  "12", "13", "14", "15", "16", "17", "18",
  "19", "20", "21", "22", "23", "24", "25",
  "26", "27", "28", "29", "30", "31", ""
];

const stylists = [
  { id: "anna", name: "Anna", specialty: "Koloryzacje blond" },
  { id: "ola", name: "Ola", specialty: "Stylizacje okolicznościowe" },
  { id: "lukasz", name: "Łukasz", specialty: "Strzyżenia męskie i broda" },
];

const serviceOptions = servicesPricing.map((service) => service.title);

const timeslotsByDay = {
  "10": ["09:00", "10:30", "12:00", "14:30"],
  "11": ["10:00", "11:30", "13:00", "15:30", "17:00"],
  "12": ["09:30", "11:00", "12:30"],
  "14": ["09:00", "10:30", "12:30", "16:00"],
  "18": ["09:00", "10:00", "11:30", "13:00", "15:30", "17:30"],
  "19": ["09:00", "10:00", "11:30", "13:00"],
};

export default function RezerwacjePage() {
  const [selectedDay, setSelectedDay] = useState("18");
  const [selectedTimeslot, setSelectedTimeslot] = useState("15:30");
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [selectedStylist, setSelectedStylist] = useState(stylists[0].id);

  const availableSlots = useMemo(() => timeslotsByDay[selectedDay] ?? [], [selectedDay]);
  const selectedDateLabel = selectedDay && selectedTimeslot ? `${selectedDay} lipca 2025, ${selectedTimeslot}` : "Wybierz termin z kalendarza";

  const handleDaySelect = (day) => {
    if (!day || !timeslotsByDay[day]) return;
    setSelectedDay(day);
    const firstSlot = timeslotsByDay[day]?.[0];
    setSelectedTimeslot(firstSlot ?? "");
  };

  return (
    <div className={styles.sectionWrapper}>
      <header className={styles.pageHeader}>
        <h1>Umów swoją wizytę online</h1>
        <p>
          Wybierz dogodny termin, usługę i stylistkę. Po rezerwacji otrzymasz potwierdzenie mailowe oraz przypomnienie SMS
          dzień przed wizytą. Rezerwacje obsługujemy 24/7 – jeśli potrzebujesz pomocy, zadzwoń do nas.
        </p>
      </header>

      <SectionIntro
        eyebrow="Krok 1"
        title="Wybierz termin, usługę i stylistkę"
        description="To tylko demonstracja – działający kalendarz będzie zsynchronizowany z grafikami zespołu i płatnościami online."
      />

      <div className={styles.calendarShell}>
        <div className={styles.calendarHeader}>
          <span className={styles.calendarTitle}>Lipiec 2025</span>
          <div className={styles.calendarControls}>
            <button type="button" className={styles.calendarButton} aria-label="Poprzedni miesiąc" disabled>
              ‹
            </button>
            <button type="button" className={styles.calendarButton} aria-label="Następny miesiąc" disabled>
              ›
            </button>
          </div>
        </div>

        <div className={styles.calendarGrid}>
          <div className={styles.calendarWeekdays}>
            {weekdays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className={styles.calendarDays}>
            {baseCalendar.map((day, index) => {
              const isSelectable = Boolean(day) && timeslotsByDay[day];
              const isSelected = selectedDay === day;
              return (
                <button
                  key={`${day}-${index}`}
                  type="button"
                  className={`${styles.calendarDay} ${!isSelectable ? styles.calendarDayMuted : ""} ${isSelected ? styles.calendarDaySelected : ""}`}
                  onClick={() => handleDaySelect(day)}
                  disabled={!isSelectable}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.timeslots}>
          {availableSlots.length === 0 ? (
            <span className={`${styles.timeslotButton} ${styles.timeslotButtonDisabled}`}>Brak terminów</span>
          ) : (
            availableSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`${styles.timeslotButton} ${selectedTimeslot === slot ? styles.timeslotActive : ""}`}
                onClick={() => setSelectedTimeslot(slot)}
              >
                {slot}
              </button>
            ))
          )}
        </div>

        <p className={styles.calendarNote}>
          Zarezerwuj termin – jeśli potrzebujesz innej godziny, napisz do nas w uwagach.
        </p>
      </div>

      <SectionIntro
        eyebrow="Krok 2"
        title="Doprecyzuj usługę"
        description="W wersji produkcyjnej dostępne będą formularze płatności, integracja z Google Calendar i możliwość logowania do panelu klienta."
      />

      <form className={styles.bookingSection}>
        <div className={styles.bookingContent}>
          <div className={styles.cardGrid}>
            <label className={styles.card}>
              <span className={styles.cardIcon}>💇‍♀️</span>
              <span>Usługa</span>
              <select value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.card}>
              <span className={styles.cardIcon}>👩‍🎨</span>
              <span>Stylistka</span>
              <select value={selectedStylist} onChange={(event) => setSelectedStylist(event.target.value)}>
                {stylists.map((stylist) => (
                  <option key={stylist.id} value={stylist.id}>
                    {stylist.name} — {stylist.specialty}
                  </option>
                ))}
              </select>
            </label>

            <div className={styles.card}>
              <span className={styles.cardIcon}>🗓️</span>
              <span>Wybrany termin</span>
              <strong>{selectedDateLabel}</strong>
              <p className={styles.calendarNote}>
                W finalnej wersji systemu potwierdzisz wizytę jednym kliknięciem i otrzymasz mail z podsumowaniem.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bookingContent}>
          <SectionIntro
            eyebrow="Krok 3"
            title="Potwierdź rezerwację"
            description="Podaj dane kontaktowe, abyśmy mogli przesłać Ci potwierdzenie wizyty i ewentualne pytania uzupełniające."
            align="left"
          />

          <div className={styles.bookingContactFields}>
            <div className={styles.formField}>
              <span>Imię i nazwisko*</span>
              <input type="text" className={styles.input} placeholder="Jak mamy się z Tobą kontaktować?" required />
            </div>
            <div className={styles.formField}>
              <span>E-mail*</span>
              <input type="email" className={styles.input} placeholder="Adres do potwierdzenia rezerwacji" required />
            </div>
            <div className={styles.formField}>
              <span>Telefon*</span>
              <input type="tel" className={styles.input} placeholder="Numer, pod który zadzwonimy" required />
            </div>
          </div>

          <button type="button" className={styles.primaryButton}>
            Potwierdź rezerwację
          </button>
          <p className={styles.calendarNote}>
            To przykładowa rezerwacja. W realnym wdrożeniu przycisk wykona proces w Calendesk z wysyłką maila i SMS.
          </p>
        </div>
      </form>
    </div>
  );
}
