
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Zap, Shield } from "lucide-react";

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
              Execute trades with lightning-fast, institutional-level precision.

              With Automate Algos, you can seamlessly automate your crypto trading straight from TradingView through your broker.
              Trigger trades automatically based on support and resistance levels, trendlines, channels, Fibonacci levels, indicators, oscillators, or TradingView alerts using webhooks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                Start Free 7-Day Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-900 bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg">
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
