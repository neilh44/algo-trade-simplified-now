
import { Code, TrendingUp, BarChart3, Calculator } from "lucide-react";

const IntegrationSection = () => {
  const strategyPlatforms = [
    { name: "TradingView", description: "Pine Script Integration", icon: TrendingUp, color: "bg-blue-500" },
    { name: "Amibroker", description: "AFL Strategy Support", icon: BarChart3, color: "bg-green-500" },
    { name: "Python", description: "Custom Algorithms", icon: Code, color: "bg-yellow-500" },
    { name: "Excel", description: "Spreadsheet Trading", icon: Calculator, color: "bg-purple-500" }
  ];

  const indianBrokers = [
    "Zerodha", "Fyers", "Upstox", "AngelOne", "5Paisa", "Alice Blue", "IIFL", "Motilal Oswal"
  ];

  const internationalBrokers = [
    "Interactive Brokers", "Alpaca", "Oanda", "TD Ameritrade"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            One Platform. <span className="text-blue-600">Multiple Connections.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrate your favorite trading platforms with brokers across the globe. 
            Our robust API infrastructure ensures lightning-fast, reliable connections.
          </p>
        </div>

        {/* Strategy Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Strategy Platforms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategyPlatforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${platform.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h4>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Flow Diagram */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Your Strategy</h4>
              <p className="text-sm text-gray-600">Create or import</p>
            </div>
            
            <div className="hidden lg:block flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mx-8"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Our Bridge</h4>
              <p className="text-sm text-gray-600">Process & validate</p>
            </div>
            
            <div className="hidden lg:block flex-1 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 mx-8"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Your Broker</h4>
              <p className="text-sm text-gray-600">Execute trades</p>
            </div>
          </div>
        </div>

        {/* Brokers */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Indian Brokers */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Indian Brokers</h3>
            <div className="grid grid-cols-2 gap-4">
              {indianBrokers.map((broker) => (
                <div key={broker} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                  <span className="font-medium text-gray-900">{broker}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International Brokers */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">International Brokers</h3>
            <div className="grid grid-cols-2 gap-4">
              {internationalBrokers.map((broker) => (
                <div key={broker} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                  <span className="font-medium text-gray-900">{broker}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
