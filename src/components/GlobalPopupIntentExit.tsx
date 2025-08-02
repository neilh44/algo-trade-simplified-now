// components/GlobalPopupIntentExit.tsx
import React, { useState, useEffect } from 'react';
import { usePopupConfig } from '../hooks/usePopupConfig';
import PopupIntentExit from './PopupIntentExit';

interface GlobalPopupIntentExitProps {
  manualTrigger?: boolean;
  onClose?: () => void;
}

const GlobalPopupIntentExit: React.FC<GlobalPopupIntentExitProps> = ({ 
  manualTrigger = false,
  onClose = () => {}
}) => {
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


  // Update this function in GlobalPopupIntentExit.tsx

  const handleEmailSubmit = async (email: string) => {
    try {
      console.log('Submitting email to Flask backend:', email);
      
      const response = await fetch('https://algo-smtp.onrender.com/api/popup-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source_page: window.location.pathname
        })
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Flask response:', result);
      
      if (result.success) {
        console.log('Email sent successfully via Flask backend');
        
        sessionStorage.setItem('popup_dismissed_session', 'true');
        setIsPermanentlyDismissed(true);
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
          gtag('event', 'exit_intent_conversion', {
            event_category: 'engagement',
            event_label: window.location.pathname,
            page_location: window.location.href,
            page_title: document.title
          });
        }

        // Redirect to bonus page
        setTimeout(() => {
          window.location.href = '/bonus';
        }, 500);
        
      } else {
        console.error('Flask backend error:', result.error);
        alert('Error: ' + result.error);
        // Handle error - don't dismiss popup
      }

    } catch (error) {
      console.error('Error submitting email to Flask backend:', error);
      alert('Network error: ' + error.message);
      // Don't dismiss popup on error
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
    
    // Call parent close handler to reset the state
    onClose();
    
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
    
    // Call parent close handler to reset the state
    onClose();
    
    console.log('Popup dismissed for current session only (will show again on refresh)');
    
    // Track permanent dismissal
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exit_intent_dismissed_permanently', {
        event_category: 'engagement',
        event_label: window.location.pathname
      });
    }
  };
  
  // Don't render if disabled for this route OR temporarily dismissed (unless manually triggered)
  if (!config.enabled || (isPermanentlyDismissed && !manualTrigger)) {
    return null;
  }
  
  return (
    <PopupIntentExit
      showAfterSeconds={config.showAfterSeconds}
      enabled={config.enabled}
      onEmailSubmit={handleEmailSubmit}
      onPopupShow={handlePopupShow}
      onPopupClose={handlePopupClose}
      onDismissUntilRefresh={handleDismissPermanently}
      manualTrigger={manualTrigger}
    />
  );
};

export default GlobalPopupIntentExit;