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

  // Update your GlobalPopupIntentExit.tsx handleEmailSubmit to return a Promise

  const handleEmailSubmit = async (email: string): Promise<void> => {
    // Return a Promise that resolves on success and rejects on error
    return new Promise(async (resolve, reject) => {
      try {
        console.log('=== EMAIL SUBMISSION STARTED ===');
        console.log('Environment: localhost:8080 (development)');
        console.log('Email:', email);
        console.log('Target URL:', 'https://algo-smtp.onrender.com/api/popup-submit');
        console.log('Current location:', window.location.href);
        
        // First, test if the backend is reachable
        console.log('🔍 Testing backend health first...');
        
        try {
          const healthResponse = await fetch('https://algo-smtp.onrender.com/api/health', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          });
          
          if (healthResponse.ok) {
            const healthData = await healthResponse.json();
            console.log('✅ Backend health check passed:', healthData);
          } else {
            console.warn('⚠️ Backend health check failed:', healthResponse.status);
          }
        } catch (healthError) {
          console.error('❌ Backend health check error:', healthError.message);
          reject(new Error(`Backend not accessible: ${healthError.message}`));
          return;
        }
        
        // If health check passes, proceed with email submission
        console.log('🚀 Proceeding with email submission...');
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          console.log('⚠️ Request timeout after 15 seconds');
          controller.abort();
        }, 15000);
        
        const response = await fetch('https://algo-smtp.onrender.com/api/popup-submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': window.location.origin,
          },
          body: JSON.stringify({
            email: email,
            source_page: window.location.pathname,
            environment: 'localhost:8080'
          }),
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        console.log('✅ Response received!');
        
        console.log('Response details:');
        console.log('- Status:', response.status);
        console.log('- Status Text:', response.statusText);
        console.log('- OK:', response.ok);
        
        if (!response.ok) {
          let errorBody;
          try {
            errorBody = await response.text();
            console.log('- Error Body:', errorBody);
          } catch (e) {
            console.log('- Could not read error body:', e);
            errorBody = 'Unable to read error details';
          }
          
          reject(new Error(`HTTP ${response.status}: ${response.statusText}${errorBody ? ' - ' + errorBody : ''}`));
          return;
        }
        
        const result = await response.json();
        console.log('📋 Parsed response:', result);
        
        if (result.success) {
          console.log('🎉 Email sent successfully!');
          
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
          
          // Resolve the promise on success
          resolve();
          
        } else {
          console.error('❌ Backend returned error:', result.error);
          reject(new Error(result.error || 'Unknown server error'));
        }

      } catch (error) {
        console.log('=== ERROR DETAILS ===');
        console.log('Error name:', error.name);
        console.log('Error message:', error.message);
        
        if (error.stack) {
          console.log('Error stack:', error.stack);
        }
        
        // Reject with specific error messages
        if (error.name === 'AbortError') {
          console.error('🕐 Request timed out');
          reject(new Error('Request timed out. The server might be sleeping.'));
        } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
          console.error('🌐 Network/CORS error from localhost:8080');
          reject(new Error('Network connection error. CORS is blocking localhost:8080.'));
        } else if (error.message.includes('Failed to fetch')) {
          console.error('🚫 Failed to fetch from localhost environment');
          reject(new Error('Could not connect to the server. The service might be down.'));
        } else {
          console.error('❓ Unknown error:', error);
          reject(error);
        }
        
        console.log('=== END ERROR DETAILS ===');
      }
    });
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