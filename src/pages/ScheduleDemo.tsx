import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, Video, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ScheduleDemo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    timeSlot: '',
    meetingType: '',
    message: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Demo Scheduled!",
      description: "We'll contact you shortly to confirm your demo session.",
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
              {/* Form Section */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Book Your Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will contact you to schedule your personalized demo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Trading Experience</Label>
                        <Select onValueChange={(value) => handleInputChange('experience', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                            <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                            <SelectItem value="expert">Expert (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeSlot">Preferred Time Slot</Label>
                        <Select onValueChange={(value) => handleInputChange('timeSlot', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="meetingType">Meeting Type</Label>
                      <Select onValueChange={(value) => handleInputChange('meetingType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select meeting type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video Call (Zoom/Google Meet)</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="inperson">In-Person (if available)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your specific needs or questions..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Schedule My Demo
                    </Button>
                  </form>
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