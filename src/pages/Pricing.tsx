import { useState } from "react";
import { Check, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const handleStartTrial = () => {
    window.open('https://app.automatealgos.in/', '_blank');
  };

  const handleContactSales = () => {
    navigate('/contact-us');
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual traders getting started with automation",
      monthlyPrice: "Free",
      annualPrice: "Free",
      features: [
        "1 broker connection",
        "3 active strategies",
        "Basic backtesting",
        "Email support",
        "Risk management tools",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "https://app.automatealgos.in/"
    },
    {
      name: "Professional",
      description: "For serious traders who need advanced features and multiple connections",
      monthlyPrice: "₹1,999",
      annualPrice: "₹19,999",
      features: [
        "1 broker connection",
        "Unlimited strategies",
        "Advanced backtesting",
        "Priority support",
        "Risk management tools",
        "Mobile app access",
        "Advanced analytics",
        "Custom indicators"
      ],
      popular: true,
      cta: "Get Started",
      link: "https://wa.me/917016643084?text=I%20need%20help%20with%20monthly%20plan"
    },
    {
      name: "Enterprise",
      description: "For professional traders and institutions requiring unlimited access",
      monthlyPrice: "₹4,999",
      annualPrice: "₹49,999",
      features: [
        "Unlimited broker connections",
        "Unlimited strategies",
        "Advanced backtesting",
        "Dedicated support manager",
        "Risk management tools",
        "Mobile app access",
        "Advanced analytics",
        "Custom indicators",
        "99.9% uptime SLA",
        "Custom strategy development"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "https://wa.me/917016643084?text=I%20need%20help%20with%20enterprise%20plan"
    }
  ];

  const testimonials = [
    {
      name: "Raj Patel",
      role: "Day Trader",
      rating: 5,
      comment: "AutomateAlgos transformed my trading. I went from manual execution to fully automated strategies that run 24/7. My profits increased by 40% in just 3 months."
    },
    {
      name: "Priya Sharma",
      role: "Swing Trader",
      rating: 5,
      comment: "The platform's reliability is outstanding. I've been using it for over a year and the automated strategies have never missed a trade. Excellent ROI!"
    },
    {
      name: "Arjun Gupta",
      role: "Portfolio Manager",
      rating: 5,
      comment: "As someone managing multiple portfolios, the enterprise features are exactly what I needed. The dedicated support team is incredibly responsive."
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences."
    },
    {
      question: "Which brokers are supported?",
      answer: "We support all major Indian brokers including Zerodha, Angel One, Upstox, ICICI Direct, and many more. Check our integrations page for the complete list."
    },
    {
      question: "What happens during the free trial?",
      answer: "You get full access to all Starter plan features for 3 days. No credit card required. After the trial, you can continue with the free plan or upgrade to a paid plan."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund within 14 days of purchase."
    },
    {
      question: "How secure is my trading data?",
      answer: "We use bank-grade encryption and never store your broker passwords. All data is encrypted in transit and at rest. We're SOC 2 compliant and regularly audited."
    },
    {
      question: "Do you provide trading strategies?",
      answer: "We provide strategy templates and examples, but you're responsible for your own trading decisions. Our platform helps automate your strategies, not create them."
    }
  ];

  const comparisonFeatures = [
    { feature: "Broker Connections", starter: "1", professional: "1", enterprise: "Unlimited" },
    { feature: "Active Strategies", starter: "3", professional: "Unlimited", enterprise: "Unlimited" },
    { feature: "Backtesting", starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
    { feature: "Support", starter: "Email", professional: "Priority", enterprise: "Dedicated Manager" },
    { feature: "Analytics", starter: "Basic", professional: "Advanced", enterprise: "Advanced + Custom" },
    { feature: "API Access", starter: "❌", professional: "✓", enterprise: "✓" },
    { feature: "Custom Indicators", starter: "❌", professional: "✓", enterprise: "✓" },
    { feature: "White-label", starter: "❌", professional: "❌", enterprise: "✓" },
    { feature: "SLA Guarantee", starter: "❌", professional: "❌", enterprise: "99.9%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trading Plan
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free or scale with advanced automation features. Join thousands of traders who've automated their success.
          </p>
          <Button size="lg" onClick={handleStartTrial} className="text-lg px-8 py-4">
            Start 3-Day Free Trial
          </Button>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <Label htmlFor="billing-toggle" className={!isAnnual ? "font-semibold" : ""}>
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-toggle" className={isAnnual ? "font-semibold" : ""}>
              Annual
            </Label>
            <Badge variant="secondary" className="ml-2">Save 20%</Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== "Free" && (
                      <span className="text-muted-foreground">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button 
                    size="lg" 
                    className={`w-full mb-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    onClick={() => window.open(plan.link, '_blank')}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Compare Features
            </h2>
            <p className="text-muted-foreground">
              See exactly what's included in each plan
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-card rounded-lg shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="text-center p-6 font-semibold">Starter</th>
                  <th className="text-center p-6 font-semibold bg-primary/5">Professional</th>
                  <th className="text-center p-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-6 font-medium">{item.feature}</td>
                    <td className="text-center p-6">{item.starter}</td>
                    <td className="text-center p-6 bg-primary/5">{item.professional}</td>
                    <td className="text-center p-6">{item.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible>
              {comparisonFeatures.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.feature}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Starter:</span>
                        <span>{item.starter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Professional:</span>
                        <span>{item.professional}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enterprise:</span>
                        <span>{item.enterprise}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Traders Worldwide
            </h2>
            <p className="text-muted-foreground">
              See what our customers say about their trading success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our pricing and features
            </p>
          </div>

          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who've transformed their trading with our automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={handleStartTrial}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
              onClick={handleContactSales}
            >
              Contact Sales
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No credit card required • 3-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <AppFooter />
    </div>
  );
};

export default Pricing;