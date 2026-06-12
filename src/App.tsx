import Header from "./sections/Header";
import AirparkHero from "./sections/AirparkHero";
import CommunityBenefits from "./sections/CommunityBenefits";
import PlotOpportunity from "./sections/PlotOpportunity";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <AirparkHero />
        <CommunityBenefits />
        <PlotOpportunity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
