
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Sub-200ms Execution Speed
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Automate Your Trading Strategies.{" "}
              <span className="text-green-400">No Code Required.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Connect TradingView, Amibroker, or Python to your broker in seconds. 
              Execute trades automatically with institutional-grade speed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                Start Free 7-Day Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Live Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="space-y-4">
              <p className="text-blue-200 font-medium">
                Trusted by 5,000+ traders across India
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-blue-300">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  99.9% Uptime
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  24/7 Monitoring
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Instant Execution
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Trading Flow Animation */}
                <div className="flex items-center justify-between">
                  <div className="bg-green-500 rounded-lg p-3 text-white text-center min-w-[80px]">
                    <div className="text-xs font-medium">Strategy</div>
                    <div className="text-sm">TradingView</div>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 mx-4 animate-pulse"></div>
                  <div className="bg-orange-500 rounded-lg p-3 text-white text-center min-w-[80px]">
                    <div className="text-xs font-medium">Execution</div>
                    <div className="text-sm">Zerodha</div>
                  </div>
                </div>
                
                {/* Mock Performance Chart */}
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-300">Live Performance</span>
                    <span className="text-green-400 font-semibold">+23.4%</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-end justify-center">
                    <div className="text-xs text-gray-400">Real-time trading visualization</div>
                  </div>
                </div>
                
                {/* Broker Logos */}
                <div className="grid grid-cols-4 gap-4">
                  {['Zerodha', 'Fyers', 'Upstox', 'Angel'].map((broker) => (
                    <div key={broker} className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-300">{broker}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
