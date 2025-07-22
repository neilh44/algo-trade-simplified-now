import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Shield, Zap, Link, Code, HelpCircle, Star, CheckCircle, Clock, Award } from "lucide-react";

const FAQSection = () => {
  const navigate = useNavigate();

  const [openItem, setOpenItem] = useState<number | null>(0);
  const [hoveredTrust, setHoveredTrust] = useState<number | null>(null);
  const [animatedCounters, setAnimatedCounters] = useState({ uptime: 0, users: 0, trades: 0 });

  const faqs = [
    {
      question: "Is my trading data and account information secure?",
      answer: "Absolutely. We use bank-grade encryption (AES-256) and never store your trading passwords. All connections are made through official broker APIs with OAuth2 authentication. Your data is encrypted both in transit and at rest, and we're SOC 2 Type II compliant.",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      popular: true
    },
    {
      question: "How fast are trade executions really?",
      answer: "Our infrastructure is designed for speed. Average execution time is under 200ms from signal generation to order placement. We use dedicated servers in major financial hubs and maintain direct connections with broker APIs to minimize latency.",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      popular: false
    },
    {
      question: "Which brokers are currently supported?",
      answer: "We currently support all major Indian brokers, including TradingView and CoinDCX. We're continuously expanding our integrations based on user feedback—support for Delta Exchange and CoinSwitch is on the way.",
      icon: Link,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      popular: false
    },
    {
      question: "Can I use my existing TradingView or Python strategies?",
      answer: "Yes! You can directly connect your TradingView, Pine Script strategies & import your Python algorithms. Our platform translates these into broker-compatible orders automatically. No code changes required.",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      popular: true
    },
    {
      question: "What if I'm not technical? Can I still use this?",
      answer: "Definitely. Our no-code platform lets you build and launch strategies using intuitive visual tools and ready-made templates. Plus, we offer step-by-step tutorials, strategy examples, and personalized onboarding to help you get started with ease.",
      icon: HelpCircle,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      popular: false
    }
  ];

  const trustElements = [
    {
      title: "99.9% Uptime Guarantee",
      description: "Our infrastructure is monitored 24/7 with redundant systems to ensure your strategies never miss a trade.",
      icon: Award,
      color: "from-green-400 to-emerald-500",
      counter: 99.9,
      suffix: "%"
    },
    {
      title: "256-bit SSL Encryption",
      description: "Bank-grade security protects all your data and trading communications.",
      icon: Shield,
      color: "from-blue-400 to-indigo-500",
      counter: 256,
      suffix: "-bit"
    },
    {
      title: "24/7 Market Monitoring",
      description: "Our systems monitor market conditions and your strategies around the clock.",
      icon: Clock,
      color: "from-orange-400 to-red-500",
      counter: 24,
      suffix: "/7"
    }
  ];

  const stats = [
    { label: "Active Traders", value: 5000, suffix: "+" },
    { label: "Daily Trades", value: 25000, suffix: "+" },
    { label: "Success Rate", value: 89, suffix: "%" }
  ];

  // Animate counters on mount
  useEffect(() => {
    const animateCounter = (target: number, key: string) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    animateCounter(99.9, 'uptime');
    animateCounter(5000, 'users');
    animateCounter(25000, 'trades');
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif"}}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/20 to-blue-400/20 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
            <Star className="w-4 h-4 mr-2" />
            Most Asked Questions
          </div>
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight" style={{fontWeight: 800}}>
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{fontWeight: 300, letterSpacing: '0.01em'}}>
            Get answers to the most common questions about our platform, security, and features. 
            Still have questions? Our support team is here to help.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight" style={{fontWeight: 800}}>
                {stat.label === "Active Traders" ? animatedCounters.users : 
                 stat.label === "Daily Trades" ? animatedCounters.trades : 
                 animatedCounters.uptime || stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-600 text-sm font-medium tracking-wide" style={{fontWeight: 500}}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Accordion - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="group relative">
                  <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                    openItem === index ? 'ring-4 ring-blue-200' : ''
                  }`}>
                    {faq.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                        Popular
                      </div>
                    )}
                    
                    <button
                      className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenItem(openItem === index ? null : index)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${faq.color} shadow-lg`}>
                          <faq.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900 text-lg lg:text-xl tracking-tight" style={{fontWeight: 600}}>{faq.question}</span>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                        openItem === index ? 'rotate-180 text-blue-600' : ''
                      }`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      openItem === index ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        <div className="pl-18">
                          <p className="text-gray-600 leading-relaxed text-lg" style={{fontWeight: 400, letterSpacing: '0.01em', lineHeight: '1.7'}}>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Elements Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center tracking-tight" style={{fontWeight: 700}}>Why Traders Trust Us</h3>
              <div className="space-y-6">
                {trustElements.map((element, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      hoveredTrust === index ? 'border-blue-300 shadow-2xl' : 'border-gray-100 shadow-lg'
                    }`}
                    onMouseEnter={() => setHoveredTrust(index)}
                    onMouseLeave={() => setHoveredTrust(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${element.color} opacity-0 rounded-2xl transition-opacity duration-300 ${
                      hoveredTrust === index ? 'opacity-10' : ''
                    }`}></div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${element.color} shadow-lg mr-4`}>
                          <element.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 tracking-tight" style={{fontWeight: 600}}>{element.title}</h4>
                          <div className={`text-2xl font-bold bg-gradient-to-r ${element.color} bg-clip-text text-transparent tracking-tight`} style={{fontWeight: 800}}>
                            {element.counter}{element.suffix}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed" style={{fontWeight: 400, letterSpacing: '0.01em', lineHeight: '1.6'}}>{element.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Still have questions section - centered */}
        <div className="mt-16 text-center max-w-md mx-auto">
          <p className="text-gray-600 mb-6 text-lg" style={{fontWeight: 300, letterSpacing: '0.01em'}}>Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/contact-us')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto tracking-wide" 
              style={{fontWeight: 600}}
            >
              Contact Support
            </button>
            <button 
              onClick={() => navigate('/schedule-demo')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto tracking-wide" 
              style={{fontWeight: 600}}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;