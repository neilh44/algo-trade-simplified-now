import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Settings,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Percent,
  Activity,
  PieChart,
  LineChart,
  Briefcase,
  Code,
  Users,
  Award,
  PlayCircle,
  Play,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  BookOpen,
  FileText,
  HelpCircle,
  Shield as ShieldIcon,
  Lock,
  Headphones
} from "lucide-react";

const Products = () => {
  const redirectToAuth = () => {
    window.location.href = "https://www.automatealgos.in/";
  };

  const subscriptionTiers = [
    {
      name: "Starter Plan",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for individual traders getting started",
      features: [
        "Access to 2 basic algorithms",
        "Up to 100 trades per month",
        "Basic risk management",
        "Email support",
        "Performance reporting",
        "Mobile app access"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional Plan",
      price: "₹7,999",
      period: "/month",
      description: "For serious traders and small institutions",
      features: [
        "Access to all 15+ algorithms",
        "Unlimited trades",
        "Advanced risk management",
        "Priority support (phone + email)",
        "Custom alerts & notifications",
        "API access",
        "Performance analytics",
        "Multi-broker support"
      ],
      cta: "Choose Professional",
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "₹19,999",
      period: "/month",
      description: "Complete solution for institutions and funds",
      features: [
        "All Professional features",
        "Custom algorithm development (1 per year)",
        "Dedicated account manager",
        "Advanced analytics & reporting",
        "Multi-broker portfolio management",
        "White-label options",
        "Priority feature requests",
        "24/7 phone support"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer, Mumbai",
      content: "I started with ₹50,000 and the Momentum Breakout Pro algorithm. In 8 months, my portfolio has grown to ₹1.2 lakhs. The automated risk management saved me during the market crash.",
      algorithm: "Momentum Breakout Pro",
      rating: 5,
      return: "+140%"
    },
    {
      name: "Priya Sharma",
      role: "Full-time Trader, Delhi",
      content: "The Options Income Generator has revolutionized my trading business. I'm now generating ₹45,000 monthly income with disciplined risk management. The algo handles everything while I focus on analysis.",
      algorithm: "Options Income Generator",
      rating: 5,
      return: "₹45K/month"
    },
    {
      name: "Vikram Patel",
      role: "Fund Manager, ABC Investment Management",
      content: "Our fund adopted the custom algorithmic solutions for our equity portfolio. The results speak for themselves - 23% alpha generation over benchmark with 40% lower volatility.",
      algorithm: "Custom Portfolio System",
      rating: 5,
      return: "+23% Alpha"
    }
  ];

  const techFeatures = [
    {
      icon: Zap,
      title: "Ultra-Fast Execution",
      description: "<100ms order placement with 99.9% uptime guarantee"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "256-bit SSL encryption, 2FA, and regular security audits"
    },
    {
      icon: Globe,
      title: "Multi-Broker Support",
      description: "Compatible with 50+ brokers including Zerodha, Upstox, Angel One"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time performance tracking with detailed risk metrics"
    },
    {
      icon: Bot,
      title: "AI-Powered Optimization",
      description: "Machine learning adapts strategies to changing market conditions"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Full-featured iOS and Android apps for trading on the go"
    }
  ];

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Analytics", href: "#analytics" },
      { name: "API", href: "#api" },
      { name: "Mobile Apps", href: "#mobile" }
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Blog", href: "#blog" },
      { name: "Webinars", href: "#webinars" },
      { name: "Community", href: "#community" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Live Chat", href: "#chat" },
      { name: "Status", href: "#status" },
      { name: "Report Issue", href: "#report" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Partners", href: "#partners" },
      { name: "Investors", href: "#investors" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" },
      { name: "Security", href: "#security" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-surface-bright" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 font-medium">
              SEBI Registered • 500+ Success Stories • Industry-Recognized Certification
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-manrope">
              Master Trading with Professional
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Education</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-normal">
              From Beginner to Expert - Comprehensive Trading Education for Every Level.<br />
              Join 15,000+ students who've transformed their trading careers with our proven curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={redirectToAuth}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                Start Your Learning Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-primary/20 hover:bg-hover-background hover:text-blue-600 font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Free Demo Class
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-surface-bright">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "35,000+", icon: Users },
              { label: "Assets Under Management", value: "₹2,500 Cr+", icon: Briefcase },
              { label: "Trades Executed", value: "15M+", icon: Activity },
              { label: "Average Annual Return", value: "28.7%", icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-foreground font-manrope">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Bridge Between You and Smart Trading</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AutomateAlgo seamlessly connects your trading strategies with 50+ brokers and exchanges.
              No coding required, no installations needed - just pure automation power.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Universal Broker Connection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with 50+ Indian brokers including Zerodha, Upstox, Angel One, and more.
                  One platform, unlimited broker possibilities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>API-based secure connections</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Real-time account sync</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Multi-broker portfolio view</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">No-Code Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Build and deploy strategies using TradingView, ChartInk, Excel, or visual builders.
                  No programming skills required.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Drag-and-drop strategy builder</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>TradingView & ChartInk integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Excel-based strategy automation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Lightning Fast Execution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ultra-low latency order execution in under 100ms. Web-based platform runs 24/7
                  without requiring your system to be online.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>&lt;100ms order execution</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 cloud-based operation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>99.9% uptime guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-xl">Advanced Risk Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  20+ predefined risk management settings to protect your capital with precision controls.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Daily loss limits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Position sizing controls</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Drawdown protection</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Max trades per day</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Time-based restrictions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Volatility filters</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">Comprehensive Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Detailed performance analytics and 90-day forward testing reports to optimize your strategies.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <PieChart className="h-4 w-4 text-primary" />
                      <span>Win rate analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <PieChart className="h-4 w-4 text-primary" />
                      <span>P&L tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <PieChart className="h-4 w-4 text-primary" />
                      <span>Drawdown monitoring</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <PieChart className="h-4 w-4 text-primary" />
                      <span>Forward testing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <PieChart className="h-4 w-4 text-primary" />
                      <span>Strategy comparison</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <PieChart className="h-4 w-4 text-primary" />
                      <span>Market analysis</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Advantages */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Why Choose AutomateAlgo?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Plug & Play</h4>
                <p className="text-sm text-muted-foreground">Connect any broker, deploy any strategy - no technical setup required</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-green-500/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="font-semibold mb-2">100% Privacy</h4>
                <p className="text-sm text-muted-foreground">We never store broker credentials or track your P&L data</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-blue-500/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="font-semibold mb-2">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">Live assistance during market hours with dedicated support team</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-purple-500/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2">Proven Results</h4>
                <p className="text-sm text-muted-foreground">Thousands of successful traders with 15M+ automated trades</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Simple 3-Step Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold mb-2">Build Your Strategy</h4>
                <p className="text-sm text-muted-foreground">Create strategies using TradingView, ChartInk, Excel, or our visual builder</p>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold mb-2">Connect Your Broker</h4>
                <p className="text-sm text-muted-foreground">Link your preferred broker from 50+ supported platforms with secure API</p>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold mb-2">Start Automated Trading</h4>
                <p className="text-sm text-muted-foreground">Watch your strategies execute automatically with real-time monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Enterprise-Grade Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on AWS infrastructure with institutional-grade security and performance standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options to match your trading needs and scale as you grow
            </p>
            <div className="mt-6">
              <Badge variant="outline" className="text-primary border-primary/20">
                2 months free on all annual plans
              </Badge>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionTiers.map((tier, index) => (
              <Card key={index} className={`border-border/50 ${tier.popular ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                <CardHeader>
                  {tier.popular && (
                    <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Most Popular</Badge>
                  )}
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={redirectToAuth}
                    className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real traders, real results - see how our algorithms have transformed trading journeys
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.algorithm}
                    </Badge>
                    <span className="text-green-600 font-semibold text-sm">{testimonial.return}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Trading?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who've already transformed their trading with AutomateAlgo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={redirectToAuth}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center justify-center border-primary text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold bg-white"
            >
              <PlayCircle className="mr-2 h-5 w-5 text-primary" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};
export default Products;
