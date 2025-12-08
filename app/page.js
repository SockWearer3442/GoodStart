import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import PackagesSection from "../components/home/PackagesSection";
import ProcessSection from "../components/home/ProcessSection";

export default function Home() {
  return (
    <div className="app-wrapper">
      <main>
        <HeroSection />
        <PackagesSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}
