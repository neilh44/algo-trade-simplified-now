import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Phone, CheckCircle, AlertCircle, Loader2, User, Mail, MessageCircle, MapPin } from 'lucide-react';

// Define proper TypeScript interfaces
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

const ScheduleDemo = () => {
  // Form state
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form validation
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

  // Handle input changes
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

  // Submit to JotForm
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
      formDataToSend.append('formID', '251964065246057');
      formDataToSend.append('website', ''); // Honeypot field
      formDataToSend.append('simple_spc', '251964065246057-251964065246057');
      
      // Submit to JotForm using the correct action URL
      const response = await fetch('https://submit.jotform.com/submit/251964065246057', {
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

  // Handle form submission
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
        text: 'Form submitted successfully! Our team will contact you soon to schedule your demo.' 
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        whatsappNumber: '',
        city: ''
      });
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setMessage({ 
        type: 'error', 
        text: errorMessage 
      });
    } finally {
      setLoading(false);
    }
  };

  // Common cities for dropdown
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
              {/* Custom Form Section */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Book Your Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will contact you to schedule your personalized demo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Success/Error Message */}
                    {message.text && (
                      <div className={`p-3 rounded-md flex items-center gap-2 ${
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

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-foreground">
                          First Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${
                              errors.firstName ? 'border-red-500' : 'border-border'
                            }`}
                            placeholder="John"
                          />
                        </div>
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1 text-foreground">
                          Last Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${
                              errors.lastName ? 'border-red-500' : 'border-border'
                            }`}
                            placeholder="Doe"
                          />
                        </div>
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${
                            errors.email ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="example@example.com"
                          required
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${
                            errors.whatsappNumber ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="+91"
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Please enter a valid phone number.</p>
                      {errors.whatsappNumber && (
                        <p className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground">
                        City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-background text-foreground ${
                            errors.city ? 'border-red-500' : 'border-border'
                          }`}
                          required
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
                      className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Schedule Demo'
                      )}
                    </button>
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
                        <h4 className="font-semibold text-foreground">Group Demo</h4>
                        <p className="text-sm text-muted-foreground">
                          Gauranted demo every Monday morning at 11 am
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
                      <h4 className="font-semibold text-foreground text-sm">Live Platform Demo</h4>
                      <p className="text-xs text-muted-foreground">Trading view automation demonstration</p>
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