import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Loader2, User, Mail, MessageCircle, MapPin } from 'lucide-react';

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
  title = 'AutomateAlgos', 
  subtitle = 'Please fill out the form below to sign up.',
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

  // Correct JotForm field mapping based on your HTML
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
        text: 'Form submitted successfully! Thank you for signing up.' 
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

  // Common cities for dropdown (you can customize this list)
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
    <div className={`max-w-md mx-auto p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} ${className}`}>
      {/* Logo placeholder */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">AA</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      </div>

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
            Email Address <span className="text-red-500">*</span>
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
              placeholder="example@example.com"
              required
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            WhatsApp Number <span className="text-red-500">*</span>
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
              placeholder="+91"
              required
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Please enter a valid phone number.</p>
          {errors.whatsappNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            City <span className="text-red-500">*</span>
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
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>

      {/* Field mapping information */}
      <div className="mt-6 p-3 bg-gray-50 rounded-md text-xs">
        <p className="font-medium mb-2">JotForm Field Mapping:</p>
        <ul className="space-y-1 text-gray-600">
          <li>• Name (First): q10_name[first]</li>
          <li>• Name (Last): q10_name[last]</li>
          <li>• Email: q4_q4_email2</li>
          <li>• WhatsApp: q3_q3_phone1[full]</li>
          <li>• City: q5_q5_dropdown3</li>
        </ul>
      </div>
    </div>
  );
};

export default JotFormSignup;