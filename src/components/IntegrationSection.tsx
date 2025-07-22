import { Code, TrendingUp, BarChart3, Calculator, Zap, CheckCircle, Clock, ArrowRight, Sparkles } from "lucide-react";

import TradingViewIcon from '../assets/icons/TradingVIew.svg';  // Keep the actual filename case
import PythonIcon from '../assets/icons/Python.svg';
import ExcelIcon from '../assets/icons/Excel.svg';
import CoinDCXIcon from '../assets/icons/Coindcx.svg?url';
import DeltaExchangeIcon from '../assets/icons/Delta_exchange.svg';
import CoinSwitchIcon from '../assets/icons/CoinSwitch.svg';

interface IntegrationSectionProps {
  id?: string;
}

const IntegrationSection = ({ id }: IntegrationSectionProps) => {
  const strategyPlatforms = [
    { 
      name: "TradingView", 
      description: "Pine Script Integration", 
      icon: TrendingUp, 
      color: "bg-gradient-to-br from-blue-500 to-blue-600", 
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      brandIcon: TradingViewIcon
    },
    { 
      name: "Python", 
      description: "Custom Algorithms", 
      icon: Code, 
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600", 
      hoverColor: "hover:from-yellow-600 hover:to-yellow-700",
      brandIcon: PythonIcon
    },
    { 
      name: "Excel", 
      description: "Spreadsheet Trading", 
      icon: Calculator, 
      color: "bg-gradient-to-br from-green-600 to-green-700", 
      hoverColor: "hover:from-green-700 hover:to-green-800",
      brandIcon: ExcelIcon
    }
  ];

  const brokers = [
    { name: "TradingView", status: "active", icon: TradingViewIcon, bgColor: "bg-blue-500" },
    { name: "CoinDCX", status: "active", icon: CoinDCXIcon, bgColor: "bg-purple-600" }
  ];

  const comingSoonBrokers = [
    { name: "Delta Exchange", status: "coming-soon", icon: DeltaExchangeIcon, bgColor: "bg-orange-500" },
    { name: "CoinSwitch", status: "coming-soon", icon: CoinSwitchIcon, bgColor: "bg-teal-500" }
  ];

  const handleGetStarted = () => {
    window.open('https://app.automatealgos.in', '_blank');
  };

  return (
    <section id={id} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Seamless Integration</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            One Platform. <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Multiple Connections.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seamlessly integrate your favorite trading platforms with brokers across the globe. 
            Our robust API infrastructure ensures <span className="font-semibold text-blue-600">lightning-fast</span>, reliable connections.
          </p>
        </div>

        {/* Strategy Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Strategy Platforms</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {strategyPlatforms.map((platform, index) => (
              <div key={platform.name} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`${platform.color} ${platform.hoverColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transition-all duration-300 group-hover:scale-110`}>
                    <img 
                      src={platform.brandIcon} 
                      alt={`${platform.name} logo`}
                      className="w-10 h-10 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">{platform.name}</h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-center">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Flow Diagram */}
        <div className="mb-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow group-hover:scale-110 transform transition-transform">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg mb-1">Your Strategy</h4>
                <p className="text-sm text-gray-600">Create or import your trading logic</p>
              </div>
              
              <div className="hidden lg:block flex-1 relative mx-8">
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow group-hover:scale-110 transform transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg mb-1">Our Bridge</h4>
                <p className="text-sm text-gray-600">Process & validate in real-time</p>
              </div>
              
              <div className="hidden lg:block flex-1 relative mx-8">
                <div className="h-0.5 bg-gradient-to-r from-green-500 to-orange-500 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-green-500" />
                </div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow group-hover:scale-110 transform transition-transform">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg mb-1">Your Broker</h4>
                <p className="text-sm text-gray-600">Execute trades instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brokers */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Active Brokers */}
          <div>
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Active Connections</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {brokers.map((broker) => (
                <div key={broker.name} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <img 
                      src={broker.icon} 
                      alt={`${broker.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">{broker.name}</span>
                  <div className="flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Brokers */}
          <div>
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Coming Soon</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {comingSoonBrokers.map((broker) => (
                <div key={broker.name} className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-orange-200 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-lg opacity-60 group-hover:opacity-80">
                    <img 
                      src={broker.icon} 
                      alt={`${broker.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="font-medium text-gray-600 group-hover:text-orange-600 transition-colors">{broker.name}</span>
                  <div className="flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs text-orange-600 font-medium">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect Your Trading Strategy?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of traders who trust our platform for seamless integration and lightning-fast execution.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;