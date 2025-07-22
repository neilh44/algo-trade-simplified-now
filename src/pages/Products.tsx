import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { BookOpen, LineChart } from "lucide-react"
import {
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Shield,
  Zap,
  Bot,
  BarChart3,
  Target,
  Mail,
  Phone,
  Settings,
  Code,
  TrendingUp,
  Globe,
  Users,
  Activity,
  Briefcase,
  PlayCircle,
  Clock,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin
} from "lucide-react";


const TradingProductPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const redirectToAuth = () => {
    window.open("https://app.automatealgos.in", "_blank");
  };

  
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Execution',
      description: 'Lightning-fast order placement with <100ms execution speed and 99.9% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Advanced Risk Management',
      description: '20+ predefined risk controls including daily loss limits, position sizing, and drawdown protection'
    },
    {
      icon: Bot,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms that adapt your strategies to changing market conditions'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Analytics',
      description: 'Detailed performance tracking with win rate analysis, P&L monitoring, and strategy comparison'
    },
    {
      icon: Globe,
      title: 'Multi-Broker Support',
      description: 'Connect with 50+ Indian brokers including Zerodha, Upstox, Angel One, and more'
    },
    {
      icon: Code,
      title: 'No-Code Automation',
      description: 'Build strategies using TradingView, ChartInk, Excel, or our visual drag-and-drop builder'
    }
  ];

  const stats = [
    { label: 'Active Traders', value: '35,000+', icon: Users },
    { label: 'Assets Under Management', value: '₹2,500 Cr+', icon: Briefcase },
    { label: 'Trades Executed', value: '15M+', icon: Activity },
    { label: 'Average Annual Return', value: '28.7%', icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer, Mumbai',
      content: 'Started with ₹50,000 and grew my portfolio to ₹1.2 lakhs in 8 months using the Pro plan. The automated risk management saved me during market crashes.',
      rating: 5,
      return: '+140%'
    },
    {
      name: 'Priya Sharma',
      role: 'Full-time Trader, Delhi',
      content: 'The Premium plan has revolutionized my trading business. Now generating ₹45,000 monthly income with disciplined automated strategies.',
      rating: 5,
      return: '₹45K/month'
    },
    {
      name: 'Vikram Patel',
      role: 'Fund Manager, ABC Investment',
      content: 'Our fund adopted the Premium plan for algorithmic solutions. Generated 23% alpha over benchmark with 40% lower volatility.',
      rating: 5,
      return: '+23% Alpha'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium text-sm">
              <Shield className="h-4 w-4" />
              SEBI Registered • 500+ Success Stories • Enterprise-Grade Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Master Automated Trading with
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Professional Tools
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              From Beginner to Expert - Comprehensive automated trading platform for every level.<br />
              Join 35,000+ traders who've transformed their trading with our proven algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={redirectToAuth}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                className="border border-blue-200 hover:bg-blue-50 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features for Every Trader</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade technology meets user-friendly design to deliver the ultimate trading experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Product Features Section */}
    <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Product Features - Horizontal Layout */}
              <div className="space-y-16">
                {/* Product 1 - Text Right */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 flex items-center justify-center">
                      <Bot className="h-24 w-24 text-blue-600" />
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600/20">
                      AutoTrading Platform
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Smart Algorithm Trading</h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      Transform your trading with AI-powered algorithms that execute trades 24/7, eliminating emotions and maximizing opportunities.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Maximize Profit Potential</h4>
                          <p className="text-sm text-slate-600">Capture opportunities 24/7 with lightning-fast execution under 100ms</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Eliminate Emotional Trading</h4>
                          <p className="text-sm text-slate-600">Stick to your strategy with disciplined, emotion-free automation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Scale Your Trading Business</h4>
                          <p className="text-sm text-slate-600">Manage multiple strategies across 50+ brokers simultaneously</p>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" onClick={redirectToAuth} className="bg-blue-600 hover:bg-blue-700">
                      Start Automated Trading
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Product 2 - Text Left */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:pr-8 order-2 lg:order-1">
                    <Badge variant="outline" className="mb-4 text-purple-600 border-purple-600/20">
                      Learning Platform
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Trading Education</h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      Master trading from beginner to expert level with our structured curriculum, live mentoring, and hands-on practice.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Accelerate Learning Curve</h4>
                          <p className="text-sm text-slate-600">Learn from industry experts with proven track records and real-world experience</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Build Confidence</h4>
                          <p className="text-sm text-slate-600">Practice with virtual trading before risking real capital</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Career Transformation</h4>
                          <p className="text-sm text-slate-600">Join 15,000+ successful traders who changed their financial future</p>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                      Start Learning Journey
                      <BookOpen className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <div className="relative order-1 lg:order-2">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 flex items-center justify-center">
                      <BookOpen className="h-24 w-24 text-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Product 3 - Text Right */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 flex items-center justify-center">
                      <BarChart3 className="h-24 w-24 text-green-600" />
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <Badge variant="outline" className="mb-4 text-green-600 border-green-600/20">
                      Analytics Suite
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Advanced Performance Analytics</h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      Gain deep insights into your trading performance with comprehensive analytics, risk assessment, and optimization tools.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Optimize Performance</h4>
                          <p className="text-sm text-slate-600">Identify winning patterns and eliminate losing strategies with data-driven insights</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Risk Management</h4>
                          <p className="text-sm text-slate-600">Protect your capital with advanced risk metrics and automated safeguards</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-green-500/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Strategic Advantage</h4>
                          <p className="text-sm text-slate-600">Stay ahead of market trends with predictive analytics and forward testing</p>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      View Analytics Demo
                      <LineChart className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real traders, real results - see how our platform has transformed trading journeys
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">{testimonial.content}</p>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  <TrendingUp className="h-4 w-4" />
                  {testimonial.return}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful traders who've already transformed their financial future with AutomateAlgo. Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={redirectToAuth}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
              <PlayCircle className="mr-2 h-5 w-5" />
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Free 14-day trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TradingProductPage;