import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, CheckCircle, AlertCircle, CreditCard, Download, XCircle, Users, Calendar, Mail } from "lucide-react";

// Note: Replace these with your actual Link component or use regular anchor tags
const Link = ({ to, children, className = "" }) => (
  <a href={to} className={className}>{children}</a>
);

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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Refund and Return Policy</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Thank you for enrolling in our educational programs and utilizing our services at AutomateAlgos. We appreciate your trust in our platform and commitment to learning.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary mt-4">
            <span>Effective Immediately</span>
            <span className="text-border">•</span>
            <span>Applies to All Purchases</span>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
            <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <h3 className="font-semibold text-text-primary">No Refunds</h3>
            <p className="text-sm text-text-secondary">All purchases are final</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-text-primary">Transfer Options</h3>
            <p className="text-sm text-text-secondary">Batch & enrollment transfers available</p>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
            <Calendar className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <h3 className="font-semibold text-text-primary">48-Hour Rule</h3>
            <p className="text-sm text-text-secondary">Request changes before deadline</p>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-text-primary">Complete Refund Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-8">
              {/* Main Policy Statement */}
              <section>
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold text-red-800">Important Policy Notice</h3>
                  </div>
                  <p className="text-red-700 font-medium text-lg mb-3">
                    All purchases of our courses and services are final and cannot be cancelled or refunded once completed.
                  </p>
                  <p className="text-red-600 text-sm">
                    We understand that circumstances may change, and we offer flexible alternatives as outlined below.
                  </p>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Available Alternatives */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Available Alternatives</h2>
                <div className="space-y-4 text-text-secondary">
                  <p className="mb-6">
                    While refunds are not available, we provide the following flexible options to accommodate changing circumstances:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Course Batch Transfer
                      </h4>
                      <p className="text-sm text-blue-700 mb-3">
                        For in-person training programs, you may request to switch to an alternative batch schedule that better fits your availability.
                      </p>
                      <ul className="space-y-1 text-xs text-blue-600">
                        <li>• Available for offline/in-person courses</li>
                        <li>• Subject to batch availability</li>
                        <li>• Fee adjustments may apply</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Enrollment Transfer
                      </h4>
                      <p className="text-sm text-green-700 mb-3">
                        You have the option to transfer your course registration to another individual for both online and in-person programs.
                      </p>
                      <ul className="space-y-1 text-xs text-green-600">
                        <li>• Applicable to all course types</li>
                        <li>• Certificate issued to attending participant</li>
                        <li>• No additional fees for transfers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Certificate Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Completion Certificate Policy</h2>
                <div className="bg-matdash-primary-light p-5 rounded-lg border-l-4 border-matdash-primary">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-matdash-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Completion certificates are issued only once and will bear the name of the participant who completes the entire program and successfully passes all required assessments. The certificate cannot be reissued or transferred after completion.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Fee Adjustment Guidelines */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Fee Adjustment Guidelines</h2>
                <div className="space-y-4 text-text-secondary">
                  <p className="mb-4">
                    When transferring between batches with different pricing, the following fee adjustment rules apply:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        +
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Higher-Priced Batch</h4>
                        <p className="text-sm text-red-700">
                          Should you choose to transfer to a batch with increased fees, you will be required to pay the additional amount before the transfer is processed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        -
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Lower-Priced Batch</h4>
                        <p className="text-sm text-green-700">
                          If you transfer to a batch with reduced fees, we will provide you with a credit voucher for the difference. This credit can be applied toward partial or complete payment for any future course offerings by AutomateAlgos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Important Deadlines */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Request Deadlines</h2>
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">48-Hour Deadline</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        All requests for batch modifications or enrollment transfers must be submitted no later than 48 hours before the scheduled course commencement. After this deadline, no changes to batch assignments or participant names will be permitted.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Attendance Requirements */}
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Attendance Requirements</h2>
                <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Non-Attendance Policy</h4>
                      <p className="text-red-700 text-sm leading-relaxed mb-3">
                        Students who do not attend scheduled classes and/or examinations will be recorded as absent. The following consequences apply:
                      </p>
                      <ul className="text-red-600 text-sm space-y-1">
                        <li>• No make-up sessions will be provided</li>
                        <li>• No alternative lectures will be arranged</li>
                        <li>• No re-examinations will be offered</li>
                        <li>• Non-attendance does not qualify for any refund consideration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Need Assistance?</h3>
                <p className="text-text-secondary mb-4">
                  For inquiries regarding batch transfers, enrollment changes, or other questions about our policy, please reach out to us.
                </p>
                <div className="flex justify-center gap-4 mb-4">
                  <Button asChild variant="outline">
                    <Link to="/Contact-Us">Contact Support</Link>
                  </Button>
                  <Button asChild>
                    <a href="mailto:support@automatealgos.in">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
                <div className="bg-surface-container p-4 rounded-lg inline-block">
                  <p className="text-sm text-text-secondary">
                    <strong>Email:</strong> <a href="mailto:support@automatealgos.in" className="text-primary hover:text-primary/80">support@automatealgos.in</a>
                  </p>
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

export default RefundPolicy;