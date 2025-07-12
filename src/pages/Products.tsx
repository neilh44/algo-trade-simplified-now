import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  PlayCircle
} from "lucide-react";

const Products = () => {
  const redirectToAuth = () => {
    window.location.href = "https://automatealgos.in/";
  };

  const algorithms = [
    {
      name: "Momentum Breakout Pro",
      type: "Trend-following momentum system",
      assets: "Stocks, Futures, Forex",
      performance: "34.7% CAGR",
      drawdown: "12.3%",
      winRate: "67%",
      duration: "2.3 days",
      capital: "₹50,000",
      price: "₹2,999",
      features: ["Auto stop-loss", "Position sizing", "Risk controls", "Multi-broker support"],
      brokers: "45+ brokers"
    },
    {
      name: "Mean Reversion Scalper",
      type: "High-frequency mean reversion",
      assets: "Index futures, high-volume stocks",
      performance: "28.9% CAGR",
      drawdown: "8.7%",
      winRate: "85%",
      duration: "23 minutes",
      capital: "₹1,00,000",
      price: "₹4,999",
      features: ["Ultra-fast execution (<50ms)", "Intraday only", "Auto square-off", "Low-latency connection"],
      brokers: "Premium brokers"
    },
    {
      name: "Options Income Generator",
      type: "Premium collection through options writing",
      assets: "Index options (Nifty, Bank Nifty)",
      performance: "22.4% CAGR",
      drawdown: "15.2%",
      winRate: "91%",
      duration: "Monthly income: ₹15,000 per ₹1L",
      capital: "₹2,00,000",
      price: "₹5,999",
      features: ["Greeks-based management", "Volatility filtering", "Delta hedging", "Gamma controls"],
      brokers: "Options-enabled brokers"
    },
    {
      name: "Pair Trading System",
      type: "Market-neutral statistical arbitrage",
      assets: "Correlated stock pairs",
      performance: "19.7% CAGR",
      drawdown: "6.8%",
      winRate: "78%",
      duration: "5.2 days",
      capital: "₹3,00,000",
      price: "₹3,999",
      features: ["Cointegration analysis", "Spread monitoring", "Auto-rebalancing", "Market neutral"],
      brokers: "Multi-asset brokers"
    },
    {
      name: "Swing Trading Master",
      type: "Multi-timeframe swing trading",
      assets: "Large-cap stocks, ETFs",
      performance: "31.2% CAGR",
      drawdown: "18.4%",
      winRate: "73%",
      duration: "7.8 days",
      capital: "₹75,000",
      price: "₹2,499",
      features: ["Trend confirmation", "Volume analysis", "Sector rotation", "Multi-timeframe"],
      brokers: "50+ brokers"
    }
  ];

  const platforms = [
    {
      name: "No-Code Algorithm Builder",
      description: "Build strategies without coding using our visual interface",
      price: "₹1,999",
      features: [
        "Drag-and-drop strategy designer",
        "200+ technical indicators",
        "50+ proven strategy templates",
        "Advanced backtesting engine",
        "Genetic algorithm optimization",
        "Real-time strategy monitoring",
        "Multi-asset support",
        "One-click broker deployment"
      ],
      included: "5 live strategies"
    },
    {
      name: "Professional Trading Dashboard",
      description: "Comprehensive portfolio management and analytics platform",
      price: "₹3,999",
      features: [
        "Real-time P&L tracking",
        "Advanced position management",
        "Risk metrics (VaR, Sharpe ratio)",
        "Performance attribution analysis",
        "Automated trade journaling",
        "Multi-broker aggregation",
        "Tax reporting automation",
        "RESTful API access"
      ],
      included: "Unlimited strategies"
    },
    {
      name: "Complete Platform Suite",
      description: "All tools and features in one comprehensive package",
      price: "₹9,999",
      features: [
        "All No-Code Builder features",
        "All Professional Dashboard features",
        "Priority customer support",
        "Advanced analytics suite",
        "Custom indicator development",
        "White-label options",
        "Dedicated account manager",
        "Early access to new features"
      ],
      included: "Everything included",
      popular: true
    }
  ];

  const customServices = [
    {
      title: "Individual Trader Solutions",
      services: [
        { name: "Strategy Consultation", price: "₹5,000 per session" },
        { name: "Custom Algorithm Development", price: "Starting ₹25,000" },
        { name: "Backtesting & Optimization", price: "₹8,000 per strategy" },
        { name: "Live Trading Setup", price: "₹3,000 one-time" },
        { name: "Ongoing Support", price: "₹2,000 per month" }
      ]
    },
    {
      title: "Institutional Solutions",
      services: [
        { name: "Portfolio Management Systems", price: "Starting ₹2,00,000" },
        { name: "Risk Management Frameworks", price: "Starting ₹1,50,000" },
        { name: "Multi-Asset Trading Platforms", price: "Starting ₹5,00,000" },
        { name: "Regulatory Compliance Integration", price: "Custom pricing" },
        { name: "White-label Solutions", price: "Starting ₹10,00,000" }
      ]
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              No Credit Card Required • 99.9% Uptime • 50+ Brokers Supported
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Automate Your Trading Success with 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Proven Algorithms</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From Manual to Automated - Deploy Professional Trading Algorithms in Minutes.<br />
              Join 35,000+ traders who've automated their success with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={redirectToAuth}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                Start 7-Day Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/5"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-card/50">
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
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-Deploy Algorithms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready-to-Deploy Trading Algorithms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Performance-proven strategies with real track records. Start trading in minutes with institutional-grade algorithms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {algorithms.map((algo, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-primary border-primary/20">
                      {algo.type}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-500">{algo.performance}</div>
                      <div className="text-xs text-muted-foreground">3-year performance</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{algo.name}</CardTitle>
                  <CardDescription>{algo.assets}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Win Rate:</span>
                        <span className="font-medium">{algo.winRate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Max Drawdown:</span>
                        <span className="font-medium text-red-500">{algo.drawdown}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Avg Trade Duration:</span>
                        <span className="font-medium">{algo.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Min Capital:</span>
                        <span className="font-medium">{algo.capital}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Monthly Fee:</span>
                        <span className="font-medium">{algo.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Brokers:</span>
                        <span className="font-medium">{algo.brokers}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {algo.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{algo.price}</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                    <Button onClick={redirectToAuth}>
                      Start Free Trial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Trading Platforms & Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Trading Platforms & Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade tools for strategy development, backtesting, and portfolio management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className={`border-border/50 ${platform.popular ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                <CardHeader>
                  {platform.popular && (
                    <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Most Popular</Badge>
                  )}
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-foreground mb-1">{platform.price}</div>
                    <div className="text-sm text-muted-foreground">{platform.included}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={redirectToAuth}
                    className={`w-full ${platform.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={platform.popular ? 'default' : 'outline'}
                  >
                    Start Free Trial
                  </Button>
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
                        <CheckCircle className="h-4 w-4 text-green-500" />
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

      {/* Custom Development Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Custom Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bespoke algorithmic trading solutions tailored to your specific requirements and risk profile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {customServices.map((service, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-primary font-medium">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 mt-6 border-t border-border">
                    <Button onClick={redirectToAuth} className="w-full">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Trader Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from traders using our algorithmic trading solutions to achieve consistent profits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {testimonial.return}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.algorithm}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Automate Your Trading Success?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders who've transformed their trading with our proven algorithmic solutions. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={redirectToAuth}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Bot className="mr-2 h-5 w-5" />
              Start 7-Day Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/5"
            >
              Schedule Demo Call
            </Button>
          </div>
        </div>
      </section>

      <Footer id="contact" />
    </div>
  );
};

export default Products;