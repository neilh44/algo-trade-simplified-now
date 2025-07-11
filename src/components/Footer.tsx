
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Youtube, Twitter } from "lucide-react";

interface FooterProps {
  id?: string;
}

const Footer = ({ id }: FooterProps) => {
  const quickLinks = [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Video Guides", href: "#" },
    { name: "Strategy Templates", href: "#" },
    { name: "Blog", href: "#" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "System Status", href: "#" },
    { name: "Feature Requests", href: "#" },
    { name: "Bug Reports", href: "#" },
    { name: "Community Forum", href: "#" }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Risk Disclosure", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Data Security", href: "#" }
  ];

  const integrations = [
    "TradingView", "Zerodha", "Fyers", "Upstox", "AngelOne", "Interactive Brokers"
  ];

  return (
    <footer id={id} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">AlgoTrade Pro</h3>
              <p className="text-gray-400">
                Automate your trading strategies with institutional-grade infrastructure. 
                Trusted by 5,000+ traders across India.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@algotradepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Weekly Insights</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get trading tips and platform updates
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h4 className="font-semibold mb-4 text-center">Integrated Platforms & Brokers</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300">
                {integration}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 AlgoTrade Pro. All rights reserved. Trading involves risk of loss.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Security
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Status
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Risk Disclaimer:</strong> Trading in financial instruments involves substantial risk of loss and is not suitable for all investors. 
            Past performance is not indicative of future results. Please consider your financial situation and risk tolerance before trading. 
            AlgoTrade Pro provides software tools and does not provide investment advice. All trading decisions are made by the user.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
