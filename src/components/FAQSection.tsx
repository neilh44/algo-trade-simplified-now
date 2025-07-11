
import { useState } from "react";
import { ChevronDown, Shield, Zap, Link, Code, HelpCircle, Phone } from "lucide-react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my trading data and account information secure?",
      answer: "Absolutely. We use bank-grade encryption (AES-256) and never store your trading passwords. All connections are made through official broker APIs with OAuth2 authentication. Your data is encrypted both in transit and at rest, and we're SOC 2 Type II compliant.",
      icon: Shield
    },
    {
      question: "How fast are trade executions really?",
      answer: "Our infrastructure is designed for speed. Average execution time is under 200ms from signal generation to order placement. We use dedicated servers in major financial hubs and maintain direct connections with broker APIs to minimize latency.",
      icon: Zap
    },
    {
      question: "Which brokers are currently supported?",
      answer: "We support all major Indian brokers including Zerodha, Fyers, Upstox, AngelOne, 5Paisa, Alice Blue, IIFL, and Motilal Oswal. International brokers include Interactive Brokers, Alpaca, and Oanda. We're constantly adding new integrations based on user demand.",
      icon: Link
    },
    {
      question: "Can I use my existing TradingView or Python strategies?",
      answer: "Yes! You can directly connect your TradingView Pine Script strategies, import your Python algorithms, or use Amibroker AFL scripts. Our platform translates these into broker-compatible orders automatically. No code changes required.",
      icon: Code
    },
    {
      question: "What if I'm not technical? Can I still use this?",
      answer: "Absolutely. Our no-code interface allows you to create and deploy strategies using visual builders and pre-built templates. We also provide comprehensive tutorials, strategy templates, and personal onboarding sessions for new users.",
      icon: HelpCircle
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, priority support for Professional users, and dedicated support managers for Enterprise clients. Our support team includes experienced traders who understand both technical and trading aspects. Response times are typically under 2 hours during market hours.",
      icon: Phone
    }
  ];

  const trustElements = [
    {
      title: "99.9% Uptime Guarantee",
      description: "Our infrastructure is monitored 24/7 with redundant systems to ensure your strategies never miss a trade."
    },
    {
      title: "256-bit SSL Encryption",
      description: "Bank-grade security protects all your data and trading communications."
    },
    {
      title: "30-Day Money Back",
      description: "Not satisfied? Get a full refund within 30 days, no questions asked."
    },
    {
      title: "24/7 Market Monitoring",
      description: "Our systems monitor market conditions and your strategies around the clock."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our platform, security, and features. 
            Still have questions? Our support team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ Accordion */}
          <div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                    onClick={() => setOpenItem(openItem === index ? null : index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <faq.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openItem === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openItem === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Traders Trust Us</h3>
            <div className="space-y-6">
              {trustElements.map((element, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">{element.title}</h4>
                  <p className="text-gray-600">{element.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gray-900 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Get Direct Support</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-1">Email Support</div>
                  <div className="text-gray-300">support@algotrading.com</div>
                  <div className="text-sm text-gray-400">Response within 2 hours during market hours</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone Support</div>
                  <div className="text-gray-300">+91 98765 43210</div>
                  <div className="text-sm text-gray-400">Mon-Fri, 9:00 AM - 6:00 PM IST</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Live Chat</div>
                  <div className="text-gray-300">Available on platform dashboard</div>
                  <div className="text-sm text-gray-400">Instant responses during market hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
