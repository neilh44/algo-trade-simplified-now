import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface PricingSectionProps {
  id?: string;
}

const PricingSection = ({ id }: PricingSectionProps) => {
  const navigate = useNavigate();

  const handleContactSales = () => {
    navigate('/contact-us');
  };

  const handleBuyNow = () => {
    window.location.href = 'https://app.automatealgos.in/authentication/side-register';
  };

  const plans = [
    {
      name: "Free",
      price: "0",
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
       
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Monthly",
      price: "₹1,999",
      period: "month",
      description: "For serious traders who need advanced features and multiple connections",
      features: [
        "1 broker connections",
        "Unlimited strategies",
        "Advanced backtesting",
        "Priority support",
        "Risk management tools",
        "Mobile app access",        
        "Advanced analytics",
        "Custom indicators",
        "API access"
      ],
      limitations: [
        
      ],
      popular: true,
      cta: "Buy Now"
    },
    {
      name: "Annualy",
      price: "₹19,999",
      period: "month",
      description: "For professional traders and institutions requiring unlimited access",
      features: [
        "Unlimited broker connections",
        "Unlimited strategies",
        "Advanced backtesting",
        "Dedicated support manager",
        "Risk management tools",
        "Mobile app access",        
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
      cta: "Buy Now"
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
    <section id={id} className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">Trading Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our free plan or upgrade to unlock advanced features. 
            Upgrade, downgrade, or cancel anytime.
          </p>
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
                    onClick={handleBuyNow}
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
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100"
                onClick={handleContactSales}
              >
                Contact Sales Team
              </Button>
              <p className="text-sm text-gray-300 mt-4">
                Custom pricing for teams and institutions
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;