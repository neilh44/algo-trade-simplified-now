import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Zap, Shield, Target, BarChart3, Sparkles } from "lucide-react";

interface HeroSectionProps {
  id?: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  return (
    <section id={id} className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 animate-pulse">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_center,white_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium backdrop-blur-sm border border-orange-400/30">
                <Zap className="w-4 h-4 mr-2" />
                Sub-200ms Execution Speed
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Automate Your Trading Strategies.{" "}
              <span className="text-green-400">No Code Required.</span>
            </h1>
            
            {/* Enhanced description with better visual hierarchy */}
            <div className="space-y-6 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-lg blur opacity-75 animate-pulse"></div>
                <p className="relative text-xl lg:text-2xl text-white leading-relaxed font-bold bg-gradient-to-r from-blue-800/90 to-blue-900/90 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  Execute Trades With <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent font-black animate-pulse">Lightning Fast</span> & 
                  <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent font-black"> Institutional Level Precision</span>
                </p>
              </div>
              
              <div className="relative">
                <p className="text-lg text-blue-100 leading-relaxed font-medium bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  Seamlessly Automate Your Crypto Trading Straight From 
                  <span className="relative inline-block">
                    <span className="text-white font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Trading View</span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></span>
                  </span> Through Your Broker.
                </p>
              </div>
              
              {/* Key Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500/20 rounded-full p-2 mt-1">
                    <Target className="w-4 h-4 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Smart Triggers</h3>
                    <p className="text-blue-200 text-sm">Support & resistance levels, trendlines, channels</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500/20 rounded-full p-2 mt-1">
                    <BarChart3 className="w-4 h-4 text-orange-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Advanced Analysis</h3>
                    <p className="text-blue-200 text-sm">Fibonacci levels, indicators, oscillators</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500/20 rounded-full p-2 mt-1">
                    <Sparkles className="w-4 h-4 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">TradingView Alerts</h3>
                    <p className="text-blue-200 text-sm">Webhook-based automation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500/20 rounded-full p-2 mt-1">
                    <Zap className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Instant Execution</h3>
                    <p className="text-blue-200 text-sm">Real-time trade automation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://app.automatealgos.in/authentication/side-register', '_blank')}
              >
                Start Free 7-Day Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-blue-900 bg-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://app.automatealgos.in/authentication/side-register', '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Live Demo
              </Button>
            </div>
                        
            {/* Trust Indicators */}
            <div className="space-y-4">
              <p className="text-blue-200 font-medium text-lg">
                Trusted by <span className="text-orange-300 font-bold">5,000+</span> traders across India
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-blue-300">
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                  <Shield className="w-4 h-4 mr-2" />
                  99.9% Uptime
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  24/7 Monitoring
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                  <Zap className="w-4 h-4 mr-2" />
                  Instant Execution
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="rounded-lg">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;