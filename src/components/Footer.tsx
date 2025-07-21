import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Youtube, Twitter, Instagram } from "lucide-react";

interface FooterProps {
  id?: string;
}

const Footer = ({ id }: FooterProps) => {
  const quickLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api-reference" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Video Guides", href: "/video-guides" },
    { name: "Strategy Templates", href: "/strategy-templates" },
    { name: "Blog", href: "/blog" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Support", href: "/contact" },
    { name: "System Status", href: "/status" },
    { name: "Feature Requests", href: "/feature-requests" },
    { name: "Bug Reports", href: "/bug-reports" },
    { name: "Community Forum", href: "/community" }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Risk Disclosure", href: "/risk-disclosure" },
    { name: "Compliance", href: "/compliance" },
    { name: "Data Security", href: "/data-security" }
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
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Automate Algos</h3>
              <p className="text-gray-400">
                Automate your trading strategies with institutional-grade infrastructure. 
                Trusted by 5,000+ traders across India.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@automatealgos.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+91 70166 43084</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">TF-1 Jivabhai Market Kalol Gandhinagar Gujarat India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-2 rounded-lg ${social.hoverColor} transition-colors`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
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
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
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
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Automate Algos. All rights reserved. Trading involves risk of loss.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/data-security" className="text-gray-400 hover:text-white transition-colors">
              Security
            </Link>
            <Link to="/status" className="text-gray-400 hover:text-white transition-colors">
              Status
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Risk Disclaimer:</strong> Trading in financial instruments involves substantial risk of loss and is not suitable for all investors. 
            Past performance is not indicative of future results. Please consider your financial situation and risk tolerance before trading. 
            Automate Algos provides software tools and does not provide investment advice. All trading decisions are made by the user.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;