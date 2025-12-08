import styles from "./demoBiznes.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BiznesLayout({ children }) {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
