import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AppFooter } from "@/components/AppFooter";
import { ArrowLeft, Shield, CheckCircle, FileText, Globe, Award, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Compliance = () => {
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
              <Badge variant="secondary">Certified Compliant</Badge>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download Certificates
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-matdash-primary-light rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-matdash-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">Compliance & Regulations</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            AutomateAlgos maintains the highest standards of regulatory compliance, data protection, 
            and industry best practices to ensure a secure and trustworthy platform.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary mt-4">
            <span>Last Audit: December 2023</span>
            <span className="text-border">•</span>
            <span>Next Review: June 2024</span>
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">GDPR</h3>
            <p className="text-sm text-green-600">Compliant</p>
          </div>
          <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">ISO 27001</h3>
            <p className="text-sm text-blue-600">Certified</p>
          </div>
          <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">SOC 2</h3>
            <p className="text-sm text-purple-600">Type II</p>
          </div>
          <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <Globe className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h3 className="font-semibold text-orange-800">Multi-Region</h3>
            <p className="text-sm text-orange-600">Compliant</p>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-text-primary">Regulatory Framework & Standards</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-8">
              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Data Protection Compliance</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We adhere to the strictest international data protection standards to safeguard your 
                    personal and financial information across all jurisdictions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-matdash-primary-light p-4 rounded-lg border border-matdash-primary/30">
                      <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-matdash-primary" />
                        GDPR Compliance (EU)
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Right to access and portability</li>
                        <li>Right to rectification and erasure</li>
                        <li>Data protection by design</li>
                        <li>Regular privacy impact assessments</li>
                        <li>Appointed Data Protection Officer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-matdash-secondary-light p-4 rounded-lg border border-matdash-secondary/30">
                      <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-matdash-secondary" />
                        International Standards
                      </h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>CCPA compliance (California, US)</li>
                        <li>PIPEDA adherence (Canada)</li>
                        <li>Data Protection Act (UK)</li>
                        <li>Personal Data Protection Law (India)</li>
                        <li>Regional privacy law compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Financial Regulations */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Financial Services Compliance</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    As a financial technology platform, we comply with relevant financial regulations 
                    and maintain partnerships with licensed and regulated financial institutions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Anti-Money Laundering (AML)</h4>
                      <p className="text-sm mb-2">
                        We implement comprehensive AML procedures to prevent money laundering and 
                        comply with international financial crime prevention standards.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Customer Due Diligence (CDD) procedures</li>
                        <li>Suspicious activity monitoring and reporting</li>
                        <li>Regular AML training for all staff</li>
                        <li>Third-party AML screening services</li>
                      </ul>
                    </div>
                    
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Know Your Customer (KYC)</h4>
                      <p className="text-sm mb-2">
                        Robust identity verification processes ensure we know our customers and 
                        maintain platform security and regulatory compliance.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Multi-factor identity verification</li>
                        <li>Document authentication and validation</li>
                        <li>Ongoing customer monitoring</li>
                        <li>Risk-based verification procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Security Certifications */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Security Certifications</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Our security practices are validated by independent third-party auditors and 
                    certified against international security standards.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">ISO 27001:2013</h4>
                        <p className="text-sm text-green-700 mb-2">
                          Information Security Management System certification demonstrating our 
                          commitment to protecting information assets.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">Certified 2023</Badge>
                          <Badge variant="outline" className="text-xs">Valid until 2026</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">SOC 2 Type II</h4>
                        <p className="text-sm text-blue-700 mb-2">
                          Annual independent audit of our security, availability, processing integrity, 
                          confidentiality, and privacy controls.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">Last Audit: Dec 2023</Badge>
                          <Badge variant="outline" className="text-xs">Next Audit: Dec 2024</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Operational Compliance */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Operational Standards</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We maintain rigorous operational standards and follow industry best practices 
                    for platform reliability, data integrity, and customer protection.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-text-primary mb-1">Documentation</h4>
                      <p className="text-sm">Comprehensive policy and procedure documentation</p>
                    </div>
                    
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-text-primary mb-1">Regular Audits</h4>
                      <p className="text-sm">Quarterly internal and annual external audits</p>
                    </div>
                    
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-text-primary mb-1">Continuous Training</h4>
                      <p className="text-sm">Regular compliance training for all team members</p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Compliance Reporting */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Transparency & Reporting</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We believe in transparency and regularly publish compliance reports, 
                    audit results, and regulatory updates to keep our users informed.
                  </p>
                  
                  <div className="bg-matdash-primary-light p-6 rounded-lg border border-matdash-primary/30">
                    <h4 className="font-semibold text-text-primary mb-3">Available Reports</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            Annual Security Assessment Report
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            Data Processing Impact Assessment
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            Compliance Framework Documentation
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            Third-Party Audit Results
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            Incident Response Procedures
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            Regulatory Change Notifications
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Compliance */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Compliance Inquiries</h3>
                <p className="text-text-secondary mb-4">
                  For specific compliance questions or to request additional documentation, 
                  contact our compliance team.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/data-security">Security Details</Link>
                  </Button>
                  <Button asChild>
                    <a href="mailto:compliance@automatealgos.in">Contact Compliance</a>
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

export default Compliance;