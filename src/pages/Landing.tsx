import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HomeSection } from "./Home";
import { ProductSection } from "./Product";
import { HowItWorksSection } from "./HowItWorks";
import { PetPadSection } from "./PetPad";
import { LivesLostSection } from "./LivesLost";
import { OurMissionSection } from "./OurMission";
import { CongressionalActionSection } from "./CongressionalAction";
import { MediaSection } from "./Media";
import { BuyNowSection } from "./BuyNow";
import { FAQSection } from "./FAQ";
import { ContactSection } from "./Contact";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <ProductSection />
        <HowItWorksSection />
        <PetPadSection />
        <LivesLostSection />
        <OurMissionSection />
        <CongressionalActionSection />
        <MediaSection />
        <BuyNowSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
