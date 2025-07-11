
import Header from "@/components/Header";
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
      <Header />
      <HeroSection id="home" />
      <IntegrationSection id="integration" />
      <FeaturesSection id="features" />
      <DemoSection id="demo" />
      <TestimonialsSection />
      <LearningSection id="learning" />
      <PricingSection id="pricing" />
      <FAQSection />
      <LeadMagnetSection />
      <Footer id="contact" />
    </div>
  );
};

export default Index;
