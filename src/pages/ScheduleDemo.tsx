import React, { useEffect } from 'react';
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Phone, CheckCircle } from 'lucide-react';

// Extend Window interface to include jotformEmbedHandler
declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}

const ScheduleDemo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load JotForm script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (typeof window.jotformEmbedHandler === 'function') {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-251964065246057']", "https://form.jotform.com/");
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule Your Personal Demo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get a personalized walkthrough of AutomateAlgos and see how our platform 
              can transform your trading strategy in just 30 minutes.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* JotForm Section */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Book Your Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will contact you to schedule your personalized demo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white rounded-lg overflow-hidden">
                    <iframe
                      id="JotFormIFrame-251964065246057"
                      title="Signup Form"
                      onLoad={() => window.parent.scrollTo(0,0)}
                      allowTransparency={true}
                      allow="geolocation; microphone; camera; fullscreen; payment"
                      src="https://form.jotform.com/251964065246057"
                      frameBorder="0"
                      style={{
                        minWidth: '100%',
                        maxWidth: '100%',
                        height: '600px',
                        border: 'none'
                      }}
                      scrolling="no"
                    />
                  </div>
                  
                  {/* Fallback link */}
                  <div className="text-center mt-4">
                    <a
                      href="javascript:void(window.open('https://form.jotform.com/251964065246057', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500'))"
                      className="text-primary hover:text-primary/80 text-sm underline"
                    >
                      Open form in new window
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Info Section */}
              <div className="space-y-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">30-Minute Session</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive walkthrough tailored to your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Live Platform Demo</h4>
                        <p className="text-sm text-muted-foreground">
                          See our algorithms in action with real market data
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Strategy Discussion</h4>
                        <p className="text-sm text-muted-foreground">
                          Personalized recommendations for your trading goals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Q&A Session</h4>
                        <p className="text-sm text-muted-foreground">
                          Get answers to all your questions about automation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Demo Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm">Strategy Builder</h4>
                      <p className="text-xs text-muted-foreground">Create custom trading algorithms</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm">Backtesting Engine</h4>
                      <p className="text-xs text-muted-foreground">Test strategies with historical data</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm">Risk Management</h4>
                      <p className="text-xs text-muted-foreground">Automated position sizing and stop-losses</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm">Performance Analytics</h4>
                      <p className="text-xs text-muted-foreground">Detailed reporting and insights</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-foreground">Need Immediate Assistance?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have urgent questions? Our team is here to help.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="text-foreground font-medium">+91 9876543210</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="text-foreground font-medium">support@automatealgos.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default ScheduleDemo;