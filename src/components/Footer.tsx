import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Youtube, Twitter, Instagram } from "lucide-react";

interface FooterProps {
  id?: string;
}

const Footer = ({ id }: FooterProps) => {
  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Risk Disclosure", href: "/risk-disclosure" },
    { name: "Refund Policy", href: "/refund-policy" }
  ];

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Strategies", href: "/strategies" },
    { name: "Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/automate-algos",
      icon: Linkedin,
      hoverColor: "hover:bg-blue-600"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/automate_algos",
      icon: Instagram,
      hoverColor: "hover:bg-pink-600"
    },
    {
      name: "Telegram",
      href: "https://t.me/+cQV3FPA406UwMjhl",
      icon: MessageCircle,
      hoverColor: "hover:bg-blue-500"
    },
    {
      name: "YouTube",
      href: "https://youtu.be/yjtgComx9xY",
      icon: Youtube,
      hoverColor: "hover:bg-red-600"
    },
    {
      name: "Twitter",
      href: "https://x.com/automate_algos?s=11",
      icon: Twitter,
      hoverColor: "hover:bg-blue-400"
    }
  ];

  return (
    <footer id={id} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">Automate Algos</h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Automate your trading strategies with institutional-grade infrastructure. 
                Trusted by 5,000+ traders across India.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">support@automatealgos.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+91 70166 43084</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  TF-1 Jivabhai Market<br />
                  Kalol, Gandhinagar<br />
                  Gujarat, India
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-3 rounded-lg ${social.hoverColor} transition-all duration-200 hover:scale-105`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {mainNavLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 Automate Algos. All rights reserved. Trading involves risk of loss.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Risk Disclaimer:</strong> Trading in financial instruments involves substantial risk of loss and is not suitable for all investors. 
            Past performance is not indicative of future results. Please consider your financial situation and risk tolerance before trading. 
            Automate Algos provides software tools and does not provide investment advice. All trading decisions are made by the user.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;