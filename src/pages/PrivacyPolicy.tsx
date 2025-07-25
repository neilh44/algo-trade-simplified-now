import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              <Badge variant="secondary">GDPR Compliant</Badge>
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
          <h1 className="text-4xl font-bold text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary mt-4">
            <span>Last Updated: January 15, 2024</span>
            <span className="text-border">•</span>
            <span>Effective Date: January 1, 2024</span>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-text-primary">
              <Shield className="h-5 w-5 text-primary" />
              Data Protection Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-matdash-primary-light rounded-lg">
                <Eye className="h-8 w-8 text-matdash-primary mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary">Transparency</h4>
                <p className="text-sm text-text-secondary">Clear data usage</p>
              </div>
              <div className="text-center p-4 bg-matdash-secondary-light rounded-lg">
                <Lock className="h-8 w-8 text-matdash-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary">Security</h4>
                <p className="text-sm text-text-secondary">Advanced encryption</p>
              </div>
              <div className="text-center p-4 bg-surface-container rounded-lg">
                <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary">Minimal Data</h4>
                <p className="text-sm text-text-secondary">Only what's needed</p>
              </div>
              <div className="text-center p-4 bg-surface-container rounded-lg">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary">Your Rights</h4>
                <p className="text-sm text-text-secondary">Full control</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Data Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We collect information you provide directly, information from your use of our services, 
                    and information from third-party sources as described below.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Personal Information</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Name, email address, and contact information</li>
                        <li>Account credentials and security information</li>
                        <li>Payment and billing information</li>
                        <li>Trading preferences and risk tolerance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Usage Information</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Platform usage patterns and feature interactions</li>
                        <li>Device information and browser details</li>
                        <li>IP address and geographic location</li>
                        <li>Performance and error data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Data Usage */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We use your information to provide, maintain, and improve our services, 
                    communicate with you, and ensure platform security.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-text-primary">Service Delivery</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Account creation and management</li>
                        <li>Algorithm execution and monitoring</li>
                        <li>Customer support and troubleshooting</li>
                        <li>Platform updates and notifications</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-text-primary">Business Operations</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Payment processing and billing</li>
                        <li>Fraud prevention and security</li>
                        <li>Analytics and service improvement</li>
                        <li>Legal compliance and reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Information Sharing</h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <p className="font-semibold text-orange-800 mb-2">We do not sell your personal information.</p>
                    <p className="text-orange-700 text-sm">
                      We only share information in limited circumstances as outlined below.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-text-primary">Third-Party Service Providers</h4>
                    <p className="text-sm">
                      We work with trusted partners for payment processing, analytics, and infrastructure. 
                      These partners are bound by strict data protection agreements.
                    </p>
                    
                    <h4 className="font-semibold text-text-primary">Legal Requirements</h4>
                    <p className="text-sm">
                      We may disclose information when required by law, court order, or to protect 
                      our rights and the safety of our users.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Your Rights and Choices</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    You have control over your personal information. Here are your rights and how to exercise them:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-matdash-primary-light p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Access & Portability</h4>
                      <p className="text-sm">Request a copy of your personal data in a portable format</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Request Data Export
                      </Button>
                    </div>
                    
                    <div className="bg-matdash-secondary-light p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Correction & Deletion</h4>
                      <p className="text-sm">Update inaccurate information or request account deletion</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Manage Account
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Security */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Data Security</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We implement industry-standard security measures to protect your information:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Lock className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-text-primary">Encryption</h4>
                      <p className="text-sm">End-to-end encryption for all data</p>
                    </div>
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-text-primary">Monitoring</h4>
                      <p className="text-sm">24/7 security monitoring</p>
                    </div>
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-text-primary">Backup</h4>
                      <p className="text-sm">Secure data backup and recovery</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Questions About Privacy?</h3>
                <p className="text-text-secondary mb-4">
                  Contact our Data Protection Officer for any privacy-related inquiries.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/data-security">Data Security</Link>
                  </Button>
                  <Button asChild>
                    <a href="mailto:privacy@automatealgos.in">Contact DPO</a>
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

export default PrivacyPolicy;