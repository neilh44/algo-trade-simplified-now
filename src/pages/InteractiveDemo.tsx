import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, TrendingUp, BarChart3, Zap, CheckCircle } from 'lucide-react';

const InteractiveDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience AutomateAlgos in Action
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              See how our platform transforms manual trading into automated success. 
              Test our strategies with real market data and discover the power of algorithmic trading.
            </p>
          </div>
        </section>

        {/* Interactive Demo Platform */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Live Trading Dashboard Demo
                </h2>
                <p className="text-muted-foreground mb-8">
                  Explore our intuitive trading interface with real-time market data. 
                  See how our algorithms identify opportunities and execute trades automatically.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Real-time market scanning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Automated trade execution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Risk management controls</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Performance analytics</span>
                  </div>
                </div>

                <Button size="lg" className="group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Interactive Demo
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6 shadow-lg">
                <div className="bg-background rounded-md p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">NIFTY 50</h3>
                    <span className="text-green-500 font-bold">+124.50 (0.58%)</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 rounded flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-primary opacity-60" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-sm text-muted-foreground">Active Strategies</span>
                    <span className="font-semibold text-foreground">3</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-sm text-muted-foreground">Today's Profit</span>
                    <span className="font-semibold text-green-500">₹2,450</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-sm text-muted-foreground">Win Rate</span>
                    <span className="font-semibold text-foreground">76%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Features */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What You'll Experience
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Strategy Backtesting</CardTitle>
                  <CardDescription>
                    Test trading strategies against historical data with detailed performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 5+ years historical data</li>
                    <li>• Risk-adjusted returns</li>
                    <li>• Drawdown analysis</li>
                    <li>• Sharpe ratio calculations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Live Market Scanner</CardTitle>
                  <CardDescription>
                    Watch real-time market scanning and opportunity identification in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Real-time data feeds</li>
                    <li>• Custom screening criteria</li>
                    <li>• Alert notifications</li>
                    <li>• Multi-timeframe analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Portfolio Management</CardTitle>
                  <CardDescription>
                    Experience comprehensive portfolio tracking and risk management tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Position sizing algorithms</li>
                    <li>• Risk exposure monitoring</li>
                    <li>• Performance attribution</li>
                    <li>• Rebalancing alerts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Automate Your Trading?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your journey with our platform and see the difference automation makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.automatealgos.in/" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
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

      <Footer />
    </div>
  );
};

export default InteractiveDemo;