import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Shield,
  Zap,
  Bot,
  BarChart3,
  Globe,
  Users,
  Code,
  TrendingUp,
  Award,
  Timer,
  Rocket,
  DollarSign
} from "lucide-react";

const TradingProductPage = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const redirectToAuth = () => {
    window.open("https://app.automatealgos.in", "_blank");
  };

  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Execution',
      description: 'Lightning-fast order placement with <100ms execution speed and 99.9% uptime guarantee',
      benefit: '3x faster than competitors'
    },
    {
      icon: Shield,
      title: 'Advanced Risk Management',
      description: '20+ predefined risk controls including daily loss limits, position sizing, and drawdown protection',
      benefit: 'Protect 100% of capital'
    },
    {
      icon: Bot,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms that adapt your strategies to changing market conditions',
      benefit: '+28% better returns'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Analytics',
      description: 'Detailed performance tracking with win rate analysis, P&L monitoring, and strategy comparison',
      benefit: 'Data-driven decisions'
    },
    {
      icon: Globe,
      title: 'Multi-Broker Support',
      description: 'Connect with 50+ Indian brokers including Zerodha, Upstox, Angel One, and more',
      benefit: 'Maximum flexibility'
    },
    {
      icon: Code,
      title: 'No-Code Automation',
      description: 'Build strategies using TradingView, ChartInk, Excel, or our visual drag-and-drop builder',
      benefit: 'Setup in 5 minutes'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      monthlyPrice: 'Free',
      annualPrice: 'Free',
      originalAnnualPrice: 'Free',
      period: '',
      popular: false,
      features: ['1 broker connection', '3 live deployment', 'Basic backtesting', 'Email support'],
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      monthlyPrice: '₹1,999',
      annualPrice: '₹19,199',
      originalAnnualPrice: '₹23,988',
      period: '/month',
      popular: true,
      features: ['1 broker connection', '25 live deployment', '5 basic pine script templates', 'Priority support', 'Risk management tools'],
      cta: 'Most Popular - Start Pro'
    },
    {
      name: 'Premium',
      monthlyPrice: '₹2,999',
      annualPrice: '₹28,999',
      originalAnnualPrice: '₹35,988',
      period: '/month',
      popular: false,
      features: ['1 broker connection', 'Unlimited strategies', 'Advanced backtesting', 'Dedicated support manager', 'Advanced analytics'],
      cta: 'Go Premium'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer, Mumbai',
      content: 'Started with ₹50,000 and grew my portfolio to ₹1.2 lakhs in 8 months using the Pro plan. The automated risk management saved me during market crashes.',
      rating: 5,
      return: '+140%',
      image: 'RK'
    },
    {
      name: 'Priya Sharma',
      role: 'Full-time Trader, Delhi',
      content: 'The Premium plan has revolutionized my trading business. Now generating ₹45,000 monthly income with disciplined automated strategies.',
      rating: 5,
      return: '₹45K/month',
      image: 'PS'
    },
    {
      name: 'Vikram Patel',
      role: 'Fund Manager, ABC Investment',
      content: 'Our fund adopted the Premium plan for algorithmic solutions. Generated 23% alpha over benchmark with 40% lower volatility.',
      rating: 5,
      return: '+23% Alpha',
      image: 'VP'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 text-sm font-medium animate-pulse">
        <Timer className="inline h-4 w-4 mr-2" />
        Limited Time Offer: 50% OFF ends in {formatTime(timeLeft)} - Only 47 spots left!
      </div>

      <Header />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100" />
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-16 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-float-delayed" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full mb-6 font-medium text-sm border border-blue-200/50 shadow-sm animate-bounce-slow">
              <Shield className="h-4 w-4" />
              SEBI Registered • 500+ Success Stories • Enterprise-Grade Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in">
              Transform Your Trading with 
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {" "}AI-Powered Automation
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up">
              Join 35,000+ traders generating an average of <strong className="text-green-600">28.7% annual returns</strong><br />
              with our proven algorithmic trading platform. Setup in just 5 minutes.
            </p>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 mb-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                35K+ Active Traders
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                ₹2,500 Cr+ AUM
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                99.9% Uptime
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={redirectToAuth}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Trial Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-200 hover:bg-blue-50 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center group transition-all duration-200">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch 2-Min Demo
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              ✅ No Credit Card Required • ✅ 7-Day Free Trial • ✅ Cancel Anytime
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section - Early Placement for Higher Conversion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Choose Your Success Plan
              <span className="block text-lg font-normal text-red-600 mt-2">🔥 50% OFF - Limited Time Only!</span>
            </h2>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mt-8 mb-12">
              <Label htmlFor="billing-toggle" className={!isAnnual ? "font-semibold text-slate-900" : "text-slate-600"}>
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label htmlFor="billing-toggle" className={isAnnual ? "font-semibold text-slate-900" : "text-slate-600"}>
                Annual
              </Label>
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700 border-green-200">Save 20%</Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 scale-105' : 'bg-white border border-slate-200'} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    {/* Price Display Logic */}
                    {isAnnual && plan.originalAnnualPrice !== "Free" && plan.originalAnnualPrice !== plan.annualPrice ? (
                      <div className="flex flex-col items-center gap-2">
                        {/* Strikethrough Original Price */}
                        <span className="text-lg text-slate-500 line-through">
                          {plan.originalAnnualPrice}
                        </span>
                        {/* Discounted Price */}
                        <div className="text-4xl font-bold text-slate-900">{plan.annualPrice}</div>
                        <span className="text-slate-600">/year</span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-4xl font-bold text-slate-900">
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </div>
                        {plan.monthlyPrice !== "Free" && (
                          <span className="text-slate-600">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={redirectToAuth}
                    className={`w-full py-3 text-lg font-semibold ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : 'bg-slate-900 hover:bg-slate-800'} transform hover:scale-105 transition-all duration-200`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why 35,000+ Traders Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade technology meets user-friendly design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                    <span className="text-sm font-medium text-green-600">{feature.benefit}</span>
                  </div>
                </div>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Real Success Stories</h2>
            <p className="text-xl text-slate-600">See how traders are transforming their financial future</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-2 rounded-full text-sm font-bold">
                  <TrendingUp className="h-4 w-4" />
                  {testimonial.return}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't Miss This Limited-Time Opportunity!
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join the automated trading revolution today. Our traders see results within the first week.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold">7 Days</div>
                <div className="text-sm opacity-80">Free Trial</div>
              </div>
              <div>
                <div className="text-3xl font-bold">28.7%</div>
                <div className="text-sm opacity-80">Avg. Returns</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5 Min</div>
                <div className="text-sm opacity-80">Setup Time</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={redirectToAuth}
              className="bg-white text-blue-600 hover:bg-blue-50 w-80 py-4 text-lg font-semibold inline-flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Claim Your 50% Discount Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={redirectToAuth}
              className="bg-white text-blue-600 hover:bg-blue-50 w-80 py-4 text-lg font-semibold inline-flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            ⚡ Instant Access • 🔒 Risk-Free Trial • 💰 Money-Back Guarantee
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.2s both;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TradingProductPage;