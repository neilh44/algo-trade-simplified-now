import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { ArrowLeft, AlertTriangle, TrendingDown, Shield, Info, Download } from "lucide-react";
import { Link } from "react-router-dom";

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">Risk Disclosure</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Important information about the risks associated with algorithmic trading and using our platform. 
            Please read carefully before using our services.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary mt-4">
            <span>Last Updated: January 15, 2024</span>
            <span className="text-border">•</span>
            <span>Regulatory Compliant</span>
          </div>
        </div>

        {/* Important Warning */}
        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">High Risk Investment Warning</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                Trading in financial markets involves substantial risk of loss and is not suitable for all investors. 
                The value of investments can go down as well as up, and you may lose all of your invested capital. 
                Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-text-primary">Trading & Platform Risks</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-8">
              {/* Market Risks */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  1. Market Risks
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Financial markets are inherently volatile and unpredictable. Algorithmic trading does not 
                    eliminate market risk and may amplify losses during adverse market conditions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Market Volatility</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-red-700">
                        <li>Rapid price movements can cause significant losses</li>
                        <li>Gap openings may bypass stop-loss orders</li>
                        <li>Low liquidity can impact execution quality</li>
                        <li>Market crashes can affect all positions simultaneously</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Economic Factors</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-orange-700">
                        <li>Interest rate changes affect market conditions</li>
                        <li>Economic indicators impact asset prices</li>
                        <li>Geopolitical events can cause market disruption</li>
                        <li>Currency fluctuations affect international investments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Algorithmic Trading Risks */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Algorithmic Trading Risks</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Automated trading systems carry specific risks beyond traditional manual trading. 
                    Understanding these risks is crucial for informed decision-making.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-matdash-primary-light p-4 rounded-lg border-l-4 border-matdash-primary">
                      <h4 className="font-semibold text-text-primary mb-2">Technical Failures</h4>
                      <p className="text-sm">
                        System outages, connectivity issues, or software bugs can prevent proper execution 
                        of trades, potentially leading to missed opportunities or unexpected losses.
                      </p>
                    </div>
                    
                    <div className="bg-matdash-secondary-light p-4 rounded-lg border-l-4 border-matdash-secondary">
                      <h4 className="font-semibold text-text-primary mb-2">Algorithm Performance</h4>
                      <p className="text-sm">
                        No algorithm can guarantee profits. Historical performance does not predict future 
                        results, and market conditions may change, making previously successful strategies ineffective.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Over-Optimization Risk</h4>
                      <p className="text-yellow-700 text-sm">
                        Strategies optimized for historical data may not perform well in live markets. 
                        "Curve fitting" can create false confidence in algorithm performance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Platform-Specific Risks */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Platform-Specific Risks</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Using AutomateAlgos platform involves additional considerations related to our specific 
                    implementation and third-party integrations.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-4 p-4 bg-surface-container rounded-lg">
                      <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Broker Dependencies</h4>
                        <p className="text-sm">
                          Our platform relies on third-party brokers for trade execution. Broker outages, 
                          connectivity issues, or policy changes may affect your trading operations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-surface-container rounded-lg">
                      <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Data Feed Reliability</h4>
                        <p className="text-sm">
                          Algorithms depend on accurate, real-time market data. Data delays, errors, or 
                          interruptions can lead to suboptimal trading decisions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-surface-container rounded-lg">
                      <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Platform Maintenance</h4>
                        <p className="text-sm">
                          Scheduled maintenance or unexpected downtime may prevent access to your algorithms 
                          and trading controls during critical market periods.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Regulatory Considerations */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  4. Regulatory Considerations
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Trading regulations vary by jurisdiction and may change over time. You are responsible 
                    for understanding and complying with applicable regulations in your area.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Important Regulatory Notes</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-blue-700">
                      <li>Algorithmic trading may be subject to specific regulations in your jurisdiction</li>
                      <li>Tax implications of automated trading vary by location and trading frequency</li>
                      <li>Some jurisdictions require registration or licensing for algorithmic trading</li>
                      <li>Reporting requirements may apply to automated trading activities</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Your Responsibilities</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    As a user of AutomateAlgos, you acknowledge and accept the following responsibilities:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-text-primary">Risk Management</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Only invest money you can afford to lose</li>
                        <li>Diversify your investment portfolio</li>
                        <li>Set appropriate position sizes and stop-losses</li>
                        <li>Regularly monitor algorithm performance</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-text-primary">Due Diligence</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Understand the algorithms you deploy</li>
                        <li>Test strategies thoroughly before live trading</li>
                        <li>Stay informed about market conditions</li>
                        <li>Seek professional advice if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Acknowledgment */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Risk Acknowledgment Required</h3>
                <p className="text-gray-700 text-sm mb-4">
                  By using AutomateAlgos services, you acknowledge that you have read, understood, and 
                  accepted all risks outlined in this disclosure. You confirm that you are using our 
                  platform at your own risk and that AutomateAlgos is not responsible for any trading losses.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/terms">Terms of Service</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/Contact-Us">Get Professional Advice</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default RiskDisclosure;