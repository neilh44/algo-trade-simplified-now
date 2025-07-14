import { Code, Zap, Shield, Activity, Webhook, Bolt, Settings, Lock, Database, MessageSquare, Smartphone, Globe, TrendingUp, Clock, Users } from "lucide-react";
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
      color: "from-blue-500 to-blue-600",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]"
    },
    {
      icon: Bolt,
      title: "Lightning-Fast Trade Execution",
      description: "Our bridge instantly translates webhook signals into broker-compatible API calls, ensuring trade execution happens within milliseconds.",
      color: "from-yellow-500 to-orange-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_70%)]"
    },
    {
      icon: Settings,
      title: "No Complex Setup Required",
      description: "There's no need for desktop software, browser plugins, or VPS. Simply use our web-based platform to capture signals and place trades instantly.",
      color: "from-green-500 to-emerald-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.1),transparent_70%)]"
    },
    {
      icon: Lock,
      title: "Privacy Comes First",
      description: "We never store your strategies or trade data. All signals are processed in real-time, ensuring your data stays private and secure.",
      color: "from-red-500 to-pink-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.1),transparent_70%)]"
    },
    {
      icon: Database,
      title: "Reliable Signal Processing",
      description: "Our high-availability web platform ensures your trade signals are received and executed promptly and accurately—every time.",
      color: "from-purple-500 to-violet-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),transparent_70%)]"
    },
    {
      icon: MessageSquare,
      title: "Seamless Telegram Integration",
      description: "Get real-time order updates via Telegram and control your bridge or broker logins using intuitive in-chat commands.",
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_70%)]"
    },
    {
      icon: Smartphone,
      title: "Accessible on Any Device",
      description: "Monitor and manage your trades, webhook logs, and accounts from any browser—mobile or desktop—with our responsive web interface.",
      color: "from-teal-500 to-cyan-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.1),transparent_70%)]"
    },
    {
      icon: Globe,
      title: "Universal Webhook Format",
      description: "Use the same web-hook format across different brokers—no need to rewrite or adjust your signals for each one.",
      color: "from-indigo-500 to-purple-500",
      bgPattern: "bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)]"
    }
  ];

  return (
    <section id={id} className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-6 animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            Powered by Advanced Technology
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Powerful Features for{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Serious Traders
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need to automate, monitor, and optimize your trading strategies.{" "}
            <span className="font-semibold text-gray-800">Built by traders, for traders.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl p-8 bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${feature.bgPattern}`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: `fadeInUp 0.6s ease-out forwards`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg mx-auto`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Trusted by Thousands of Traders
              </h3>
              <p className="text-gray-600">Real numbers, real performance, real results</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600 mr-2" />
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ₹4.8 Cr+
                  </div>
                </div>
                <div className="text-gray-600 font-medium">Daily Trading Volume</div>
                <div className="text-sm text-gray-500 mt-1">Processed seamlessly</div>
              </div>
              
              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-green-600 mr-2" />
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    99.9%
                  </div>
                </div>
                <div className="text-gray-600 font-medium">System Uptime</div>
                <div className="text-sm text-gray-500 mt-1">Always available</div>
              </div>
              
              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-orange-600 mr-2" />
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    5,000+
                  </div>
                </div>
                <div className="text-gray-600 font-medium">Active Traders</div>
                <div className="text-sm text-gray-500 mt-1">Growing community</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;