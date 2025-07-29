import React, { useState } from 'react';
import automationImage from '/images/product/C_automation.png';
import {
  Bot,
  BookOpen,
  FileText,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Zap,
  Target,
  Sun,
  Moon
} from "lucide-react";

const CryptoFeaturesSection = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const features = [
    {
      id: 1,
      icon: Bot,
      title: 'Live Crypto Automation',
      description: 'Deploy sophisticated crypto trading bots that operate 24/7 across multiple exchanges. Our AI-powered algorithms continuously monitor market conditions and execute trades based on your predefined strategies.',
      highlights: [
        '24/7 automated trading',
        'Multi-exchange support',
        'Real-time market monitoring',
        'Smart order execution'
      ],
      benefits: 'Never miss market opportunities',
      performance: 'Trusted by 5K+ traders'
    },
    {
      id: 2,
      icon: BookOpen,
      title: 'Quality Crypto Education',
      description: 'Master cryptocurrency trading with our comprehensive learning modules. From blockchain fundamentals to advanced trading strategies, get educated by industry experts and seasoned traders.',
      highlights: [
        'Expert-led video courses',
        'Interactive trading simulations',
        'Market analysis tutorials',
        'Risk management guides'
      ],
      benefits: 'Trade with confidence',
      performance: '95% completion rate'
    },
    {
      id: 3,
      icon: FileText,
      title: 'Ready to Use Strategy Templates',
      description: 'Access our library of battle-tested crypto trading strategies. Each template is optimized for different market conditions and risk profiles, allowing you to start trading immediately.',
      highlights: [
        '50+ proven strategies',
        'Risk-adjusted templates',
        'Market condition filters',
        'One-click deployment'
      ],
      benefits: 'Start trading instantly',
      performance: 'No coding required'
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Gain deep insights into your crypto portfolio performance with our comprehensive analytics dashboard. Track profits, analyze trends, and optimize your strategies with data-driven decisions.',
      highlights: [
        'Real-time P&L tracking',
        'Performance benchmarking',
        'Risk metrics analysis',
        'Custom reporting tools'
      ],
      benefits: 'Data-driven decisions',
      performance: '40+ key metrics'
    },
    {
      id: 5,
      icon: TrendingUp,
      title: 'Robust Backtesting',
      description: 'Test your crypto strategies against historical data with our advanced backtesting engine. Validate strategy performance across different market cycles before risking real capital.',
      highlights: [
        'Historical data analysis',
        'Multiple timeframe testing',
        'Risk-adjusted returns',
        'Strategy optimization'
      ],
      benefits: 'Risk-free validation',
      performance: '5+ years historical data'
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            Everything You Need for Crypto Success
          </h2>
          <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
            From automated trading to comprehensive education, our platform provides all the tools and knowledge you need to succeed in cryptocurrency markets.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} rounded-2xl border hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-4 ${isDark ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 group-hover:from-blue-600 group-hover:to-indigo-600' : 'bg-gradient-to-r from-blue-100 to-indigo-100 group-hover:from-blue-500 group-hover:to-indigo-500'} rounded-xl transition-all duration-300`}>
                      <feature.icon className={`h-8 w-8 ${isDark ? 'text-blue-400 group-hover:text-white' : 'text-blue-600 group-hover:text-white'} transition-colors duration-300`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {feature.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`text-sm font-medium ${isDark ? 'text-green-400' : 'text-green-600'} flex items-center gap-1`}>
                          <Target className="h-4 w-4" />
                          {feature.benefits}
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'} flex items-center gap-1`}>
                          <TrendingUp className="h-4 w-4" />
                          {feature.performance}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                    {feature.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${isDark ? 'text-green-400' : 'text-green-500'} flex-shrink-0`} />
                        <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'} font-medium`}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                <div className={`relative rounded-xl overflow-hidden aspect-video group-hover:scale-105 transition-transform duration-500`}>
                  <img 
                    src={automationImage} 
                    alt="Live Crypto Automation Dashboard"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-slate-900/20 to-transparent' : 'bg-gradient-to-t from-black/10 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Feature badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${isDark ? 'bg-slate-900/80 text-white border-slate-700' : 'bg-white/90 text-slate-900 border-white/20'} px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm`}>
                      Live Crypto Automation
                    </span>
                  </div>

                  {/* Performance indicator */}
                  <div className="absolute bottom-4 right-4">
                    <div className={`${isDark ? 'bg-green-900/80 text-green-300 border-green-700/50' : 'bg-green-100/90 text-green-700 border-green-200/50'} px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm flex items-center gap-1`}>
                      <TrendingUp className="h-3 w-3" />
                      +32% avg returns
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Demo wrapper with theme toggle
function CryptoFeaturesDemo() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            theme === 'dark'
              ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700 border border-slate-600'
              : 'bg-white text-slate-700 hover:bg-gray-50 border border-gray-200'
          }`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
        </button>
      </div>



      {/* The themed component */}
      <CryptoFeaturesSection theme={theme} />
    </div>
  );
}

export default CryptoFeaturesSection;