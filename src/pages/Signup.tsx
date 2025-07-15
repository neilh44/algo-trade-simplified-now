import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BookOpen, Code, TrendingUp, Shield, Users, Award, Play, CheckCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signUp } = useAuth();
  const intent = searchParams.get('intent');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    experience: '',
    interest: '',
    source: '',
    message: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await signUp({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phone,
        tradingExperience: formData.experience,
        primaryInterest: formData.interest,
        howHeardAboutUs: formData.source,
        goalsMessage: formData.message,
        intent: intent || 'general',
      });

      if (error) {
        setError(error);
      } else {
        // Success will be handled by the useAuth hook
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during signup');
    }
    
    setIsSubmitting(false);
  };

  const formTitle = intent === 'access' 
    ? 'Access All Courses' 
    : intent === 'download' 
    ? 'Download Free Resources' 
    : 'Start Your Algo Trading Journey';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="flex min-h-screen">
        {/* Left Side - 60% */}
        <div className="flex-1 lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto">
            {/* Branding */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">AutomateAlgos</h1>
                  <p className="text-muted-foreground">Algorithmic Trading Made Simple</p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Master <span className="text-primary">Algorithmic Trading</span> with Expert-Led Courses
              </h2>
              
              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  'Learn from industry professionals with 10+ years experience',
                  'Hands-on coding experience with real market data',
                  'Real-world trading strategies that actually work',
                  'Comprehensive risk management techniques',
                  'Live trading support and mentorship'
                 ].map((benefit, index) => (
                   <div key={index} className="flex items-center space-x-3">
                     <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                     <span className="text-foreground text-lg">{benefit}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Course Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Hours Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* Platform Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, text: 'Progress Tracking' },
                { icon: Code, text: 'Interactive Coding' },
                { icon: Play, text: 'Live Simulations' },
                { icon: Users, text: 'Expert Mentorship' },
                { icon: Award, text: 'Certificates' },
                { icon: Shield, text: 'Risk Management' }
               ].map((feature, index) => (
                 <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg border">
                   <feature.icon className="w-5 h-5 text-primary" />
                   <span className="text-card-foreground">{feature.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Side - 40% */}
        <div className="w-full lg:w-2/5 bg-card shadow-2xl p-8 lg:p-12 flex flex-col justify-center border-l">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">{formTitle}</h3>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Trading Experience Level
                </label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Primary Interest
                </label>
                <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your primary interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="python-trading">Python Trading</SelectItem>
                    <SelectItem value="strategy-development">Strategy Development</SelectItem>
                    <SelectItem value="risk-management">Risk Management</SelectItem>
                    <SelectItem value="api-integration">API Integration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  How did you hear about us?
                </label>
                <Select value={formData.source} onValueChange={(value) => handleInputChange('source', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="referral">Friend Referral</SelectItem>
                    <SelectItem value="blog">Blog/Article</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Message/Goals
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your trading goals and what you'd like to achieve..."
                  className="w-full min-h-[100px]"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full py-3 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    'Get Started Now'
                  )}
                </Button>
              </div>

              <div className="text-xs text-muted-foreground text-center mt-4">
                <p>By submitting this form, you agree to receive educational content and course updates from AutomateAlgos. 
                   We respect your privacy and will never share your information with third parties. 
                   You can unsubscribe at any time.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;