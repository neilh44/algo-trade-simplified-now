import React, { useState } from 'react';
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Play, CheckCircle, ArrowRight, BarChart3, Target, DollarSign } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const CaseStudy = () => {
  const { toast } = useToast();
  const [showVideo, setShowVideo] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowVideo(true);
    toast({
      title: "Access Granted!",
      description: "Enjoy the case study video. We'll send you additional resources via email.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How Raj Automated His Swing Trading
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how a working professional transformed his manual swing trading 
                into a profitable automated system using AutomateAlgos platform.
              </p>
            </div>
            
            {/* Key Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">78% Returns</h3>
                  <p className="text-muted-foreground">Annual performance improvement</p>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">85% Win Rate</h3>
                  <p className="text-muted-foreground">Consistent profitable trades</p>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">₹2.4L/Month</h3>
                  <p className="text-muted-foreground">Average monthly profits</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Access Form */}
        {!showVideo ? (
          <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground">
                    Watch the Complete Case Study
                  </CardTitle>
                  <CardDescription>
                    Enter your details below to access the full 15-minute video case study
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Case Study Video
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        ) : (
          /* Video Player */
          <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-0">
                  <div className="aspect-video bg-black rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-semibold mb-2">Raj's Trading Transformation</h3>
                      <p className="text-sm opacity-80">15 minutes • Full Case Study</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      From Manual to Automated: A Complete Transformation
                    </h3>
                    <p className="text-muted-foreground">
                      Watch how Raj went from spending 4+ hours daily on manual trading 
                      to earning consistent profits with just 30 minutes of daily monitoring.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Case Study Details */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Challenge
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    Raj Kumar, a 34-year-old software engineer from Bangalore, was struggling 
                    with manual swing trading. Despite having good market knowledge, he faced:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        Inconsistent profits due to emotional trading decisions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        Time constraints from his full-time job affecting trade monitoring
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        Missing profitable opportunities due to market timing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        High stress levels affecting both work and trading performance
                      </span>
                    </li>
                  </ul>
                </div>

                <Card className="border-border bg-destructive/5 border-destructive/20">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Before Automation</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Monthly Returns:</span>
                        <p className="font-semibold text-destructive">-12% to +8%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Win Rate:</span>
                        <p className="font-semibold text-destructive">45%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Time Spent:</span>
                        <p className="font-semibold text-destructive">4-6 hours/day</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stress Level:</span>
                        <p className="font-semibold text-destructive">Very High</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Solution
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    After discovering AutomateAlgos, Raj implemented a systematic approach 
                    to automated swing trading with remarkable results:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Implemented rule-based trading strategies to eliminate emotions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Set up automated scanning for high-probability setups
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Configured automatic position sizing and risk management
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Enabled 24/7 market monitoring with smart alerts
                      </span>
                    </li>
                  </ul>
                </div>

                <Card className="border-border bg-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">After Automation</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Monthly Returns:</span>
                        <p className="font-semibold text-green-500">+15% to +22%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Win Rate:</span>
                        <p className="font-semibold text-green-500">85%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Time Spent:</span>
                        <p className="font-semibold text-green-500">30 min/day</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stress Level:</span>
                        <p className="font-semibold text-green-500">Low</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Raj's 90-Day Transformation Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  30
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Days 1-30: Foundation Setup</h3>
                  <p className="text-muted-foreground mb-3">
                    Initial platform setup, strategy backtesting, and paper trading to validate approaches.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Strategy development and testing</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  60
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Days 31-60: Live Implementation</h3>
                  <p className="text-muted-foreground mb-3">
                    Gradual transition to live trading with small position sizes and continuous optimization.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">First profitable month: +8.5% returns</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  90
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Days 61-90: Scale & Optimize</h3>
                  <p className="text-muted-foreground mb-3">
                    Increased position sizes, refined strategies, and achieved consistent profitability.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Achieved 85% win rate and ₹2.4L monthly profits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Own Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of traders who have transformed their trading with automation. 
              Start your journey today with our proven platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.automatealgos.in/" target="_blank" rel="noopener noreferrer">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/schedule-demo">
                  Schedule Personal Demo
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default CaseStudy;