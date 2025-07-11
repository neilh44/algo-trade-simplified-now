
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "month",
      description: "Perfect for individual traders getting started with automation",
      features: [
        "1 broker connection",
        "3 active strategies",
        "Basic backtesting",
        "Email support",
        "Risk management tools",
        "Mobile app access"
      ],
      limitations: [
        "Limited to 100 trades/month",
        "Basic reporting",
        "No copy trading"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "₹1,999",
      period: "month",
      description: "For serious traders who need advanced features and multiple connections",
      features: [
        "3 broker connections",
        "Unlimited strategies",
        "Advanced backtesting",
        "Priority support",
        "Risk management tools",
        "Mobile app access",
        "Copy trading (3 accounts)",
        "Advanced analytics",
        "Custom indicators",
        "API access"
      ],
      limitations: [
        "Limited to 1,000 trades/month"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "₹4,999",
      period: "month",
      description: "For professional traders and institutions requiring unlimited access",
      features: [
        "Unlimited broker connections",
        "Unlimited strategies",
        "Advanced backtesting",
        "Dedicated support manager",
        "Risk management tools",
        "Mobile app access",
        "Copy trading (unlimited)",
        "Advanced analytics",
        "Custom indicators",
        "API access",
        "White-label options",
        "Custom integrations",
        "Priority execution",
        "Advanced reporting"
      ],
      limitations: [],
      popular: false,
      cta: "Start Free Trial"
    }
  ];

  const enterpriseFeatures = [
    "99.9% uptime SLA",
    "Dedicated infrastructure",
    "Custom strategy development",
    "Personal training sessions",
    "Direct phone support"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">Trading Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a 7-day free trial. No credit card required. 
            Upgrade, downgrade, or cancel anytime.
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-md">
            <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 font-medium hover:text-gray-900">
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <Button 
                    size="lg" 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 mt-6">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-center">
                            <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Enterprise Features */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Enterprise-Grade Features
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Get everything you need for professional algorithmic trading with 
                enterprise-level support and infrastructure.
              </p>
              <ul className="space-y-3">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Contact Sales Team
              </Button>
              <p className="text-sm text-gray-300 mt-4">
                Custom pricing for teams and institutions
              </p>
            </div>
          </div>
        </div>

        {/* Money-back Guarantee */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Try our platform risk-free. If you're not completely satisfied within 30 days, 
            we'll refund your money. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
