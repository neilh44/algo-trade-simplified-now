
import { Code, Zap, Copy, Shield, Activity, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "No-Code Automation",
      description: "Deploy strategies without writing a single line of code. Our visual interface makes algorithmic trading accessible to everyone.",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "Sub-200ms order execution with enterprise infrastructure. Your trades execute at market speed with minimal slippage.",
      color: "bg-yellow-500"
    },
    {
      icon: Copy,
      title: "Multi-Account Trading",
      description: "Copy trades across multiple accounts simultaneously. Scale your successful strategies across different portfolios.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Built-in stop-loss, position sizing, and drawdown protection. Trade with confidence knowing your capital is protected.",
      color: "bg-red-500"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live trade tracking, P&L analysis, and performance metrics. Stay informed about every aspect of your trading.",
      color: "bg-purple-500"
    },
    {
      icon: BarChart3,
      title: "Backtesting Engine",
      description: "Test strategies on historical data before going live. Validate your approach with comprehensive backtesting tools.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-blue-600">Serious Traders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate, monitor, and optimize your trading strategies. 
            Built by traders, for traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              
              <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2.3 Cr+</div>
              <div className="text-gray-600">Daily Trading Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5,000+</div>
              <div className="text-gray-600">Active Traders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
