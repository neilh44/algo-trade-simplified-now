import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppFooter } from "@/components/AppFooter";
import { ArrowLeft, Calendar, Download } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Terms of Service</h1>
          <div className="flex items-center justify-center gap-4 text-text-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: January 15, 2024</span>
            </div>
            <span className="text-border">•</span>
            <span>Version 2.1</span>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-text-primary">Welcome to AutomateAlgos</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-text-secondary mb-6">
              These Terms of Service ("Terms") govern your use of AutomateAlgos platform and services. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <div className="space-y-8">
              {/* Account Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Account Terms</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    To access our services, you must create an account and provide accurate, complete information. 
                    You are responsible for maintaining the security of your account credentials.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You must be at least 18 years old to create an account</li>
                    <li>You are responsible for all activities under your account</li>
                    <li>You must notify us immediately of any unauthorized access</li>
                    <li>One person or legal entity may maintain only one account</li>
                  </ul>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Service Usage */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Service Usage</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Our platform provides algorithmic trading tools and educational resources. You agree to use 
                    these services responsibly and in accordance with applicable laws.
                  </p>
                  <div className="bg-matdash-primary-light p-4 rounded-lg border-l-4 border-matdash-primary">
                    <h3 className="font-semibold text-text-primary mb-2">Prohibited Activities:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Attempting to gain unauthorized access to our systems</li>
                      <li>Using the service for illegal activities</li>
                      <li>Sharing account credentials with third parties</li>
                      <li>Reverse engineering our algorithms or software</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Payment Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Payment Terms</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Subscription fees are billed in advance on a monthly or annual basis. All fees are 
                    non-refundable except as specified in our Refund Policy.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Billing Cycle</h4>
                      <p className="text-sm">Charges occur on the same day each billing period</p>
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Payment Methods</h4>
                      <p className="text-sm">Credit cards, debit cards, and bank transfers accepted</p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Limitation of Liability</h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <p className="font-semibold text-orange-800 mb-2">Important Notice:</p>
                    <p className="text-orange-700">
                      Trading involves substantial risk of loss. AutomateAlgos provides tools and education 
                      but does not guarantee profits or prevent losses. Use our services at your own risk.
                    </p>
                  </div>
                  <p>
                    To the maximum extent permitted by law, AutomateAlgos shall not be liable for any 
                    indirect, incidental, special, or consequential damages.
                  </p>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Termination</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Either party may terminate this agreement at any time. Upon termination, your access 
                    to paid features will cease, but these Terms will continue to apply.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Button asChild variant="outline">
                      <Link to="/refund-policy">View Refund Policy</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/contact">Contact Support</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-center text-text-secondary">
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@automatealgos.in" className="text-primary hover:text-primary/80">
                  legal@automatealgos.in
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <AppFooter />
    </div>
  );
};

export default TermsOfService;