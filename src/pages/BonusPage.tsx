import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Star,
  Gift,
  ArrowRight,
  Shield,
  Zap,
  Bot,
  BarChart3,
  BookOpen,
  Users,
  Code,
  TrendingUp,
  Award,
  Rocket,
  DollarSign,
  Download,
  Play,
  Target,
  Crown,
  Sparkles,
  Clock
} from "lucide-react";

interface BonusItem {
  icon: any;
  title: string;
  description: string;
  value: string;
  highlight: string;
  color: string;
  buttonText: string;
  action: 'download' | 'external' | 'redirect';
  path?: string;
  url?: string;
}

const BonusPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60); // 24 hours in seconds

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
    console.log('Redirecting to auth page');
    window.open("https://app.automatealgos.in", "_blank");
  };

  const handleBonusAction = (item: BonusItem): void => {
    console.log('=== BONUS ACTION DEBUG ===');
    console.log('Full item object:', item);
    console.log('Item action:', item?.action);
    console.log('Item path:', item?.path);
    console.log('Item url:', item?.url);
    console.log('Item buttonText:', item?.buttonText);
    
    if (!item) {
      console.error('ERROR: Item is null or undefined');
      return;
    }
    
    if (!item.action) {
      console.error('ERROR: Item action is missing or undefined');
      console.log('Available item properties:', Object.keys(item));
      return;
    }
    
    switch(item.action) {
      case 'download':
        console.log('EXECUTING: Download action');
        console.log('Download path:', item.path);
        if (!item.path) {
          console.error('ERROR: Download path is missing');
          return;
        }
        try {
          const link = document.createElement('a');
          link.href = item.path;
          link.download = item.path.split('/').pop() || 'download';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log('SUCCESS: Download initiated');
        } catch (error) {
          console.error('ERROR: Download failed', error);
        }
        break;
        
      case 'external':
        console.log('EXECUTING: External URL action');
        console.log('External URL:', item.url);
        if (!item.url) {
          console.error('ERROR: External URL is missing');
          return;
        }
        try {
          window.open(item.url, "_blank");
          console.log('SUCCESS: External URL opened');
        } catch (error) {
          console.error('ERROR: Failed to open external URL', error);
        }
        break;
        
      case 'redirect':
        console.log('EXECUTING: Redirect action');
        redirectToAuth();
        break;
        
      default:
        console.log('EXECUTING: Default redirect action (fallback)');
        console.warn('Unknown action type:', item.action);
        redirectToAuth();
        break;
    }
    console.log('=== END BONUS ACTION DEBUG ===');
  };

  const bonusItems: BonusItem[] = [
    {
      icon: Zap,
      title: '7-Day Trial of Automated Algo Bridge',
      description: 'Experience real-time algo trading with live market execution and performance tracking',
      value: '₹1,499',
      highlight: 'Free Trial',
      color: 'from-blue-600 to-indigo-700',
      buttonText: 'Start Your Free Trial',
      action: 'redirect'
    },    
    {
      icon: BookOpen,
      title: 'Ebook on Crypto Trading Strategies',
      description: 'Comprehensive guide with 50+ proven strategies used by professional crypto traders',
      value: '₹2,499',
      highlight: 'New Release',
      color: 'from-purple-500 to-pink-600',
      buttonText: 'Download Ebook',
      action: 'download',
      path: '/ebook/Basics of Crypto Trading.pdf'
    },
    {
      icon: TrendingUp,
      title: 'Ready-to-Use TradingView Strategy',
      description: 'Pre-configured Pine Script strategies with backtested results and optimization tips',
      value: '₹4,999',
      highlight: 'Exclusive',
      color: 'from-green-500 to-emerald-600',
      buttonText: 'View Strategy',
      action: 'external',
      url: 'https://www.tradingview.com/script/VkkiheLn-Seasonality-Detailed-Monthly-Table/'
    },
    {
      icon: BarChart3,
      title: 'Trading Journal Template',
      description: 'Professional Excel template for tracking trades, analyzing performance, and improving strategies',
      value: '₹1,499',
      highlight: 'Essential',
      color: 'from-orange-500 to-red-600',
      buttonText: 'Access Template',
      action: 'external',
      url: 'https://docs.google.com/spreadsheets/d/141OoxgI614UMRoqWsajXknEsoUU3_HlA6DcBnxC0YMw/edit?gid=391369718#gid=391369718'
    },
    {
      icon: Bot,
      title: 'Automation Tools for Live Trading',
      description: 'Suite of automation tools including order management, risk control, and position sizing',
      value: '₹7,999',
      highlight: 'Advanced',
      color: 'from-teal-500 to-cyan-600',
      buttonText: 'Get Tools',
      action: 'redirect'
    },
    {
      icon: Crown,
      title: 'Exclusive Resources & Priority Support',
      description: 'VIP access to exclusive webinars, 1-on-1 consultations, and priority customer support',
      value: '₹5,999',
      highlight: 'VIP Only',
      color: 'from-yellow-500 to-amber-600',
      buttonText: 'Access VIP Resources',
      action: 'redirect'
    }
  ];

  // Debug log to verify bonusItems array
  console.log('Bonus items array:', bonusItems);

  const totalValue = bonusItems.reduce((sum, item) => {
    return sum + parseInt(item.value.replace('₹', '').replace(',', ''));
  }, 0);

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
        <div 
          className={`absolute w-80 h-80 rounded-full blur-3xl transition-all duration-1000 ${
            theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/5'
          }`}
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
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

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`} />
        
        {/* Floating Elements */}
        <div className={`absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-float ${
          theme === 'dark' ? 'bg-blue-400/20' : 'bg-blue-200/30'
        }`} />
        <div className={`absolute top-40 right-16 w-32 h-32 rounded-full blur-xl animate-float-delayed ${
          theme === 'dark' ? 'bg-purple-400/20' : 'bg-purple-200/30'
        }`} />
        <div className={`absolute bottom-20 left-1/4 w-24 h-24 rounded-full blur-xl animate-float ${
          theme === 'dark' ? 'bg-teal-400/20' : 'bg-teal-200/30'
        }`} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-5xl mx-auto">
            {/* Limited Time Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 font-medium text-sm border shadow-lg animate-bounce-slow transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 text-green-300 border-green-700/30 backdrop-blur-sm'
                : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200/50'
            }`}>
              <CheckCircle className="h-4 w-4" />
              Exclusive Bonus Package - You Qualified!
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-in transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Exclusive 
              <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-pulse">
                {" "}Bonus Package
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Congratulations! You're getting <strong className="text-green-500">₹{totalValue.toLocaleString()} Worth</strong> of Premium Trading Resources
              <br />
              <span className="text-lg">Your exclusive bonuses are ready for download</span>
            </p>
            
            {/* Value Proposition */}
            <div className={`flex items-center justify-center gap-8 mb-8 text-sm flex-wrap transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-yellow-500" />
                6 Premium Bonuses
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                Instant Download
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                Lifetime Access
              </div>
            </div>
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => {
                console.log('Get started button clicked');
                redirectToAuth();
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Trading Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </div>

            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              ✅ Instant Download • ✅ Lifetime Access • ✅ No Expiration
            </p>
          </div>
        </div>
      </section>
    
      {/* Bonus Items Grid */}
      <section className={`py-20 transition-all duration-500 ${
        theme === 'dark' ? 'bg-slate-800/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Your Exclusive Bonus Package
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Here's what you're getting - download all bonuses instantly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
            {bonusItems.map((item: BonusItem, index: number) => {
              return (
                <div key={index} className={`group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 rounded-lg flex flex-col ${
                  theme === 'dark'
                    ? 'bg-slate-800/80 border-slate-600/50 hover:border-blue-500/50'
                    : 'bg-white border-slate-200 hover:border-blue-300/50'
                }`}>
                  {/* Highlight Badge */}
                  <div className={`absolute top-4 right-4 z-10`}>
                    <div className={`bg-gradient-to-r ${item.color} text-white border-0 shadow-lg animate-pulse px-3 py-1 rounded-full text-sm font-medium`}>
                      {item.highlight}
                    </div>
                  </div>

                  {/* Card Header */}
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className={`text-2xl font-bold transition-colors duration-300 ${
                            theme === 'dark' ? 'text-green-400' : 'text-green-600'
                          }`}>
                            {item.value}
                          </span>
                        </div>
                        <p className={`text-xs font-medium transition-colors duration-300 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Retail Value
                        </p>
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold leading-tight transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Content - flex-grow pushes button to bottom */}
                  <div className="px-6 pb-6 flex flex-col flex-grow">
                    <p className={`text-base leading-relaxed mb-6 flex-grow transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                    
                    {/* Button container - always at bottom */}
                    <div className="mt-auto">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log(`CARD BUTTON CLICKED: ${item.title}`);
                          console.log('Event target:', e.target);
                          console.log('Current target:', e.currentTarget);
                          handleBonusAction(item);
                        }}
                        className={`w-full px-4 py-3 border rounded-lg transition-colors hover:shadow-md ${
                          theme === 'dark'
                            ? 'border-slate-600 hover:bg-slate-700 text-slate-300 hover:text-white'
                            : 'border-slate-300 hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                        }`}
                        style={{ 
                          position: 'relative', 
                          zIndex: 10,
                          pointerEvents: 'auto',
                          cursor: 'pointer'
                        }}
                      >
                        <CheckCircle className="inline mr-2 h-4 w-4 text-green-500" />
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Value Summary */}
          <div className={`text-center p-8 rounded-2xl border-2 border-dashed transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-yellow-500/30'
              : 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300/50'
          }`}>
            <div className="max-w-2xl mx-auto">
              <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Congratulations! You're Getting
              </h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className={`text-2xl font-medium line-through transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  ₹{totalValue.toLocaleString()}
                </span>
                <span className="text-4xl font-bold text-green-500">
                  FREE
                </span>
              </div>
              <p className={`text-lg mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Your exclusive bonus package worth ₹{totalValue.toLocaleString()} is ready for instant download!
              </p>
              <Button
                onClick={() => {
                  console.log('Start trading button clicked');
                  redirectToAuth();
                }}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Zap className="mr-2 h-5 w-5" />
                Launch Trading Dashboard
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className={`py-16 transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20'
          : 'bg-gradient-to-r from-red-50 via-pink-50 to-purple-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-slate-800/30 border-slate-600/30'
              : 'bg-white/50 border-slate-200/50'
          }`}>
            <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              🎉 Your Bonuses Are Ready!
            </h3>
            <p className={`text-xl mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Complete your registration to access all bonuses instantly
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className={`p-4 rounded-lg transition-all duration-300 ${
                theme === 'dark' ? 'bg-slate-700/50' : 'bg-white/80'
              }`}>
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <h4 className={`font-bold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Instant Access
                </h4>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Download immediately after signup
                </p>
              </div>
              <div className={`p-4 rounded-lg transition-all duration-300 ${
                theme === 'dark' ? 'bg-slate-700/50' : 'bg-white/80'
              }`}>
                <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className={`font-bold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Risk-Free
                </h4>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  7-day money-back guarantee
                </p>
              </div>
              <div className={`p-4 rounded-lg transition-all duration-300 ${
                theme === 'dark' ? 'bg-slate-700/50' : 'bg-white/80'
              }`}>
                <Crown className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <h4 className={`font-bold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Lifetime Access
                </h4>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Keep all bonuses forever
                </p>
              </div>
            </div>
            <Button
              onClick={() => {
                console.log('View portfolio button clicked');
                redirectToAuth();
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              View My Portfolio
            </Button>
          </div>
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
        
        /* Ensure buttons are clickable */
        .group/btn {
          pointer-events: auto !important;
          cursor: pointer !important;
        }
      `}</style>
    </div>
  );
};

export default BonusPage;