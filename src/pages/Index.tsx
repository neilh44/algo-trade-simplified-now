
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntegrationSection from "@/components/IntegrationSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
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
      <PricingSection id="pricing" />
      <FAQSection />
      <Footer id="contact" />
    </div>
  );
};

export default Index;
