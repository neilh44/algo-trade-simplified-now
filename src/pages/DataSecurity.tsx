import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AppFooter } from "@/components/AppFooter";
import { ArrowLeft, Lock, Shield, Key, Server, Eye, AlertTriangle, Download } from "lucide-react";
import { Link } from "react-router-dom";

const DataSecurity = () => {
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
              <Badge variant="secondary">Bank-Grade Security</Badge>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download Security Report
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
          <h1 className="text-4xl font-bold text-text-primary mb-4">Data Security</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Your security is our top priority. We implement enterprise-grade security measures to protect 
            your data, assets, and trading activities with military-grade encryption and monitoring.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary mt-4">
            <span>Last Security Review: January 2024</span>
            <span className="text-border">•</span>
            <span>Next Audit: April 2024</span>
          </div>
        </div>

        {/* Security Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
            <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">AES-256</h3>
            <p className="text-sm text-green-600">Encryption</p>
          </div>
          <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">24/7</h3>
            <p className="text-sm text-blue-600">Monitoring</p>
          </div>
          <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <Server className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">99.9%</h3>
            <p className="text-sm text-purple-600">Uptime SLA</p>
          </div>
          <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <Key className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h3 className="font-semibold text-orange-800">Zero-Trust</h3>
            <p className="text-sm text-orange-600">Architecture</p>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-text-primary">Comprehensive Security Framework</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-8">
              {/* Encryption */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-matdash-primary" />
                  1. Data Encryption
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    All data is protected using military-grade encryption both in transit and at rest. 
                    We employ multiple layers of encryption to ensure maximum security.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-matdash-primary-light p-4 rounded-lg border border-matdash-primary/30">
                      <h4 className="font-semibold text-text-primary mb-2">Data in Transit</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>TLS 1.3 encryption for all communications</li>
                        <li>Perfect Forward Secrecy (PFS)</li>
                        <li>Certificate pinning for API connections</li>
                        <li>End-to-end encryption for sensitive data</li>
                        <li>HSTS (HTTP Strict Transport Security)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-matdash-secondary-light p-4 rounded-lg border border-matdash-secondary/30">
                      <h4 className="font-semibold text-text-primary mb-2">Data at Rest</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>AES-256 encryption for database storage</li>
                        <li>Encrypted file systems and backups</li>
                        <li>Hardware Security Modules (HSM)</li>
                        <li>Key rotation every 90 days</li>
                        <li>Separate encryption keys per data type</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Access Controls */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Key className="h-5 w-5 text-matdash-secondary" />
                  2. Access Controls & Authentication
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We implement Zero Trust security principles with multi-layered authentication 
                    and granular access controls to protect your account and data.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Multi-Factor Authentication (MFA)</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <h5 className="font-medium text-text-primary mb-1">Available Methods:</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>TOTP authenticator apps (Google, Authy)</li>
                            <li>SMS verification codes</li>
                            <li>Email verification links</li>
                            <li>Hardware security keys (FIDO2/WebAuthn)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-text-primary mb-1">Security Features:</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Mandatory MFA for sensitive operations</li>
                            <li>Backup codes for account recovery</li>
                            <li>Device fingerprinting and recognition</li>
                            <li>Suspicious login detection and blocking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Role-Based Access Control (RBAC)</h4>
                      <p className="text-sm mb-2">
                        Granular permissions ensure users only access what they need, when they need it.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="text-center p-2 bg-background rounded border">
                          <div className="font-medium text-text-primary">User Level</div>
                          <div className="text-xs text-text-secondary">Basic platform access</div>
                        </div>
                        <div className="text-center p-2 bg-background rounded border">
                          <div className="font-medium text-text-primary">Premium Level</div>
                          <div className="text-xs text-text-secondary">Advanced features</div>
                        </div>
                        <div className="text-center p-2 bg-background rounded border">
                          <div className="font-medium text-text-primary">Admin Level</div>
                          <div className="text-xs text-text-secondary">Full system access</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Infrastructure Security */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  3. Infrastructure Security
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Our infrastructure is built on enterprise-grade cloud platforms with multiple 
                    security layers, redundancy, and continuous monitoring.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <div className="w-12 h-12 bg-matdash-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="h-6 w-6 text-matdash-primary" />
                      </div>
                      <h4 className="font-semibold text-text-primary mb-1">Cloud Security</h4>
                      <ul className="text-sm space-y-1">
                        <li>SOC 2 Type II certified providers</li>
                        <li>Private cloud deployment</li>
                        <li>Network isolation and segmentation</li>
                        <li>DDoS protection and mitigation</li>
                      </ul>
                    </div>
                    
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <div className="w-12 h-12 bg-matdash-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Eye className="h-6 w-6 text-matdash-secondary" />
                      </div>
                      <h4 className="font-semibold text-text-primary mb-1">Monitoring</h4>
                      <ul className="text-sm space-y-1">
                        <li>24/7 Security Operations Center</li>
                        <li>Real-time threat detection</li>
                        <li>Automated incident response</li>
                        <li>Comprehensive audit logging</li>
                      </ul>
                    </div>
                    
                    <div className="text-center p-4 bg-surface-container rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-text-primary mb-1">Redundancy</h4>
                      <ul className="text-sm space-y-1">
                        <li>Multi-region data replication</li>
                        <li>Automated failover systems</li>
                        <li>Real-time data backup</li>
                        <li>99.9% uptime SLA guarantee</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Incident Response */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  4. Incident Response & Recovery
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    We maintain comprehensive incident response procedures to quickly identify, 
                    contain, and resolve any security incidents while minimizing impact to users.
                  </p>
                  
                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Incident Response Timeline</h4>
                    <div className="grid md:grid-cols-4 gap-3 text-sm">
                      <div className="text-center">
                        <div className="font-medium text-orange-800">< 15 min</div>
                        <div className="text-orange-600">Detection & Alert</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-orange-800">< 1 hour</div>
                        <div className="text-orange-600">Assessment & Containment</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-orange-800">< 4 hours</div>
                        <div className="text-orange-600">Resolution & Recovery</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-orange-800">< 24 hours</div>
                        <div className="text-orange-600">User Communication</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-text-primary">Response Procedures</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Automated threat detection and alerting</li>
                          <li>Immediate isolation of affected systems</li>
                          <li>Forensic analysis and evidence collection</li>
                          <li>Coordinated response team activation</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>User notification and guidance</li>
                          <li>System restoration and validation</li>
                          <li>Post-incident review and improvements</li>
                          <li>Regulatory reporting when required</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Compliance & Auditing */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Security Auditing & Compliance</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Regular security audits and penetration testing ensure our security measures 
                    remain effective against evolving threats.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-matdash-primary-light p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Internal Auditing</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Quarterly security assessments</li>
                        <li>Monthly vulnerability scans</li>
                        <li>Weekly penetration testing</li>
                        <li>Continuous security monitoring</li>
                        <li>Annual security training for all staff</li>
                      </ul>
                    </div>
                    
                    <div className="bg-matdash-secondary-light p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">External Validation</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Annual third-party security audits</li>
                        <li>Independent penetration testing</li>
                        <li>Bug bounty program with security researchers</li>
                        <li>Industry security certification maintenance</li>
                        <li>Regulatory compliance verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Security Resources */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Security Resources</h3>
                <p className="text-text-secondary mb-4">
                  Learn more about our security practices or report security concerns.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/compliance">Compliance Details</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/privacy">Privacy Policy</Link>
                  </Button>
                  <Button asChild>
                    <a href="mailto:security@automatealgos.in">Report Security Issue</a>
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

export default DataSecurity;