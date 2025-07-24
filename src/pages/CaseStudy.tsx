import React, { useState } from 'react';
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Play, CheckCircle, ArrowRight, BarChart3, Target, DollarSign, AlertCircle, Loader2, User, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// JotFormSignup Component
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  whatsappNumber: string;
  city: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsappNumber?: string;
  city?: string;
}

interface Message {
  type: 'success' | 'error' | '';
  text: string;
}

interface JotFormSignupProps {
  formId?: string;
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
  onSuccess?: (result: any) => void;
  onError?: (error: any) => void;
  className?: string;
  pageName?: string; // Added page name prop
}

const JotFormSignup: React.FC<JotFormSignupProps> = ({ 
  formId = '251964065246057',
  title = '', 
  subtitle = '',
  theme = 'light',
  onSuccess,
  onError,
  className = '',
  pageName = '' // Added with default empty string
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    whatsappNumber: '',
    city: ''
  });
  
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>({ type: '', text: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = 'Please enter a valid WhatsApp number';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const submitToJotForm = async (data: FormData): Promise<{ success: boolean; data?: any }> => {
    try {
      const formDataToSend = new FormData();
      
      formDataToSend.append('q10_name[first]', data.firstName);
      formDataToSend.append('q10_name[last]', data.lastName);
      formDataToSend.append('q4_q4_email2', data.email);
      formDataToSend.append('q3_q3_phone1[full]', data.whatsappNumber);
      formDataToSend.append('q5_q5_dropdown3', data.city);
      
      formDataToSend.append('formID', formId);
      
      // Updated to include page name tracking using JotForm widget field
      const pageSource = pageName || (typeof window !== 'undefined' ? window.location.pathname : 'unknown-page');
      formDataToSend.append('pageUrl', pageSource);
      
      formDataToSend.append('simple_spc', `${formId}-${formId}`);
      
      const response = await fetch(`https://submit.jotform.com/submit/${formId}`, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      return { success: true, data: 'Form submitted successfully' };
    } catch (error) {
      console.error('JotForm submission error:', error);
      throw error;
    }
  };

  const handleSubmit = async (): Promise<void> => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await submitToJotForm(formData);
      
      setMessage({ 
        type: 'success', 
        text: 'Thank you for your interest! We\'ll contact you within 24 hours.' 
      });
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        whatsappNumber: '',
        city: ''
      });
      
      if (onSuccess) {
        onSuccess(result);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setMessage({ 
        type: 'error', 
        text: errorMessage 
      });
      
      if (onError) {
        onError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === 'dark';

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 
    'Pune', 'Ahmedabad', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 
    'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad',
    'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik',
    'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar',
    'Varanasi', 'Srinagar', 'Dhanbad', 'Jodhpur', 'Amritsar', 'Raipur',
    'Allahabad', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada',
    'Madurai', 'Guwahati', 'Chandigarh', 'Hubli-Dharwad', 'Mysore'
  ];

  return (
    <div className={`p-6 rounded-lg border ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-200'} ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-6">
          {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
          {subtitle && (
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {message.text && (
        <div className={`mb-4 p-3 rounded-md flex items-center gap-2 ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          <span className="text-sm">{message.text}</span>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                } ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="John"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                } ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Doe"
              />
            </div>
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              } ${errors.email ? 'border-red-500' : ''}`}
              placeholder="john.doe@example.com"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            WhatsApp Number
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="tel"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              } ${errors.whatsappNumber ? 'border-red-500' : ''}`}
              placeholder="+91 70166 43084"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Please enter a valid phone number.</p>
          {errors.whatsappNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            City
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              } ${errors.city ? 'border-red-500' : ''}`}
            >
              <option value="">Select your city</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Watch Case Study Video
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Main CaseStudy Component
const CaseStudy = () => {
  const { toast } = useToast();
  const [showVideo, setShowVideo] = useState(false);

  const handleLeadSuccess = (result: any) => {
    console.log('Lead captured successfully:', result);
    setShowVideo(true);
    toast({
      title: "Access Granted!",
      description: "Enjoy the case study video. We'll send you additional resources via email.",
    });
  };

  const handleLeadError = (error: any) => {
    console.error('Lead capture failed:', error);
    toast({
      title: "Submission Failed",
      description: "There was an error submitting your information. Please try again.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How Raj Automated His Swing Trading
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how a working professional transformed his manual swing trading 
                into a profitable automated system using AutomateAlgos platform.
              </p>
            </div>
            
            {/* Key Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">78% Returns</h3>
                  <p className="text-muted-foreground">Annual performance improvement</p>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">85% Win Rate</h3>
                  <p className="text-muted-foreground">Consistent profitable trades</p>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">₹2.4L/Month</h3>
                  <p className="text-muted-foreground">Average monthly profits</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Access Form */}
        {!showVideo ? (
          <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground">
                    Watch the Complete Case Study
                  </CardTitle>
                  <CardDescription>
                    Enter your details below to access the full 15-minute video case study
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-md mx-auto">
                    <JotFormSignup
                      formId="251964065246057"
                      title=""
                      subtitle=""
                      theme="light"
                      pageName="raj-case-study-video-access" // Added page name tracking
                      onSuccess={handleLeadSuccess}
                      onError={handleLeadError}
                      className="border-0 shadow-none p-0"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        ) : (
          /* Video Player */
          <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-0">
                  <div className="aspect-video bg-black rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-semibold mb-2">Raj's Trading Transformation</h3>
                      <p className="text-sm opacity-80">15 minutes • Full Case Study</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      From Manual to Automated: A Complete Transformation
                    </h3>
                    <p className="text-muted-foreground">
                      Watch how Raj went from spending 4+ hours daily on manual trading 
                      to earning consistent profits with just 30 minutes of daily monitoring.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Case Study Details */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Challenge
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    Raj Kumar, a 34-year-old software engineer from Bangalore, was struggling 
                    with manual swing trading. Despite having good market knowledge, he faced:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        Inconsistent profits due to emotional trading decisions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        Time constraints from his full-time job affecting trade monitoring
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        Missing profitable opportunities due to market timing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                      <span className="text-muted-foreground">
                        High stress levels affecting both work and trading performance
                      </span>
                    </li>
                  </ul>
                </div>

                <Card className="border-border bg-destructive/5 border-destructive/20">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Before Automation</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Monthly Returns:</span>
                        <p className="font-semibold text-destructive">-12% to +8%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Win Rate:</span>
                        <p className="font-semibold text-destructive">45%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Time Spent:</span>
                        <p className="font-semibold text-destructive">4-6 hours/day</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stress Level:</span>
                        <p className="font-semibold text-destructive">Very High</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Solution
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    After discovering AutomateAlgos, Raj implemented a systematic approach 
                    to automated swing trading with remarkable results:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Implemented rule-based trading strategies to eliminate emotions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Set up automated scanning for high-probability setups
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Configured automatic position sizing and risk management
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">
                        Enabled 24/7 market monitoring with smart alerts
                      </span>
                    </li>
                  </ul>
                </div>

                <Card className="border-border bg-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">After Automation</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Monthly Returns:</span>
                        <p className="font-semibold text-green-500">+15% to +22%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Win Rate:</span>
                        <p className="font-semibold text-green-500">85%</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Time Spent:</span>
                        <p className="font-semibold text-green-500">30 min/day</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stress Level:</span>
                        <p className="font-semibold text-green-500">Low</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Raj's 90-Day Transformation Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  30
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Days 1-30: Foundation Setup</h3>
                  <p className="text-muted-foreground mb-3">
                    Initial platform setup, strategy backtesting, and paper trading to validate approaches.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Strategy development and testing</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  60
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Days 31-60: Live Implementation</h3>
                  <p className="text-muted-foreground mb-3">
                    Gradual transition to live trading with small position sizes and continuous optimization.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">First profitable month: +8.5% returns</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  90
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Days 61-90: Scale & Optimize</h3>
                  <p className="text-muted-foreground mb-3">
                    Increased position sizes, refined strategies, and achieved consistent profitability.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Achieved 85% win rate and ₹2.4L monthly profits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Own Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of traders who have transformed their trading with automation. 
              Start your journey today with our proven platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.automatealgos.in/" target="_blank" rel="noopener noreferrer">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
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

      <AppFooter />
    </div>
  );
};

export default CaseStudy;