import styles from "./demoStarter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3>Salon Elegancja</h3>
            <p>
              Profesjonalne usługi fryzjerskie w sercu Warszawy. Tworzymy fryzury, które odzwierciedlają Twoją
              osobowość i styl.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <strong>Szybkie linki</strong>
            <a href="#start">Start</a>
            <a href="#o-nas">O nas</a>
            <a href="#uslugi">Usługi</a>
            <a href="#galeria">Galeria</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className={styles.footerContact}>
            <strong>Kontakt</strong>
            <a href="mailto:kontakt@salon-elegancja.pl">kontakt@salon-elegancja.pl</a>
            <a href="tel:+48123456789">+48 123 456 789</a>
            <p>ul. Piękna 15, Warszawa</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Elegancja Hair Atelier. Wszystkie prawa zastrzeżone.</span>
          <span>Projekt demo pakietu Starter</span>
        </div>
      </div>
    </footer>
  );
}
