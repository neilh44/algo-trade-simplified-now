
import { Code, Zap, Shield, Activity, Webhook, Bolt, Settings, Lock, Database, MessageSquare, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturesSectionProps {
  id?: string;
}

const FeaturesSection = ({ id }: FeaturesSectionProps) => {
  const features = [
    {
      icon: Webhook,
      title: "Execute Trades from Any Webhook",
      description: "Trigger trades from any web or HTTP alert—our bridge processes webhook signals 24/7 using the widely supported JSON format.",
      color: "bg-blue-500"
    },
    {
      icon: Bolt,
      title: "Lightning-Fast Trade Execution",
      description: "Our bridge instantly translates webhook signals into broker-compatible API calls, ensuring trade execution happens within milliseconds.",
      color: "bg-yellow-500"
    },
    {
      icon: Settings,
      title: "No Complex Setup Required",
      description: "There's no need for desktop software, browser plugins, or VPS. Simply use our web-based platform to capture signals and place trades instantly.",
      color: "bg-green-500"
    },
    {
      icon: Lock,
      title: "Privacy Comes First",
      description: "We never store your strategies or trade data. All signals are processed in real-time, ensuring your data stays private and secure.",
      color: "bg-red-500"
    },
    {
      icon: Database,
      title: "Reliable Signal Processing",
      description: "Our high-availability web platform ensures your trade signals are received and executed promptly and accurately—every time.",
      color: "bg-purple-500"
    },
    {
      icon: MessageSquare,
      title: "Seamless Telegram Integration",
      description: "Get real-time order updates via Telegram and control your bridge or broker logins using intuitive in-chat commands.",
      color: "bg-orange-500"
    },
    {
      icon: Smartphone,
      title: "Accessible on Any Device",
      description: "Monitor and manage your trades, webhook logs, and accounts from any browser—mobile or desktop—with our responsive web interface.",
      color: "bg-teal-500"
    },
    {
      icon: Globe,
      title: "Universal Webhook Format",
      description: "Use the same web-hook format across different brokers—no need to rewrite or adjust your signals for each one.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id={id} className="py-16 lg:py-24 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹4.8 Cr+ daily</div>
              <div className="text-gray-600">Trading Volume</div>
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
