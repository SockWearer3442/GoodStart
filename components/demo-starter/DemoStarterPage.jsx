import styles from "./demoStarter.module.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

export default function DemoStarterPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
