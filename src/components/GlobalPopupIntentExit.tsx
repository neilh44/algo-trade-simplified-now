// components/GlobalPopupIntentExit.tsx
import React, { useState, useEffect } from 'react';
import { usePopupConfig } from '../hooks/usePopupConfig';
import PopupIntentExit from './PopupIntentExit';

const GlobalPopupIntentExit: React.FC = () => {
  const config = usePopupConfig();
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(false);

  // Check if popup should show - MODIFIED TO USE SESSION STORAGE
  useEffect(() => {
    // Using sessionStorage instead of localStorage - clears on page refresh
    const dismissedInSession = sessionStorage.getItem('popup_dismissed_session');
    
    if (dismissedInSession) {
      setIsPermanentlyDismissed(true);
      console.log('Popup dismissed for this session');
    } else {
      setIsPermanentlyDismissed(false);
      console.log('Popup can be shown in this session');
    }

    // ALTERNATIVE APPROACH: Clear localStorage on page load/refresh
    // Uncomment these lines if you prefer to use localStorage but clear it on refresh
    
    localStorage.removeItem('popup_dismissed_until');
    localStorage.removeItem('popup_dismissed');
    console.log('Popup dismissal cleared on page refresh');
    setIsPermanentlyDismissed(false);
    
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
        
        // MODIFIED: Use sessionStorage instead of localStorage for email submission
        // This way popup won't show again in current session but will show on refresh
        sessionStorage.setItem('popup_dismissed_session', 'true');
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

        // ✅ NEW: Redirect to bonus page after successful submission
        console.log('Redirecting to bonus page...');
        
        // Small delay to ensure analytics are tracked
        setTimeout(() => {
          // Use window.location.href for full page redirect
          window.location.href = '/bonus';
          
          // Alternative: If using React Router, you could use:
          // navigate('/bonus');
          // But you'd need to import useNavigate from react-router-dom
        }, 500); // 500ms delay to ensure analytics tracking completes

      } else {
        console.error('API response not ok:', response.status, response.statusText);
        // Don't dismiss on API error - give user another chance
        console.log('Not dismissing popup due to API error');
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
    // MODIFIED: Use sessionStorage instead of localStorage
    // This will only dismiss for current session, not across page refreshes
    sessionStorage.setItem('popup_dismissed_session', 'true');
    setIsPermanentlyDismissed(true);
    
    console.log('Popup dismissed for current session only (will show again on refresh)');
    
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