
import { Download, Calculator, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadMagnetSection = () => {
  const leadMagnets = [
    {
      title: "Top 10 TradingView Strategies",
      description: "Proven Pine Script strategies with complete backtesting results and setup instructions",
      type: "PDF Guide",
      pages: "47 pages",
      icon: FileText,
      color: "bg-blue-500",
      downloads: "2,450+"
    },
    {
      title: "Broker Comparison Spreadsheet",
      description: "Compare fees, features, API capabilities, and execution speeds across 15+ brokers",
      type: "Excel File",
      pages: "Interactive",
      icon: FileText,
      color: "bg-green-500",
      downloads: "3,200+"
    },
    {
      title: "Risk Management Calculator",
      description: "Calculate position sizes, stop-losses, and risk-reward ratios for any trade setup",
      type: "Excel Tool",
      pages: "Calculator",
      icon: Calculator,
      color: "bg-orange-500",
      downloads: "1,890+"
    },
    {
      title: "Algo Trading Starter Kit",
      description: "Complete resource pack with templates, checklists, and step-by-step setup guides",
      type: "Resource Pack",
      pages: "15 files",
      icon: Briefcase,
      color: "bg-purple-500",
      downloads: "1,650+"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Free <span className="text-green-400">Trading Resources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download our comprehensive trading resources and start improving your results today. 
            Completely free, no strings attached.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {leadMagnets.map((resource, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`${resource.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <resource.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{resource.title}</h3>
                    <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">FREE</span>
                  </div>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{resource.type} • {resource.pages}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0">
                <Download className="w-5 h-5 mr-2" />
                Download Free {resource.type}
              </Button>
            </div>
          ))}
        </div>

        {/* Email Capture Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Get All Resources + Weekly Trading Tips
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join 3,500+ traders who get our weekly newsletter with market insights, 
              new strategies, and platform updates.
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8">
                  Get Free Access
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Instant access to all resources. No spam, unsubscribe anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">7,500+</div>
                <div className="text-gray-300">Downloads This Month</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">3,500+</div>
                <div className="text-gray-300">Newsletter Subscribers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">4.9/5</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold mb-4">Why These Resources Are Valuable</h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-lg font-semibold text-green-400 mb-2">Proven Strategies</div>
              <p className="text-gray-300">All strategies are backtested with real market data and performance metrics</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-blue-400 mb-2">Expert Created</div>
              <p className="text-gray-300">Developed by professional traders with 10+ years of market experience</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-orange-400 mb-2">Ready to Use</div>
              <p className="text-gray-300">Implementation guides and templates make it easy to start immediately</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
