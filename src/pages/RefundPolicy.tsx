import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AppFooter } from "@/components/AppFooter";
import { ArrowLeft, Clock, CheckCircle, AlertCircle, CreditCard, Download } from "lucide-react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
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
            <div className="flex gap-2">
              <Badge variant="secondary">30-Day Policy</Badge>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Refund Policy</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We want you to be completely satisfied with our services. Our refund policy is designed to be fair and transparent.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary mt-4">
            <span>Last Updated: January 15, 2024</span>
            <span className="text-border">•</span>
            <span>Effective Immediately</span>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-matdash-primary-light rounded-lg border border-matdash-primary/20">
            <Clock className="h-8 w-8 text-matdash-primary mx-auto mb-2" />
            <h3 className="font-semibold text-text-primary">30-Day Window</h3>
            <p className="text-sm text-text-secondary">Request refunds within 30 days</p>
          </div>
          <div className="text-center p-4 bg-matdash-secondary-light rounded-lg border border-matdash-secondary/20">
            <CheckCircle className="h-8 w-8 text-matdash-secondary mx-auto mb-2" />
            <h3 className="font-semibold text-text-primary">Full Refunds</h3>
            <p className="text-sm text-text-secondary">100% refund for eligible cases</p>
          </div>
          <div className="text-center p-4 bg-surface-container rounded-lg border border-border">
            <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-text-primary">Fast Processing</h3>
            <p className="text-sm text-text-secondary">5-7 business days to process</p>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-text-primary">Refund Eligibility & Process</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-8">
              {/* Eligibility Criteria */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Refund Eligibility</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We offer refunds under specific circumstances to ensure fair treatment for all users while 
                    maintaining the integrity of our service.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Eligible for Refund
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-green-700">
                        <li>Service outages lasting more than 24 hours</li>
                        <li>Platform malfunction preventing normal use</li>
                        <li>Unauthorized charges or billing errors</li>
                        <li>Cancellation within 30 days of subscription</li>
                        <li>Failure to deliver promised features</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Not Eligible for Refund
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-red-700">
                        <li>Trading losses or poor algorithm performance</li>
                        <li>Change of mind after 30-day period</li>
                        <li>Violation of terms of service</li>
                        <li>Account suspension due to misuse</li>
                        <li>Partial month usage (prorated instead)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Refund Process */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">2. How to Request a Refund</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Follow these simple steps to request a refund. We aim to process all eligible requests 
                    within 5-7 business days.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-surface-container rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Submit Request</h4>
                        <p className="text-sm">
                          Email us at <a href="mailto:refunds@automatealgos.in" className="text-primary hover:text-primary/80">refunds@automatealgos.in</a> or 
                          use our <Link to="/contact" className="text-primary hover:text-primary/80">contact form</Link>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-surface-container rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Provide Information</h4>
                        <p className="text-sm">
                          Include your account email, subscription details, and reason for refund request
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-surface-container rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Review Process</h4>
                        <p className="text-sm">
                          Our team will review your request within 2 business days and contact you with updates
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-surface-container rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Refund Processing</h4>
                        <p className="text-sm">
                          Approved refunds are processed back to the original payment method within 5-7 business days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Processing Times */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Processing Timeframes</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Refund processing times vary depending on your payment method and financial institution.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-text-primary">Payment Method</th>
                          <th className="text-left py-3 px-4 font-semibold text-text-primary">Processing Time</th>
                          <th className="text-left py-3 px-4 font-semibold text-text-primary">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">Credit Card</td>
                          <td className="py-3 px-4">5-7 business days</td>
                          <td className="py-3 px-4 text-sm">May take longer depending on your bank</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">Debit Card</td>
                          <td className="py-3 px-4">3-5 business days</td>
                          <td className="py-3 px-4 text-sm">Usually faster than credit cards</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">Bank Transfer</td>
                          <td className="py-3 px-4">7-10 business days</td>
                          <td className="py-3 px-4 text-sm">Depends on banking institutions</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">Digital Wallet</td>
                          <td className="py-3 px-4">1-3 business days</td>
                          <td className="py-3 px-4 text-sm">Fastest processing option</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Special Cases */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Special Circumstances</h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="space-y-4">
                    <div className="bg-matdash-primary-light p-4 rounded-lg border-l-4 border-matdash-primary">
                      <h4 className="font-semibold text-text-primary mb-2">Partial Refunds</h4>
                      <p className="text-sm">
                        For mid-cycle cancellations, we provide prorated refunds based on unused service time. 
                        This ensures you only pay for services actually used.
                      </p>
                    </div>
                    
                    <div className="bg-matdash-secondary-light p-4 rounded-lg border-l-4 border-matdash-secondary">
                      <h4 className="font-semibold text-text-primary mb-2">Annual Subscriptions</h4>
                      <p className="text-sm">
                        Annual subscription refunds are calculated based on the unused portion of your subscription, 
                        minus any discounts applied to the annual rate.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Chargebacks</h4>
                      <p className="text-orange-700 text-sm">
                        Please contact us before initiating a chargeback. Chargebacks may result in account 
                        suspension and additional fees from payment processors.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Need Help with Refunds?</h3>
                <p className="text-text-secondary mb-4">
                  Our refund specialists are here to help you through the process.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                  <Button asChild>
                    <a href="mailto:refunds@automatealgos.in">Email Refunds Team</a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AppFooter />
    </div>
  );
};

export default RefundPolicy;