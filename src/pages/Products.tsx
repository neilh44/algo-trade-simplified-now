import GlobalPopupIntentExit from "@/components/GlobalPopupIntentExit";
import CryptoFeaturesSection from "@/components/CryptoFeaturesSection";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
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


const Products: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60); // 24 hours in seconds
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showExitPopup, setShowExitPopup] = useState<boolean>(false);


  const toggleTheme = (): void => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const redirectToAuth = (): void => {
    window.open("https://app.automatealgos.in", "_blank");
  };

  const redirectToDemo = (): void => {
    window.open("https://www.youtube.com/watch?v=yjtgComx9xY&feature=youtu.be", "_blank");
  };

  const showExitIntentPopup = (): void => {
    setShowExitPopup(true);
  };

  const handlePopupClose = (): void => {
    setShowExitPopup(false);
  };  
  

  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Execution',
      description: 'Lightning-fast order placement with <200ms execution speed and 99% uptime guarantee',
      benefit: '3x faster than competitors'
    },
    {
      icon: Shield,
      title: 'Advanced Risk Management',
      description: '20+ predefined risk controls including daily loss limits, position sizing, and drawdown protection',
      benefit: 'Protect your capital'
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
      description: 'Connect with Coindcx, Delta Exchange & coinswitch',
      benefit: 'Maximum flexibility'
    },
    {
      icon: Code,
      title: 'No-Code Automation',
      description: 'Build strategies using TradingView, python & excel',
      benefit: 'Setup in 5 minutes'
    }
  ];



  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer, Mumbai',
      content: 'The Pro plan from AutomateAlgos.in gave me everything I needed—ready-to-use strategies, automated execution, and smart risk management. It’s like having a trading desk on autopilot.',
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
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-500 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
            theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
          }`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm border ${
            theme === 'dark'
              ? 'bg-slate-800/80 border-slate-600 text-yellow-400 hover:bg-slate-700/80'
              : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-slate-100/80'
          } shadow-lg hover:shadow-xl transform hover:scale-105`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <Header />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100'
        }`} />
        {/* Floating Elements */}
        <div className={`absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-float ${
          theme === 'dark' ? 'bg-blue-400/20' : 'bg-blue-200/30'
        }`} />
        <div className={`absolute top-40 right-16 w-32 h-32 rounded-full blur-xl animate-float-delayed ${
          theme === 'dark' ? 'bg-purple-400/20' : 'bg-purple-200/30'
        }`} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 font-medium text-sm border shadow-sm animate-bounce-slow transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 text-blue-300 border-blue-700/30 backdrop-blur-sm'
                : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200/50'
            }`}>
              <Shield className="h-4 w-4" />
               500+ Success Stories • Enterprise-Grade Security
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 animate-fade-in transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Transform Your Trading with 
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {" "}AI-Powered Automation
              </span>
            </h1>
            <p className={`text-xl mb-8 leading-relaxed animate-fade-in-up transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Join 5,000+ traders in <strong className="text-green-500"> Maximizing Trading Potential  </strong><br />
              with our proven algorithmic trading platform. Setup in just 5 minutes.
            </p>
            
            {/* Social Proof */}
            <div className={`flex items-center justify-center gap-8 mb-8 text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                5K+ Active Traders
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Maximizing Profits
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
              <button 
              onClick={redirectToDemo}
              className={`border px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center group transition-all duration-200 ${
                theme === 'dark'
                  ? 'border-slate-600 hover:bg-slate-700 text-slate-300 hover:text-white'
                  : 'border-blue-200 hover:bg-blue-50 text-blue-700'
              }`}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch 2-Min Demo
            </button>         
            </div>

            <p className={`text-xs mt-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              ✅ No Credit Card Required • ✅ 7-Day Free Trial • ✅ Cancel Anytime
            </p>
          </div>
        </div>
      </section>



      {/* 🚀 NEW: Everything You Need for Crypto Success */}
      <CryptoFeaturesSection theme={theme} />

      {/* Features Section - Why 5,000+ Traders Choose Us */}
      <section className={`py-20 transition-all duration-500 ${
        theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Why 5,000+ Traders Choose Us
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Enterprise-grade technology meets user-friendly design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-slate-800/80 border-slate-600/50 hover:border-blue-500/30'
                  : 'bg-white border-slate-200 hover:border-blue-200/50'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 group-hover:from-blue-600 group-hover:to-indigo-600'
                      : 'bg-gradient-to-r from-blue-100 to-indigo-100 group-hover:from-blue-500 group-hover:to-indigo-500'
                  }`}>
                    <feature.icon className={`h-6 w-6 transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'text-blue-400 group-hover:text-white'
                        : 'text-blue-600 group-hover:text-white'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {feature.benefit}
                    </span>
                  </div>
                </div>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Testimonials - Enhanced */}
    <section className={`py-20 transition-all duration-500 ${
            theme === 'dark' ? 'bg-slate-900' : 'bg-white'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Real Success Stories
                </h2>
                <p className={`text-xl transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  See how traders are transforming their financial future
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`rounded-xl p-6 border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600/50'
                      : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm transition-colors duration-300 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className={`mb-4 leading-relaxed flex-grow transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      "{testimonial.content}"
                    </p>
                    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold transition-all duration-300 mt-auto ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 text-green-400 border border-green-700/30'
                        : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700'
                    }`}>
                      <TrendingUp className="h-4 w-4" />
                      {testimonial.return}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
      {/* Final CTA - Enhanced */}
      <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800'
          : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700'
      }`}>
        <div className={`absolute inset-0 ${
          theme === 'dark' ? 'bg-black/10' : 'bg-black/20'
        }`} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}>
            Don't Miss This Limited-Time Opportunity!
          </h2>
          <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-slate-300' : 'text-blue-100'
          }`}>
            Join the automated trading revolution today. Our traders see results within the first week.
          </p>
          <div className={`backdrop-blur-sm rounded-2xl p-8 mb-8 transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-slate-800/30 border border-slate-600/30'
              : 'bg-white/10'
          }`}>
            <div className="grid grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold">7 Days</div>
                <div className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'opacity-70' : 'opacity-80'
                }`}>
                  Free Trial
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'opacity-70' : 'opacity-80'
                }`}>
                  Trusted Traders
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">5 Min</div>
                <div className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'opacity-70' : 'opacity-80'
                }`}>
                  Setup Time
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={showExitIntentPopup}
              className={`px-6 py-4 text-lg font-semibold inline-flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl border ${
                theme === 'dark'
                  ? 'bg-white text-slate-900 hover:bg-slate-100 border-white/20'
                  : 'bg-white text-blue-600 hover:bg-blue-50 border-white/20'
              }`}
            >
              Claim Your Bonus Now
            </Button>
            <Button 
              onClick={redirectToAuth}
              className={`px-6 py-4 text-lg font-semibold inline-flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl border ${
                theme === 'dark'
                  ? 'bg-white text-slate-900 hover:bg-slate-100 border-white/20'
                  : 'bg-white text-blue-600 hover:bg-blue-50 border-white/20'
              }`}
            >
              Start Free Trial
            </Button>
          </div>  

          <p className={`text-sm mt-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-slate-400' : 'text-blue-100'
          }`}>
            ⚡ Instant Access • 🔒 Risk-Free Trial • 🎯 Results-Driven Support
          </p>
        </div>
      </section>
      {showExitPopup && <GlobalPopupIntentExit manualTrigger={true} onClose={handlePopupClose} />}

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

export default Products;