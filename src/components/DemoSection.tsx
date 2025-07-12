
import { Button } from "@/components/ui/button";
import { Play, MousePointer, Calendar } from "lucide-react";

interface DemoSectionProps {
  id?: string;
}

const DemoSection = ({ id }: DemoSectionProps) => {
  return (
    <section id={id} className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            See Our Platform <span className="text-green-400">In Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how easy it is to connect your trading strategies to brokers and start 
            automating your trades in minutes, not hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Demo */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-2">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 relative z-10">
                  <Play className="w-6 h-6 mr-2" />
                  Watch 60s Demo
                </Button>
                {/* Mock UI Elements */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-2 text-xs">
                  Strategy: Moving Average Crossover
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-lg p-2 text-xs">
                  Status: Active
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">Complete platform walkthrough in under 60 seconds</p>
            </div>
          </div>

          {/* Demo Options */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MousePointer className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Interactive Demo</h3>
                  <p className="text-gray-300 mb-4">
                    Click through our platform interface and experience the strategy deployment process firsthand.
                  </p>
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    Try Interactive Demo
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Personal Demo</h3>
                  <p className="text-gray-300 mb-4">
                    Schedule a one-on-one demo with our trading experts and get your questions answered.
                  </p>
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                    Schedule Demo Call
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Demo Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">Strategy Creation</div>
            <p className="text-gray-400">See how to set up your first automated strategy</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">Broker Connection</div>
            <p className="text-gray-400">Watch the seamless broker integration process</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-2">Live Execution</div>
            <p className="text-gray-400">Experience real-time trade execution in action</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
