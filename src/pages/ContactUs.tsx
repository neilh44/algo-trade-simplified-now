import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { AlertCircle, CheckCircle, Loader2, User, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, Headphones } from 'lucide-react';

// JotFormSignup Component with API Integration
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
}

const JotFormSignup: React.FC<JotFormSignupProps> = ({ 
  formId = '251964065246057',
  title = '', 
  subtitle = '',
  theme = 'light',
  onSuccess,
  onError,
  className = ''
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

  // JotForm API submission logic from copy #1
  const submitToJotForm = async (data: FormData): Promise<{ success: boolean; data?: any }> => {
    try {
      // Create FormData object for JotForm submission
      const formDataToSend = new FormData();
      
      // Based on your HTML form structure, here are the correct field mappings:
      formDataToSend.append('q10_name[first]', data.firstName);        // Name field - first
      formDataToSend.append('q10_name[last]', data.lastName);          // Name field - last
      formDataToSend.append('q4_q4_email2', data.email);              // Email field
      formDataToSend.append('q3_q3_phone1[full]', data.whatsappNumber); // WhatsApp Number field
      formDataToSend.append('q5_q5_dropdown3', data.city);            // City dropdown field
      
      // Add required hidden fields from your form
      formDataToSend.append('formID', formId);
      formDataToSend.append('website', ''); // Honeypot field
      formDataToSend.append('simple_spc', `${formId}-${formId}`);
      
      // Submit to JotForm using the correct action URL
      const response = await fetch(`https://submit.jotform.com/submit/${formId}`, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // JotForm typically requires no-cors mode
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
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
      
      // Reset form
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

  // Common cities for dropdown (from copy #1)
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
            'Get Started Now'
          )}
        </button>
      </div>
    </div>
  );
};

// Main ContactUs Component - Layout unchanged from copy #2
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLeadSuccess = (result: any) => {
    console.log('Lead captured successfully:', result);
    // You can add additional tracking or analytics here
  };

  const handleLeadError = (error: any) => {
    console.error('Lead capture failed:', error);
    // You can add error tracking here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch with Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about AutomateAlgos? Our team is here to help you succeed 
              with automated trading solutions.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Cards */}
              <Card className="border-border text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Phone Support</CardTitle>
                  <CardDescription>
                    Speak directly with our experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">+91 9876543210</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 7 PM IST</p>
                </CardContent>
              </Card>

              <Card className="border-border text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Email Support</CardTitle>
                  <CardDescription>
                    Get detailed responses via email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">support@automatealgos.in</p>
                  <p className="text-sm text-muted-foreground">Response within 4 hours</p>
                </CardContent>
              </Card>

              <Card className="border-border text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Live Chat</CardTitle>
                  <CardDescription>
                    Instant help when you need it
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">Available Now</p>
                  <p className="text-sm text-muted-foreground">24/7 chatbot + live agents</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form - Using JotFormSignup Component with API Integration */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <JotFormSignup
                    formId="251964065246057"
                    title=""
                    subtitle=""
                    theme="light"
                    onSuccess={handleLeadSuccess}
                    onError={handleLeadError}
                    className="border-0 shadow-none p-0"
                  />
                </CardContent>
              </Card>

              {/* Company Info & Additional Options */}
              <div className="space-y-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Office Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">AutomateAlgos Headquarters</h4>
                        <p className="text-muted-foreground">
                          TF-1 Jivabhai Market<br />
                          Kalol Gujarat
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 7:00 PM IST
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Specialized Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Headphones className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Technical Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Platform issues, API questions, integration help
                        </p>
                        <p className="text-sm font-medium text-primary">Support@automatealgos.in</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Sales Team</h4>
                        <p className="text-sm text-muted-foreground">
                          Pricing, demos, enterprise solutions
                        </p>
                        <p className="text-sm font-medium text-primary">support@automatealgos.in</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Partnerships</h4>
                        <p className="text-sm text-muted-foreground">
                          Business partnerships, integrations
                        </p>
                        <p className="text-sm font-medium text-primary">support@automatealgos.in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent technical issues or account problems, use our priority support channels.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Open Live Chat
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Schedule Emergency Call
                    </Button>
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

export default ContactUs;