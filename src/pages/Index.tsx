
import HeroSection from "@/components/HeroSection";
import IntegrationSection from "@/components/IntegrationSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LearningSection from "@/components/LearningSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntegrationSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
      <LearningSection />
      <PricingSection />
      <FAQSection />
      <LeadMagnetSection />
      <Footer />
    </div>
  );
};

export default Index;
