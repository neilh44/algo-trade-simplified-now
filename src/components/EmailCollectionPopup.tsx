import React, { useState, useEffect } from 'react';
import { X, Gift, Mail, Clock, Star, Shield, Users } from 'lucide-react';

export default function EmailCollectionPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (!isPopupOpen) return null;

  // Success state after email submission
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-6 max-w-md w-full relative shadow-2xl animate-bounce-in">
          <button 
            onClick={closePopup}
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
              Your free bonuses worth ₹10,496 are on their way to <strong>{email}</strong>
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

  // Main popup state
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full relative shadow-2xl border-4 border-yellow-400 animate-scale-in">
        <button 
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with urgency timer */}
        <div className="text-center mb-4">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-3 animate-pulse">
            <Clock className="h-3 w-3" />
            <span className="font-bold text-xs">LIMITED TIME: {formatTime(timeLeft)}</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Get Your <span className="text-green-600">FREE</span> Trading Bonuses!
          </h2>
          
          <p className="text-gray-600 text-sm">
            Join 10,000+ successful traders and unlock exclusive resources
          </p>
        </div>

        {/* Compact Value proposition */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl mb-4 border border-blue-100">
          <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✅</span>
              <span className="text-gray-700">7-Day Algo Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✅</span>
              <span className="text-gray-700">Crypto Ebook</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✅</span>
              <span className="text-gray-700">TradingView Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✅</span>
              <span className="text-gray-700">Trading Journal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✅</span>
              <span className="text-gray-700">Automation Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✅</span>
              <span className="text-gray-700">Priority Support</span>
            </div>
          </div>

          <div className="text-center p-2 bg-white rounded-lg border-2 border-dashed border-green-300">
            <span className="text-gray-500 line-through text-sm">₹10,496</span>
            <span className="text-green-600 font-bold text-xl ml-2">FREE</span>
          </div>
        </div>

        {/* Email input form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !email}
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
              '🎁 Send Me My Free Bonuses!'
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
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

// Export the component
export { EmailCollectionPopup };