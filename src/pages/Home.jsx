import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/ServicesSection";
import IndustriesSection from "../components/home/IndustriesSection";
import DataImportanceSection from "../components/home/DataImportanceSection";
import CallToActionSection from "../components/home/CallToAction";

const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <Services />
      <IndustriesSection />
      <DataImportanceSection />
      <CallToActionSection />
    </main>
  );
};

export default Home;
