// components/PopupIntentExit.tsx
import React, { useState, useEffect } from 'react';
import { X, Gift, Mail, Clock, Shield, Users, Star } from 'lucide-react';

interface PopupIntentExitProps {
  enabled?: boolean;
  showAfterSeconds?: number;  // ← Add this line
  onEmailSubmit?: (email: string) => void;
  onPopupShow?: () => void;
  onPopupClose?: () => void;
  onDismissUntilRefresh?: () => void;
  manualTrigger?: boolean;
}

// Update the component props destructuring
const PopupIntentExit: React.FC<PopupIntentExitProps> = ({
  enabled = true,
  showAfterSeconds = 0,  // ← Add this line with default value
  onEmailSubmit = () => {},
  onPopupShow = () => {},
  onPopupClose = () => {},
  onDismissUntilRefresh = () => {},
  manualTrigger = false
}) => {

  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0 && isPopupOpen) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isPopupOpen]);

  // Exit intent detection and manual trigger
  useEffect(() => {
    if (!enabled) return;

    // If manually triggered, show popup immediately
    if (manualTrigger && !isPopupOpen) {
      setIsPopupOpen(true);
      onPopupShow();
      return;
    }

    // Clean up any old localStorage keys from previous implementation
    localStorage.removeItem('popup_dismissed');

    // Check if popup is dismissed until refresh
    const isDismissedUntilRefresh = sessionStorage.getItem('popup_dismissed_until_refresh') === 'true';
    
    // Check if popup is in cooldown period (5 minutes after close)
    const cooldownEnd = localStorage.getItem('popup_cooldown_end');
    const isCooldownActive = cooldownEnd && Date.now() < parseInt(cooldownEnd);

    if (isDismissedUntilRefresh || isCooldownActive) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect exit intent - mouse leaving from top of page
      if (e.clientY <= 0 && !isPopupOpen) {
        // Double check cooldown and session dismissal right before showing
        const currentCooldownEnd = localStorage.getItem('popup_cooldown_end');
        const isCurrentlyCooldown = currentCooldownEnd && Date.now() < parseInt(currentCooldownEnd);
        const isCurrentlyDismissed = sessionStorage.getItem('popup_dismissed_until_refresh') === 'true';
        
        if (!isCurrentlyCooldown && !isCurrentlyDismissed) {
          setIsPopupOpen(true);
          onPopupShow();
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, onPopupShow, isPopupOpen, manualTrigger]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
    
    // Validate email on blur or when user stops typing
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    console.log('Form submitted, redirecting to bonus page');
    console.log('Email:', email);
    
    setIsSubmitting(true);
    
    // Call parent handler for analytics/storage
    onEmailSubmit(email);
    
    // Set popup as dismissed
    sessionStorage.setItem('popup_dismissed_until_refresh', 'true');
    
    // Simulate brief loading, then redirect
    setTimeout(() => {
      console.log('Redirecting to /bonus');
      window.location.href = '/bonus';
    }, 1500); // Show loading for 1.5 seconds then redirect
  };
  
  const handleClose = () => {
    setIsPopupOpen(false);
    onPopupClose();
    
    // Set 5 minute cooldown (5 * 60 * 1000 = 300000 ms)
    const cooldownEnd = Date.now() + (5 * 60 * 1000);
    localStorage.setItem('popup_cooldown_end', cooldownEnd.toString());
  };

  // Don't show again until refresh
  const handleDismissUntilRefresh = () => {
    // Clear any existing cooldown since user explicitly chose "don't show again"
    localStorage.removeItem('popup_cooldown_end');
    // Set session dismissal
    sessionStorage.setItem('popup_dismissed_until_refresh', 'true');
    onDismissUntilRefresh();
    setIsPopupOpen(false);
  };

  if (!enabled || !isPopupOpen) return null;

  // Success state
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-6 max-w-md w-full relative shadow-2xl animate-bounce-in">
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-green-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🎉 Success! Check Your Email
            </h3>

            <p className="text-gray-600 mb-4 text-sm">
              Your free bonuses worth ₹4,999 are on their way to <strong>{email}</strong>
            </p>

            <div className="bg-green-50 p-3 rounded-xl border border-green-200">
              <p className="text-green-700 text-xs">
                💡 <strong>Next Steps:</strong> Check your email (including spam folder) and follow the instructions to access your bonuses!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main popup
  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-6 max-w-md w-full relative shadow-2xl border-4 border-yellow-400 animate-scale-in">
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
            title="Close (won't show for 5 minutes)"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header with urgency */}
          <div className="text-center mb-4">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-3 animate-pulse">
              <Clock className="h-3 w-3" />
              <span className="font-bold text-xs">LIMITED TIME: {formatTime(timeLeft)}</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Get Your <span className="text-green-600">FREE</span> Trading Bonuses!
            </h2>
            
            <p className="text-gray-600 text-xs">
              Join 10,000+ successful traders and unlock exclusive resources
            </p>
          </div>

          {/* Value proposition */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl mb-4 border border-blue-100">
            <div className="grid grid-cols-1 gap-2 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span className="text-gray-700">7-Day Trial of Automated Algo Bridge</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span className="text-gray-700">Ebook on Crypto Trading Strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span className="text-gray-700">Ready-to-Use TradingView Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span className="text-gray-700">Trading Journal Template</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span className="text-gray-700">Automation Tools for Live Trading</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✅</span>
                <span className="text-gray-700">Exclusive Resources & Priority Support</span>
              </div>
            </div>

            <div className="text-center p-2 bg-white rounded-lg border-2 border-dashed border-green-300">
              <span className="text-gray-500 line-through text-sm">₹4,999</span>
              <span className="text-green-600 font-bold text-xl ml-2">FREE</span>
            </div>
          </div>

          {/* Email input */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => {
                  if (email && !validateEmail(email)) {
                    setEmailError('Please enter a valid email address');
                  }
                }}
                placeholder="Enter your email address"
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none text-gray-900 text-sm transition-colors ${
                  emailError 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-blue-500'
                }`}
                required
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span>⚠️</span>
                {emailError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !email || emailError !== ''}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-bold text-sm
                        disabled:opacity-50 disabled:cursor-not-allowed
                        hover:from-green-700 hover:to-emerald-700 transition-all duration-300 
                        transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Bonuses...</span>
                </div>
              ) : (
                '🎁 Send Me To My Bonuses!'
              )}
            </button>
          </form>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>10K+ Users</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500" />
              <span>4.9/5</span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-2">
            No spam, unsubscribe anytime.
          </p>

          {/* Don't show again until refresh button */}
          <div className="text-center mt-3">
            <button 
              onClick={handleDismissUntilRefresh}
              className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
              title="Hide until page refresh"
            >
              Don't show again
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default PopupIntentExit;