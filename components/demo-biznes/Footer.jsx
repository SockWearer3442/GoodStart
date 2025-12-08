import styles from "./demoBiznes.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3>Salon Elegancja</h3>
            <p>
              Tworzymy fryzury i pielęgnacje, które podkreślają Twój charakter. Zapraszamy do naszego studia przy ul.
              Pięknej 15 w Warszawie.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <strong>Nawigacja</strong>
            <a href="/demo-biznes">Start</a>
            <a href="/demo-biznes/oferta">Oferta</a>
            <a href="/demo-biznes/realizacje">Realizacje</a>
            <a href="/demo-biznes/blog">Blog</a>
            <a href="/demo-biznes/faq">FAQ</a>
          </div>

          <div className={styles.footerContact}>
            <strong>Kontakt</strong>
            <a href="mailto:kontakt@salon-elegancja.pl">kontakt@salon-elegancja.pl</a>
            <a href="tel:+48123456789">+48 123 456 789</a>
            <p>ul. Piękna 15, Warszawa</p>
          </div>

          <div className={styles.footerResources}>
            <strong>Przydatne linki</strong>
            <a href="/demo-biznes/rezerwacje">Umów wizytę online</a>
            <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer">
              Zobacz naszą lokalizację
            </a>
            <a href="mailto: kontakt@salon-elegancja.pl">Zapytaj o dostępne terminy</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Salon Elegancja. Wszystkie prawa zastrzeżone.</span>
          <span>Zadbaj o włosy razem z nami</span>
        </div>
      </div>
    </footer>
  );
}
