// components/GlobalPopupIntentExit.tsx
import React, { useState, useEffect } from 'react';
import { usePopupConfig } from '../hooks/usePopupConfig';
import PopupIntentExit from './PopupIntentExit';

const GlobalPopupIntentExit: React.FC = () => {
  const config = usePopupConfig();
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(false);

  // Check if popup should show - 1 day expiry system
  useEffect(() => {
    const dismissedUntil = localStorage.getItem('popup_dismissed_until');
    
    if (!dismissedUntil) {
      // Never dismissed
      setIsPermanentlyDismissed(false);
      return;
    }
    
    const dismissalExpiry = parseInt(dismissedUntil);
    const now = Date.now();
    
    if (now > dismissalExpiry) {
      // Dismissal expired - show popup again
      localStorage.removeItem('popup_dismissed_until');
      setIsPermanentlyDismissed(false);
      console.log('Popup dismissal expired (24h) - showing again');
    } else {
      // Still dismissed
      setIsPermanentlyDismissed(true);
      const hoursLeft = Math.ceil((dismissalExpiry - now) / (60 * 60 * 1000));
      console.log(`Popup dismissed for ${hoursLeft} more hours`);
    }
  }, [config.enabled]);

  const handleEmailSubmit = async (email: string) => {
    try {
      console.log('Email submitted:', email);
      
      // Send to your backend API
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
          email,
          source: 'exit_intent_popup',
          page: window.location.pathname,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        console.log('Email subscription successful');
        
        // Set dismissal with 1-day expiry (24 hours) after successful submission
        const oneDayFromNow = Date.now() + (1 * 24 * 60 * 60 * 1000);
        localStorage.setItem('popup_dismissed_until', oneDayFromNow.toString());
        setIsPermanentlyDismissed(true);
        
        // Track conversion analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'exit_intent_conversion', {
            event_category: 'engagement',
            event_label: window.location.pathname,
            page_location: window.location.href,
            page_title: document.title
          });
        }
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      
      // Don't dismiss on API error - give user another chance
      console.log('Not dismissing popup due to API error');
    }
  };
  
  const handlePopupShow = () => {
    console.log('Exit intent popup shown on:', window.location.pathname);
    
    // Track popup displays
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exit_intent_shown', {
        event_category: 'engagement',
        event_label: window.location.pathname,
        page_location: window.location.href
      });
    }
  };
  
  const handlePopupClose = () => {
    console.log('Exit intent popup closed (temporarily)');
    
    // Track popup closes (for optimization)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exit_intent_closed', {
        event_category: 'engagement',
        event_label: window.location.pathname
      });
    }
  };

  const handleDismissPermanently = () => {
    // Set dismissal with 1-day expiry (24 hours) - not truly permanent
    const oneDayFromNow = Date.now() + (1 * 24 * 60 * 60 * 1000);
    localStorage.setItem('popup_dismissed_until', oneDayFromNow.toString());
    setIsPermanentlyDismissed(true);
    
    console.log('Popup dismissed for 24 hours');
    
    // Track permanent dismissal
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exit_intent_dismissed_permanently', {
        event_category: 'engagement',
        event_label: window.location.pathname
      });
    }
  };
  
  // Don't render if disabled for this route OR temporarily dismissed
  if (!config.enabled || isPermanentlyDismissed) {
    return null;
  }
  
  return (
    <PopupIntentExit
      showAfterSeconds={config.showAfterSeconds}
      enabled={config.enabled}
      onEmailSubmit={handleEmailSubmit}
      onPopupShow={handlePopupShow}
      onPopupClose={handlePopupClose}
      onDismissPermanently={handleDismissPermanently}
    />
  );
};

export default GlobalPopupIntentExit;